import React from "react"
import { Link } from "react-router-dom"
import { Layout } from "../../components/layout/Layout"
import "./Pricing.css"

export const Pricing = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="pricing-hero">
        <div className="pricing-hero-text">
          <h1 className="h-title">Báo giá dịch vụ NovaHA</h1>
          <p className="h-sub">
            Bảng báo giá minh bạch – linh hoạt – phù hợp cho SME, startup và
            trường học. NovaHA cam kết "Giá thấp – Giá trị thật."
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80"
          className="pricing-hero-image"
          alt="Pricing"
        />
      </section>

      {/* SPECIAL POLICY */}
      <section className="pricing-policy-section">
        <div className="card">
          <h3>🔥 Chính sách đặc biệt NovaHA</h3>
          <p className="small">
            - Hỗ trợ chạy demo 1 tháng cho doanh nghiệp mới. <br />
            - Chi phí thiết kế cực thấp cho startup công nghệ. <br />
            - Ưu đãi 50% cho trường học hoặc đơn vị đào tạo. <br />- Hỗ trợ sinh
            viên thực tập & nhân sự công nghệ giá tốt.
          </p>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="pricing-cards-section">
        <h2 className="pricing-cards-title">Các gói dịch vụ</h2>
        <div className="grid-3">
          <div className="card pricing-card">
            <h3>Website doanh nghiệp</h3>
            <p className="small pricing-card-text">
              Website nhanh – đẹp – chuẩn SEO.
            </p>
            <img
              src="https://pareto.vn/uploads/2024/01/thiet-ke-va-quan-ly-website-la-gi.jpg"
              className="pricing-card-image"
              alt="Website"
            />
            <ul className="small">
              <li>Landing page / Website giới thiệu</li>
              <li>Chuẩn SEO – tốc độ cao</li>
              <li>Bảo mật & bảo trì 1–3 tháng</li>
              <li>Tích hợp chatbot / biểu mẫu liên hệ</li>
            </ul>
            <h3 className="pricing-card-price">Từ 2.500.000</h3>
            <Link to="/dichvu-web" className="btn-primary pricing-card-button">
              Xem chi tiết
            </Link>
          </div>

          <div className="card pricing-card">
            <h3>Phần mềm theo yêu cầu</h3>
            <p className="small pricing-card-text">
              Web app – mobile – dashboard.
            </p>
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80"
              className="pricing-card-image"
              alt="Software"
            />
            <ul className="small">
              <li>Hệ thống quản lý (CRM/ERP nhỏ)</li>
              <li>Dashboard doanh nghiệp</li>
              <li>Thu thập dữ liệu / IoT</li>
              <li>Tích hợp API & automation</li>
            </ul>
            <h3 className="pricing-card-price">Từ 20.000.000</h3>
            <Link
              to="/dichvu-phanmem"
              className="btn-primary pricing-card-button"
            >
              Xem chi tiết
            </Link>
          </div>

          <div className="card pricing-card">
            <h3>Startup MVP</h3>
            <p className="small pricing-card-text">
              Xây sản phẩm khởi nghiệp nhanh chóng.
            </p>
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
              className="pricing-card-image"
              alt="Startup"
            />
            <ul className="small">
              <li>Tư vấn sản phẩm – định hướng MVP</li>
              <li>Prototype nhanh trong 3–10 ngày</li>
              <li>Xây landing page + hệ thống cốt lõi</li>
              <li>Hỗ trợ pitching / kỹ thuật</li>
            </ul>
            <h3 className="pricing-card-price">Từ 10.000.000</h3>
            <Link to="/dichvu-mvp" className="btn-primary pricing-card-button">
              Xem chi tiết
            </Link>
          </div>
        </div>
      </section>

      {/* DIGITAL TRANSFORMATION */}
      <section className="pricing-transform-section">
        <h2>Chuyển đổi số dành cho SME</h2>
        <div className="pricing-transform-content">
          <img
            src="https://channel.mediacdn.vn/428462621602512896/2023/8/22/photo-1-1692671353011567667187.png"
            className="pricing-transform-image"
            alt="Digital Transformation"
          />
          <div className="pricing-transform-text">
            <p className="small">Gói chuyển đổi số linh hoạt theo nhu cầu.</p>
            <ul className="small">
              <li>Phân tích quy trình – BPM</li>
              <li>Xây mini ERP/CRM</li>
              <li>Tích hợp AI & tự động hóa</li>
              <li>Chuyển đổi dữ liệu & báo cáo</li>
            </ul>
            <h3 className="pricing-transform-price">
              Từ 15.000.000 – Tuỳ chỉnh
            </h3>
          </div>
        </div>
      </section>

      {/* FREE PACKAGE */}
      <section className="pricing-free-section">
        <h2 className="pricing-free-title">Gói "Website khởi nghiệp 0 đồng"</h2>
        <div className="card">
          <p className="small">
            NovaHA hỗ trợ sinh viên và startup mới bắt đầu bằng gói website miễn
            phí:
          </p>
          <ul className="small pricing-free-list">
            <li>Thiết kế landing page cơ bản</li>
            <li>Hosting miễn phí 1 tháng</li>
            <li>Template tối ưu SEO</li>
            <li>Tư vấn thương hiệu + nội dung</li>
          </ul>
          <p className="small">
            Áp dụng cho startup công nghệ hoặc dự án sinh viên có tiềm năng.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="pricing-final-cta">
        <div className="card pricing-final-cta-content">
          <h2>Muốn nhận báo giá chi tiết?</h2>
          <p>Hãy liên hệ ngay để được tư vấn giải pháp phù hợp.</p>
          <Link to="/contact" className="btn-primary">
            Yêu cầu báo giá
          </Link>
        </div>
      </section>
    </Layout>
  )
}
