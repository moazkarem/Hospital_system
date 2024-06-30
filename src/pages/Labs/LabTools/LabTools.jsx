// @ts-nocheck
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { GridToolbar } from "@mui/x-data-grid";
import TitlePage from "../../../components/Title page/TitlePage";
import { useState } from "react";
import AddButton from "../../../components/Add Button/AddButton";
import AddLabTools from "./Add Lab Tools/AddLabTools";
import EditLabTools from "./Edit Lab Tools/EditLabTools";
import DelLabTools from "./Del Lab Tools/DelLabTools";
import { fetchLabTools } from "../../../app/features/labs/GetLabToolsSlice";
import { UseGetLabTools } from "../../../hooks/HLabs/HlabTools/UseGetLabTools";
import { useDispatch } from "react-redux";
import Loading_spin from "../../../Ui/Loading_spin";

const LabTools = () => {
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

  const { data, isLoading } = UseGetLabTools();
  dispatch(fetchLabTools(data));
  if (isLoading)
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loading_spin />
      </div>
    );

  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
      <TitlePage path={"Dashbord / Labs / "} page={"Lab Tools"} />
      <AddButton add={openModal} title={"Add New Lab Tools"} />
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
      <AddLabTools
        isOpen={isOpen}
        closeModal={closeModal}
        title={"Add New Tool In The Lab "}
      />
      <EditLabTools
        isOpenEdit={isOpenEdit}
        closeModalEdit={closeModalEdit}
        title={"Edit Tool Info In The Lab"}
      />
      <DelLabTools
        isOpen={isOpenDel}
        closeModal={closeModalDel}
        title={"Are You Want Del Tool From This Lab "}
      />
    </Box>
  );
};

export default LabTools;
