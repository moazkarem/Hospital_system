import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { GridToolbar } from "@mui/x-data-grid";
import Button from "../../../Ui/Button";
import TitlePage from "../../../components/Title page/TitlePage";
import AddButton from "../../../components/Add Button/AddButton";

import { useState } from "react";
import AddinvPharmacy from "./Add Inv Pharmacy/AddinvPharmacy";
import EditInvPharmacy from "./Edit Inv Pharmacy/EditInvPharmacy";
import DelInvPharmacy from "./Del Inv Pharmacy/DelInvPharmacy";

const InventoryPharmacy = () => {
  // ======= ADD MODAL FUNCTIUONS & STATES
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  // ======= EDIT MODAL FUNCTIUONS & STATES
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const closeModalEdit = () => setIsOpenEdit(false);
  const openModalEdit = () => setIsOpenEdit(true);
  // ======= Del MODAL FUNCTIUONS & STATES
  const [isOpenDel, setIsOpenDel] = useState(false);
  const closeModalDel = () => setIsOpenDel(false);
  const openModalDel = () => setIsOpenDel(true);
  //=========HANDELERS ========
  const EditHandedler = () => {
    openModalEdit();
  };
  const delHandedler = () => {
    openModalDel();
  };
  const rows = [
    {
      id: 1,
      pharmacyId:1658,
      pharmacyName:'pharmay' ,
      suplierName:'mohamed',
      stockIn:'4 - 4 - 2021' ,
      stockOut:'3 - 3 - 2024' ,
      edit: "Edit",
      delete: "Delete",
    },
    {
        id: 1,
        pharmacyId:1658,
        pharmacyName:'pharmay' ,
        suplierName:'mohamed',
        stockIn:'4 - 4 - 2021' ,
        stockOut:'3 - 3 - 2024' ,
        edit: "Edit",
        delete: "Delete",
      },
      {
        id: 1,
        pharmacyId:1658,
        pharmacyName:'pharmay' ,
        suplierName:'mohamed',
        stockIn:'4 - 4 - 2021' ,
        stockOut:'3 - 3 - 2024' ,
        edit: "Edit",
        delete: "Delete",
      },
      {
        id: 1,
        pharmacyId:1658,
        pharmacyName:'pharmay' ,
        suplierName:'mohamed',
        stockIn:'4 - 4 - 2021' ,
        stockOut:'3 - 3 - 2024' ,
        edit: "Edit",
        delete: "Delete",
      },
      {
        id: 1,
        pharmacyId:1658,
        pharmacyName:'pharmay' ,
        suplierName:'mohamed',
        stockIn:'4 - 4 - 2021' ,
        stockOut:'3 - 3 - 2024' ,
        edit: "Edit",
        delete: "Delete",
      },
      {
        id: 1,
        pharmacyId:1658,
        pharmacyName:'pharmay' ,
        suplierName:'mohamed',
        stockIn:'4 - 4 - 2021' ,
        stockOut:'3 - 3 - 2024' ,
        edit: "Edit",
        delete: "Delete",
      },
      {
        id: 1,
        pharmacyId:1658,
        pharmacyName:'pharmay' ,
        suplierName:'mohamed',
        stockIn:'4 - 4 - 2021' ,
        stockOut:'3 - 3 - 2024' ,
        edit: "Edit",
        delete: "Delete",
      },
      {
        id: 1,
        pharmacyId:1658,
        pharmacyName:'pharmay' ,
        suplierName:'mohamed',
        stockIn:'4 - 4 - 2021' ,
        stockOut:'3 - 3 - 2024' ,
        edit: "Edit",
        delete: "Delete",
      },
      {
        id: 1,
        pharmacyId:1658,
        pharmacyName:'pharmay' ,
        suplierName:'mohamed',
        stockIn:'4 - 4 - 2021' ,
        stockOut:'3 - 3 - 2024' ,
        edit: "Edit",
        delete: "Delete",
      },
  ];

  const columns = [
    {
      field: "id",
      headerName: "ID",
      align: "center",
      headerAlign: "center",
      width: 33,
    },

    {
      field: "pharmacyId",
      headerName: "Pharmacy Id",
      width: 150,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "pharmacyName",
      headerName: "Pharmacy Name",
      width: 150,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "suplierName",
      headerName: "Suplier Name",
      width: 150,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },

    {
      field: "stockIn",
      headerName: "Stock In",
      width: 150,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "stockOut",
      headerName: "Stock Out",
      width: 150,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "edit",
      headerName: "Edit",
      width: 150,
      flex: 1,
      align: "center",
      headerAlign: "center",

      renderCell: () => {
        return (
          <Button
            onClick={EditHandedler}
            styles={"bg-[#3D5045] text-[#71dd37]"}
          >
            Edit
          </Button>
        );
      },
    },
    {
      field: "Delete",
      headerName: "Delete",
      width: 150,
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: () => {
        return (
          <Button onClick={delHandedler} styles={"bg-[#543641] text-[#ff3e1d]"}>
            Delite
          </Button>
        );
      },
    },
  ];
  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
      <TitlePage path={"Dashbord / Inventory / "} page={"Inventory Pharmacy"} />
      <AddButton add={openModal} title={"Add New Inventory Pharmacy "} />
      <DataGrid
        rows={rows}
        // @ts-ignore
        columns={columns}
        slots={{
          toolbar: GridToolbar,
        }}
      />
      <AddinvPharmacy
        isOpen={isOpen}
        closeModal={closeModal}
        title={"Add New Inventory Pharmacy "}
      />
      <EditInvPharmacy
        isOpenEdit={isOpenEdit}
        closeModalEdit={closeModalEdit}
        title={"Edit Inventory Pharmacy Information"}
      />
      <DelInvPharmacy
        isOpen={isOpenDel}
        closeModal={closeModalDel}
        title={"Are Yoy Want To Delete Inventory Pharmacy"}
      />
    </Box>
  );
};

export default InventoryPharmacy;
