import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

export const Header = () => {
  const navigate = useNavigate()
  const isAdmin = localStorage.getItem("adminToken")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem("adminToken")
    setMobileMenuOpen(false)
    navigate("/")
  }

  return (
    <header className="header">
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0",
          width: "100%",
        }}
      >
        <Link
          to="/"
          className="brand"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            textDecoration: "none",
          }}
        >
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
                color: "var(--text-strong)",
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

        {/* Desktop Navigation */}
        <nav className="nav nav-desktop">
          <Link to="/about">Giới thiệu</Link>
          <Link to="/services">Dịch vụ</Link>
          <Link to="/team">Đội ngũ</Link>
          <Link to="/pricing">Báo giá</Link>
          <Link to="/contact">Liên hệ</Link>
          <Link to="/tuyendung">Tuyển dụng</Link>
          {isAdmin ? (
            <>
              <Link to="/admin">Admin</Link>
              <button className="nav-btn-logout" onClick={handleLogout}>
                Đăng xuất
              </button>
            </>
          ) : (
            <Link to="/talenthub" className="nav-btn">
              TalentHub
            </Link>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="nav nav-mobile">
            <Link to="/about" onClick={() => setMobileMenuOpen(false)}>
              Giới thiệu
            </Link>
            <Link to="/services" onClick={() => setMobileMenuOpen(false)}>
              Dịch vụ
            </Link>
            <Link to="/team" onClick={() => setMobileMenuOpen(false)}>
              Đội ngũ
            </Link>
            <Link to="/pricing" onClick={() => setMobileMenuOpen(false)}>
              Báo giá
            </Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
              Liên hệ
            </Link>
            <Link to="/tuyendung" onClick={() => setMobileMenuOpen(false)}>
              Tuyển dụng
            </Link>
            {isAdmin ? (
              <>
                <Link to="/admin" onClick={() => setMobileMenuOpen(false)}>
                  Admin
                </Link>
                <button className="nav-btn-logout" onClick={handleLogout}>
                  Đăng xuất
                </button>
              </>
            ) : (
              <Link
                to="/talenthub"
                className="nav-btn"
                onClick={() => setMobileMenuOpen(false)}
              >
                TalentHub
              </Link>
            )}
          </nav>
        )}
      </div>
    </header>
  )
}
