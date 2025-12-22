import React, { useEffect } from "react"
import { Layout } from "../../components/layout/Layout"

export const Recruitment = () => {
  useEffect(() => {
    // Apply dark theme background
    document.body.style.backgroundImage =
      "radial-gradient(circle at top, #020617, #000)"
    document.body.style.backgroundColor = "#020617"

    return () => {
      // Restore original background
      document.body.style.backgroundImage = "url('/backgroundroot.jpg')"
      document.body.style.backgroundColor = "#ffffff"
    }
  }, [])

  const jobs = [
    {
      id: 1,
      title: "Frontend Developer (React)",
      location: "TP. Hồ Chí Minh",
      type: "Toàn thời gian",
      experience: "1–3 năm kinh nghiệm",
      description:
        "Phát triển giao diện web cho các nền tảng AI & chuyển đổi số doanh nghiệp. Làm việc trực tiếp với team Backend & AI.",
      tag: "CNTT / Phần mềm",
    },
    {
      id: 2,
      title: "AI Engineer / Machine Learning",
      location: "Remote / Hybrid",
      type: "Toàn thời gian",
      experience: "Trên 2 năm",
      description:
        "Xây dựng và triển khai mô hình AI xử lý hình ảnh, nghệ thuật và dữ liệu người dùng. Ưu tiên kinh nghiệm với Diffusion / Computer Vision.",
      tag: "AI / Machine Learning",
    },
    {
      id: 3,
      title: "Thực tập sinh Công nghệ thông tin",
      location: "TP. Hồ Chí Minh",
      type: "Bán thời gian",
      experience: "Sinh viên năm 3–4",
      description:
        "Tham gia dự án thực tế, được mentor trực tiếp. Phù hợp sinh viên CNTT, An toàn thông tin, AI.",
      tag: "Internship",
    },
  ]

  return (
    <Layout>
      {/* JOB LIST */}
      <main className="container">
        <section className="job-list">
          {jobs.map((job) => (
            <article key={job.id} className="job-card">
              <div className="job-title">{job.title}</div>

              <div className="job-meta">
                <span>📍 {job.location}</span>
                <span>⏱ {job.type}</span>
                <span>💼 {job.experience}</span>
              </div>

              <div className="job-desc">{job.description}</div>

              <div className="job-footer">
                <span className="tag">{job.tag}</span>
                <a href="mailto:hr@novaha.vn" className="btn">
                  Ứng tuyển
                </a>
              </div>
            </article>
          ))}
        </section>
      </main>
    </Layout>
  )
}
