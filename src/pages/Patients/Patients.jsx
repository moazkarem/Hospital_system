// @ts-nocheck
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { GridToolbar } from "@mui/x-data-grid";
import Button from "../../Ui/Button";
import { useState } from "react";
import AddButton from "../../components/Add Button/AddButton";
import TitlePage from "../../components/Title page/TitlePage";
import AddPatients from "./Add patients/AddPatients";
import EditPatients from "./Edit Patients/EditPatients";
import DelPatients from "./Del Patients/DelPatients";
import { fetchPatients } from "../../app/features/patients/GetpatientsSlice";
import { UsegetPatients } from "../../hooks/HPatients/UsegetPatients";
import { useDispatch } from "react-redux";
import Loading_spin from "../../Ui/Loading_spin";

const Patients = () => {
  const dispatch = useDispatch();

  // ======= ADD MODAL FUNCTIONS & STATES
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  // ======= EDIT MODAL FUNCTIONS & STATES
  const [editPatients, setEditPatients] = useState({
    id: 0,
    name: "",
    gender: "",
    address: "",
    disease: "",
  });
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const closeModalEdit = () => setIsOpenEdit(false);
  const openModalEdit = (patients) => {
    setIsOpenEdit(true);
    setEditPatients(patients);
  };

  // ======= DEL MODAL FUNCTIONS & STATES
  const [isOpenDel, setIsOpenDel] = useState(false);
  const closeModalDel = () => setIsOpenDel(false);
  const openModalDel = (patient) => {
    setIsOpenDel(true);
    setEditPatients(patient);
  };

  //========= HANDLERS ========
  const { data, isLoading } = UsegetPatients();
  dispatch(fetchPatients(data));

  if (isLoading)
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loading_spin />
      </div>
    );

  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
      <TitlePage path={"Dashboard / "} page={"Patients"} />
      <AddButton add={openModal} title={"Add New Patients"} />
      {data && data.length > 0 ? (
        <DataGrid
          rows={data.map((row) => ({
            id: row.id,
            name: row.name,
            gender: row.gender,
            address: row.address,
            disease: row.disease,
            user: row.user.email,
            edit: "Edit",
            delete: "Delete",
          }))}
          columns={Object.keys(data[0])
            .filter((key) => key !== "edit" && key !== "delete")
            .map((key) => ({
              field: key,
              headerName: key.charAt(0).toUpperCase() + key.slice(1),
              width: 150,
              flex: 1,
              align: "center",
              headerAlign: "center",
            }))
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
          slots={{ toolbar: GridToolbar }}
        />
      ) : (
        <p>No data available</p>
      )}
      <AddPatients
        isOpen={isOpen}
        closeModal={closeModal}
        title={"Add New Patients"}
      />
      <EditPatients
        isOpenEdit={isOpenEdit}
        closeModalEdit={closeModalEdit}
        title={"Edit Patients Information"}
        setEditPatients={setEditPatients}
        editPatients={editPatients}
      />
      <DelPatients
        isOpen={isOpenDel}
        closeModal={closeModalDel}
        editPatients={editPatients}
      />
    </Box>
  );
};

export default Patients;
