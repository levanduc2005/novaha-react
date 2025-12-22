import React from "react"
import { Link } from "react-router-dom"
import { Layout } from "../components/Layout"

export const About = () => {
  return (
    <Layout>
      {/* HERO ABOUT */}
      <section
        style={{
          marginTop: "40px",
          display: "flex",
          gap: "48px",
          alignItems: "center",
        }}
      >
        <div style={{ flex: 1 }}>
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
          style={{
            width: "45%",
            borderRadius: "18px",
            boxShadow: "var(--shadow)",
          }}
          alt="Team brainstorming"
        />
      </section>

      {/* VISION - MISSION - VALUES */}
      <section style={{ marginTop: "60px" }}>
        <h2
          style={{ marginBottom: "24px", fontSize: "32px", fontWeight: "800" }}
        >
          Tầm nhìn – Sứ mệnh – Giá trị cốt lõi
        </h2>
        <div className="grid-3" style={{ gap: "32px" }}>
          <div
            className="card"
            style={{ padding: "32px", borderRadius: "18px" }}
          >
            <div style={{ fontSize: "26px", marginBottom: "14px" }}>🎯</div>
            <h3
              style={{
                fontSize: "22px",
                fontWeight: "700",
                marginBottom: "10px",
              }}
            >
              Tầm nhìn
            </h3>
            <p className="small">
              Trở thành trung tâm kết nối{" "}
              <strong>đào tạo – doanh nghiệp – startup</strong> dẫn đầu, kiến
              tạo hệ sinh thái đổi mới sáng tạo và cung cấp đội ngũ nhân sự thực
              chiến chất lượng cao.
            </p>
          </div>
          <div
            className="card"
            style={{ padding: "32px", borderRadius: "18px" }}
          >
            <div style={{ fontSize: "26px", marginBottom: "14px" }}>🚀</div>
            <h3
              style={{
                fontSize: "22px",
                fontWeight: "700",
                marginBottom: "10px",
              }}
            >
              Sứ mệnh
            </h3>
            <p className="small">
              Biến ý tưởng thành sản phẩm; cung cấp môi trường thực hành chuẩn
              doanh nghiệp; đồng hành cùng SME và startup trong hành trình ứng
              dụng công nghệ hiệu quả và bền vững.
            </p>
          </div>
          <div
            className="card"
            style={{ padding: "32px", borderRadius: "18px" }}
          >
            <div style={{ fontSize: "26px", marginBottom: "14px" }}>💎</div>
            <h3
              style={{
                fontSize: "22px",
                fontWeight: "700",
                marginBottom: "10px",
              }}
            >
              Giá trị cốt lõi
            </h3>
            <p className="small">
              Thực chiến – Hiệu quả – Sáng tạo – Trách nhiệm – Học hỏi liên tục.
            </p>
          </div>
        </div>
      </section>

      {/* BUSINESS MODEL */}
      <section style={{ marginTop: "48px" }}>
        <h2 style={{ marginBottom: "12px" }}>Mô hình hoạt động NovaHA</h2>
        <div style={{ display: "flex", gap: "28px", alignItems: "center" }}>
          <img
            src="/lab.png"
            style={{
              width: "42%",
              borderRadius: "12px",
              boxShadow: "var(--shadow)",
            }}
            alt="Lab"
          />
          <div style={{ flex: 1 }}>
            <ul className="small">
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
            <p className="small" style={{ marginTop: "10px" }}>
              Mô hình giúp giảm chi phí nhân lực cho SME, đồng thời tạo cơ hội
              cho sinh viên được thực hành trên dự án thật.
            </p>
          </div>
        </div>
      </section>

      {/* WHY NOVAHA */}
      <section style={{ marginTop: "48px" }}>
        <h2 style={{ marginBottom: "12px" }}>Vì sao NovaHA ra đời?</h2>
        <div className="card">
          <p className="small">
            Thị trường đang thiếu hụt nguồn nhân lực CNTT thực chiến, trong khi
            startup và doanh nghiệp nhỏ khó tiếp cận các dịch vụ công nghệ với
            chi phí hợp lý.
          </p>
          <p className="small" style={{ marginTop: "8px" }}>
            <strong>NovaHA được thành lập để giải quyết hai vấn đề:</strong>
          </p>
          <ul className="small" style={{ marginTop: "8px" }}>
            <li>
              Sinh viên có môi trường thực hành dự án thật (không chỉ lý
              thuyết).
            </li>
            <li>
              Doanh nghiệp có giải pháp công nghệ chất lượng với chi phí tối ưu.
            </li>
          </ul>
        </div>
      </section>

      {/* ROADMAP */}
      <section style={{ marginTop: "48px" }}>
        <h2 style={{ marginBottom: "12px" }}>
          Lộ trình phát triển 2025 – 2030
        </h2>
        <div className="grid-3">
          <div className="card">
            <h3>2025</h3>
            <p className="small">
              Vận hành mô hình thực tập • Triển khai 10 dự án đầu tiên
            </p>
          </div>
          <div className="card">
            <h3>2026 – 2027</h3>
            <p className="small">
              Ra mắt NovaHA Lab • Hợp tác 10 trường đại học
            </p>
          </div>
          <div className="card">
            <h3>2028 – 2030</h3>
            <p className="small">
              Ươm tạo 20+ startup • Mở rộng hệ thống dịch vụ & sản phẩm
            </p>
          </div>
        </div>
      </section>

      {/* IMAGE GALLERY */}
      <section style={{ marginTop: "48px" }}>
        <h2 style={{ marginBottom: "12px" }}>Hình ảnh hoạt động</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "16px",
          }}
        >
          <div
            style={{
              backgroundImage:
                "url(https://cdn-images.vtv.vn/zoom/700_438/2020/10/29/jica-website-2-16039542852921060030474.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "12px",
              height: "280px",
              boxShadow: "var(--shadow)",
            }}
          ></div>
          <div
            style={{
              backgroundImage: "url(/baocao.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "12px",
              height: "280px",
              boxShadow: "var(--shadow)",
            }}
          ></div>
          <div
            style={{
              backgroundImage: "url(/chungnhan.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "12px",
              height: "280px",
              boxShadow: "var(--shadow)",
            }}
          ></div>
        </div>
      </section>

      {/* PARTNERS */}
      <section style={{ marginTop: "48px", marginBottom: "40px" }}>
        <h2 style={{ marginBottom: "8px" }}>Hợp tác cùng đối tác</h2>
        <p
          className="small"
          style={{
            maxWidth: "720px",
            marginBottom: "32px",
            color: "var(--muted)",
          }}
        >
          Chúng tôi tự hào đồng hành cùng các doanh nghiệp, tổ chức thực chiến
          doanh nghiệp và trung tâm đổi mới sáng tạo nhằm phát triển hệ sinh
          thái công nghệ, đào tạo nhân lực và chuyển đổi số bền vững.
        </p>
        <div style={{ marginBottom: "32px" }}>
          <h3 style={{ fontSize: "18px", marginBottom: "16px" }}>
            Các đối tác công nghệ
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "24px",
            }}
          >
            <div className="card">
              <div
                style={{
                  backgroundImage: "url(/ece.png)",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: "100px",
                  marginBottom: "16px",
                }}
              ></div>
              <h4 style={{ marginBottom: "8px" }}>CTY TNHH CÔNG NGHỆ ECE</h4>
              <p className="small">
                Ecomeasy dẫn đầu về mặt cung cấp giải pháp bán hàng trên kênh
                thương mại điện tử khi luôn tìm những cách mới mẻ để giúp các
                doanh nghiệp bán hàng thương mại điện tử dễ dàng hơn.
              </p>
            </div>
            <div className="card">
              <div
                style={{
                  backgroundImage: "url(/ctw.png)",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: "100px",
                  marginBottom: "16px",
                }}
              ></div>
              <h4 style={{ marginBottom: "8px" }}>
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

        <div>
          <h3 style={{ fontSize: "18px", marginBottom: "16px" }}>
            Các đối tác chiến lược
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "24px",
            }}
          >
            <div className="card">
              <div
                style={{
                  backgroundImage: "url(/hubbiz.png)",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: "100px",
                  marginBottom: "16px",
                }}
              ></div>
              <h4 style={{ marginBottom: "8px" }}>Hubbiz</h4>
              <p className="small">
                Nền tảng kết nối doanh nghiệp & đổi mới sáng tạo
              </p>
            </div>
            <div className="card">
              <div
                style={{
                  backgroundImage: "url(/shtp.jpg)",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: "100px",
                  marginBottom: "16px",
                }}
              ></div>
              <h4 style={{ marginBottom: "8px" }}>SHTP</h4>
              <p className="small">Khu Công nghệ cao TP.HCM</p>
            </div>
            <div className="card">
              <div
                style={{
                  backgroundImage: "url(/sihub.png)",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: "100px",
                  marginBottom: "16px",
                }}
              ></div>
              <h4 style={{ marginBottom: "8px" }}>SIHUB</h4>
              <p className="small">Trung tâm khởi nghiệp đổi mới sáng tạo</p>
            </div>
            <div className="card">
              <div
                style={{
                  backgroundImage: "url(/fpt.png)",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: "100px",
                  marginBottom: "16px",
                }}
              ></div>
              <h4 style={{ marginBottom: "8px" }}>FPT</h4>
              <p className="small">Đào tạo & chuyển giao công nghệ</p>
            </div>
          </div>
        </div>

        <Link
          to="/contact"
          style={{
            marginTop: "24px",
            display: "inline-block",
            padding: "12px 28px",
            backgroundColor: "var(--accent-2)",
            color: "white",
            textDecoration: "none",
            borderRadius: "8px",
            fontWeight: "600",
            fontSize: "14px",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#004d80")}
          onMouseLeave={(e) =>
            (e.target.style.backgroundColor = "var(--accent-2)")
          }
        >
          Trở thành đối tác của chúng tôi
        </Link>
      </section>

      {/* CTA */}
      <section
        style={{
          marginTop: "48px",
          marginBottom: "40px",
          padding: "32px",
          background: "var(--card)",
          borderRadius: "var(--radius)",
        }}
      >
        <h2>Cùng xây dựng tương lai công nghệ</h2>
        <p>Bạn có ý tưởng hay muốn tham gia đội ngũ NovaHA?</p>
        <Link
          to="/contact"
          style={{
            display: "inline-block",
            padding: "12px 28px",
            backgroundColor: "var(--accent-2)",
            color: "white",
            textDecoration: "none",
            borderRadius: "8px",
            fontWeight: "600",
            fontSize: "14px",
            marginTop: "12px",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#004d80")}
          onMouseLeave={(e) =>
            (e.target.style.backgroundColor = "var(--accent-2)")
          }
        >
          Liên hệ ngay
        </Link>
      </section>
    </Layout>
  )
}
