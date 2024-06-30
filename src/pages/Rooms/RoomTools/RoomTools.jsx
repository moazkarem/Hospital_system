// @ts-nocheck
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { GridToolbar } from "@mui/x-data-grid";
import TitlePage from "../../../components/Title page/TitlePage";
import { useState } from "react";
import AddButton from "../../../components/Add Button/AddButton";
import AddRoomTools from "./Add Room Tools/AddRoomTools";
import EditRoomTools from "./Edit Room Tools/EditRoomTools";
import DelRoomTools from "./Delete Room Tools/DelRoomTools";
import Loading_spin from "../../../Ui/Loading_spin";
import { UseGetRoomTools } from "../../../hooks/RoomTools/UsegetRoomTools";
import { useDispatch } from "react-redux";
import { fetchRoomTools } from "../../../app/features/RoomTools/GetRoomToolsSlice";

const RoomTools = () => {
  const dispatch = useDispatch();
  // ======= ADD MODAL FUNCTIUONS & STATES
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  // ======= EDIT MODAL FUNCTIUONS & STATES
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const closeModalEdit = () => setIsOpenEdit(false);

  // ======= Del MODAL FUNCTIUONS & STATES
  const [isOpenDel, setIsOpenDel] = useState(false);
  const closeModalDel = () => setIsOpenDel(false);

  //=========HANDELERS ========

  const { data, isLoading } = UseGetRoomTools();
  dispatch(fetchRoomTools(data));
  if (isLoading)
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loading_spin />
      </div>
    );
  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
      <TitlePage path={"Dashbord / Rooms / "} page={"Room Tools"} />
      <AddButton add={openModal} title={"Add New Room Tool"} />
      {data && data.length > 0 ? (
        <DataGrid
          rows={data.map((row) => ({
            id: row.id,
            tool: row.tool.name,
            quantity: row.quantity,
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

            .concat([])}
          slots={{
            toolbar: GridToolbar,
          }}
        />
      ) : (
        <p>No data available</p>
      )}
      <AddRoomTools
        isOpen={isOpen}
        closeModal={closeModal}
        title={"Add New Tool In the room "}
      />
      <EditRoomTools
        isOpenEdit={isOpenEdit}
        closeModalEdit={closeModalEdit}
        title={"Edit Tool Info In The Room"}
      />
      <DelRoomTools
        isOpen={isOpenDel}
        closeModal={closeModalDel}
        title={"Are You Want Del Tool From This Room "}
      />
    </Box>
  );
};
export default RoomTools;
