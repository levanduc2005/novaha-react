import "./DichVuPhanMem.css"
import { Layout } from "../../components/layout/Layout"

function DichVuPhanMem() {
  const solutions = [
    {
      title: "CRM / ERP mini",
      description:
        "Quản lý khách hàng – bán hàng – kho – workflow theo đặc thù doanh nghiệp.",
      icon: "📊",
    },
    {
      title: "Dashboard doanh nghiệp",
      description: "Báo cáo realtime, KPI, phân tích dữ liệu trực quan.",
      icon: "📈",
    },
    {
      title: "Hệ thống IoT",
      description: "Thu thập dữ liệu cảm biến – thiết bị – sản xuất.",
      icon: "🔧",
    },
    {
      title: "Tích hợp API",
      description:
        "Kết nối phần mềm kế toán, thanh toán, CRM, Zalo, chatbot...",
      icon: "🔗",
    },
    {
      title: "Mobile App",
      description: "Ứng dụng iOS/Android chuyên nghiệp.",
      icon: "📱",
    },
    {
      title: "Tự động hóa quy trình",
      description: "Automation – triggers – workflow thông minh.",
      icon: "⚡",
    },
  ]

  const usp = [
    {
      title: "Tư vấn bài bản",
      description:
        "Phân tích quy trình – đề xuất giải pháp – đồng hành triển khai.",
    },
    {
      title: "Tùy biến 100%",
      description:
        "Không dùng template, hệ thống theo đúng cách doanh nghiệp vận hành.",
    },
    {
      title: "Công nghệ hiện đại",
      description: "Chuẩn mở rộng, nhiều năm sau vẫn dễ nâng cấp.",
    },
    {
      title: "Bảo mật cao",
      description: "Phân quyền, mã hóa, kiểm thử bảo mật.",
    },
    {
      title: "Triển khai nhanh",
      description: "Theo Agile – nghiệm thu liên tục.",
    },
  ]

  const painPoints = [
    "Quy trình rời rạc – xử lý thủ công gây thất thoát.",
    "Nhiều phần mềm nhưng không đồng bộ dữ liệu.",
    "Thiếu báo cáo realtime để ra quyết định.",
    "Phần mềm cũ lỗi thời – sửa chữa tốn kém.",
    "Thiếu tự động hóa khiến chi phí vận hành cao.",
  ]

  const caseStudies = [
    {
      title: "Doanh nghiệp phân phối – Dashboard realtime",
      description:
        "Làm báo cáo mất 3–5 giờ mỗi ngày → sau khi triển khai dashboard realtime, còn 10 phút. Doanh số tăng 28% nhờ theo dõi KPI theo ngày.",
      result: "+28% doanh số",
    },
    {
      title: "Doanh nghiệp dịch vụ – CRM mini",
      description:
        "Trước đây ghi chú bằng Excel → quên lịch chăm khách. Sau CRM mới: tỷ lệ chuyển đổi tăng 35%, đội sales hoạt động minh bạch.",
      result: "+35% tỷ lệ chuyển đổi",
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
      <div className="dichvu-phanmem-page">
        {/* HERO SECTION */}
        <section className="phanmem-hero">
          <div className="hero-content fade-in">
            <h1>
              Phần mềm theo yêu cầu
              <br />
              chuyên nghiệp cho doanh nghiệp
            </h1>
            <p className="tagline">
              Web app – Mobile app – Dashboard – API & Automation
            </p>

            <div className="pills">
              <span className="pill">Tối ưu vận hành</span>
              <span className="pill">Giao diện hiện đại</span>
              <span className="pill">Bảo mật & ổn định</span>
            </div>

            <div className="price-box">
              <div className="price-label">Gói cơ bản</div>
              <h2 className="price-amount">Từ 20.000.000đ</h2>
              <button onClick={scrollToContact} className="cta-btn">
                Tư vấn ngay
              </button>
            </div>
          </div>

          <div className="hero-image slide-up">
            <img
              src="https://cdn.bap-software.net/2022/09/what-is-software-development.jpg"
              alt="Software Development"
            />
          </div>
        </section>

        {/* SOLUTIONS SECTION */}
        <section className="solutions-section">
          <h2>Giải pháp chúng tôi cung cấp</h2>
          <div className="solutions-grid">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="solution-card fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="solution-icon">{solution.icon}</div>
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* USP SECTION */}
        <section className="usp-section">
          <h2>USP – Lợi thế cạnh tranh</h2>
          <div className="usp-list">
            {usp.map((item, index) => (
              <div
                key={index}
                className="usp-item fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="check-icon">✓</div>
                <div>
                  <strong>{item.title}:</strong> {item.description}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PAIN POINTS SECTION */}
        <section className="pain-points-section">
          <h2>Pain Points – Nỗi đau doanh nghiệp đang gặp</h2>
          <div className="pain-points-list">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="pain-point-item fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="bullet">⚠️</span>
                <p>{point}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CASE STUDIES SECTION */}
        <section className="case-studies-section">
          <h2>Case Study – Câu chuyện thành công</h2>
          <div className="case-studies-grid">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="case-study-card scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3>{study.title}</h3>
                <p>{study.description}</p>
                <div className="result-badge">{study.result}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default DichVuPhanMem
