import React from "react"
import { Link } from "react-router-dom"
import { Layout } from "../../components/layout/Layout"
import "./About.css"

export const About = () => {
  return (
    <Layout>
      {/* HERO ABOUT */}
      <section className="about-hero">
        <div className="about-hero-text">
          <h1 className="h-title">Về NovaHA</h1>
          <p className="h-sub">
            NovaHA là mô hình tiên phong kết hợp{" "}
            <strong>
              công ty công nghệ – trung tâm thực tập – vườn ươm startup
            </strong>
            . Chúng tôi hướng đến việc tạo ra các sản phẩm ứng dụng thực tế và
            phát triển nguồn nhân lực CNTT chất lượng thông qua các dự án thực
            chiến giữa sinh viên và doanh nghiệp SME, với chi phí tối ưu và hiệu
            quả vượt trội.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1000&q=80"
          className="about-hero-image"
          alt="Team brainstorming"
        />
      </section>

      {/* VISION - MISSION - VALUES */}
      <section className="about-vmv-section">
        <h2 className="about-vmv-title">
          Tầm nhìn – Sứ mệnh – Giá trị cốt lõi
        </h2>
        <div className="grid-3 about-vmv-cards">
          <div className="card about-vmv-card">
            <div className="about-vmv-icon">🎯</div>
            <h3 className="about-vmv-card-title">Tầm nhìn</h3>
            <p className="small">
              Trở thành trung tâm kết nối{" "}
              <strong>đào tạo – doanh nghiệp – startup</strong> dẫn đầu, kiến
              tạo hệ sinh thái đổi mới sáng tạo và cung cấp đội ngũ nhân sự thực
              chiến chất lượng cao.
            </p>
          </div>
          <div className="card about-vmv-card">
            <div className="about-vmv-icon">🚀</div>
            <h3 className="about-vmv-card-title">Sứ mệnh</h3>
            <p className="small">
              Biến ý tưởng thành sản phẩm; cung cấp môi trường thực hành chuẩn
              doanh nghiệp; đồng hành cùng SME và startup trong hành trình ứng
              dụng công nghệ hiệu quả và bền vững.
            </p>
          </div>
          <div className="card about-vmv-card">
            <div className="about-vmv-icon">💎</div>
            <h3 className="about-vmv-card-title">Giá trị cốt lõi</h3>
            <p className="small">
              Tính minh bạch, tính sáng tạo, sự tập trung vào chất lượng và bền
              vững. Chúng tôi tin rằng công nghệ phải phục vụ con người và cộng
              đồng.
            </p>
          </div>
        </div>
      </section>

      {/* MODEL SECTION */}
      <section className="about-model-section">
        <h2 className="about-model-title">Mô hình hoạt động NovaHA</h2>
        <div className="about-model-content">
          <img src="/lab.png" className="about-model-image" alt="Lab" />
          <div className="about-model-text">
            <ul className="small about-model-list">
              <li>
                <strong>Trường đại học</strong> → cung cấp sinh viên
              </li>
              <li>
                <strong>NovaHA Lab</strong> → đào tạo & triển khai dự án
              </li>
              <li>
                <strong>Doanh nghiệp</strong> → nhận dự án phần mềm & giải pháp
                số
              </li>
              <li>
                <strong>Startup</strong> → được ươm tạo & hỗ trợ MVP
              </li>
            </ul>
            <p className="small about-model-description">
              Mô hình này giúp tối ưu hóa chi phí cho doanh nghiệp, tạo cơ hội
              thực hành cho sinh viên, và hỗ trợ khởi nghiệp một cách hiệu quả.
            </p>
          </div>
        </div>
      </section>

      {/* WHY NOVAHA */}
      <section className="about-why-section">
        <h2 className="about-why-title">Vì sao NovaHA ra đời?</h2>
        <div className="card about-why-content">
          <p className="small">
            Thị trường đang thiếu hụt nguồn nhân lực CNTT thực chiến, trong khi
            startup và doanh nghiệp nhỏ khó tiếp cận các dịch vụ công nghệ với
            chi phí hợp lý.
          </p>
          <p className="small">
            <strong>NovaHA được thành lập để giải quyết hai vấn đề:</strong>
          </p>
          <ul className="small about-why-list">
            <li>
              <strong>1. Nhu cầu về nhân lực:</strong> Đào tạo sinh viên thành
              lập trình viên thực chiến, sẵn sàng cho thị trường lao động.
            </li>
            <li>
              <strong>2. Nhu cầu về công nghệ:</strong> Cung cấp giải pháp phần
              mềm chất lượng với chi phí tối ưu cho SME và startup.
            </li>
          </ul>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="about-roadmap-section">
        <h2 className="about-roadmap-title">Lộ trình phát triển 2025 – 2030</h2>
        <div className="grid-3 about-roadmap-cards">
          <div className="card about-roadmap-card">
            <h3>2025</h3>
            <p className="small">
              Vận hành mô hình thực tập • Triển khai 10 dự án đầu tiên
            </p>
          </div>
          <div className="card about-roadmap-card">
            <h3>2026 – 2027</h3>
            <p className="small">
              Ra mắt NovaHA Lab • Hợp tác 10 trường đại học
            </p>
          </div>
          <div className="card about-roadmap-card">
            <h3>2028 – 2030</h3>
            <p className="small">
              Ươm tạo 20+ startup • Mở rộng hệ thống dịch vụ & sản phẩm
            </p>
          </div>
        </div>
      </section>

      {/* IMAGE GALLERY */}
      <section className="about-gallery-section">
        <h2 className="about-gallery-title">Hình ảnh hoạt động</h2>
        <div className="about-gallery-container">
          <div className="about-gallery-image about-gallery-image-1"></div>
          <div className="about-gallery-image about-gallery-image-2"></div>
          <div className="about-gallery-image about-gallery-image-3"></div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="about-partners-section">
        <h2 className="about-partners-title">Hợp tác cùng đối tác</h2>
        <p className="about-partners-description">
          Chúng tôi tự hào đồng hành cùng các doanh nghiệp, tổ chức thực chiến
          doanh nghiệp và trung tâm đổi mới sáng tạo nhằm phát triển hệ sinh
          thái công nghệ, đào tạo nhân lực và chuyển đổi số bền vững.
        </p>

        <div className="about-partners-subsection">
          <h3 className="about-partners-subtitle">Các đối tác công nghệ</h3>
          <div className="about-partners-cards">
            <div className="card about-partner-card">
              <div className="about-partner-card-image about-partner-card-logo-ece"></div>
              <h4 className="about-partner-card-title">
                CTY TNHH CÔNG NGHỆ ECE
              </h4>
              <p className="small">
                Ecomeasy dẫn đầu về mặt cung cấp giải pháp bán hàng trên kênh
                thương mại điện tử khi luôn tìm những cách mới mẻ để giúp các
                doanh nghiệp bán hàng thương mại điện tử dễ dàng hơn.
              </p>
            </div>
            <div className="card about-partner-card">
              <div className="about-partner-card-image about-partner-card-logo-ctw"></div>
              <h4 className="about-partner-card-title">
                CÔNG TY TNHH CÔNG NGHỆ CTW
              </h4>
              <p className="small">
                CÔNG TY CỔ PHẦN CÔNG NGHỆ CTW (CTW), nơi những ý tưởng khoa học
                đột phá được ươm mầm và phát triển thành các giải pháp công nghệ
                ứng dụng thực tiễn. Trong kỷ nguyên số hóa, chúng tôi tự hào là
                đơn vị tiên phong, đặt nền móng cho tương lai thông qua các hoạt
                động nghiên cứu khoa học và phát triển công nghệ chuyên sâu.
              </p>
            </div>
          </div>
        </div>

        <div className="about-partners-subsection">
          <h3 className="about-partners-subtitle">Các đối tác chiến lược</h3>
          <div className="about-partners-cards">
            <div className="card about-partner-card">
              <div className="about-partner-card-image about-partner-card-logo-hubbiz"></div>
              <h4 className="about-partner-card-title">Hubbiz</h4>
              <p className="small">
                Nền tảng kết nối doanh nghiệp & đổi mới sáng tạo
              </p>
            </div>
            <div className="card about-partner-card">
              <div className="about-partner-card-image about-partner-card-logo-shtp"></div>
              <h4 className="about-partner-card-title">SHTP</h4>
              <p className="small">Khu Công nghệ cao TP.HCM</p>
            </div>
            <div className="card about-partner-card">
              <div className="about-partner-card-image about-partner-card-logo-sihub"></div>
              <h4 className="about-partner-card-title">SIHUB</h4>
              <p className="small">Trung tâm khởi nghiệp đổi mới sáng tạo</p>
            </div>
            <div className="card about-partner-card">
              <div className="about-partner-card-image about-partner-card-logo-fpt"></div>
              <h4 className="about-partner-card-title">FPT</h4>
              <p className="small">Đào tạo & chuyển giao công nghệ</p>
            </div>
          </div>
        </div>

        <Link to="/contact" className="about-partner-link">
          Liên hệ ngay
        </Link>
      </section>

      {/* CTA SECTION */}
      <section className="about-cta-section">
        <h2>Cùng xây dựng tương lai công nghệ</h2>
        <p>Bạn có ý tưởng hay muốn tham gia đội ngũ NovaHA?</p>
        <Link to="/contact" className="about-cta-button">
          Bắt đầu ngay
        </Link>
      </section>
    </Layout>
  )
}
