import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";
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

const DaftarAnggota = () => {
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
        <div class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1 class="m-0">Daftar Anggota</h1>
              </div>
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item">
                    <a href="#">Menu</a>
                  </li>
                  <li class="breadcrumb-item active">Daftar Anggota</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default DaftarAnggota;
