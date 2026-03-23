import { supabase } from '../config/supabase'

const noSupabase = { data: null, error: { message: 'Supabase가 설정되지 않았습니다.' } }

export async function getLectures() {
  if (!supabase) return { data: null, error: null }
  const { data, error } = await supabase
    .from('sd_lectures')
    .select('*')
    .eq('is_published', true)
    .order('week_number', { ascending: true })
  return { data, error }
}

export async function getLecture(id) {
  if (!supabase) return noSupabase
  const { data, error } = await supabase
    .from('sd_lectures')
    .select('*')
    .eq('id', id)
    .single()
  return { data, error }
}

export async function createLecture({ weekNumber, title, content, fileUrl, isPublished, authorId, authorName }) {
  if (!supabase) return noSupabase
  const { data, error } = await supabase
    .from('sd_lectures')
    .insert([{ week_number: weekNumber, title, content, file_url: fileUrl, is_published: isPublished, author_id: authorId, author_name: authorName }])
    .select()
    .single()
  return { data, error }
}

export async function updateLecture(id, { weekNumber, title, content, fileUrl, isPublished }) {
  if (!supabase) return noSupabase
  const { data, error } = await supabase
    .from('sd_lectures')
    .update({ week_number: weekNumber, title, content, file_url: fileUrl, is_published: isPublished })
    .eq('id', id)
    .select()
    .single()
  return { data, error }
}

export async function deleteLecture(id) {
  if (!supabase) return noSupabase
  const { error } = await supabase
    .from('sd_lectures')
    .delete()
    .eq('id', id)
  return { error }
}

export async function incrementViews(id) {
  if (!supabase) return noSupabase
  const { data, error } = await supabase
    .rpc('sd_increment_lecture_views', { lecture_id: id })
  return { data, error }
}
