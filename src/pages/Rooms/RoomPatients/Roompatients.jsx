// @ts-nocheck
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { GridToolbar } from "@mui/x-data-grid";
import TitlePage from "../../../components/Title page/TitlePage";
import Button from "../../../Ui/Button";
import { useState } from "react";
import AddButton from "../../../components/Add Button/AddButton";
import AddRoomPatients from "./Add Room Patients/AddRoomPatients";
import EditRoomPatients from "./Edit Room Patients/EditRoomPatients";
import DelRoomPatients from "./Del Room Patients/DelRoomPatients";
import { UseGetRoomPatients } from "../../../hooks/HRoom Patients/UseGetRoomPatients";
import { useDispatch } from "react-redux";
import Loading_spin from "../../../Ui/Loading_spin";

import { fetchRoompatients } from "../../../app/features/Room patients/GetRoompatientsslice";
const Roompatients = () => {
  const StoredId = localStorage.getItem("roomId");
  const roomIdStored = JSON.parse(StoredId);
  const dispatch = useDispatch();
  // ======= ADD MODAL FUNCTIUONS & STATES
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  // ======= EDIT MODAL FUNCTIUONS & STATES
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [editRoomPatients, seteditRoomPatients] = useState({
    patient_id: "",
    room_id: roomIdStored,
    bed_number: "",
    date_in: "",
    date_out: "",
  });
  const closeModalEdit = () => setIsOpenEdit(false);
  const openModalEdit = (roompatients) => {
    setIsOpenEdit(true);
    seteditRoomPatients(roompatients);
  };
  // ======= Del MODAL FUNCTIUONS & STATES
  const [isOpenDel, setIsOpenDel] = useState(false);
  const closeModalDel = () => setIsOpenDel(false);

  //=========HANDELERS ========

  // @ts-ignore

  const { data, isLoading } = UseGetRoomPatients();
  dispatch(fetchRoompatients(data));

  if (isLoading)
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loading_spin />
      </div>
    );
  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
      <TitlePage path={"Dashbord / Rooms / "} page={"Room Patients"} />
      <AddButton add={openModal} title={"Add New Room Patients"} />
      {data && data.length > 0 ? (
        <DataGrid
          rows={data.map((row) => ({
            id: row.id,
            patient: row.patient.name,
            room: row.room.room_number,
            bed_number: row.bed_number,
            date_in: row.date_in,
            date_out: row.date_out || "Not Selected",
            edit: "Edit",
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
            ])}
          slots={{
            toolbar: GridToolbar,
          }}
        />
      ) : (
        <p>No data available</p>
      )}
      <AddRoomPatients
        isOpen={isOpen}
        closeModal={closeModal}
        title={"Add New Patients In the room "}
      />
      <EditRoomPatients
        isOpenEdit={isOpenEdit}
        closeModalEdit={closeModalEdit}
        title={"Edit Patients Info In The Room"}
        editRoomPatients={editRoomPatients}
        seteditRoomPatients={seteditRoomPatients}
      />
      <DelRoomPatients
        isOpen={isOpenDel}
        closeModal={closeModalDel}
        title={"Are You Want Del Patients From This Room "}
      />
    </Box>
  );
};
export default Roompatients;
