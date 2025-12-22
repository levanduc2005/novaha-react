import React from "react"
import { Link } from "react-router-dom"
import { Layout } from "../../components/layout/Layout"
import "./Services.css"

export const Services = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="services-hero">
        <div className="services-hero-left">
          <h1 className="h-title">
            Dịch vụ làm Web & Phần mềm cho Doanh nghiệp
          </h1>
          <p className="h-sub">
            NovaHA cung cấp hệ sinh thái dịch vụ toàn diện cho doanh nghiệp,
            trường học và startup — từ chuyển đổi số, phát triển web & phần mềm,
            website thương mại, AI đến công ty thực tập và ươm tạo dự án.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80"
          className="services-hero-image"
          alt="Dịch vụ làm web và phần mềm chuyên nghiệp"
        />
      </section>

      {/* INTRO SECTION - SEO Optimized */}
      <section className="service-intro">
        <h2>Dịch vụ làm Web chuyên nghiệp cho SME & Startup</h2>
        <div className="service-intro-content">
          <p>
            <strong>Dịch vụ làm web của NovaHA</strong> giúp doanh nghiệp tạo
            hiện diện online mạnh mẽ và tăng doanh số bán hàng. Từ website giới
            thiệu doanh nghiệp, thương mại điện tử, đến ứng dụng web phức tạp —
            chúng tôi có kinh nghiệm xây dựng những trang web hiệu suất cao, tối
            ưu SEO, responsive mobile, và chuyên đổi khách hàng tốt.
          </p>
          <p>
            Với đội ngũ lập trình viên giàu kinh nghiệm, NovaHA sử dụng công
            nghệ web mới nhất (React, Node.js, Next.js) để xây dựng website
            nhanh, an toàn, và dễ quản lý. Chúng tôi cam kết support lâu dài sau
            khi website hoàn thành.
          </p>
        </div>
      </section>

      {/* SERVICE 1: DIGITAL TRANSFORMATION */}
      <section className="service-section">
        <h2>1. Chuyển đổi số doanh nghiệp</h2>
        <div className="service-section-content">
          <img
            src="https://egov.chinhphu.vn/Resources/2022_01_06/37914/Apec-giaoduc-1.jpg"
            className="service-section-image"
            alt="Digital"
          />
          <div className="service-section-text">
            <p className="small">
              Chúng tôi đồng hành cùng SME trong hành trình chuyển đổi số toàn
              diện, tối ưu quy trình vận hành và nâng cao hiệu suất doanh
              nghiệp.
            </p>
            <ul className="small service-list">
              <li>Tư vấn chiến lược chuyển đổi số</li>
              <li>Phân tích quy trình (BPM) & tự động hóa</li>
              <li>Triển khai CRM / ERP quy mô vừa & nhỏ</li>
              <li>Hệ thống lưu trữ – Cloud – bảo mật</li>
              <li>Tối ưu vận hành & số hóa dữ liệu</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICE 2: SOFTWARE DEVELOPMENT */}
      <section className="service-section">
        <h2>2. Phát triển phần mềm & ứng dụng</h2>
        <div className="grid-3 service-cards-container">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80"
              className="service-card-image"
              alt="Web"
            />
            <h3>Web App</h3>
            <p className="small">
              Ứng dụng web theo yêu cầu: quản lý – hệ thống nội bộ – công cụ
              workflow.
            </p>
          </div>
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80"
              className="service-card-image"
              alt="Mobile"
            />
            <h3>Mobile App</h3>
            <p className="small">
              Ứng dụng iOS/Android cho thương mại, học tập, quản lý nội bộ.
            </p>
          </div>
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
              className="service-card-image"
              alt="Dashboard"
            />
            <h3>Dashboard & BI</h3>
            <p className="small">
              Bảng điều khiển phân tích dữ liệu thời gian thực cho doanh nghiệp.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICE 3: WEBSITE DESIGN */}
      <section className="service-section">
        <h2>3. Thiết kế Website</h2>
        <div className="service-section-content">
          <div className="service-section-text">
            <p className="small">
              NovaHA thiết kế website nhanh – đẹp – chuẩn SEO – uy tín, phù hợp
              cho doanh nghiệp vừa & nhỏ.
            </p>
            <ul className="small service-list">
              <li>Website doanh nghiệp</li>
              <li>Website startup & landing page</li>
              <li>Website trường học</li>
              <li>Tối ưu tốc độ – SEO – bảo mật</li>
              <li>Web thương mại điện tử (mini–ecom)</li>
            </ul>
          </div>
          <img
            src="https://tenten.vn/tin-tuc/wp-content/uploads/2023/03/tu-hoc-thiet-ke-website.png"
            className="service-section-image"
            alt="Website Design"
          />
        </div>
      </section>

      {/* SERVICE 4: AI & AUTOMATION */}
      <section className="service-section">
        <h2>4. AI & Tự động hóa</h2>
        <div className="grid-3 service-cards-container">
          <div className="card">
            <h3>Chatbot AI</h3>
            <p className="small">
              Chatbot tích hợp website, hỗ trợ khách hàng tự động.
            </p>
          </div>
          <div className="card">
            <h3>AI Analytics</h3>
            <p className="small">Phân tích dữ liệu & đề xuất tự động hoá.</p>
          </div>
          <div className="card">
            <h3>RPA Automation</h3>
            <p className="small">
              Tự động hóa quy trình lặp lại cho doanh nghiệp.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICE 5: STARTUP INCUBATION */}
      <section className="service-section">
        <h2>5. Ươm tạo Startup – NovaHA Startup Lab</h2>
        <div className="service-section-content">
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80"
            className="service-section-image"
            alt="Startup"
          />
          <div className="service-section-text">
            <p className="small">
              Chúng tôi hỗ trợ các nhóm sinh viên hoặc startup trẻ từ giai đoạn
              hình thành ý tưởng đến MVP.
            </p>
            <ul className="small service-list">
              <li>Tư vấn ý tưởng & xác định thị trường</li>
              <li>Hỗ trợ xây dựng MVP nhanh</li>
              <li>Kết nối nhà đầu tư & hỗ trợ pitching</li>
              <li>Mentoring từ các chuyên gia công nghệ</li>
              <li>Cơ hội hợp tác với doanh nghiệp</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICE 6: TRAINING */}
      <section className="service-section">
        <h2>6. Công ty thực tập – Đào tạo thực chiến</h2>
        <div className="grid-3 service-cards-container">
          <div className="card">
            <h3>Dành cho sinh viên</h3>
            <p className="small">
              Tham gia dự án thật, mentor kèm cặp, portfolio hoàn chỉnh.
            </p>
          </div>
          <div className="card">
            <h3>Dành cho trường học</h3>
            <p className="small">
              Giải pháp thực tập – chuyên môn chất lượng – không cần tự tổ chức.
            </p>
          </div>
          <div className="card">
            <h3>Dành cho doanh nghiệp</h3>
            <p className="small">
              Cung cấp nhân lực thực tập – hỗ trợ dự án – tối ưu chi phí.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION - SEO */}
      <section className="why-us-section">
        <h2>Tại sao chọn NovaHA để làm web?</h2>
        <div className="why-us-grid">
          <div className="why-us-item">
            <div className="why-us-icon">⚡</div>
            <h3>Công nghệ hiện đại</h3>
            <p>
              Sử dụng React, Node.js, Next.js - công nghệ web mới nhất năm 2025
              để xây dựng website nhanh và hiệu quả.
            </p>
          </div>
          <div className="why-us-item">
            <div className="why-us-icon">🎯</div>
            <h3>Tối ưu SEO & Hiệu suất</h3>
            <p>
              Website tối ưu cho Google, xếp hạng cao, tải nhanh, responsive
              mobile - giúp bạn tìm thêm khách hàng.
            </p>
          </div>
          <div className="why-us-item">
            <div className="why-us-icon">💰</div>
            <h3>Giá cạnh tranh</h3>
            <p>
              Giải pháp làm web tối ưu chi phí cho SME và startup, không lên chi
              phí ẩn, rõ ràng từ đầu.
            </p>
          </div>
          <div className="why-us-item">
            <div className="why-us-icon">📈</div>
            <h3>Tăng doanh số bán hàng</h3>
            <p>
              Tập trung vào conversion rate, UX/UI tốt - website không chỉ đẹp
              mà còn bán được hàng.
            </p>
          </div>
          <div className="why-us-item">
            <div className="why-us-icon">🛡️</div>
            <h3>Bảo mật & Ổn định</h3>
            <p>
              Bảo mật dữ liệu, SSL/HTTPS, backup tự động, uptime 99.9% - yên tâm
              hoạt động 24/7.
            </p>
          </div>
          <div className="why-us-item">
            <div className="why-us-icon">🤝</div>
            <h3>Support lâu dài</h3>
            <p>
              Sau khi launch, chúng tôi vẫn hỗ trợ bạn: cập nhật, sửa bug, thêm
              feature mới.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION - SEO */}
      <section className="process-section">
        <h2>Quy trình làm Web tại NovaHA</h2>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <h3>Tư vấn & Lên kế hoạch</h3>
            <p>
              Chúng tôi lắng nghe nhu cầu của bạn, phân tích thị trường, và lên
              kế hoạch chi tiết cho dự án.
            </p>
          </div>
          <div className="process-step">
            <div className="step-number">2</div>
            <h3>Thiết kế UX/UI</h3>
            <p>
              Thiết kế giao diện đẹp, dễ sử dụng, tối ưu cho khách hàng của bạn
              - wireframe → mockup → prototype.
            </p>
          </div>
          <div className="process-step">
            <div className="step-number">3</div>
            <h3>Phát triển (Development)</h3>
            <p>
              Code clean, tối ưu hiệu suất, tối ưu SEO - sử dụng công nghệ web
              tốt nhất hiện nay.
            </p>
          </div>
          <div className="process-step">
            <div className="step-number">4</div>
            <h3>Test & QA</h3>
            <p>
              Kiểm tra toàn diện: chức năng, hiệu suất, bảo mật, responsive,
              cross-browser.
            </p>
          </div>
          <div className="process-step">
            <div className="step-number">5</div>
            <h3>Deploy & Training</h3>
            <p>
              Đưa website lên production, hướng dẫn bạn sử dụng, optimize SEO
              trên Google.
            </p>
          </div>
          <div className="process-step">
            <div className="step-number">6</div>
            <h3>Support & Maintain</h3>
            <p>
              Hỗ trợ sau launch: bảo trì, cập nhật, sửa bug, thêm feature - vận
              hành lâu dài.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ SECTION - SEO */}
      <section className="faq-section">
        <h2>Câu hỏi thường gặp về dịch vụ làm web</h2>
        <div className="faq-items">
          <details className="faq-item">
            <summary>
              <strong>Giá làm web bao nhiêu tiền?</strong>
            </summary>
            <p>
              Giá làm web phụ thuộc vào độ phức tạp:
              <ul>
                <li>
                  <strong>Website doanh nghiệp đơn giản:</strong> 5-15 triệu
                  đồng
                </li>
                <li>
                  <strong>Website thương mại:</strong> 15-50 triệu đồng
                </li>
                <li>
                  <strong>Ứng dụng web phức tạp:</strong> 50+ triệu đồng
                </li>
              </ul>
              Liên hệ chúng tôi để được tư vấn báo giá chi tiết miễn phí.
            </p>
          </details>
          <details className="faq-item">
            <summary>
              <strong>Bao lâu thì hoàn thành website?</strong>
            </summary>
            <p>
              Thời gian phụ thuộc vào quy mô:
              <ul>
                <li>
                  <strong>Website đơn giản:</strong> 2-4 tuần
                </li>
                <li>
                  <strong>Website thương mại:</strong> 4-8 tuần
                </li>
                <li>
                  <strong>Ứng dụng phức tạp:</strong> 2-3 tháng
                </li>
              </ul>
              Chúng tôi cam kết deadline và có thể thương lượng timeline.
            </p>
          </details>
          <details className="faq-item">
            <summary>
              <strong>Website của bạn có tối ưu SEO không?</strong>
            </summary>
            <p>
              Có! Mỗi website chúng tôi làm đều tối ưu SEO on-page:
              <ul>
                <li>Cấu trúc heading, meta tags chuẩn</li>
                <li>Schema markup cho Google hiểu</li>
                <li>Mobile responsive (Core Web Vitals)</li>
                <li>Tốc độ load nhanh</li>
                <li>Sitemap.xml, robots.txt</li>
              </ul>
            </p>
          </details>
          <details className="faq-item">
            <summary>
              <strong>Có hỗ trợ sau khi website hoàn thành không?</strong>
            </summary>
            <p>
              Có! Chúng tôi cung cấp:
              <ul>
                <li>Support 3-6 tháng sau launch (bảo trì, sửa bug)</li>
                <li>Gói maintenance long-term (tuỳ chọn)</li>
                <li>Hướng dẫn quản lý website (CMS)</li>
                <li>Cập nhật bảo mật, plugin, theme</li>
              </ul>
            </p>
          </details>
          <details className="faq-item">
            <summary>
              <strong>Làm web có khác Shopify, Wix, WordPress không?</strong>
            </summary>
            <p>
              <strong>Làm web custom (tối ưu nhất):</strong> Code riêng, nhanh,
              SEO tốt, không bị lệ thuộc
              <ul>
                <li>✅ Nhanh nhất (~2-3s)</li>
                <li>✅ SEO tốt nhất</li>
                <li>✅ Tùy biến 100%</li>
                <li>✅ Chi phí lâu dài thấp</li>
              </ul>
              <strong>Shopify/Wix/WordPress:</strong> Builder, dễ dùng, nhưng
              slow, SEO không tốt bằng
            </p>
          </details>
          <details className="faq-item">
            <summary>
              <strong>Bạn dùng công nghệ gì để làm web?</strong>
            </summary>
            <p>
              Chúng tôi dùng công nghệ web hiện đại nhất:
              <ul>
                <li>
                  <strong>Frontend:</strong> React, Next.js - tạo giao diện đẹp,
                  nhanh
                </li>
                <li>
                  <strong>Backend:</strong> Node.js, Express - xử lý dữ liệu
                  nhanh
                </li>
                <li>
                  <strong>Database:</strong> MongoDB, PostgreSQL - lưu trữ an
                  toàn
                </li>
                <li>
                  <strong>Hosting:</strong> Cloud (AWS, Vercel) - ổn định 99.9%
                </li>
              </ul>
            </p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <div className="card">
          <h2>Sẵn sàng bắt đầu?</h2>
          <p>Hãy liên hệ với chúng tôi để được tư vấn miễn phí ngay hôm nay.</p>
          <Link to="/contact" className="btn-primary">
            Liên hệ ngay
          </Link>
        </div>
      </section>
    </Layout>
  )
}
