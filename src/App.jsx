import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { useScrollToTop } from "./hooks/useScrollToTop"
import { HomePage } from "./pages/public/HomePage"
import { AdminLogin } from "./pages/admin/AdminLogin"
import {
  Services,
  Pricing,
  TalentHub,
  Team,
  Contact,
  About,
  Recruitment,
} from "./pages/public"
import Student from "./pages/public/Student"
import AdminDashboard from "./pages/admin/AdminDashboard"
import "./App.css"

function ScrollToTop() {
  useScrollToTop()
  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/talenthub" element={<TalentHub />} />
        <Route path="/student" element={<Student />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/recruitment" element={<Recruitment />} />

        {/* Admin Routes */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminDashboard />} />

        {/* Catch all - redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
