import React from "react"
import { Link } from "react-router-dom"
import { Layout } from "../../components/layout/Layout"
import "./TalentHub.css"

export const TalentHub = () => {
  const accessCards = [
    {
      icon: "🎓",
      title: "Khu vực Sinh viên",
      desc: "Gửi hồ sơ, cập nhật kỹ năng và nộp CV để tham gia dự án thực chiến.",
      link: "/student",
      delay: "0.15s",
    },
    {
      icon: "🛠",
      title: "Khu vực Admin",
      desc: "Xem danh sách sinh viên, CV, dashboard, thống kê chuyên môn.",
      link: "/admin-login",
      delay: "0.3s",
    },
  ]

  return (
    <Layout>
      <div className="talenthub-wrap">
        <h1 className="talenthub-title">Chọn khu vực truy cập</h1>
        <p className="talenthub-sub">
          Cổng TalentHub giúp sinh viên gửi CV – doanh nghiệp tìm nhân lực –
          Admin quản lý hồ sơ tập trung.
        </p>

        <div className="access-grid">
          {accessCards.map((card, idx) => (
            <Link
              key={idx}
              to={card.link}
              className="access-card"
              style={{ animationDelay: card.delay }}
            >
              <div className="access-icon">{card.icon}</div>
              <h3 className="access-title">{card.title}</h3>
              <p className="access-desc">{card.desc}</p>
              <div className="btn-primary">
                {card.title.includes("Sinh viên") ? "Truy cập" : "Đăng nhập"}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}
