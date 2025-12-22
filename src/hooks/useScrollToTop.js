import { useEffect } from "react"
import { useLocation } from "react-router-dom"

/**
 * Hook tự động scroll lên top khi route thay đổi
 */
export const useScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
}
