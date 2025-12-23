import { useState } from "react"
import { Layout } from "../../components/layout/Layout"
import "./DichVuWeb.css"

function DichVuWeb() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) / 20
    const dy = (e.clientY - cy) / 20
    setMousePosition({ x: dx, y: dy })
  }

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 })
  }

  const steps = [
    {
      num: 1,
      title: "Khảo sát & Lên brief",
      description: "Hiểu rõ mục tiêu, đối tượng, nội dung và tone thương hiệu.",
    },
    {
      num: 2,
      title: "Thiết kế UI/UX",
      description: "Prototype, tối ưu trải nghiệm và hành trình khách hàng.",
    },
    {
      num: 3,
      title: "Phát triển & Tối ưu",
      description: "SEO on-page, tốc độ, bảo mật, tích hợp chatbot.",
    },
  ]

  const features = [
    {
      title: "Tối ưu chuyển đổi",
      description:
        "Thiết kế tập trung vào hành vi người dùng giúp tăng tỉ lệ chuyển đổi (lead & call-to-action).",
    },
    {
      title: "Chuẩn SEO từ đầu",
      description:
        "Cấu trúc dữ liệu, thẻ meta, sitemap, robots, và tối ưu nội dung để bạn nhanh lên top.",
    },
    {
      title: "Bảo mật & Bảo trì",
      description:
        "Cập nhật bản vá, SSL, backup định kỳ và hỗ trợ kỹ thuật 1–3 tháng.",
    },
  ]

  const deliverables = [
    "Thiết kế giao diện (Figma) & prototype.",
    "HTML/CSS/JS chuẩn, responsive, tích hợp CMS (WordPress/Headless nếu cần).",
    "Tối ưu tốc độ: hình ảnh lazy, nén assets, split JS, caching.",
    "SEO kỹ thuật: heading, schema, sitemap, robots, canonical.",
    "Tích hợp chatbot (Zalo/FB/AI) & form gửi email/CRM.",
    "Hướng dẫn sử dụng & bàn giao code, hỗ trợ deploy lên hosting.",
  ]

  const testimonials = [
    {
      name: "Nguyễn A.",
      feedback:
        "Website tăng lượt liên hệ 40% sau 2 tháng — đội ngũ tư vấn rất tận tâm.",
    },
    {
      name: "Trần B.",
      feedback: "Giao diện đẹp, tối ưu tốc độ — khách hàng phản hồi tốt.",
    },
    {
      name: "Doanh nghiệp C",
      feedback: "Chuẩn SEO, dễ quản trị — tiết kiệm chi phí marketing lâu dài.",
    },
  ]

  const pricingPlans = [
    {
      title: "Gói Khởi tạo",
      description: "Landing page, 1 trang chính, tích hợp form",
      price: "15.000.000đ",
    },
    {
      title: "Gói Doanh Nghiệp",
      description: "5-8 trang, SEO cơ bản, chatbot",
      price: "25.000.000đ",
    },
    {
      title: "Gói Premium",
      description: "Multi-page, CMS, bảo trì 6 tháng, tối ưu nâng cao",
      price: "40.000.000đ+",
    },
  ]

  const faqs = [
    {
      question: "Thời gian hoàn thành mất bao lâu?",
      answer: "Từ 7–21 ngày tùy yêu cầu, nội dung đầy đủ và phê duyệt nhanh.",
    },
    {
      question: "Không có nội dung thì sao?",
      answer: "Chúng tôi hỗ trợ soạn thảo nội dung chuẩn SEO (tùy gói).",
    },
    {
      question: "Sau khi bàn giao có thể tự quản trị không?",
      answer:
        "Có. Chúng tôi cung cấp hướng dẫn và tài liệu, hoặc quản trị thuê theo tháng.",
    },
  ]

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <Layout>
      <div className="dichvu-web-page">
        {/* HERO SECTION */}
        <section className="web-hero">
          <div className="hero-left">
            <h1>Website doanh nghiệp — Đẹp, Nhanh, Chuẩn SEO</h1>
            <p className="hero-tagline">
              Landing page / Website giới thiệu • SEO on-page • Bảo mật • Tích
              hợp chatbot & biểu mẫu
            </p>

            <div className="hero-pills">
              <div className="pill">Tối ưu tốc độ & Core Web Vitals</div>
              <div className="pill">Responsive trên mọi thiết bị</div>
              <div className="pill">Thiết kế chuyển đổi cao</div>
            </div>

            <div className="hero-price-box">
              <div className="price-label">Gói tiêu chuẩn</div>
              <div className="price-value">Từ 15.000.000đ</div>
              <button onClick={scrollToContact} className="cta-pulse">
                Tư vấn ngay
              </button>
            </div>

            <div className="process-steps">
              {steps.map((step) => (
                <div key={step.num} className="process-step">
                  <div className="step-num">{step.num}</div>
                  <div className="step-content">
                    <strong>{step.title}</strong>
                    <p className="muted">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="hero-right"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="https://vietpearlcity.vn/wp-content/uploads/2022/08/Vai-tro-cua-thiet-ke-website.jpg"
              alt="Web design"
            />
            <div
              className="float-icon fi-1"
              style={{
                transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              }}
            >
              ⚙️
            </div>
            <div
              className="float-icon fi-2"
              style={{
                transform: `translate(${mousePosition.x * 2}px, ${
                  mousePosition.y * 2
                }px)`,
              }}
            >
              💬
            </div>
            <div
              className="float-icon fi-3"
              style={{
                transform: `translate(${mousePosition.x * 3}px, ${
                  mousePosition.y * 3
                }px)`,
              }}
            >
              🔒
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="features-section">
          <h2>Vì sao chọn chúng tôi?</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* DELIVERABLES SECTION */}
        <section className="deliverables-section">
          <h2>Chi tiết dịch vụ & Deliverables</h2>
          <div className="deliverables-content">
            <div className="deliverables-list">
              <ul>
                {deliverables.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="deliverables-info">
              <h4>Bao gồm</h4>
              <p className="muted">
                Hosting cơ bản 1 năm (tùy gói), domain hỗ trợ đăng ký, 1–3 tháng
                bảo trì.
              </p>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="testimonials-section">
          <h2>Khách hàng nói về chúng tôi</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <strong>{testimonial.name}</strong>
                <p>"{testimonial.feedback}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* PRICING SECTION */}
        <section className="pricing-section">
          <h2>Bảng giá tham khảo</h2>
          <div className="pricing-grid">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="price-card">
                <h3>{plan.title}</h3>
                <p className="muted">{plan.description}</p>
                <p className="price-amount">
                  <strong>{plan.price}</strong>
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="faq-section">
          <h2>FAQ - Câu hỏi thường gặp</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <strong>{faq.question}</strong>
                <p className="muted">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA SECTION */}
        <section id="contact" className="cta-section">
          <div className="cta-content">
            <h2>Sẵn sàng tạo website chuyên nghiệp?</h2>
            <p>Liên hệ ngay để được tư vấn miễn phí và báo giá chi tiết</p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-primary">
                Liên hệ tư vấn
              </a>
              <a href="/pricing" className="cta-secondary">
                Xem bảng giá
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default DichVuWeb
