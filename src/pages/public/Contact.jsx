import React from "react"
import { Link } from "react-router-dom"
import { Layout } from "../../components/layout/Layout"
import "./Contact.css"

export const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [msg, setMsg] = React.useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setMsg("Đang gửi...")
      setTimeout(() => {
        setMsg("Cảm ơn! Chúng tôi sẽ liên hệ bạn sớm.")
        setFormData({ name: "", email: "", phone: "", message: "" })
      }, 1000)
    } catch {
      setMsg("Lỗi gửi tin nhắn")
    }
  }

  return (
    <Layout>
      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero-text">
          <h1 className="h-title">Liên hệ NovaHA</h1>
          <p className="h-sub">
            Chúng tôi luôn sẵn sàng lắng nghe nhu cầu của bạn về chuyển đổi số,
            phát triển phần mềm, website hoặc ươm tạo startup.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=900&q=80"
          className="contact-hero-image"
          alt="Contact"
        />
      </section>

      {/* FORM + INFO */}
      <section className="contact-content">
        <form className="card contact-form" onSubmit={handleSubmit}>
          <h3>Gửi tin nhắn cho chúng tôi</h3>

          <div className="contact-form-wrapper">
            <div className="form-group">
              <label>Họ và tên</label>
              <input
                type="text"
                placeholder="Nhập tên của bạn"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>

            <div className="form-group">
              <label>Số điện thoại</label>
              <input
                type="tel"
                placeholder="09xxxxxxx"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label>Nội dung</label>
              <textarea
                rows="5"
                placeholder="Mô tả nhu cầu của bạn..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-primary">
              Gửi liên hệ
            </button>
            {msg && (
              <p
                className={
                  msg.includes("Cảm ơn")
                    ? "contact-form-message-success"
                    : "contact-form-message-error"
                }
              >
                {msg}
              </p>
            )}
          </div>
        </form>

        <div className="contact-info-column">
          <div className="card contact-info-card">
            <h3>Thông tin liên hệ</h3>
            <p className="small contact-info-text">
              📧 Email: <strong>contact@novaha.vn</strong>
              <br />☎ Hotline: <strong>0399148815</strong>
              <br />
              📍 Làm việc online toàn quốc
            </p>
          </div>

          <div className="card contact-support-card">
            <h3>Hỗ trợ nhanh</h3>
            <ul className="small contact-support-list">
              <li>Tư vấn miễn phí về giải pháp</li>
              <li>Phản hồi trong 24 giờ</li>
              <li>Hỗ trợ kỹ thuật & bảo hành</li>
            </ul>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="contact-map-section">
        <h2 className="contact-map-title">Bản đồ</h2>
        <div className="card contact-map-container">
          <iframe
            width="100%"
            height="350"
            className="contact-map-iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.3436665919717!2d106.6671951!3d10.790944399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ed2d4b545d9%3A0x9655ae616ac4b082!2zMTczUSDEkC4gxJDhurduZyBWxINuIE5n4buvLCBQaMaw4budbmcgMTMsIFBow7AgTmh14bqtbiwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e1!3m2!1svi!2s!4v1763710842892!5m2!1svi!2s"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* CTA */}
      <section className="contact-cta-section">
        <div className="card contact-cta-card">
          <div className="contact-cta-text">
            <h3>Muốn được tư vấn ngay?</h3>
            <p className="small">Chúng tôi sẽ phản hồi trong vòng 24 giờ.</p>
          </div>
          <a className="btn-primary contact-cta-button" href="tel:0399148815">
            📞 Gọi ngay
          </a>
        </div>
      </section>
    </Layout>
  )
}
