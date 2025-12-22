import React from "react"
import { Link } from "react-router-dom"
import { Layout } from "../../components/layout/Layout"
import "./Team.css"

export const Team = () => {
  const mentors = [
    {
      name: "NCS - Thạc sĩ Vũ Văn Trường",
      role: "Mentor Kỹ thuật phần mềm",
      image: "/mentorphanmem.png",
      desc: "Giảng viên CNTT Trường Đại học FPT TPHCM. Chuyên gia phát triển phần mềm với nhiều năm kinh nghiệm trong thiết kế & triển khai hệ thống doanh nghiệp. Tư vấn kỹ thuật cho các dự án phần mềm. Kỹ năng: Software Engineering, Backend, DevOps.",
    },
    {
      name: "Thạc sĩ CNTT Lê Ngân Duyễn",
      role: "UI/UX Mentor",
      image: "/mentoruxui.png",
      desc: "Chuyên gia phân tích & thiết kế hệ thống thông tin. Thành thạo Python, SQL, Java, PHP, JS, HTML, CSS. Quản trị CSDL: MySQL, Oracle, SQL Server. Giám đốc Dự án Công nghệ số – MobiFone KV9 (2024 – nay). Trưởng phòng Giải pháp CNTT – VNPT Vĩnh Long (2019 – 2023).",
    },
    {
      name: "Thạc sĩ CNTT Phạm Thế Vinh",
      role: "AI/Data Mentor",
      image: "/mentorAI.jpg",
      desc: "Giảng viên CNTT Trường Đại học FPT TPHCM. Chuyên gia AI & Data với kinh nghiệm phân tích dữ liệu lớn và phát triển giải pháp AI. Tư vấn & triển khai các dự án AI/Data cho doanh nghiệp và startup.",
    },
  ]

  const leaders = [
    {
      name: "Mr. Andrey",
      position: "Founder - Ceo",
      subtitle: "Giảng viên Công nghệ thông tin",
      image: "/ceo.png",
      desc: "Chuyên đào tạo mạng máy tính, an toàn thông tin, thông tin hướng nghiệp, tư vấn du học, tư vấn startup công nghệ, chuyển đổi số và định hướng sự nghiệp công nghệ cho sinh viên. Đồng hành xây dựng sản phẩm cùng startup & SME.",
      experience: [
        "7+ năm giảng dạy & mentor dự án",
        "Founder Dự án Heritage AI, EduTech, Heritage Art AI,..",
        "Giám đốc Công ty TNHH Novaha",
      ],
    },
    {
      name: "Mr. Danh",
      position: "Cố vấn - Giám đốc vận hành",
      subtitle: "Thạc sĩ Hệ thống thông tin",
      image: "/danh.png",
      desc: "Phó Trưởng phòng CNTT, Phó Giám đốc TT CNTT, Phó Giám đốc Ban CNTT, Phó Viện trưởng Viện CNTT&ĐTTT, Phó Chủ nhiệm VP Ban GĐĐH, Chủ nhiệm VP HungHau, Hiệu trưởng Trường CĐ Bình Minh Sài Gòn, Phó Viện trưởng Thường trực Viện chuyển giao kết nối APEC, Phó Tổng Giám đốc Thường trực Công ty TNHH Hamoon.",
      experience: [
        "10+ năm trong lĩnh vực công nghệ thông tin",
        "8+ năm quản lý doanh nghiệp và trường học",
        "Giám đốc vận hành Công ty TNHH Novaha",
      ],
    },
    {
      name: "Mr. Phương",
      position: "Giám đốc tài chính",
      subtitle: "Giám đốc vận hành E-Commerce",
      image: "/giamdocvanhanh.png",
      desc: "Chuyên gia vận hành hệ thống thương mại điện tử, tối ưu quy trình kinh doanh và phát triển thị trường. Hỗ trợ startup & SME trong việc áp dụng công nghệ để nâng cao hiệu quả kinh doanh.",
      experience: [
        "5+ năm trong lĩnh vực truyền thông báo chí",
        "7 năm trong lĩnh vực marketing dịch vụ và bán lẻ",
        "Giám đốc Công ty TNHH Công nghệ ECE",
      ],
    },
  ]

  return (
    <Layout>
      {/* HERO TEAM */}
      <section className="team-hero">
        <div className="team-hero-left">
          <h1 className="h-title">Đội ngũ NovaHA</h1>
          <p className="h-sub">
            Đội ngũ gồm giảng viên – kỹ sư – mentor – sinh viên tài năng cùng
            chung mục tiêu: tạo ra sản phẩm chất lượng và phát triển nguồn lực
            công nghệ trẻ.
          </p>
        </div>
        <img
          src="https://cdn.vietnambiz.vn/171464876016439296/2020/6/8/governance-15915826737742042683330.jpg"
          alt="Team"
        />
      </section>

      {/* LEADERSHIP */}
      <section className="team-leaders">
        <h2>Lãnh đạo</h2>

        {leaders.map((leader, idx) => (
          <div key={idx} className="leader-card">
            <img
              src={leader.image}
              alt={leader.name}
              className="leader-image"
            />
            <div className="leader-info">
              <h3>{leader.name}</h3>
              <p className="leader-position">{leader.position}</p>
              <p className="leader-subtitle">{leader.subtitle}</p>
              <p className="small">{leader.desc}</p>
              <ul className="small leader-experience">
                {leader.experience.map((exp, i) => (
                  <li key={i}>{exp}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* TECHNICAL MENTORS */}
      <section className="team-mentors">
        <h2>Mentor kỹ thuật & chuyên môn</h2>
        <div className="grid-3">
          {mentors.map((mentor, idx) => (
            <div key={idx} className="card impl-card">
              <img
                src={mentor.image}
                alt={mentor.name}
                className="mentor-image"
              />
              <h4>{mentor.name}</h4>
              <p className="mentor-role">{mentor.role}</p>
              <p className="mentor-desc">{mentor.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="team-implementation">
        <h2>Bộ phận triển khai</h2>
        <div className="grid-3">
          <div className="card impl-card">
            <h4>Product Manager</h4>
            <p className="small">Quản lý dự án, kết nối với khách hàng</p>
          </div>
          <div className="card impl-card">
            <h4>Frontend Developer</h4>
            <p className="small">React, Vue, HTML/CSS, UX</p>
          </div>
          <div className="card impl-card">
            <h4>Backend Developer</h4>
            <p className="small">Node.js, Python, API, Database</p>
          </div>
        </div>
      </section>

      {/* INTERNS */}
      <section className="team-interns">
        <h2>Thực tập sinh tiêu biểu</h2>

        <div className="grid-3">
          <div className="card intern-card">
            <img
              src="/HOA.jpg"
              alt="Nguyễn Phúc Hòa"
              className="intern-image"
            />
            <h4>Sinh viên - Nguyễn Phúc Hòa</h4>
            <h5 className="intern-role">Full-stack Developer</h5>
            <p className="small">
              Trường Đại học FPT TPHCM. Tham gia phát triển dự án Heritage Art
              4.0
            </p>
          </div>

          <div className="card intern-card">
            <img
              src="/TRUONG.jpg"
              alt="Trần Quang Trường"
              className="intern-image"
            />
            <h4>Sinh viên - Trần Quang Trường</h4>
            <h5 className="intern-role">Full-stack Developer</h5>
            <p className="small">
              Trường Đại học FPT TPHCM. Tham gia phát triển dự án Heritage Art
              4.0
            </p>
          </div>

          <div className="card intern-card">
            <img
              src="/TIN.jpg"
              alt="Lê Hữu Thành Tín"
              className="intern-image"
            />
            <h4>Sinh viên - Lê Hữu Thành Tín</h4>
            <h5 className="intern-role">Full-stack Developer</h5>
            <p className="small">
              Trường Đại học FPT TPHCM. Tham gia phát triển dự án Heritage Art
              4.0
            </p>
          </div>
        </div>

        <div className="grid-3 intern-grid-spacing">
          <div className="card intern-card">
            <img src="/kiet.jpg" alt="Trịnh Vỹ Kiệt" className="intern-image" />
            <h4>Sinh viên - Trịnh Vỹ Kiệt</h4>
            <h5 className="intern-role">Trí tuệ nhân tạo</h5>
            <p className="small">
              Trường Đại học FPT TPHCM. Tham gia phát triển dự án Heritage Art
              4.0
            </p>
          </div>

          <div className="card intern-card">
            <img
              src="/phong.jpg"
              alt="Phạm Nguyễn Minh Phong"
              className="intern-image"
            />
            <h4>Sinh viên - Phạm Nguyễn Minh Phong</h4>
            <h5 className="intern-role">Full-stack Developer - AI</h5>
            <p className="small">
              Trường Đại học FPT TPHCM. Tham gia phát triển dự án Heritage Art
              4.0
            </p>
          </div>

          <div className="card intern-card">
            <img
              src="/trung.jpg"
              alt="Nguyễn Xuân Trung"
              className="intern-image"
            />
            <h4>Sinh viên - Nguyễn Xuân Trung</h4>
            <h5 className="intern-role">Trí tuệ nhân tạo</h5>
            <p className="small">
              Trường Đại học FPT TPHCM. Tham gia phát triển dự án Heritage Art
              4.0
            </p>
          </div>
        </div>

        <div className="grid-3 intern-grid-spacing">
          <div className="card intern-card">
            <img src="/dat.jpg" alt="Vũ Minh Đạt" className="intern-image" />
            <h4>Sinh viên - Vũ Minh Đạt</h4>
            <h5 className="intern-role">Full-stack Developer</h5>
            <p className="small">Tham gia phát triển dự án Heritage Art 4.0</p>
          </div>

          <div className="card intern-card">
            <img
              src="/khanh.jpg"
              alt="Nguyễn Duy Khánh"
              className="intern-image"
            />
            <h4>Sinh viên - Nguyễn Duy Khánh</h4>
            <h5 className="intern-role">Full-stack Developer</h5>
            <p className="small">Tham gia phát triển dự án Heritage Art 4.0</p>
          </div>

          <div className="card intern-card">
            <img src="/minh.jpg" alt="Phan Anh Minh" className="intern-image" />
            <h4>Sinh viên - Phan Anh Minh</h4>
            <h5 className="intern-role">Trí tuệ nhân tạo</h5>
            <p className="small">Tham gia phát triển dự án Heritage Art 4.0</p>
          </div>
        </div>

        <div className="intern-grid-spacing">
          <div className="card intern-card">
            <img
              src="/phat.jpg"
              alt="Nguyễn Thành Phát"
              className="intern-image"
            />
            <h4>Sinh viên - Nguyễn Thành Phát</h4>
            <h5 className="intern-role">Trí tuệ nhân tạo</h5>
            <p className="small">Tham gia phát triển dự án Heritage Art 4.0</p>
          </div>
        </div>
      </section>

      {/* CULTURE */}
      <section className="team-culture">
        <h2>Văn hoá & giá trị đội ngũ</h2>

        <div className="card">
          <ul className="culture-list">
            <li>Sáng tạo & chủ động</li>
            <li>Chia sẻ & hỗ trợ lẫn nhau</li>
            <li>Uy tín trong mọi sản phẩm</li>
            <li>Học tập liên tục</li>
            <li>Lấy dự án thật làm trung tâm</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="team-cta">
        <div className="card team-cta-card">
          <div className="team-cta-content">
            <h3>Muốn hợp tác hoặc gia nhập NovaHA?</h3>
            <p>
              Chúng tôi luôn chào đón mentor, cộng tác viên và sinh viên tài
              năng.
            </p>
          </div>
          <Link to="/contact" className="team-cta-btn">
            Liên hệ
          </Link>
        </div>
      </section>
    </Layout>
  )
}
