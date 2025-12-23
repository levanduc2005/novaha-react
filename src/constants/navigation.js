// Navigation menu items
export const NAV_ITEMS = [
  { label: "Trang chủ", href: "/" },
  { label: "Giới thiệu", href: "/about" },
  {
    label: "Dịch vụ",
    href: "/services",
    submenu: [
      { label: "Tất cả dịch vụ", href: "/services" },
      { label: "Startup MVP", href: "/dichvu-mvp" },
      { label: "Phần mềm theo yêu cầu", href: "/dichvu-phanmem" },
      { label: "Thiết kế Website", href: "/dichvu-web" },
    ],
  },
  { label: "Báo giá", href: "/pricing" },
  { label: "Đội ngũ", href: "/team" },
  { label: "Tuyển dụng", href: "/recruitment" },
]

export const FOOTER_LINKS = {
  company: [
    { label: "Về chúng tôi", href: "/about" },
    { label: "Dịch vụ", href: "/services" },
    { label: "Đội ngũ", href: "/team" },
    { label: "Liên hệ", href: "/contact" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Tài liệu", href: "/docs" },
  ],
  legal: [
    { label: "Chính sách riêng tư", href: "/privacy" },
    { label: "Điều khoản sử dụng", href: "/terms" },
  ],
}
