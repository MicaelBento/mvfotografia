export const DEFAULT_SITE_URL = "https://mvfotografia.whosfy.com"

function normalizeSiteUrl(rawUrl: string | undefined): URL | null {
  const trimmed = rawUrl?.trim()
  if (!trimmed) {
    return null
  }

  const withProtocol = /^https?:\/\//i.test(trimmed)
    ? trimmed
    : `https://${trimmed}`

  try {
    return new URL(new URL(withProtocol).origin)
  } catch {
    return null
  }
}

/**
 * Resolves the canonical public origin for metadataBase, Open Graph tags, sitemap, and JSON-LD.
 */
export function getSiteUrl(): URL {
  const candidates = [
    process.env.NEXT_PUBLIC_SITE_URL,
    process.env.SITE_URL,
    process.env.VERCEL_PROJECT_PRODUCTION_URL,
    process.env.VERCEL_URL,
  ]

  for (const candidate of candidates) {
    const parsed = normalizeSiteUrl(candidate)
    if (parsed) {
      return parsed
    }
  }

  return new URL(DEFAULT_SITE_URL)
}

export function getAbsoluteUrl(path = "/"): string {
  return new URL(path, getSiteUrl()).toString()
}

