import { useState } from "react"
import { Layout } from "../../components/layout/Layout"
import "./DichVuMVP.css"

function DichVuMVP() {
  const pricingPlans = [
    {
      title: "Gói Basic",
      price: "Từ 5.000.000đ",
      features: [
        "Tư vấn sản phẩm 1 buổi",
        "Prototype 3–5 màn hình",
        "Landing page đơn giản",
        "Không bao gồm hệ thống backend",
      ],
      buttonText: "Chọn gói Basic",
      highlight: false,
    },
    {
      title: "Gói MVP (Phổ biến nhất)",
      price: "Từ 10.000.000đ",
      features: [
        "Prototype đầy đủ 8–15 màn hình",
        "Landing page + hệ thống cốt lõi",
        "Tài khoản, phân quyền, dashboard",
        "Tư vấn sản phẩm + hướng dẫn pitching",
        "Hosting 1 tháng",
      ],
      buttonText: "Chọn gói MVP",
      highlight: true,
    },
    {
      title: "Gói Premium",
      price: "Từ 25.000.000đ",
      features: [
        "Prototype UI/UX nâng cao",
        "Web App + Mobile App (React Native)",
        "Tự động hóa – API – tích hợp thanh toán",
        "Hệ thống mở rộng theo yêu cầu",
        "Bảo trì 2 tháng",
      ],
      buttonText: "Chọn gói Premium",
      highlight: false,
    },
  ]

  const comparisonData = [
    {
      feature: "Tư vấn sản phẩm",
      basic: "✔ 1 buổi",
      mvp: "✔ Nhiều buổi",
      premium: "✔ Không giới hạn",
    },
    {
      feature: "Prototype UI/UX",
      basic: "3–5 màn hình",
      mvp: "8–15 màn hình",
      premium: "15–30 màn hình",
    },
    {
      feature: "Landing Page",
      basic: "Cơ bản",
      mvp: "Chuyên nghiệp",
      premium: "Cao cấp + Branding",
    },
    {
      feature: "Hệ thống lõi",
      basic: "⛔ Không",
      mvp: "✔ Có",
      premium: "✔ Nâng cao",
    },
    {
      feature: "Mobile App",
      basic: "⛔ Không",
      mvp: "Tuỳ chọn",
      premium: "✔ iOS + Android",
    },
    { feature: "Bảo trì", basic: "7 ngày", mvp: "1 tháng", premium: "2 tháng" },
  ]

  return (
    <Layout>
      <div className="dichvu-mvp-page">
        {/* HERO SECTION */}
        <section className="mvp-hero">
          <div className="hero-content fade-in">
            <h1>Xây sản phẩm MVP trong 3–10 ngày</h1>
            <p className="tagline">
              Giải pháp nhanh – gọn – hiệu quả cho startup. Từ ý tưởng → sản
              phẩm thật.
            </p>

            <ul className="hero-features">
              <li>Xây prototype UI/UX siêu nhanh</li>
              <li>Xây landing page + hệ thống cốt lõi</li>
              <li>Tư vấn sản phẩm – định hướng MVP</li>
              <li>Hỗ trợ pitching và kỹ thuật</li>
            </ul>

            <button
              onClick={() => (window.location.href = "/contact")}
              className="cta-btn"
            >
              Nhận tư vấn miễn phí
            </button>
          </div>

          <div className="hero-image slide-in-right">
            <img
              src="https://intersog.com/wp-content/uploads/2020/02/mvp-development-steps.jpg"
              alt="MVP Development"
            />
          </div>
        </section>

        {/* PRICING SECTION */}
        <section className="mvp-pricing">
          <h2>Gói dịch vụ của chúng tôi</h2>
          <p className="section-subtitle">
            Chọn gói phù hợp với nhu cầu phát triển sản phẩm của bạn.
          </p>

          <div className="pricing-grid">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`price-card ${
                  plan.highlight ? "highlight" : ""
                } scale-in`}
              >
                <div className="card-content">
                  <h3 className="price-title">{plan.title}</h3>
                  <ul className="features-list">
                    {plan.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="card-footer">
                  <div className="price">{plan.price}</div>
                  <button
                    onClick={() => (window.location.href = "/contact")}
                    className="select-btn"
                  >
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="mvp-comparison">
          <h2>So sánh 3 gói dịch vụ</h2>
          <p className="section-subtitle">
            Bảng so sánh minh bạch – chọn đúng gói phù hợp với startup của bạn.
          </p>

          <div className="table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th className="feature-col">Tính năng</th>
                  <th>Basic</th>
                  <th className="highlight-col">
                    MVP
                    <div className="badge">Phổ biến nhất</div>
                  </th>
                  <th>Premium</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index}>
                    <td className="feature-col">{row.feature}</td>
                    <td>{row.basic}</td>
                    <td className="highlight-col">{row.mvp}</td>
                    <td>{row.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default DichVuMVP
