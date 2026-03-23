import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import SEOHead from '../components/SEOHead'

export default function Register() {
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)
  const { signUp } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault(); setError(''); setSuccess('')
    if (password !== confirmPassword) { setError('비밀번호가 일치하지 않습니다.'); return }
    if (password.length < 6) { setError('비밀번호는 6자 이상이어야 합니다.'); return }
    setLoading(true)
    const { error } = await signUp(email, password, displayName)
    if (error) setError(error.message)
    else { setSuccess('회원가입이 완료되었습니다! 이메일을 확인해주세요.'); setTimeout(() => navigate('/login'), 2000) }
    setLoading(false)
  }

  return (
    <div className="auth-page">
      <SEOHead title="회원가입" />
      <div className="auth-card">
        <div className="auth-header"><div className="auth-logo"><span className="brand-ai">SW</span><span className="brand-prompt"> Design</span></div><h2 className="auth-title">회원가입</h2><p className="auth-subtitle">SW Design과 함께 학습을 시작하세요.</p></div>
        {error && <div className="auth-error">{error}</div>}
        {success && <div className="auth-success">{success}</div>}
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-field"><label htmlFor="displayName">이름</label><input id="displayName" type="text" placeholder="홍길동" value={displayName} onChange={e => setDisplayName(e.target.value)} required /></div>
          <div className="auth-field"><label htmlFor="email">이메일</label><input id="email" type="email" placeholder="name@example.com" value={email} onChange={e => setEmail(e.target.value)} required /></div>
          <div className="auth-field"><label htmlFor="password">비밀번호</label><input id="password" type="password" placeholder="6자 이상 입력" value={password} onChange={e => setPassword(e.target.value)} required /></div>
          <div className="auth-field"><label htmlFor="confirmPassword">비밀번호 확인</label><input id="confirmPassword" type="password" placeholder="비밀번호를 다시 입력하세요" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required /></div>
          <button type="submit" className="auth-submit" disabled={loading}>{loading ? '가입 중...' : '회원가입'}</button>
        </form>
        <div className="auth-link">이미 계정이 있으신가요? <Link to="/login">로그인</Link></div>
      </div>
    </div>
  )
}
