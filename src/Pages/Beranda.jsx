import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import firebaseConfig from "../firebase/firebaseConfig";
import { getDatabase, ref, onValue } from "firebase/database";
import { useMemo, useCallback, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  MRT_ActionMenuItem,
} from "material-react-table";
import { mkConfig, generateCsv, download } from "export-to-csv";
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { useNavigate } from "react-router-dom";
import { Edit, Delete, FindInPage } from "@mui/icons-material";
const csvConfig = mkConfig({
  fieldSeparator: ",",
  decimalSeparator: ".",
  useKeysAsHeaders: true,
});
const data = [
  {
    no: 1,
    nama: "John Doe",
    pangkat: "Letnan Satu",
    nrp: "12345",
    jabatan: "Komandan",
    sakit: "Tidak",
    punyaRumah: "Ya",
    overWeight: "Tidak",
    masalah: "Tidak",
    namaIstri: "Jane Doe",
    namaAnak: "Sarah Doe",
    nomorKPI: "KPI-001",
  },
  {
    no: 2,
    nama: "Jane Smith",
    pangkat: "Sersan",
    nrp: "54321",
    jabatan: "Petugas",
    sakit: "Ya",
    punyaRumah: "Tidak",
    overWeight: "Ya",
    masalah: "Tidak",
    namaIstri: "John Smith",
    namaAnak: "Michael Smith",
    nomorKPI: "KPI-002",
  },
  {
    no: 3,
    nama: "Alice Johnson",
    pangkat: "Kopral",
    nrp: "98765",
    jabatan: "Anggota",
    sakit: "Tidak",
    punyaRumah: "Ya",
    overWeight: "Tidak",
    masalah: "Ya",
    namaIstri: "Bob Johnson",
    namaAnak: "Emily Johnson",
    nomorKPI: "KPI-003",
  },
  {
    no: 4,
    nama: "Bob Brown",
    pangkat: "Mayor",
    nrp: "67890",
    jabatan: "Komandan",
    sakit: "Tidak",
    punyaRumah: "Ya",
    overWeight: "Tidak",
    masalah: "Tidak",
    namaIstri: "Alice Brown",
    namaAnak: "David Brown",
    nomorKPI: "KPI-004",
  },
  {
    no: 5,
    nama: "Charlie Wilson",
    pangkat: "Letnan Dua",
    nrp: "45678",
    jabatan: "Petugas",
    sakit: "Tidak",
    punyaRumah: "Ya",
    overWeight: "Tidak",
    masalah: "Tidak",
    namaIstri: "Emma Wilson",
    namaAnak: "Olivia Wilson",
    nomorKPI: "KPI-005",
  },
];

