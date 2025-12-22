import React from "react"
import { Link } from "react-router-dom"
import { Layout } from "../components/Layout"

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
      <section
        style={{
          marginTop: "28px",
          display: "flex",
          alignItems: "center",
          gap: "40px",
        }}
      >
        <div style={{ flex: 1 }}>
          <h1 className="h-title">Đội ngũ NovaHA</h1>
          <p className="h-sub">
            Đội ngũ gồm giảng viên – kỹ sư – mentor – sinh viên tài năng cùng
            chung mục tiêu: tạo ra sản phẩm chất lượng và phát triển nguồn lực
            công nghệ trẻ.
          </p>
        </div>
        <img
          src="https://cdn.vietnambiz.vn/171464876016439296/2020/6/8/governance-15915826737742042683330.jpg"
          style={{
            width: "45%",
            borderRadius: "14px",
            boxShadow: "var(--shadow)",
          }}
          alt="Team"
        />
      </section>

      {/* LEADERSHIP */}
      <section style={{ marginTop: "48px" }}>
        <h2 style={{ marginBottom: "24px" }}>Lãnh đạo</h2>

        {leaders.map((leader, idx) => (
          <div
            key={idx}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "28px",
              marginBottom: "40px",
            }}
          >
            <img
              src={leader.image}
              alt={leader.name}
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "14px",
                boxShadow: "var(--shadow)",
                objectFit: "cover",
                flexShrink: 0,
              }}
            />
            <div style={{ flex: 1 }}>
              <h3 style={{ margin: "0 0 4px 0" }}>{leader.name}</h3>
              <p
                style={{
                  color: "var(--accent-2)",
                  fontWeight: "600",
                  marginBottom: "4px",
                  fontSize: "14px",
                }}
              >
                {leader.position}
              </p>
              <p
                style={{
                  color: "var(--muted)",
                  fontSize: "14px",
                  marginBottom: "10px",
                }}
              >
                {leader.subtitle}
              </p>
              <p className="small">{leader.desc}</p>
              <ul className="small" style={{ marginTop: "10px" }}>
                {leader.experience.map((exp, i) => (
                  <li key={i}>{exp}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* TECHNICAL MENTORS */}
      <section style={{ marginTop: "48px" }}>
        <h2 style={{ marginBottom: "24px" }}>Mentor kỹ thuật & chuyên môn</h2>
        <div className="grid-3">
          {mentors.map((mentor, idx) => (
            <div key={idx} className="card" style={{ textAlign: "center" }}>
              <img
                src={mentor.image}
                alt={mentor.name}
                style={{
                  width: "88px",
                  height: "88px",
                  borderRadius: "50%",
                  margin: "0 auto 14px",
                  objectFit: "cover",
                }}
              />
              <h4 style={{ margin: "0 0 8px 0", fontSize: "16px" }}>
                {mentor.name}
              </h4>
              <p
                style={{
                  color: "var(--accent-2)",
                  fontWeight: "600",
                  marginBottom: "10px",
                  fontSize: "14px",
                }}
              >
                {mentor.role}
              </p>
              <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
                {mentor.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CORE VALUES */}
      <section style={{ marginTop: "48px" }}>
        <h2 style={{ marginBottom: "24px" }}>Bộ phận triển khai</h2>
        <div className="grid-3">
          <div className="card" style={{ textAlign: "center" }}>
            <h4>Product Manager</h4>
            <p className="small">Quản lý dự án, kết nối với khách hàng</p>
          </div>
          <div className="card" style={{ textAlign: "center" }}>
            <h4>Frontend Developer</h4>
            <p className="small">React, Vue, HTML/CSS, UX</p>
          </div>
          <div className="card" style={{ textAlign: "center" }}>
            <h4>Backend Developer</h4>
            <p className="small">Node.js, Python, API, Database</p>
          </div>
        </div>
      </section>

      {/* INTERNS */}
      <section style={{ marginTop: "48px" }}>
        <h2 style={{ marginBottom: "24px" }}>Thực tập sinh tiêu biểu</h2>

        <div className="grid-3">
          <div className="card" style={{ textAlign: "center" }}>
            <img
              src="/HOA.jpg"
              alt="Nguyễn Phúc Hòa"
              style={{
                width: "88px",
                height: "88px",
                borderRadius: "50%",
                margin: "0 auto 14px",
                objectFit: "cover",
              }}
            />
            <h4>Sinh viên - Nguyễn Phúc Hòa</h4>
            <h5
              style={{
                margin: "4px 0",
                fontSize: "14px",
                color: "var(--accent-2)",
                fontWeight: "600",
              }}
            >
              Full-stack Developer
            </h5>
            <p className="small">
              Trường Đại học FPT TPHCM. Tham gia phát triển dự án Heritage Art
              4.0
            </p>
          </div>

          <div className="card" style={{ textAlign: "center" }}>
            <img
              src="/TRUONG.jpg"
              alt="Trần Quang Trường"
              style={{
                width: "88px",
                height: "88px",
                borderRadius: "50%",
                margin: "0 auto 14px",
                objectFit: "cover",
              }}
            />
            <h4>Sinh viên - Trần Quang Trường</h4>
            <h5
              style={{
                margin: "4px 0",
                fontSize: "14px",
                color: "var(--accent-2)",
                fontWeight: "600",
              }}
            >
              Full-stack Developer
            </h5>
            <p className="small">
              Trường Đại học FPT TPHCM. Tham gia phát triển dự án Heritage Art
              4.0
            </p>
          </div>

          <div className="card" style={{ textAlign: "center" }}>
            <img
              src="/TIN.jpg"
              alt="Lê Hữu Thành Tín"
              style={{
                width: "88px",
                height: "88px",
                borderRadius: "50%",
                margin: "0 auto 14px",
                objectFit: "cover",
              }}
            />
            <h4>Sinh viên - Lê Hữu Thành Tín</h4>
            <h5
              style={{
                margin: "4px 0",
                fontSize: "14px",
                color: "var(--accent-2)",
                fontWeight: "600",
              }}
            >
              Full-stack Developer
            </h5>
            <p className="small">
              Trường Đại học FPT TPHCM. Tham gia phát triển dự án Heritage Art
              4.0
            </p>
          </div>
        </div>

        <div className="grid-3" style={{ marginTop: "24px" }}>
          <div className="card" style={{ textAlign: "center" }}>
            <img
              src="/kiet.jpg"
              alt="Trịnh Vỹ Kiệt"
              style={{
                width: "88px",
                height: "88px",
                borderRadius: "50%",
                margin: "0 auto 14px",
                objectFit: "cover",
              }}
            />
            <h4>Sinh viên - Trịnh Vỹ Kiệt</h4>
            <h5
              style={{
                margin: "4px 0",
                fontSize: "14px",
                color: "var(--accent-2)",
                fontWeight: "600",
              }}
            >
              Trí tuệ nhân tạo
            </h5>
            <p className="small">
              Trường Đại học FPT TPHCM. Tham gia phát triển dự án Heritage Art
              4.0
            </p>
          </div>

          <div className="card" style={{ textAlign: "center" }}>
            <img
              src="/phong.jpg"
              alt="Phạm Nguyễn Minh Phong"
              style={{
                width: "88px",
                height: "88px",
                borderRadius: "50%",
                margin: "0 auto 14px",
                objectFit: "cover",
              }}
            />
            <h4>Sinh viên - Phạm Nguyễn Minh Phong</h4>
            <h5
              style={{
                margin: "4px 0",
                fontSize: "14px",
                color: "var(--accent-2)",
                fontWeight: "600",
              }}
            >
              Full-stack Developer - AI
            </h5>
            <p className="small">
              Trường Đại học FPT TPHCM. Tham gia phát triển dự án Heritage Art
              4.0
            </p>
          </div>

          <div className="card" style={{ textAlign: "center" }}>
            <img
              src="/trung.jpg"
              alt="Nguyễn Xuân Trung"
              style={{
                width: "88px",
                height: "88px",
                borderRadius: "50%",
                margin: "0 auto 14px",
                objectFit: "cover",
              }}
            />
            <h4>Sinh viên - Nguyễn Xuân Trung</h4>
            <h5
              style={{
                margin: "4px 0",
                fontSize: "14px",
                color: "var(--accent-2)",
                fontWeight: "600",
              }}
            >
              Trí tuệ nhân tạo
            </h5>
            <p className="small">
              Trường Đại học FPT TPHCM. Tham gia phát triển dự án Heritage Art
              4.0
            </p>
          </div>
        </div>

        <div className="grid-3" style={{ marginTop: "24px" }}>
          <div className="card" style={{ textAlign: "center" }}>
            <img
              src="/dat.jpg"
              alt="Vũ Minh Đạt"
              style={{
                width: "88px",
                height: "88px",
                borderRadius: "50%",
                margin: "0 auto 14px",
                objectFit: "cover",
              }}
            />
            <h4>Sinh viên - Vũ Minh Đạt</h4>
            <h5
              style={{
                margin: "4px 0",
                fontSize: "14px",
                color: "var(--accent-2)",
                fontWeight: "600",
              }}
            >
              Full-stack Developer
            </h5>
            <p className="small">Tham gia phát triển dự án Heritage Art 4.0</p>
          </div>

          <div className="card" style={{ textAlign: "center" }}>
            <img
              src="/khanh.jpg"
              alt="Nguyễn Duy Khánh"
              style={{
                width: "88px",
                height: "88px",
                borderRadius: "50%",
                margin: "0 auto 14px",
                objectFit: "cover",
              }}
            />
            <h4>Sinh viên - Nguyễn Duy Khánh</h4>
            <h5
              style={{
                margin: "4px 0",
                fontSize: "14px",
                color: "var(--accent-2)",
                fontWeight: "600",
              }}
            >
              Full-stack Developer
            </h5>
            <p className="small">Tham gia phát triển dự án Heritage Art 4.0</p>
          </div>

          <div className="card" style={{ textAlign: "center" }}>
            <img
              src="/minh.jpg"
              alt="Phan Anh Minh"
              style={{
                width: "88px",
                height: "88px",
                borderRadius: "50%",
                margin: "0 auto 14px",
                objectFit: "cover",
              }}
            />
            <h4>Sinh viên - Phan Anh Minh</h4>
            <h5
              style={{
                margin: "4px 0",
                fontSize: "14px",
                color: "var(--accent-2)",
                fontWeight: "600",
              }}
            >
              Trí tuệ nhân tạo
            </h5>
            <p className="small">Tham gia phát triển dự án Heritage Art 4.0</p>
          </div>
        </div>

        <div style={{ marginTop: "24px" }}>
          <div className="card" style={{ textAlign: "center" }}>
            <img
              src="/phat.jpg"
              alt="Nguyễn Thành Phát"
              style={{
                width: "88px",
                height: "88px",
                borderRadius: "50%",
                margin: "0 auto 14px",
                objectFit: "cover",
              }}
            />
            <h4>Sinh viên - Nguyễn Thành Phát</h4>
            <h5
              style={{
                margin: "4px 0",
                fontSize: "14px",
                color: "var(--accent-2)",
                fontWeight: "600",
              }}
            >
              Trí tuệ nhân tạo
            </h5>
            <p className="small">Tham gia phát triển dự án Heritage Art 4.0</p>
          </div>
        </div>
      </section>

      {/* CULTURE */}
      <section style={{ marginTop: "48px", marginBottom: "40px" }}>
        <h2 style={{ marginBottom: "24px" }}>Văn hoá & giá trị đội ngũ</h2>

        <div className="card">
          <ul style={{ fontSize: "14px", lineHeight: "1.8" }}>
            <li>Sáng tạo & chủ động</li>
            <li>Chia sẻ & hỗ trợ lẫn nhau</li>
            <li>Uy tín trong mọi sản phẩm</li>
            <li>Học tập liên tục</li>
            <li>Lấy dự án thật làm trung tâm</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section style={{ marginTop: "48px", marginBottom: "40px" }}>
        <div
          className="card"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "40px",
          }}
        >
          <div>
            <h3 style={{ margin: "0 0 12px 0" }}>
              Muốn hợp tác hoặc gia nhập NovaHA?
            </h3>
            <p style={{ fontSize: "14px", lineHeight: "1.6", margin: 0 }}>
              Chúng tôi luôn chào đón mentor, cộng tác viên và sinh viên tài
              năng.
            </p>
          </div>
          <Link
            to="/contact"
            style={{
              padding: "12px 28px",
              backgroundColor: "var(--accent-2)",
              color: "white",
              textDecoration: "none",
              borderRadius: "8px",
              fontWeight: "600",
              fontSize: "14px",
              whiteSpace: "nowrap",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#004d80")}
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = "var(--accent-2)")
            }
          >
            Liên hệ
          </Link>
        </div>
      </section>
    </Layout>
  )
}
