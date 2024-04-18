import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";
import { TextFields } from "@mui/icons-material";
import firebaseConfig from "../firebase/firebaseConfig";
import { getDatabase, ref, set } from "firebase/database";
import pangkatlist from "../data/Pangkat";
import { v4 as uuidv4 } from "uuid";
const TambahAnggota = () => {
  const [Nama, setNama] = useState("");
  const [Pangkat, setPangkat] = useState("");
  const [NRP, setNRP] = useState("");
  const [Sakit, setSakit] = useState("");
  const [punyaRumah, setPunyaRumah] = useState("");
  const [Tinggi, setTinggiBadan] = useState("");
  const [Berat, setBeratBadan] = useState("");
  console.log(punyaRumah);
  const inputData = () => {
    const uid = uuidv4();
    console.log(Nama + " Dengan UID " + uid);
    console.log();
    const db = getDatabase();
    set(ref(db, `Anggota/${uid}`), {
      Nama,
      Pangkat,
      NRP,
      Sakit,
      punyaRumah,
      Tinggi,
      Berat
    });
    console.log('Rumah :' , punyaRumah)
    // const db = getDatabase();
    // set(ref)
  };

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
                <div className="row">
                  <div className="col-6">
                    <div class="form-group">
                      <label for="nama">Nama</label>
                      <input
                        type="text"
                        class="form-control"
                        id="nama"
                        placeholder="Nama Anggota"
                        onChange={(text) => setNama(text.target.value)}
                      />
                    </div>
                    <div class="form-group">
                      <label for="pangkat">Pangkat</label>
                      <select
                        class="custom-select"
                        id="pangkat"
                        onChange={(text) => setPangkat(text.target.value)}
                      >
                        <option value="">Pilih Pangkat</option>
                        {pangkatlist.map((item, index) => (
                          <option value={item.pangkat}>{item.pangkat}</option>
                        ))}
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="nrp">NRP</label>
                      <input
                        type="number"
                        class="form-control"
                        id="nrp"
                        placeholder="NRP"
                        onChange={(text) => setNRP(text.target.value)}
                      />
                    </div>

                    <div class="form-group">
                      <label for="sakit">Sakit</label>
                      <input
                        type="text"
                        class="form-control"
                        id="sakit"
                        placeholder="Sakit"
                        onChange={(text) => setSakit(text.target.value)}
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
                      <select
                        class="custom-select"
                        id="punyaRumah"
                        onChange={(text) => setPunyaRumah(text.target.value)}
                      >
                        <option value="" disabled>Pilih Salah Satu</option>
                        <option value="Iya">Ya</option>
                        <option value="Belum">Belum</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="Tinggi">Tinggi</label>
                      <input
                        type="number"
                        class="form-control"
                        id="tinggi"
                        placeholder="Tinggi Badan"
                        onChange={(text) => setTinggiBadan(text.target.value)}
                      />
                    </div>
                    <div class="form-group">
                      <label for="Berat">Berat</label>
                      <input
                        type="number"
                        class="form-control"
                        id="berat"
                        placeholder="Berat Badan"
                        onChange={(text) => setBeratBadan(text.target.value)}
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
                    <button
                      type="button"
                      className="btn btn-outline-danger btn-block"
                    >
                      Reset
                    </button>
                  </div>
                  <div className="col-6">
                    <button
                      type="button"
                      onClick={inputData}
                      className="btn btn-danger btn-block"
                    >
                      Kirim
                    </button>
                  </div>
                </div>
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
