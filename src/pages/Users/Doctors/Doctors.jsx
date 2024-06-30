// @ts-nocheck
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";

import { GridToolbar } from "@mui/x-data-grid";
import Button from "../../../Ui/Button";
import TitlePage from "../../../components/Title page/TitlePage";
import AddButton from "../../../components/Add Button/AddButton";
import AddDoctor from "./AddDoctor/AddDoctor";
import { useState } from "react";
import EditDoctor from "./Edit Doctor/EditDoctor";
import DelDoctor from "./Delete Doctor/DelDoctor";

import { useDispatch } from "react-redux";
import { fetchDoctors } from "../../../app/features/doctors/GetdoctorSlice";
import { UseGetDoctors } from "../../../hooks/HDoctors/UsegetDoctors";
import Loading_spin from "../../../Ui/Loading_spin";

const Doctors = () => {
  const dispatch = useDispatch();
  // ======= ADD MODAL FUNCTIUONS & STATES
  const [addDoctor, setaddDoctor] = useState({
    id: 0,
    name: "",
    phone: "",
    email: "",
    password: "",
    static_role: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
    setaddDoctor(addDoctor);
  };
  const openModal = () => setIsOpen(true);
  // ======= EDIT MODAL FUNCTIUONS & STATES
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [editDoctor, seteditDoctor] = useState({
    id: 0,
    name: "",
    phone: "",
    email: "",
    password: "",
    static_role: "",
    address: "",
  });

  const closeModalEdit = () => setIsOpenEdit(false);
  const openModalEdit = (doctor) => {
    setIsOpenEdit(true);
    seteditDoctor(doctor);
  };
  // ======= Del MODAL FUNCTIUONS & STATES
  const [isOpenDel, setIsOpenDel] = useState(false);
  const closeModalDel = () => setIsOpenDel(false);
  const openModalDel = (doctor) => {
    setIsOpenDel(true);
    seteditDoctor(doctor);
  };
  //=========HANDELERS ========

  // STARTING API
  const { data, isLoading } = UseGetDoctors();
  dispatch(fetchDoctors(data));

  if (isLoading)
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loading_spin />
      </div>
    );

  return (
    <Box sx={{ height: 600, width: "95%", mx: "auto" }}>
      <TitlePage path={"Dashbord/Users / "} page={"Doctors"} />
      <AddButton add={openModal} title={"Add New Doctor"} />
      {data && data.length > 0 ? (
        <DataGrid
          rows={data.map((row) => ({
            id: row.id,
            name: row.name,
            phone: row.phone,
            email: row.email,
            static_role: row.static_role,
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
      <AddDoctor
        title={"Add New Doctor"}
        isOpen={isOpen}
        closeModal={closeModal}
        addDoctor={addDoctor}
        setaddDoctor={setaddDoctor}
      />
      <EditDoctor
        title={"Edit Doctor Information"}
        isOpenEdit={isOpenEdit}
        closeModalEdit={closeModalEdit}
        editDoctor={editDoctor}
        seteditDoctor={seteditDoctor}
      />
      <DelDoctor
        isOpen={isOpenDel}
        closeModal={closeModalDel}
        editDoctor={editDoctor}
        seteditDoctor={seteditDoctor}
      />
    </Box>
  );
};

export default Doctors;