const Beranda = () => {
  const navigate = useNavigate();
  const [selectedMember, setSelectedMember] = useState(null);

  // Function to handle view button click
  const handleViewClick = (member) => {
    setSelectedMember(member);
  };
  const columns = useMemo(
    () => [
      {
        accessorKey: "no", // New property for row numbers
        header: "No",
        size: 50,
      },
      {
        accessorKey: "nama", // Kolom "name" diganti menjadi "nama"
        header: "Name",
        size: 200,
      },
      {
        accessorKey: "pangkat", // Kolom "address" diganti menjadi "pangkat"
        header: "Pangkat",
        size: 200,
      },
      {
        accessorKey: "nrp", // Kolom "city" diganti menjadi "nrp"
        header: "NRP",
        size: 150,
      },
      {
        accessorKey: "jabatan", // Kolom "state" diganti menjadi "jabatan"
        header: "Jabatan",
        size: 150,
      },
      {
        accessorKey: "sakit",
        header: "Sakit",
        size: 150,
      },
      // {
      //   accessorKey: "punyaRumah",
      //   header: "Punya Rumah",
      //   size: 150,
      // },
      // {
      //   accessorKey: "overWeight",
      //   header: "Over Weight",
      //   size: 150,
      // },
      // {
      //   accessorKey: "masalah",
      //   header: "Masalah",
      //   size: 150,
      // },
      // {
      //   accessorKey: "namaIstri",
      //   header: "Nama Istri",
      //   size: 150,
      // },
      // {
      //   accessorKey: "namaAnak",
      //   header: "Nama Anak",
      //   size: 150,
      // },
      // {
      //   accessorKey: "nomorKPI",
      //   header: "Nomor KPI",
      //   size: 150,
      // },
    ],
    []
  );

  const handleExportRows = (rows) => {
    const doc = new jsPDF();
    const tableData = rows.map((row) => Object.values(row.original));
    const tableHeaders = columns.map((c) => c.header);

    autoTable(doc, {
      head: [tableHeaders],
      body: tableData,
    });

    doc.save("DataAnggota.pdf");
  };
  const handleExportData = () => {
    const csv = generateCsv(csvConfig)(data);
    download(csvConfig)(csv);
  };

  const table = useMaterialReactTable({
    columns,
    data,
    enableFullScreenToggle: false,
    enableRowSelection: false,
    columnFilterDisplayMode: "popover",
    paginationDisplayMode: "pages",
    positionToolbarAlertBanner: "bottom",
    renderTopToolbarCustomActions: ({ table }) => (
      <Box
        sx={{
          display: "flex",
          gap: "16px",
          padding: "8px",
          flexWrap: "wrap",
        }}
      >
        <Button
          //export all data that is currently in the table (ignore pagination, sorting, filtering, etc.)
          onClick={handleExportData}
          startIcon={<i class="fas fa-file-excel"></i>}
        >
          Export To Excel
        </Button>
        <Button
          disabled={table.getPrePaginationRowModel().rows.length === 0}
          //export all rows, including from the next page, (still respects filtering and sorting)
          onClick={() =>
            handleExportRows(table.getPrePaginationRowModel().rows)
          }
          startIcon={<i class="fas fa-file-pdf"></i>}
        >
          Export TO PDF
        </Button>
      </Box>
    ),
  });
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
                <h1 class="m-0">Dashboard</h1>
              </div>
              {/* /.col */}
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item">
                    <a href="#">Menu</a>
                  </li>
                  <li class="breadcrumb-item active">Dashboard</li>
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


              <div class="card">
                <div class="card-header">
                  <h3 class="card-title">Daftar Anggota</h3>
                </div>
                <div class="card-body">
                  {/* <button
                    type="button"
                    class="btn btn-info mb-2"
                    onClick={() => navigate("/TambahDataAnggota")}
                  >
                    + Tambah Data Anggota
                  </button> */}
                  <MaterialReactTable
                    enableFullScreenToggle={false}
                    columns={columns}
                    data={data}
                    enableRowActions
                    positionActionsColumn="last"
                    renderRowActions={({ row }) => (
                      <Box sx={{ display: "flex" }}>
                        <Tooltip title="Lihat">
                          <button
                            type="button"
                            className="btn btn-transparent btn-sm"
                            data-toggle="modal"
                            data-target="#view"
                            onClick={() => handleViewClick(row.original)} // Set selected member when view button is clicked
                          >
                            <FindInPage color="success" />
                          </button>
                        </Tooltip>
                        <Tooltip title="Edit">
                          <button
                            type="button"
                            className="btn btn-transparent btn-sm"
                            data-toggle="modal"
                            data-target="#edit"
                          >
                            <Edit color="primary" />
                          </button>
                        </Tooltip>
                        <Tooltip title="Delete">
                          <IconButton
                            sx={{ color: "#CE3419" }}
                            onClick={() => alert("ini view")}
                          >
                            <Delete />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    )}
                    renderTopToolbarCustomActions={({ table }) => (
                      <Box
                        sx={{
                          display: "flex",
                          gap: "16px",
                          padding: "8px",
                          flexWrap: "wrap",
                        }}
                      >
                        <Button
                          disabled={
                            table.getPrePaginationRowModel().rows.length === 0
                          }
                          //export all rows, including from the next page, (still respects filtering and sorting)
                          onClick={() =>
                            handleExportRows(
                              table.getPrePaginationRowModel().rows
                            )
                          }
                          startIcon={<i class="fas fa-file-pdf"></i>}
                        >
                          Export To PDF
                        </Button>
                      </Box>
                    )}
                    // renderRowActionMenuItems={({ table }) => [
                    //   <MRT_ActionMenuItem //or just use a normal MUI MenuItem component
                    //     icon={<Edit />}
                    //     key="edit"
                    //     label="Edit"
                    //     onClick={() => console.info("Edit")}
                    //     table={table}
                    //   />,
                    //   <MRT_ActionMenuItem
                    //     icon={<Delete />}
                    //     key="delete"
                    //     label="Delete"
                    //     onClick={() => console.info("Delete")}
                    //     table={table}
                    //   />,
                    // ]}
                  />
                </div>
              </div>
            <div className="modal fade" id="view">
              <div className="modal-dialog modal-xl">
                <div className="modal-content">
                  <div className="modal-header">
                    {selectedMember && (
                      <h4 className="modal-title"> {selectedMember.nama}</h4>
                    )}
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                      onClick={() => setSelectedMember(null)}
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    {selectedMember && (
                      <>
                        <p>Nama: {selectedMember.nama}</p>
                        <p>Pangkat: {selectedMember.pangkat}</p>
                        <p>NRP: {selectedMember.nrp}</p>
                        <p>Punya Rumah: {selectedMember.punyaRumah}</p>
                        <p>Over Weight: {selectedMember.overWeight}</p>
                        <p>Masalah: {selectedMember.masalah}</p>
                        <p>Nama Istri: {selectedMember.namaIstri}</p>
                        <p>Nama Anak: {selectedMember.namaAnak}</p>
                        <p>Nomor KPI: {selectedMember.nomorKPI}</p>
                      </>
                    )}
                  </div>
                  <div className="modal-footer justify-content-between">
                    <button
                      type="button"
                      className="btn btn-default"
                      data-dismiss="modal"
                      onClick={() => setSelectedMember(null)}
                    >
                      Close
                    </button>
                    <button type="button" className="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* EDIT MODAL */}
            <div className="modal fade" id="edit">
              <div className="modal-dialog modal-xl">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title">Extra Large Modal</h4>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <p>One fine body…</p>
                  </div>
                  <div className="modal-footer justify-content-between">
                    <button
                      type="button"
                      className="btn btn-default"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" className="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </div>
                {/* /.modal-content */}
              </div>
              {/* /.modal-dialog */}
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
