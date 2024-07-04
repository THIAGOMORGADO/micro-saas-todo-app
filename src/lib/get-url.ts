export function getUrl(path?: string) {
  const baseURl = process.env.NEXT_PUBLIC_APP_URL || ''
  const normalizedPath = path && !path.startsWith('/') ? `/${path}` : path || ''

  return `${baseURl}${normalizedPath}`
}