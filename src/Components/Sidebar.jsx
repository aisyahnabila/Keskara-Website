import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };
  return (
    <aside class="main-sidebar sidebar-light-danger elevation-4">
      {/* Brand Logo */}
      <a href="index3.html" class="brand-link">
        <img
          src="dist/img/polres/Lambang_Polda_Jatim.png"
          alt="logo-polres"
          class="brand-image"
        />
        <span class="brand-text font-weight-bold">KESKARA</span>
      </a>
      {/* Sidebar */}
      <div class="sidebar">
        {/* Sidebar user panel (optional) */}
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
          <div class="image">
            <img
              src="dist/img/user2-160x160.jpg"
              class="img-circle "
              alt="User Image"
            />
          </div>
          <div class="info">
            <a href="#" class="d-block">
              Suhartono
            </a>
          </div>
        </div>

        {/* Sidebar Menu */}
        <nav class="mt-2">
          <ul
            class="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
            <li class="nav-header">MENU</li>
            <li class="nav-item">
              <a
                onClick={() => navigate("/")}
                type="button"
                class={`nav-link ${isActive("/")}`}
              >
                <i class="nav-icon fas fa-server" />
                <p>Papan Utama</p>
              </a>
            </li>
            <li class="nav-item">
              <a
                onClick={() => navigate("/DaftarAnggota")}
                type="button"
                class={`nav-link ${isActive("/DaftarAnggota")}`}
              >
                <i class="nav-icon fas fa-address-book" />
                <p>
                  Daftar Anggota
                  <span class="badge badge-light right">2</span>
                </p>
              </a>
            </li>
            <li class="nav-header">PENAMBAHAN DATA</li>
            <li class="nav-item">
              <a
                onClick={() => navigate("/TambahDataAnggota")}
                type="button"
                class={`nav-link ${isActive("/TambahDataAnggota")}`}
              >
                <i class="nav-icon fas fa-user-plus" />
                <p>Tambah Data Anggota</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="pages/calendar.html" class="nav-link">
                <i class="nav-icon fas fa-plus" />
                <p>Tambah User</p>
              </a>
            </li>
            <li class="nav-header">OPSI LAIN</li>
            <li class="nav-item">
              <a href="pages/calendar.html" class="nav-link">
                <i class="nav-icon fas fa-user" />
                <p>Akun Saya</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="pages/calendar.html" class="nav-link">
                <i class="nav-icon fas fa-sign-out-alt" />
                <p>Keluar</p>
              </a>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
};

export default Sidebar;
