import { createContext, useContext, useState, useEffect } from 'react'
import { supabase } from '../config/supabase'

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!supabase) {
      setLoading(false)
      return
    }

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null)
      if (event === 'INITIAL_SESSION') {
        setLoading(false)
      }
    })

    const fallback = setTimeout(() => {
      setLoading(prev => {
        if (prev) console.warn('Auth: INITIAL_SESSION timeout')
        return false
      })
    }, 5000)

    return () => {
      clearTimeout(fallback)
      subscription.unsubscribe()
    }
  }, [])

  const noSupabaseError = { error: { message: 'Supabase가 설정되지 않았습니다.' } }

  const signUp = async (email, password, displayName) => {
    if (!supabase) return noSupabaseError
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { display_name: displayName }
      }
    })
    return { data, error }
  }

  const signIn = async (email, password) => {
    if (!supabase) return noSupabaseError
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    return { data, error }
  }

  const signInWithGoogle = async () => {
    if (!supabase) return noSupabaseError
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: window.location.origin + window.location.pathname }
    })
    return { data, error }
  }

  const signInWithKakao = async () => {
    if (!supabase) return noSupabaseError
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'kakao',
      options: {
        redirectTo: window.location.origin + window.location.pathname,
        scopes: 'profile_nickname profile_image account_email',
      }
    })
    return { data, error }
  }

  const signOut = async () => {
    if (!supabase) return noSupabaseError
    const { error } = await supabase.auth.signOut({ scope: 'local' })
    return { error }
  }

  const value = {
    user,
    loading,
    signUp,
    signIn,
    signInWithGoogle,
    signInWithKakao,
    signOut
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
