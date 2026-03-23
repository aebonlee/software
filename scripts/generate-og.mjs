import sharp from 'sharp'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { mkdirSync } from 'fs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outDir = join(__dirname, '..', 'public')

mkdirSync(outDir, { recursive: true })

const width = 1200
const height = 630

const svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a0f1c"/>
      <stop offset="50%" style="stop-color:#0f172a"/>
      <stop offset="100%" style="stop-color:#020617"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#0046C8"/>
      <stop offset="100%" style="stop-color:#3B82F6"/>
    </linearGradient>
    <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0046C8;stop-opacity:0.3"/>
      <stop offset="100%" style="stop-color:#3B82F6;stop-opacity:0"/>
    </linearGradient>
  </defs>

  <rect width="${width}" height="${height}" fill="url(#bg)"/>

  <circle cx="150" cy="100" r="300" fill="url(#glow)"/>
  <circle cx="1050" cy="530" r="250" fill="url(#glow)"/>

  <rect x="80" y="260" width="6" height="110" rx="3" fill="url(#accent)"/>

  <text x="120" y="210" font-family="Arial,sans-serif" font-size="26" fill="#94a3b8" letter-spacing="6">SOFTWARE ENGINEERING</text>

  <text x="120" y="300" font-family="Arial,sans-serif" font-weight="bold" font-size="72" fill="white">SW Design</text>

  <text x="120" y="355" font-family="Arial,sans-serif" font-size="36" fill="#e2e8f0">소프트웨어 설계 &amp; 구현</text>

  <text x="120" y="420" font-family="Arial,sans-serif" font-size="22" fill="#64748b">SDLC · UML · Design Patterns · SOLID · OOP · TDD</text>

  <rect x="120" y="470" width="180" height="44" rx="22" fill="url(#accent)"/>
  <text x="210" y="498" font-family="Arial,sans-serif" font-size="16" fill="white" text-anchor="middle" font-weight="600">학습 시작하기</text>

  <rect x="0" y="${height - 4}" width="${width}" height="4" fill="url(#accent)"/>

  <text x="${width - 80}" y="${height - 30}" font-family="Arial,sans-serif" font-size="16" fill="#475569" text-anchor="end">software.dreamitbiz.com</text>
</svg>
`

async function generate() {
  try {
    await sharp(Buffer.from(svg))
      .png()
      .toFile(join(outDir, 'og-image.png'))

    console.log('OG image generated: public/og-image.png (1200x630)')
  } catch (err) {
    console.error('Failed to generate OG image:', err.message)
    process.exit(1)
  }
}

generate()
