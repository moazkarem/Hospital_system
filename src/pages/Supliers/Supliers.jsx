// @ts-nocheck
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { GridToolbar } from "@mui/x-data-grid";
import Button from "../../Ui/Button";
import TitlePage from "../../components/Title page/TitlePage";
import AddButton from "../../components/Add Button/AddButton";
import Loading_spin from "../../Ui/Loading_spin";

import { useState } from "react";
import AddSuplier from "./Add Suplier/AddSuplier";
import EditSuplier from "./Edit Suplier/EditSuplier";
import DelSuplier from "./Del Suplier/DelSuplier";
import { UseGetSupliers } from "../../hooks/HSupliers/UseGetSupliers";
import { useDispatch } from "react-redux";
import { fetchSupliers } from "../../app/features/Supliers/GerSuplierSlice";
const Supliers = () => {
  const dispatch = useDispatch();

  // ======= ADD MODAL FUNCTIUONS & STATES
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  // ======= EDIT MODAL FUNCTIUONS & STATES
  const [editSuplier, seteditSuplier] = useState({
    id: 0,
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const closeModalEdit = () => setIsOpenEdit(false);
  const openModalEdit = (suplier) => {
    setIsOpenEdit(true);
    seteditSuplier(suplier);
  };
  // ======= Del MODAL FUNCTIUONS & STATES
  const [isOpenDel, setIsOpenDel] = useState(false);
  const closeModalDel = () => setIsOpenDel(false);
  const openModalDel = (suplier) => {
    setIsOpenDel(true);
    seteditSuplier(suplier);
  };
  //=========HANDELERS ========

  const { data, isLoading } = UseGetSupliers();
  dispatch(fetchSupliers(data));
  if (isLoading)
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loading_spin />
      </div>
    );
  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
      <TitlePage path={"Dashbord / "} page={"Supliers"} />
      <AddButton add={openModal} title={"Add New Suplier"} />
      {data && data.length > 0 ? (
        <DataGrid
          rows={data.map((row) => ({
            id: row.id,
            name: row.name,
            phone: row.phone,
            email: row.email,
            address: row.address,
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
      <AddSuplier
        isOpen={isOpen}
        closeModal={closeModal}
        title={"Add New Suplier "}
      />
      <EditSuplier
        isOpenEdit={isOpenEdit}
        closeModalEdit={closeModalEdit}
        title={"Edit Suplier Information"}
        editSuplier={editSuplier}
        seteditSuplier={seteditSuplier}
      />
      <DelSuplier
        isOpen={isOpenDel}
        closeModal={closeModalDel}
        editSuplier={editSuplier}
      />
    </Box>
  );
};

export default Supliers;
