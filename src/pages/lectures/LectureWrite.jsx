import { useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { getLecture, createLecture, updateLecture } from '../../services/lectureService'
import SEOHead from '../../components/SEOHead'

export default function LectureWrite() {
  const navigate = useNavigate()
  const { id } = useParams()
  const { user } = useAuth()
  const isEdit = !!id
  const [form, setForm] = useState({ week_number: '', title: '', file_url: '', content: '', is_published: true })
  const [submitting, setSubmitting] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => { if (isEdit) loadLecture() }, [id])

  const loadLecture = async () => {
    setLoading(true)
    const { data, error: err } = await getLecture(id)
    if (data) setForm({ week_number: data.week_number || '', title: data.title || '', file_url: (data.file_url || '').replace(/^\/pdf\//, ''), content: data.content || '', is_published: data.is_published !== false })
    if (err) setError(err.message)
    setLoading(false)
  }

  if (!user) return (<section className="section"><div className="container"><div className="lecture-empty">로그인이 필요합니다.</div><div style={{ textAlign: 'center' }}><Link to="/login" className="lecture-action-btn primary">로그인</Link></div></div></section>)

  const handleChange = (key, value) => setForm({ ...form, [key]: value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.week_number || !form.title.trim()) { setError('주차와 제목을 입력해주세요.'); return }
    setSubmitting(true); setError('')
    const fileUrl = form.file_url.trim() ? (form.file_url.trim().startsWith('http') ? form.file_url.trim() : `/pdf/${form.file_url.trim()}`) : ''
    try {
      if (isEdit) { const { error: err } = await updateLecture(id, { weekNumber: Number(form.week_number), title: form.title.trim(), content: form.content.trim(), fileUrl, isPublished: form.is_published }); if (err) throw err; alert('강의안이 수정되었습니다.') }
      else { const { error: err } = await createLecture({ weekNumber: Number(form.week_number), title: form.title.trim(), content: form.content.trim(), fileUrl, isPublished: form.is_published, authorId: user.id, authorName: user.user_metadata?.display_name || user.email }); if (err) throw err; alert('강의안이 등록되었습니다.') }
      navigate('/lectures')
    } catch (err) { setError(err.message || '오류가 발생했습니다.') } finally { setSubmitting(false) }
  }

  if (loading) return (<section className="section"><div className="container" style={{ textAlign: 'center', padding: '80px 0' }}><div className="loading-spinner"></div></div></section>)

  return (
    <>
      <SEOHead title={isEdit ? '강의안 수정' : '강의안 등록'} />
      <section className="page-header"><div className="container"><h1>{isEdit ? '강의안 수정' : '강의안 등록'}</h1></div></section>
      <section className="section"><div className="container">
        <form className="lecture-write-form" onSubmit={handleSubmit}>
          {error && <div className="community-error">{error}</div>}
          <div className="lecture-form-row">
            <div className="lecture-form-group lecture-form-group-small"><label>주차</label><input type="number" min="1" value={form.week_number} onChange={e => handleChange('week_number', e.target.value)} placeholder="1" required /></div>
            <div className="lecture-form-group lecture-form-group-grow"><label>제목</label><input type="text" value={form.title} onChange={e => handleChange('title', e.target.value)} placeholder="강의 제목을 입력하세요" required /></div>
          </div>
          <div className="lecture-form-group"><label>내용</label><textarea value={form.content} onChange={e => handleChange('content', e.target.value)} placeholder="강의 내용을 입력하세요" rows={12} /></div>
          <div className="lecture-form-group"><label>첨부 파일 URL</label><div className="lecture-form-file-input"><span className="lecture-form-file-prefix">/pdf/</span><input type="text" value={form.file_url} onChange={e => handleChange('file_url', e.target.value)} placeholder="파일명.pdf (또는 전체 URL)" /></div></div>
          <label className="lecture-form-checkbox"><input type="checkbox" checked={form.is_published} onChange={e => handleChange('is_published', e.target.checked)} />공개</label>
          <div className="lecture-form-actions"><Link to="/lectures" className="lecture-action-btn">취소</Link><button type="submit" className="lecture-action-btn primary" disabled={submitting}>{submitting ? '저장 중...' : (isEdit ? '수정' : '등록')}</button></div>
        </form>
      </div></section>
    </>
  )
}
