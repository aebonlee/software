import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { getWorkbook, deleteWorkbook, incrementWorkbookViews } from '../../services/workbookService'
import SEOHead from '../../components/SEOHead'

export default function WorkbookDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { user } = useAuth()
  const [workbook, setWorkbook] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => { loadWorkbook() }, [id])

  const loadWorkbook = async () => { setLoading(true); const { data } = await getWorkbook(id); setWorkbook(data); if (data) incrementWorkbookViews(id); setLoading(false) }

  const handleDelete = async () => {
    if (!window.confirm('이 워크북을 삭제하시겠습니까?')) return
    const { error } = await deleteWorkbook(id)
    if (error) { alert(error.message); return }
    alert('워크북이 삭제되었습니다.'); navigate('/workbook')
  }

  if (loading) return (<section className="section"><div className="container" style={{ textAlign: 'center', padding: '80px 0' }}><div className="loading-spinner"></div></div></section>)
  if (!workbook) return (<section className="section"><div className="container"><div className="lecture-empty">워크북을 찾을 수 없습니다.</div><div style={{ textAlign: 'center' }}><Link to="/workbook" className="lecture-action-btn">목록으로</Link></div></div></section>)

  const isOwner = user && user.id === workbook.author_id

  return (
    <>
      <SEOHead title={workbook.title} />
      <section className="page-header"><div className="container"><h1>실습 워크북</h1></div></section>
      <section className="section"><div className="container"><div className="lecture-detail">
        <div className="lecture-detail-header">
          <span className="lecture-week-badge">Week {workbook.week_number}</span>
          <h2 className="lecture-detail-title">{workbook.title}</h2>
          <div className="lecture-detail-meta"><span>{workbook.author_name}</span><span>{new Date(workbook.created_at).toLocaleDateString('ko-KR')}</span><span>조회 {workbook.views || 0}</span></div>
        </div>
        {workbook.content && <div className="lecture-detail-content">{workbook.content.split('\n').map((line, i) => <p key={i}>{line || '\u00A0'}</p>)}</div>}
        {workbook.file_url && <div className="lecture-file-section">{user ? <a href={workbook.file_url.startsWith('http') ? workbook.file_url : `${import.meta.env.BASE_URL}${workbook.file_url.replace(/^\//, '')}`} target="_blank" rel="noopener noreferrer" className="lecture-action-btn primary">파일 보기 / 다운로드</a> : <button className="lecture-action-btn primary" onClick={() => { alert('파일을 보려면 로그인이 필요합니다.'); navigate('/login') }}>파일 보기 / 다운로드</button>}</div>}
        <div className="lecture-detail-actions">
          <Link to="/workbook" className="lecture-action-btn">목록으로</Link>
          {isOwner && <><Link to={`/workbook/edit/${id}`} className="lecture-action-btn primary">수정</Link><button className="lecture-action-btn danger" onClick={handleDelete}>삭제</button></>}
        </div>
      </div></div></section>
    </>
  )
}
