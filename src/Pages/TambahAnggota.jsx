import React from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";

const TambahAnggota = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div class="content-wrapper">
        {/* Content Header (Page header) */}
        <div class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1 class="m-0">Tambah Anggota</h1>
              </div>
              {/* /.col */}
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item">
                    <a href="#">Menu</a>
                  </li>
                  <li class="breadcrumb-item active">Papan Utama</li>
                </ol>
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </div>
        {/* /.content-header */}
        {/* Main content */}
        <section class="content">
          <div class="container-fluid">
            {/* Small boxes (Stat box) */}
           Tambah Anggota
          </div>
          {/* /.container-fluid */}
        </section>
        {/* /.content */}
      </div>
      <Footer />
    </>
  );
};

export default TambahAnggota;
