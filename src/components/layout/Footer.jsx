import { Link } from "react-router-dom"
import "./Footer.css"

export const Footer = () => {
  return (
    <footer className="footer-pro">
      <div className="footer-grid">
        {/* Cột 1 */}
        <div>
          <h3 className="f-title">NovaHA</h3>
          <p className="f-text">
            Nơi ý tưởng thành sản phẩm. Chúng tôi cung cấp giải pháp phần mềm,
            triển khai hệ thống và đào tạo lực lượng công nghệ chất lượng cao.
          </p>
        </div>

        {/* Cột 2 */}
        <div>
          <h4 className="f-subtitle">Dịch vụ</h4>
          <Link to="/">Trang chủ</Link>
          <Link to="/about">Giới thiệu</Link>
          <Link to="/services">Dịch vụ</Link>
          <Link to="/contact">Liên hệ</Link>
          <Link to="/pricing">Báo giá</Link>
          <Link to="/team">Đội ngũ</Link>
          <Link to="/talenthub">TalentHub</Link>
        </div>

        {/* Cột 3 */}
        <div>
          <h4 className="f-subtitle">Liên hệ</h4>
          <p className="f-text">Email: contact@novaha.vn</p>
          <p className="f-text">Hotline: 0399148815</p>
          <p className="f-text">Địa chỉ: TPHCM, Việt Nam</p>

          {/* Google Map */}
          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.3436665919717!2d106.6671951!3d10.790944399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ed2d4b545d9%3A0x9655ae616ac4b082!2zMTczUSDEkC4gxJDhurduZyBWxINuIE5n4buvLCBQaMaw4budbmcgMTMsIFBow7ohIE5o14bqtbiwgVGjDoG5oIHBo4buRiBIy7MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e1!3m2!1svi!2s!4v1763710842892!5m2!1svi!2s"
              width="100%"
              height="140"
              style={{ border: "0", borderRadius: "12px", marginTop: "10px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps - NovaHA"
            ></iframe>
          </div>
        </div>

        {/* Cột 4 */}
        <div>
          <h4 className="f-subtitle">Kết nối</h4>
          <div className="social">
            <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        © 2025 NovaHA • All rights reserved.
      </div>
    </footer>
  )
}
