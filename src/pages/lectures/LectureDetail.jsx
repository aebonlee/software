import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { getLecture, deleteLecture, incrementViews } from '../../services/lectureService'
import SEOHead from '../../components/SEOHead'

export default function LectureDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { user } = useAuth()
  const [lecture, setLecture] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => { loadLecture() }, [id])

  const loadLecture = async () => { setLoading(true); const { data } = await getLecture(id); setLecture(data); if (data) incrementViews(id); setLoading(false) }

  const handleDelete = async () => {
    if (!window.confirm('이 강의안을 삭제하시겠습니까?')) return
    const { error } = await deleteLecture(id)
    if (error) { alert(error.message); return }
    alert('강의안이 삭제되었습니다.'); navigate('/lectures')
  }

  if (loading) return (<section className="section"><div className="container" style={{ textAlign: 'center', padding: '80px 0' }}><div className="loading-spinner"></div></div></section>)
  if (!lecture) return (<section className="section"><div className="container"><div className="lecture-empty">강의안을 찾을 수 없습니다.</div><div style={{ textAlign: 'center' }}><Link to="/lectures" className="lecture-action-btn">목록으로</Link></div></div></section>)

  const isOwner = user && user.id === lecture.author_id

  return (
    <>
      <SEOHead title={lecture.title} />
      <section className="page-header"><div className="container"><h1>강의안</h1></div></section>
      <section className="section"><div className="container"><div className="lecture-detail">
        <div className="lecture-detail-header">
          <span className="lecture-week-badge">Week {lecture.week_number}</span>
          <h2 className="lecture-detail-title">{lecture.title}</h2>
          <div className="lecture-detail-meta"><span>{lecture.author_name}</span><span>{new Date(lecture.created_at).toLocaleDateString('ko-KR')}</span><span>조회 {lecture.views || 0}</span></div>
        </div>
        {lecture.content && <div className="lecture-detail-content">{lecture.content.split('\n').map((line, i) => <p key={i}>{line || '\u00A0'}</p>)}</div>}
        {lecture.file_url && <div className="lecture-file-section">{user ? <a href={lecture.file_url.startsWith('http') ? lecture.file_url : `${import.meta.env.BASE_URL}${lecture.file_url.replace(/^\//, '')}`} target="_blank" rel="noopener noreferrer" className="lecture-action-btn primary">파일 보기 / 다운로드</a> : <button className="lecture-action-btn primary" onClick={() => { alert('파일을 보려면 로그인이 필요합니다.'); navigate('/login') }}>파일 보기 / 다운로드</button>}</div>}
        <div className="lecture-detail-actions">
          <Link to="/lectures" className="lecture-action-btn">목록으로</Link>
          {isOwner && <><Link to={`/lectures/edit/${id}`} className="lecture-action-btn primary">수정</Link><button className="lecture-action-btn danger" onClick={handleDelete}>삭제</button></>}
        </div>
      </div></div></section>
    </>
  )
}
