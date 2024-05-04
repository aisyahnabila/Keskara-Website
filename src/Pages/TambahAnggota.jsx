import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";
import { TextFields } from "@mui/icons-material";
import firebaseConfig from "../firebase/firebaseConfig";
import { getDatabase, ref, set } from "firebase/database";
import pangkatlist from "../data/Pangkat";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";
const TambahAnggota = () => {
  const [Nama, setNama] = useState("");
  const [Pangkat, setPangkat] = useState("");
  const [NRP, setNRP] = useState("");
  const [Sakit, setSakit] = useState("");
  const [Jabatan, setJabatan] = useState("");
  const [punyaRumah, setPunyaRumah] = useState("");
  const [Tinggi, setTinggiBadan] = useState("");
  const [Berat, setBeratBadan] = useState("");
  const [overWeight, setOverWeight] = useState("-");
  const [Masalah, setMasalah] = useState("");
  const [Istri, setIstri] = useState("");
  const [Anak, setAnak] = useState("");
  const [KPI, setKPI] = useState("");
  console.log(punyaRumah);
  useEffect(() => {
    const tinggiMeter = Tinggi / 100;

    const bmi = Berat / (tinggiMeter * tinggiMeter);

    if (bmi < 18.5) {
      setOverWeight("Kurus");
    } else if (bmi >= 18.5 && bmi < 24.9) {
      setOverWeight("Normal");
    } else if (bmi >= 25 && bmi < 29.9) {
      setOverWeight("Gemuk");
    } else if (bmi >= 30) {
      setOverWeight("Obesitas");
    } else {
      setOverWeight("-");
    }
  }, [Tinggi, Berat]);
  const inputData = () => {
    // Validasi data sebelum menyimpan ke database
    if (!Nama || !Pangkat || !NRP || !Sakit || !punyaRumah || !Tinggi || !Berat || !Jabatan || !Masalah || !Istri || !Anak || !KPI) {
      toast.error('Harap isi semua data!')
      return; 
    }
  
    // Semua data sudah lengkap, lanjutkan proses simpan ke database
    const uid = uuidv4();
    const db = getDatabase();
    set(ref(db, `Anggota/${uid}`), {
      Nama,
      Pangkat,
      NRP,
      Sakit,
      punyaRumah,
      Tinggi,
      Berat,
      Jabatan,
      overWeight,
      Masalah,
      Istri,
      Anak,
      KPI,
    });
  
    // Tampilkan pesan sukses kepada pengguna setelah data berhasil disimpan
    toast.success("Data Anggota berhasil ditambahkan!");
    console.log("Rumah :", punyaRumah);
  };
  

  const handleReset = () => {
    // Mengatur ulang semua nilai state ke nilai awal
    setNama("");
    setPangkat("");
    setNRP("");
    setSakit("");
    setJabatan("");
    setPunyaRumah("");
    setTinggiBadan("");
    setBeratBadan("");
    setOverWeight("-");
    setMasalah("");
    setIstri("");
    setAnak("");
    setKPI("");
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
                        value={Nama}
                        required={true}
                        placeholder="Nama Anggota"
                        onChange={(text) => setNama(text.target.value)}
                      />
                    </div>
                    <div class="form-group">
                      <label for="pangkat">Pangkat</label>
                      <select
                        class="custom-select"
                        id="pangkat"
                        value={Pangkat}
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
                        value={NRP}
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
                        value={Sakit}
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
                        value={Jabatan}
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
                        value={punyaRumah}
                        onChange={(text) => setPunyaRumah(text.target.value)}
                      >
                        <option value="">Pilih Salah Satu</option>
                        <option value="Ya">Ya</option>
                        <option value="Belum">Belum</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="Tinggi">Tinggi</label>
                      <div class="input-group mb-3">
                        <input
                          type="number"
                          class="form-control"
                          id="tinggi"
                          placeholder="Tinggi Badan"
                          value={Tinggi}
                          onChange={(text) => setTinggiBadan(text.target.value)}
                        />
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="basic-addon1">
                            cm
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="Berat">Berat</label>
                      <div class="input-group mb-3">
                        <input
                          type="number"
                          class="form-control"
                          id="berat"
                          value={Berat}
                          placeholder="Berat Badan"
                          onChange={(text) => setBeratBadan(text.target.value)}
                        />
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="basic-addon1">
                            Kg
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="overWeight">Overweight</label>
                      <input
                        type="text"
                        class="form-control"
                        id="overWeight"
                        placeholder="Overweight"
                        value={overWeight}
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
                        value={Masalah}
                        onChange={(text) => setMasalah(text.target.value)}
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
                        value={Istri}
                        placeholder="Nama Istri"
                        onChange={(text) => setIstri(text.target.value)}
                      />
                    </div>
                    <div class="form-group">
                      <label for="namaAnak">Nama Anak</label>
                      <input
                        type="text"
                        class="form-control"
                        id="namaAnak"
                        value={Anak}
                        placeholder="Nama Anak"
                        onChange={(text) => setAnak(text.target.value)}
                      />
                    </div>
                    <div class="form-group">
                      <label for="nomorKPI">Nomor KPI</label>
                      <input
                        type="number"
                        class="form-control"
                        id="nomorKPI"
                        value={KPI}
                        placeholder="Nomor KPI"
                        onChange={(text) => setKPI(text.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <button
                      type="button"
                      className="btn btn-outline-danger btn-block"
                      onClick={handleReset} // Panggil fungsi handleReset saat tombol ditekan
                    >
                      Reset
                    </button>
                  </div>
                  <div className="col-6">
                    <button
                      type="button"
                      className="btn btn-danger btn-block"
                      data-toggle="modal"
                      data-target="#Alert"
                    >
                      {" "}
                      Kirim
                    </button>
                    <div
                      class="modal fade"
                      id="Alert"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">
                              Simpan Data
                            </h5>
                            <button
                              type="button"
                              class="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">
                            Apakah Saudara yakin data yang Saudara masukkan
                            benar?
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-outline-danger"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                            <button
                              type="button"
                              class="btn btn-danger"
                              data-dismiss="modal"
                              onClick={inputData}
                            >
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <button
                      type="button"
                      onClick={inputData}
                      className="btn btn-danger btn-block"
                    >
                      Kirim
                    </button> */}
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        {/* /.content */}
        <ToastContainer />
      </div>
      <Footer />
    </>
  );
};

export default TambahAnggota;
