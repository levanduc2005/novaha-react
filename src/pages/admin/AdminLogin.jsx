import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { adminService } from "../../services/api"
import { Layout } from "../../components/layout/Layout"
import "./AdminLogin.css"

export const AdminLogin = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    document.documentElement.style.background =
      "linear-gradient(135deg, #f0f9ff, #f3e8ff)"
    document.body.style.background = "linear-gradient(135deg, #f0f9ff, #f3e8ff)"
    document.body.style.minHeight = "100vh"

    return () => {
      document.documentElement.style.background = ""
      document.body.style.background = ""
      document.body.style.minHeight = ""
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage("")
    setLoading(true)

    try {
      const response = await adminService.login(username, password)

      if (response.data.ok) {
        localStorage.setItem("adminToken", response.data.token)
        setMessage("✅ Đăng nhập thành công! Đang chuyển hướng...")
        setTimeout(() => navigate("/admin"), 1000)
      } else {
        setMessage("❌ Sai tài khoản hoặc mật khẩu!")
      }
    } catch (error) {
      setMessage("❌ Lỗi kết nối: " + (error.message || "Vui lòng thử lại"))
    } finally {
      setLoading(false)
    }
  }

  return (
    <Layout>
      <div className="admin-login-wrapper">
        <div className="login-box">
          <div className="card login-card">
            <div className="login-header">
              <h2>Admin Portal</h2>
              <p>Đăng nhập để quản lý hệ thống</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Tài khoản</label>
                <input
                  type="text"
                  placeholder="Nhập username..."
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  disabled={loading}
                  autoFocus
                />
              </div>

              <div className="form-group">
                <label>Mật khẩu</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={loading}
                />
              </div>

              <button type="submit" className="btn-submit" disabled={loading}>
                {loading ? "Đang đăng nhập..." : "Đăng nhập"}
              </button>
            </form>

            {message && (
              <p
                className={`login-msg ${
                  message.includes("thành công") ? "success" : "error"
                }`}
              >
                {message}
              </p>
            )}

            <div className="login-footer">
              &copy; 2025 NovaHA Enterprise System
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
