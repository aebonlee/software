import { useEffect } from 'react'
import site from '../config/site'

export default function SEOHead({ title, description }) {
  useEffect(() => {
    const fullTitle = title ? `${title} - ${site.name}` : `${site.name} ${site.nameKo}`
    const desc = description || site.description

    document.title = fullTitle

    const setMeta = (attr, key, val) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, key)
        document.head.appendChild(el)
      }
      el.setAttribute('content', val)
    }

    setMeta('name', 'description', desc)
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', desc)
    setMeta('property', 'og:url', site.url)
    setMeta('property', 'og:site_name', site.name)
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', desc)
  }, [title, description])

  return null
}
