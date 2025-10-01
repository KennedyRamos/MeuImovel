import { Routes, Route } from "react-router-dom"
import Login from "../pages/Login"
import Dashboard from "../pages/Dashboard"
import Imoveis from "../pages/Imoveis"
import Inquilinos from "../pages/Inquilinos"
import Contratos from "../pages/Contratos"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/Imoveis" element={<Imoveis/>} />

      <Route path="/Inquilinos" element={<Inquilinos/>} />

      <Route path="/Contratos" element={<Contratos/>} />

    </Routes>
  )
}