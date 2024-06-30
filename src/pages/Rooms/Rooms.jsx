// @ts-nocheck
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { GridToolbar } from "@mui/x-data-grid";
import Button from "../../Ui/Button";
import TitlePage from "../../components/Title page/TitlePage";
import { useNavigate } from "react-router-dom";
import AddButton from "../../components/Add Button/AddButton";
import AddRoom from "./Add Room/AddRoom";
import EditRoom from "./Edit Room/EditRoom";
import DelRoom from "./Del Room/DelRoom";
import { UseGetRooms } from "../../hooks/HRooms/UseGetRooms";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchRooms } from "../../app/features/Rooms/GetRoomsSlice";
import { getRoomId } from "../../app/features/Room patients/GetRoompatientsslice";
import { getRoomToolId } from "../../app/features/RoomTools/GetRoomToolsSlice";
import Loading_spin from "../../Ui/Loading_spin";

const Rooms = () => {
  const dispatch = useDispatch();
  // ======= ADD MODAL FUNCTIUONS & STATES
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  // ======= EDIT MODAL FUNCTIUONS & STATES
  const [editRoom, seteditRoom] = useState({
    room_number: "",
    bed_numbers: "",
  });
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const closeModalEdit = () => setIsOpenEdit(false);
  const openModalEdit = (Room) => {
    setIsOpenEdit(true);
    seteditRoom(Room);
  };
  // ======= Del MODAL FUNCTIUONS & STATES
  const [isOpenDel, setIsOpenDel] = useState(false);
  const closeModalDel = () => setIsOpenDel(false);
  const openModalDel = (Room) => {
    setIsOpenDel(true);
    seteditRoom(Room);
  };
  //=========HANDELERS ========
  useEffect(() => {
    const storedRoomId = localStorage.getItem("roomId");
    if (storedRoomId) {
      dispatch(getRoomId(storedRoomId));
    }
  }, [dispatch]);
  const navigate = useNavigate();
  const navigatePatients = (room) => {
    const roomId = room.id;
    localStorage.setItem("roomId", roomId);
    dispatch(getRoomId(roomId));
    navigate(`/rooms/${roomId}/roompatients`);
  };

  const navigateRoomTools = (room) => {
    const roomId = room.id;
    localStorage.setItem("roomId", roomId);
    dispatch(getRoomToolId(roomId));
    navigate(`/rooms/${roomId}/roomtools`);
  };

  const { data, isLoading } = UseGetRooms();
  dispatch(fetchRooms(data));

  

  if (isLoading)
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loading_spin />
      </div>
    );
  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
      <TitlePage path={"Dashbord / "} page={"Rooms"} />
      <AddButton add={openModal} title={"Add New Room"} />
      {data && data.length > 0 ? (
        <DataGrid
          rows={data.map((row) => ({
            id: row.id,
            room_number: row.room_number,
            bed_numbers: row.bed_numbers,
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
                field: "patients",
                headerName: "Delete",
                width: 150,
                flex: 1,
                align: "center",
                headerAlign: "center",
                renderCell: (params) => (
                  <Button
                    onClick={() => navigatePatients(params)}
                    styles={"bg-[#2B4B62] text-[#03c3ec]"}
                  >
                    Patients
                  </Button>
                ),
              },
              {
                field: "tools",
                headerName: "Delete",
                width: 150,
                flex: 1,
                align: "center",
                headerAlign: "center",
                renderCell: (params) => (
                  <Button
                    onClick={() => navigateRoomTools(params)}
                    styles={"bg-[#54473C] text-[#ffab00]"}
                  >
                    Tools
                  </Button>
                ),
              },
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
      <AddRoom isOpen={isOpen} closeModal={closeModal} title={"Add New Room"} />
      <EditRoom
        isOpenEdit={isOpenEdit}
        closeModalEdit={closeModalEdit}
        title={"Edit  Room Info"}
        editRoom={editRoom}
        seteditRoom={seteditRoom}
      />
      <DelRoom
        isOpen={isOpenDel}
        closeModal={closeModalDel}
        editRoom={editRoom}
      />
    </Box>
  );
};

export default Rooms;
