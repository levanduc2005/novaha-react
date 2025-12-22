import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { studentService } from "../../services/api"
import { Layout } from "../../components/layout/Layout"
import "./Student.css"

export default function Student() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    university: "",
    skills: "",
    bio: "",
    cv: null,
  })
  const [msg, setMsg] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, cv: e.target.files[0] }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMsg("")
    setLoading(true)

    try {
      const data = new FormData()
      data.append("name", formData.name)
      data.append("email", formData.email)
      data.append("phone", formData.phone)
      data.append("university", formData.university)
      data.append("skills", formData.skills)
      data.append("bio", formData.bio)
      if (formData.cv) {
        data.append("cv", formData.cv)
      }

      const response = await studentService.createStudent(data)

      if (response.data.ok) {
        setMsg("✅ Gửi hồ sơ thành công! Cảm ơn bạn đã đăng ký.")
        setFormData({
          name: "",
          email: "",
          phone: "",
          university: "",
          skills: "",
          bio: "",
          cv: null,
        })
        setTimeout(() => navigate("/talenthub"), 2000)
      } else {
        setMsg("❌ Lỗi gửi hồ sơ. Vui lòng thử lại.")
      }
    } catch (error) {
      setMsg("❌ Lỗi kết nối: " + (error.message || "Vui lòng thử lại"))
    } finally {
      setLoading(false)
    }
  }

  return (
    <Layout>
      <div className="card student-wrapper">
        <h2 className="h-title student-title">Đăng ký hồ sơ sinh viên</h2>
        <p className="student-subtitle">
          Điền thông tin bên dưới để kết nối với doanh nghiệp.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="contact-grid">
            <div className="form-group">
              <label>Họ và tên *</label>
              <input
                name="name"
                type="text"
                placeholder="Nguyễn Văn A"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label>Email *</label>
              <input
                name="email"
                type="email"
                placeholder="email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label>Số điện thoại</label>
              <input
                name="phone"
                type="tel"
                placeholder="09xxxxxxx"
                value={formData.phone}
                onChange={handleChange}
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label>Trường đại học / Cao đẳng</label>
              <input
                name="university"
                type="text"
                placeholder="ĐH Bách Khoa Hà Nội"
                value={formData.university}
                onChange={handleChange}
                disabled={loading}
              />
            </div>

            <div className="form-group full">
              <label>Kỹ năng chính</label>
              <input
                name="skills"
                placeholder="VD: HTML, CSS, JavaScript, ReactJS, Python..."
                value={formData.skills}
                onChange={handleChange}
                disabled={loading}
              />
            </div>

            <div className="form-group full">
              <label>Giới thiệu bản thân</label>
              <textarea
                name="bio"
                rows="4"
                placeholder="Mô tả ngắn gọn về kinh nghiệm, dự án và mong muốn của bạn..."
                value={formData.bio}
                onChange={handleChange}
                disabled={loading}
              ></textarea>
            </div>

            <div className="form-group full">
              <label>Upload CV (PDF/DOC)</label>
              <input
                type="file"
                name="cv"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                disabled={loading}
                style={{ padding: "10px" }}
              />
            </div>

            <button type="submit" className="btn-submit" disabled={loading}>
              {loading ? "Đang gửi..." : "Gửi hồ sơ ứng tuyển"}
            </button>
          </div>
        </form>

        {msg && (
          <p
            className={`msg-box ${
              msg.includes("thành công") ? "msg-success" : "msg-error"
            }`}
          >
            {msg}
          </p>
        )}
      </div>
    </Layout>
  )
}
