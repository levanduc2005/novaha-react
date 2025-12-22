import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { adminService } from "../../services/api"
import "./AdminDashboard.css"

export default function AdminDashboard() {
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [darkMode, setDarkMode] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem("adminToken")
    if (!token) {
      navigate("/admin-login")
      return
    }

    // Fetch students
    loadStudents()
  }, [navigate])

  const loadStudents = async () => {
    try {
      setLoading(true)
      const response = await adminService.getStudents()
      setStudents(response.data)
    } catch (err) {
      setError("Lỗi tải dữ liệu: " + (err.message || "Vui lòng thử lại"))
      if (err.response?.status === 401) {
        localStorage.removeItem("adminToken")
        navigate("/admin-login")
      }
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("adminToken")
    navigate("/admin-login")
  }

  const closeSidebar = () => {
    setSidebarOpen(false)
  }

  if (loading) {
    return (
      <div className="layout">
        <div style={{ textAlign: "center", padding: "40px", flex: 1 }}>
          <p>Đang tải dữ liệu...</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`layout ${darkMode ? "dark" : ""}`}>
      {/* HAMBURGER MENU BUTTON */}
      <button
        className="hamburger-btn"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* OVERLAY */}
      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={closeSidebar}></div>
      )}

      {/* SIDEBAR */}
      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2>NovaHA</h2>
          <div className="sidebar-subtitle">Admin Dashboard</div>
        </div>

        <nav className="menu">
          <a
            className="menu-item active"
            href="#overview"
            onClick={closeSidebar}
          >
            📊 Tổng quan
          </a>
          <a className="menu-item" href="#projects" onClick={closeSidebar}>
            📁 Dự án
          </a>
          <a className="menu-item" href="#students" onClick={closeSidebar}>
            👥 Thực tập sinh
          </a>
          <a className="menu-item" href="#clients" onClick={closeSidebar}>
            🏫 Khách hàng
          </a>
          <a className="menu-item" href="#startup" onClick={closeSidebar}>
            💼 Startup Lab
          </a>
          <a className="menu-item" href="#settings" onClick={closeSidebar}>
            ⚙ Cài đặt
          </a>
        </nav>

        <button className="btn-logout" onClick={handleLogout}>
          🚪 Đăng xuất
        </button>
      </aside>

      {/* MAIN CONTENT */}
      <main className="dash-content">
        {/* TOP BAR */}
        <div className="top-bar">
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
          <div className="avatar-sm">HA</div>
        </div>

        {error && <div className="error-msg">{error}</div>}

        {/* STATS CARDS */}
        <h1 className="page-title">Tổng quan hệ thống</h1>
        <p className="page-subtitle">Dữ liệu cập nhật gần nhất hôm nay.</p>

        <div className="dash-cards">
          <div className="dash-card">
            <h3>12</h3>
            <p>Dự án đang triển khai</p>
          </div>
          <div className="dash-card">
            <h3>{students.length}</h3>
            <p>Sinh viên thực tập</p>
          </div>
          <div className="dash-card">
            <h3>18</h3>
            <p>Khách hàng doanh nghiệp</p>
          </div>
          <div className="dash-card">
            <h3>4</h3>
            <p>Startup đang ươm tạo</p>
          </div>
        </div>

        {/* CHART */}
        <h2 className="section-title">Biểu đồ tiến độ dự án</h2>
        <img
          className="chart-image"
          src="https://quickchart.io/chart?c={type:%27bar%27,data:{labels:[%27T1%27,%27T2%27,%27T3%27,%27T4%27],datasets:[{label:%27Dự án%27,data:[3,5,4,6]}]}}"
          alt="Biểu đồ tiến độ dự án"
        />

        {/* PROJECT TABLE */}
        <h2 className="section-title">Danh sách dự án</h2>
        <div className="card">
          <div className="table-wrapper">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Tên dự án</th>
                  <th>Khách hàng</th>
                  <th>Tiến độ</th>
                  <th>Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>LMS Trường học</td>
                  <td>THPT A</td>
                  <td>
                    <div className="progress-bar">
                      <div className="progress" style={{ width: "80%" }}></div>
                    </div>
                    80%
                  </td>
                  <td>
                    <span className="status active">Đang triển khai</span>
                  </td>
                </tr>
                <tr>
                  <td>Dashboard SME</td>
                  <td>Công ty B</td>
                  <td>
                    <div className="progress-bar">
                      <div className="progress" style={{ width: "60%" }}></div>
                    </div>
                    60%
                  </td>
                  <td>
                    <span className="status active">Đang triển khai</span>
                  </td>
                </tr>
                <tr>
                  <td>Prototype IoT</td>
                  <td>Startup C</td>
                  <td>
                    <div className="progress-bar">
                      <div className="progress" style={{ width: "40%" }}></div>
                    </div>
                    40%
                  </td>
                  <td>
                    <span className="status developing">Đang phát triển</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* INTERN SECTION */}
        <h2 className="section-title">Thực tập sinh nổi bật</h2>
        <div className="grid-3">
          <div className="card">
            <h3>Frontend Intern</h3>
            <p className="small">Tham gia dự án LMS • React • UI/UX</p>
          </div>
          <div className="card">
            <h3>Backend Intern</h3>
            <p className="small">API • Node.js • Database</p>
          </div>
          <div className="card">
            <h3>Data Intern</h3>
            <p className="small">Xử lý dữ liệu • Visualization</p>
          </div>
        </div>

        {/* CTA SECTION */}
        <section className="cta-section">
          <div className="card cta-card">
            <div>
              <h3>Bạn muốn quản trị nâng cao?</h3>
              <p className="small">
                NovaHA có thể xây dựng dashboard tùy chỉnh theo doanh nghiệp.
              </p>
            </div>
            <a href="/contact" className="btn-primary">
              Liên hệ
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}
