import React from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";
import { TextFields } from "@mui/icons-material";
const TambahUser = () => {
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
                  <li class="breadcrumb-item active">Tambah Anggota</li>
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
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Tambah Anggota</h3>
              </div>
              <div class="card-body">
                <form action="">
                  <div className="row">
                    <div className="col-6">
                      <div class="form-group">
                        <label for="nama">Nama</label>
                        <input
                          type="text"
                          class="form-control"
                          id="nama"
                          placeholder="Nama Anggota"
                        />
                      </div>
                      <div class="form-group">
                        <label for="nrp">Email Anggota</label>
                        <input
                          type="email"
                          class="form-control"
                          id="email"
                          placeholder="budi@example.com"
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div class="form-group">
                        <label for="punyaRumah">Password</label>
                        <input
                          type="password"
                          class="form-control"
                          id="punyaRumah"
                          placeholder="Password"
                        />
                      </div>
                      <div class="form-group">
                        <label for="Tinggi">Ulangi Password</label>
                        <input
                          type="password"
                          class="form-control"
                          id="tinggi"
                          placeholder="Tinggi Badan"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <button
                        type="button"
                        className="btn btn-outline-danger btn-block"
                      >
                        Reset
                      </button>
                    </div>
                    <div className="col-6">
                      <button
                        type="submit"
                        onClick={() => alert("helloworld")}
                        className="btn btn-danger btn-block"
                      >
                        Kirim
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        {/* /.content */}
      </div>
      <Footer />
    </>
  );
};

export default TambahUser;
