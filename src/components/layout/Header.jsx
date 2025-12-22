import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./Header.css"

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMenuOpen])

  return (
    <>
      <header className="header">
        <div className="container">
          <Link to="/" className="brand" onClick={closeMenu}>
            <img
              src="/logo.png"
              alt="NovaHA Logo"
              style={{ height: "56px", width: "auto", display: "block" }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                lineHeight: "1.2",
              }}
            >
              <div
                style={{
                  fontWeight: "800",
                  fontSize: "18px",
                  margin: "0",
                  padding: "0",
                }}
              >
                NovaHA
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "var(--muted)",
                  margin: "0",
                  padding: "0",
                }}
              >
                Nơi ý tưởng thành sản phẩm
              </div>
            </div>
          </Link>

          <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
            <Link to="/about" onClick={closeMenu}>
              Giới thiệu
            </Link>
            <Link to="/services" onClick={closeMenu}>
              Dịch vụ
            </Link>
            <Link to="/team" onClick={closeMenu}>
              Đội ngũ
            </Link>
            <Link to="/pricing" onClick={closeMenu}>
              Báo giá
            </Link>
            <Link to="/contact" onClick={closeMenu}>
              Liên hệ
            </Link>
            <Link to="/recruitment" onClick={closeMenu}>
              Tuyển dụng
            </Link>
            <Link to="/talenthub" className="talenthub-btn" onClick={closeMenu}>
              TalentHub
            </Link>
          </nav>
        </div>
      </header>

      {isMenuOpen && <div className="nav-overlay" onClick={closeMenu}></div>}
    </>
  )
}
