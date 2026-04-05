import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { getWorkbooks, incrementWorkbookViews } from '../../services/workbookService'
import { supabase } from '../../config/supabase'
import SEOHead from '../../components/SEOHead'

const staticWorkbooks = [
  { week: 1, title: 'SDLC 개요', path: '/workbook/sdlc' },
  { week: 2, title: '요구분석 기법', path: '/workbook/requirements' },
  { week: 3, title: 'UML 다이어그램', path: '/workbook/uml' },
  { week: 4, title: 'SOLID 원칙', path: '/workbook/solid' },
  { week: 5, title: '디자인 패턴 개요', path: '/workbook/pattern-overview' },
  { week: 6, title: '생성 패턴', path: '/workbook/creational' },
  { week: 7, title: '구조 패턴', path: '/workbook/structural' },
  { week: 8, title: '행위 패턴', path: '/workbook/behavioral' },
  { week: 9, title: 'OOP 구현', path: '/workbook/oop' },
  { week: 10, title: 'TDD 기초', path: '/workbook/tdd' },
  { week: 11, title: '리팩토링', path: '/workbook/refactoring' },
]

export default function WorkbookHome() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [workbooks, setWorkbooks] = useState([])
  const [loading, setLoading] = useState(true)
  const [expandedId, setExpandedId] = useState(null)

  useEffect(() => { loadWorkbooks() }, [])

  const loadWorkbooks = async () => { setLoading(true); const { data } = await getWorkbooks(); setWorkbooks(data || []); setLoading(false) }

  const toggleExpand = (workbook) => {
    if (expandedId === workbook.id) setExpandedId(null)
    else { setExpandedId(workbook.id); incrementWorkbookViews(workbook.id) }
  }

  const handleFileAction = (e) => { if (!user) { e.preventDefault(); alert('파일을 보려면 로그인이 필요합니다.'); navigate('/login') } }
  const getFileUrl = (fileUrl) => { if (!fileUrl) return null; if (fileUrl.startsWith('http')) return fileUrl; const cleanPath = fileUrl.startsWith('/pdf/') ? fileUrl : `/pdf/${fileUrl}`; return `${import.meta.env.BASE_URL}${cleanPath.replace(/^\//, '')}` }
  const getFileName = (fileUrl) => fileUrl ? fileUrl.split('/').pop() : ''
  const getStaticWorkbook = (weekNumber) => staticWorkbooks.find(s => s.week === weekNumber)

  return (
    <>
      <SEOHead title="실습 워크북" description="소프트웨어 설계 실습 워크북 - 주차별 실습 자료" />
      <section className="page-header"><div className="container"><h1>실습 워크북</h1><p>직접 설계하고 코드를 작성하며 실력을 키워보세요</p></div></section>
      <section className="section"><div className="container">
        {!supabase ? <div className="lecture-empty">Supabase가 설정되지 않았습니다.</div> : (<>
          {user && <div className="lecture-toolbar"><Link to="/workbook/write" className="lecture-write-btn">워크북 등록</Link></div>}
          {loading ? <div className="lecture-loading"><div className="loading-spinner"></div></div> : workbooks.length === 0 ? <div className="lecture-empty">등록된 워크북이 없습니다.</div> : (
            <div className="lecture-table-wrapper"><table className="lecture-table">
              <thead><tr><th className="lecture-col-week">주차</th><th>제목</th><th className="lecture-col-actions">자료</th></tr></thead>
              <tbody>{workbooks.map((wb) => {
                const isExpanded = expandedId === wb.id, fileUrl = getFileUrl(wb.file_url), staticWb = getStaticWorkbook(wb.week_number)
                return (<React.Fragment key={wb.id}>
                  <tr className={isExpanded ? 'active-row' : ''} style={{ cursor: 'pointer' }} onClick={() => toggleExpand(wb)}>
                    <td className="lecture-col-week"><span className="lecture-week-badge">Week {wb.week_number}</span></td>
                    <td className="lecture-title-cell"><div className="lecture-title-row"><span className={`lecture-expand-icon ${isExpanded ? 'expanded' : ''}`}>&#9654;</span><span>{wb.title}</span>{staticWb && <Link to={staticWb.path} className="lecture-static-link" onClick={e => e.stopPropagation()}>실습자료</Link>}</div></td>
                    <td className="lecture-col-actions" onClick={e => e.stopPropagation()}><div className="lecture-btn-group">
                      {fileUrl ? (<><a className="lecture-btn newtab" href={fileUrl} target="_blank" rel="noopener noreferrer" onClick={handleFileAction}>보기</a><a className="lecture-btn download" href={fileUrl} download={getFileName(wb.file_url)} onClick={handleFileAction}>다운로드</a></>) : <span className="lecture-no-file">파일 없음</span>}
                      {user && user.id === wb.author_id && <Link to={`/workbook/edit/${wb.id}`} className="lecture-btn edit-btn">수정</Link>}
                    </div></td>
                  </tr>
                  {isExpanded && <tr className="lecture-dropdown-row"><td colSpan={3}><div className="lecture-dropdown-content">{wb.content ? <div className="lecture-content-text">{wb.content.split('\n').map((line, i) => <p key={i}>{line || '\u00A0'}</p>)}</div> : <p className="lecture-content-empty">내용이 없습니다.</p>}</div></td></tr>}
                </React.Fragment>)
              })}</tbody>
            </table></div>
          )}
        </>)}
      </div></section>
    </>
  )
}
