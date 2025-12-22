import { Header } from "../common/Header"
import { Footer } from "../common/Footer"
import "./Layout.css"

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main
        className="container"
        style={{ minHeight: "60vh", marginTop: "20px" }}
      >
        {children}
      </main>
      <Footer />
    </>
  )
}
