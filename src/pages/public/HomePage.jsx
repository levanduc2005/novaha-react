import { Link } from "react-router-dom"
import { Layout } from "../../components/layout/Layout"
import "./HomePage.css"

export const HomePage = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="home-hero hero">
        <div className="hero-left home-hero-left">
          <h1 className="h-title">
            NovaHA — Đồng hành cùng startup & doanh nghiệp trẻ.
          </h1>

          <p className="h-sub">
            Chúng tôi cung cấp dịch vụ chuyển đổi số, phát triển phần mềm, xây
            dựng website, đào tạo thực chiến và ươm mầm dự án công nghệ dành cho
            SME & startup.
          </p>

          <div className="home-hero-buttons">
            <Link to="/services" className="btn-primary">
              Khám phá dịch vụ
            </Link>
            <Link to="/pricing" className="btn-primary home-hero-secondary-btn">
              Xem báo giá
            </Link>
          </div>

          <div className="stats">
            <div className="stat">
              <div className="num">10+</div>
              <div className="label">Dự án khởi nghiệp</div>
            </div>
            <div className="stat">
              <div className="num">100+</div>
              <div className="label">Sinh viên thực chiến</div>
            </div>
            <div className="stat">
              <div className="num">80k+</div>
              <div className="label">SME tại Việt Nam</div>
            </div>
          </div>
        </div>

        <div className="hero-right home-hero-right">
          <img
            src="https://www.shutterstock.com/image-photo/whiteboard-team-brainstorm-boardroom-idea-600nw-2463472225.jpg"
            alt="Startup team brainstorm"
            className="home-hero-image"
          />
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="home-about-section">
        <h2 className="home-about-title">Về NovaHA</h2>
        <div className="home-about-content">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
            className="home-about-image"
            alt="NovaHA Team"
          />
          <div className="home-about-text">
            <p className="small">
              NovaHA là mô hình hybrid giữa{" "}
              <strong>
                công ty công nghệ – trung tâm đào tạo – vườn ươm startup
              </strong>
              . Tập trung hỗ trợ doanh nghiệp vừa & nhỏ (SME) và tạo sân chơi
              thực chiến cho sinh viên.
            </p>
            <ul className="small home-about-list">
              <li>
                <strong>Tầm nhìn:</strong> trở thành trung tâm chuyển đổi số &
                đào tạo thực chiến tiên phong.
              </li>
              <li>
                <strong>Sứ mệnh:</strong> đưa ý tưởng thành sản phẩm thật, đưa
                sinh viên vào dự án thật.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="home-services-section">
        <h2 className="home-services-title">Dịch vụ chuyên môn</h2>
        <div className="grid-3">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80"
              className="home-service-card-image"
              alt="Chuyển đổi số doanh nghiệp"
            />
            <h3>Chuyển đổi số doanh nghiệp</h3>
            <p className="small">
              Tư vấn quy trình, ERP/CRM, tự động hóa và tối ưu vận hành.
            </p>
          </div>

          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80"
              className="home-service-card-image"
              alt="Phát triển phần mềm"
            />
            <h3>Phát triển phần mềm</h3>
            <p className="small">
              Web App, Mobile App, API, UI/UX, Dashboard doanh nghiệp.
            </p>
          </div>

          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=600&q=80"
              className="home-service-card-image"
              alt="Đào tạo thực chiến"
            />
            <h3>Đào tạo thực chiến</h3>
            <p className="small">
              Chương trình thực chiến 6–12 tuần dành cho sinh viên CNTT.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
