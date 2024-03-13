import React from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";
import { TextFields } from "@mui/icons-material";
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
                        <label for="pangkat">Pangkat</label>
                        <select class="custom-select" id="pangkat">
                          <option value="">Pilih Pangkat</option>
                          <option value="Jenderal Polisi">
                            Jenderal Polisi
                          </option>
                          <option value="Komisaris Jenderal Polisi (KomjenPol)">
                            Komisaris Jenderal Polisi (KomjenPol)
                          </option>
                          <option value="Inspektur Jenderal Polisi (Irjen Pol)">
                            Inspektur Jenderal Polisi (Irjen Pol)
                          </option>
                          <option value="Brigadir Jenderal Polisi (Brigjen Pol)">
                            Brigadir Jenderal Polisi (Brigjen Pol)
                          </option>
                          <option value="Perwira Menengah (Pamen) Polri">
                            Perwira Menengah (Pamen) Polri
                          </option>
                          <option value="Komisaris Besar Polisi (Kombes Pol)">
                            Komisaris Besar Polisi (Kombes Pol)
                          </option>
                          <option value="Ajun Komisaris Besar Polisi (AKBP)">
                            Ajun Komisaris Besar Polisi (AKBP)
                          </option>
                          <option value="Komisaris Polisi (Kompol)">
                            Komisaris Polisi (Kompol)
                          </option>
                          <option value="Perwira Pertama (Pama) Polri">
                            Perwira Pertama (Pama) Polri
                          </option>
                          <option value="Ajun Komisaris Polisi (AKP)">
                            Ajun Komisaris Polisi (AKP)
                          </option>
                          <option value="Inspektur Polisi Satu (Iptu)">
                            Inspektur Polisi Satu (Iptu)
                          </option>
                          <option value="Inspektur Polisi Dua (Ipda)">
                            Inspektur Polisi Dua (Ipda)
                          </option>
                          <option value="Ajun Inspektur Polisi Satu (Aiptu)">
                            Ajun Inspektur Polisi Satu (Aiptu)
                          </option>
                          <option value="Ajun Inspektur Polisi Dua (Aipda)">
                            Ajun Inspektur Polisi Dua (Aipda)
                          </option>
                          <option value="Brigadir Polisi Kepala (Bripka)">
                            Brigadir Polisi Kepala (Bripka)
                          </option>
                          <option value="Brigadir Polisi (Brigpol)">
                            Brigadir Polisi (Brigpol)
                          </option>
                          <option value="Brigadir Polisi Satu (Briptu)">
                            Brigadir Polisi Satu (Briptu)
                          </option>
                          <option value="Brigadir Polisi Dua (Bripda)">
                            Brigadir Polisi Dua (Bripda)
                          </option>
                          <option value="Ajun Brigadir Polisi (Abrip)">
                            Ajun Brigadir Polisi (Abrip)
                          </option>
                          <option value="Ajun Brigadir Polisi Satu (Abriptu)">
                            Ajun Brigadir Polisi Satu (Abriptu)
                          </option>
                          <option value="Ajun Brigadir Polisi Dua (Abripda)">
                            Ajun Brigadir Polisi Dua (Abripda)
                          </option>
                          <option value="Bhayangkara Kepala (Bharaka)">
                            Bhayangkara Kepala (Bharaka)
                          </option>
                          <option value="Bhayangkara Satu (Bharatu)">
                            Bhayangkara Satu (Bharatu)
                          </option>
                          <option value="Bhayangkara Dua (Bharada)">
                            Bhayangkara Dua (Bharada)
                          </option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label for="nrp">NRP</label>
                        <input
                          type="number"
                          class="form-control"
                          id="nrp"
                          placeholder="NRP"
                        />
                      </div>

                      <div class="form-group">
                        <label for="sakit">Sakit</label>
                        <input
                          type="text"
                          class="form-control"
                          id="sakit"
                          placeholder="Sakit"
                        />
                      </div>
                      <div class="form-group">
                        <label for="jabatan">Jabatan</label>
                        <input
                          type="text"
                          class="form-control"
                          id="jabatan"
                          placeholder="Jabatan"
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div class="form-group">
                        <label for="punyaRumah">Punya Rumah</label>
                        <input
                          type="text"
                          class="form-control"
                          id="punyaRumah"
                          placeholder="Punya Rumah"
                        />
                      </div>
                      <div class="form-group">
                        <label for="Tinggi">Tinggi</label>
                        <input
                          type="text"
                          class="form-control"
                          id="tinggi"
                          placeholder="Tinggi Badan"
                        />
                      </div>
                      <div class="form-group">
                        <label for="Berat">Berat</label>
                        <input
                          type="text"
                          class="form-control"
                          id="berat"
                          placeholder="Berat Badan"
                        />
                      </div>
                      <div class="form-group">
                        <label for="overWeight">Overweight</label>
                        <input
                          type="text"
                          class="form-control"
                          id="overWeight"
                          placeholder="Overweight"
                          value={"-"}
                          disabled
                        />
                      </div>
                      <div class="form-group">
                        <label for="masalah">Masalah</label>
                        <input
                          type="text"
                          class="form-control"
                          id="masalah"
                          placeholder="Masalah"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div class="form-group">
                        <label for="namaIstri">Nama Istri</label>
                        <input
                          type="text"
                          class="form-control"
                          id="namaIstri"
                          placeholder="Nama Istri"
                        />
                      </div>
                      <div class="form-group">
                        <label for="namaAnak">Nama Anak</label>
                        <input
                          type="text"
                          class="form-control"
                          id="namaAnak"
                          placeholder="Nama Anak"
                        />
                      </div>
                      <div class="form-group">
                        <label for="nomorKPI">Nomor KPI</label>
                        <input
                          type="text"
                          class="form-control"
                          id="nomorKPI"
                          placeholder="Nomor KPI"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <button className="btn btn-outline-danger btn-block">
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

export default TambahAnggota;
