import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";

const Beranda = () => {
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
                <h1 class="m-0">Papan Utama</h1>
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
            <div class="row">
              <div class="col-lg-3 col-6">
                {/* small box */}
                <div class="small-box bg-info">
                  <div class="inner">
                    <h3>150</h3>
                    <p>Total Anggota Satuan</p>
                  </div>
                  <div class="icon">
                    <i class=" ion ion-ios-people" />
                  </div>
                  <a href="#" class="small-box-footer">
                    Detail Info <i class="fas fa-arrow-circle-right" />
                  </a>
                </div>
              </div>
              {/* ./col */}
              <div class="col-lg-3 col-6">
                {/* small box */}
                <div class="small-box bg-danger">
                  <div class="inner">
                    <h3>
                      53<sup style={{ fontSize: 20 }}>%</sup>
                    </h3>
                    <p>Anggota Overweight</p>
                  </div>
                  <div class="icon">
                    <i class="ion ion-ios-body" />
                  </div>
                  <a href="#" class="small-box-footer">
                    Detail Info <i class="fas fa-arrow-circle-right" />
                  </a>
                </div>
              </div>
              {/* ./col */}
              <div class="col-lg-3 col-6">
                {/* small box */}
                <div class="small-box bg-success">
                  <div class="inner">
                    <h3>44</h3>
                    <p>Anggota Ideal</p>
                  </div>
                  <div class="icon">
                    <i class="ion ion-ios-checkmark-outline" />
                  </div>
                  <a href="#" class="small-box-footer">
                    Detail Info <i class="fas fa-arrow-circle-right" />
                  </a>
                </div>
              </div>
              {/* ./col */}
              <div class="col-lg-3 col-6">
                {/* small box */}
                <div class="small-box bg-secondary">
                  <div class="inner">
                    <h3>65</h3>
                    <p>Anggota Izin Sakit</p>
                  </div>
                  <div class="icon">
                    <i class="ion ion-ios-list" />
                  </div>
                  <a href="#" class="small-box-footer">
                    Detail Info <i class="fas fa-arrow-circle-right" />
                  </a>
                </div>
              </div>
              {/* ./col */}
            </div>
            {/* /.row */}
            {/* Main row */}
            <div class="row">
              {/* EDIT KONTEN DISINI BEE */}
            </div>
            {/* /.row (main row) */}
          </div>
          {/* /.container-fluid */}
        </section>
        {/* /.content */}
      </div>
      <Footer />
    </>
  );
};

export default Beranda;
