import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// IMPORT COMPNENTS
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";
// IMPORT PAGES
import Beranda from "./Pages/Beranda";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DaftarAnggota from "./Pages/DaftarAnggota";
import TambahAnggota from "./Pages/TambahAnggota";
import TambahUser from "./Pages/TambahUser";
import LoginPage from "./Pages/LoginPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/DaftarAnggota" element={<DaftarAnggota />} />
        <Route path="/TambahDataAnggota" element={<TambahAnggota />} />
        <Route path="/TambahUser" element={<TambahUser />} />
        <Route path="/LoginPage" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
