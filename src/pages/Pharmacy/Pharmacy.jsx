// @ts-nocheck
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { GridToolbar } from "@mui/x-data-grid";
import Button from "../../Ui/Button";
import { useState } from "react";
import AddButton from "../../components/Add Button/AddButton";
import TitlePage from "../../components/Title page/TitlePage";
import AddPharmacy from "./Add Pharmacy/AddPharmacy";
import EditPharmacy from "./Edit Pharmacy/EditPharmacy";
import DelPharmacy from "./Del Pharmacy/DelPharmacy";
import Loading_spin from "../../Ui/Loading_spin";

import { UsegetPharmacy } from "../../hooks/HPhatmacy/UseGetpharmacy";
const Pharmacy = () => {
  // ======= ADD MODAL FUNCTIUONS & STATES
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  // ======= EDIT MODAL FUNCTIUONS & STATES
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const closeModalEdit = () => setIsOpenEdit(false);
  const [editPharma, seteditPharma] = useState({
    id: 0,
    name: "",
    type: "",
    description: "",
    price: "",
  });
  const openModalEdit = (pharma) => {
    setIsOpenEdit(true);
    seteditPharma(pharma);
  };
  // ======= Del MODAL FUNCTIUONS & STATES
  const [isOpenDel, setIsOpenDel] = useState(false);
  const closeModalDel = () => setIsOpenDel(false);
  const openModalDel = (nurse) => {
    setIsOpenDel(true);
    seteditPharma(nurse);
  };

  const { data, isLoading } = UsegetPharmacy();

  if (isLoading)
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loading_spin />
      </div>
    );
  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
      <TitlePage path={"Dashbord / "} page={"Hospital Pharmacy"} />
      <AddButton add={openModal} title={"Add New pharma"} />
      {data && data.length > 0 ? (
        <DataGrid
          rows={data.map((row) => ({
            id: row.id,
            name: row.name,
            type: row.type,
            description: row.description,
            price: row.price,

            edit: "Edit",
            delete: "Delete",
          }))}
          columns={Object.keys(data[0])
            .map((key) => {
              const isEditOrDeleteColumn = key === "edit" || key === "delete";
              if (isEditOrDeleteColumn) {
                return null;
              }
              return {
                field: key,
                headerName: key.charAt(0).toUpperCase() + key.slice(1),
                width: 150,
                flex: 1,
                align: "center",
                headerAlign: "center",
              };
            })
            .filter(Boolean)

            .concat([
              {
                field: "edit",
                headerName: "Edit",
                width: 150,
                flex: 1,
                align: "center",
                headerAlign: "center",
                renderCell: (params) => (
                  <Button
                    onClick={() => openModalEdit(params.row)}
                    styles="bg-[#3D5045] text-[#71dd37]"
                  >
                    Edit
                  </Button>
                ),
              },
              {
                field: "delete",
                headerName: "Delete",
                width: 150,
                flex: 1,
                align: "center",
                headerAlign: "center",
                renderCell: (params) => (
                  <Button
                    onClick={() => openModalDel(params.row)}
                    styles="bg-[#543641] text-[#ff3e1d]"
                  >
                    Delete
                  </Button>
                ),
              },
            ])}
          slots={{
            toolbar: GridToolbar,
          }}
        />
      ) : (
        <p>No data available</p>
      )}
      <AddPharmacy
        isOpen={isOpen}
        closeModal={closeModal}
        title={"Add New Pharmacy "}
      />
      <EditPharmacy
        isOpenEdit={isOpenEdit}
        closeModalEdit={closeModalEdit}
        title={"Edit Pharmacy Information"}
        editPharma={editPharma}
      />
      <DelPharmacy
        isOpen={isOpenDel}
        closeModal={closeModalDel}
        editPharma={editPharma}
      />
    </Box>
  );
};

export default Pharmacy;
