const THUM_IO_MARKER = '/get/'
const MOBILE_VIEWPORT_WIDTH = 420

// DB에는 배포 환경(base path)에 무관하게 사이트 루트 기준 경로(예: /images/x.png)로 저장한다.
// GitHub Pages는 /my-portfolio/ 서브경로에서, Vercel은 도메인 루트에서 서빙되므로
// 실제 렌더링 시점에 Vite의 BASE_URL을 붙여 두 환경 모두에서 올바른 경로가 되게 한다.
const resolveLocalAssetUrl = (url) => {
  if (/^https?:\/\//.test(url)) return url
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  const path = url.startsWith('/') ? url : `/${url}`
  return `${base}${path}`
}

export const getMobileThumbnailUrl = (thumbnailUrl) => {
  const resolved = resolveLocalAssetUrl(thumbnailUrl)
  const markerIndex = resolved.indexOf(THUM_IO_MARKER)
  if (markerIndex === -1) return resolved

  const insertAt = markerIndex + THUM_IO_MARKER.length
  return `${resolved.slice(0, insertAt)}width/${MOBILE_VIEWPORT_WIDTH}/${resolved.slice(insertAt)}`
}
