import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { GridToolbar } from "@mui/x-data-grid";
import Button from "../../Ui/Button";
import { useState } from "react";
import AddButton from "../../components/Add Button/AddButton";
import TitlePage from "../../components/Title page/TitlePage";

import EditDepartment from "./Edit Department/EditDepartment";
import DelDepartment from "./Del Department/DelDepartment";
import AddDepartment from "./Add Department/AddDepartment";
const Departments = () => {
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
      Name: "Moaz Karem",
      users: "Users",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 1,
      Name: "Moaz Karem",
      users: "Users",
      edit: "Edit",
      delete: "Delete",
    },
    {
      id: 1,
      Name: "Moaz Karem",
      users: "Users",
      edit: "Edit",
      delete: "Delete",
    },

    {
      id: 1,
      Name: "Moaz Karem",
      users: "Users",
      edit: "Edit",
      delete: "Delete",
    },

    {
      id: 1,
      Name: "Moaz Karem",
      users: "Users",
      edit: "Edit",
      delete: "Delete",
    },

    {
      id: 1,
      Name: "Moaz Karem",
      users: "Users",
      edit: "Edit",
      delete: "Delete",
    },

    {
      id: 1,
      Name: "Moaz Karem",
      users: "Users",
      edit: "Edit",
      delete: "Delete",
    },

    {
      id: 1,
      Name: "Moaz Karem",
      users: "Users",
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
      field: "Name",
      headerName: "Name",
      width: 150,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "users",
      headerName: "Users",
      width: 150,
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: () => {
        return <Button styles={"bg-[#3C3D65] text-[#696cff]"}>Users</Button>;
      },
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
      <TitlePage path={"Dashbord / "} page={"Departments"} />
      <AddButton add={openModal} title={"Add New Department"} />
      <DataGrid
        rows={rows}
        // @ts-ignore
        columns={columns}
        slots={{
          toolbar: GridToolbar,
        }}
      />
      <AddDepartment
        isOpen={isOpen}
        closeModal={closeModal}
        title={"Add New Depart "}
      />
      <EditDepartment
        isOpenEdit={isOpenEdit}
        closeModalEdit={closeModalEdit}
        title={"Edit Depart Information"}
      />
      <DelDepartment
        isOpen={isOpenDel}
        closeModal={closeModalDel}
        title={"Are Yoy Want To Delete This Depat"}
      />
    </Box>
  );
};

export default Departments;
