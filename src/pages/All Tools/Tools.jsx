import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { GridToolbar } from "@mui/x-data-grid";
import Button from "../../Ui/Button";
import { useState } from "react";
import AddButton from "../../components/Add Button/AddButton";
import TitlePage from "../../components/Title page/TitlePage";
import AddTools from "./Add Tools/AddTools";
import EditTool from "./Edit Tools/EditTools";
import DelTool from "./DelTools/DelTools";
import { UseGetAllTools } from "../../hooks/HAllTools/UseGetAllTools";
import { useDispatch } from "react-redux";
import { fetchingTools } from "../../app/features/AllTools/GetAllToolsSlice";
import Loading_spin from "../../Ui/Loading_spin";

const Tools = () => {
  const dispatch = useDispatch();
  // ======= ADD MODAL FUNCTIUONS & STATES
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  // ======= EDIT MODAL FUNCTIUONS & STATES
  const [editTool, seteditTool] = useState({
    id: 0,
    name: "",
    type:'' ,
  });
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const closeModalEdit = () => setIsOpenEdit(false);
  const openModalEdit = (tool) => {
    setIsOpenEdit(true);
    seteditTool(tool);
  };
  // ======= Del MODAL FUNCTIUONS & STATES
  const [isOpenDel, setIsOpenDel] = useState(false);
  const closeModalDel = () => setIsOpenDel(false);

  const openModalDel = (tool) => {
    setIsOpenDel(true);
    seteditTool(tool);
  };
  //=========HANDELERS ========
  const { data, isLoading } = UseGetAllTools();
  dispatch(fetchingTools(data));
  if (isLoading)
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loading_spin />
      </div>
    );

  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
      <TitlePage path={"Dashbord / "} page={"All Tools In Hospital "} />
      <AddButton add={openModal} title={"Add New Tool "} />
      {data && data.length > 0 ? (
        <DataGrid
          rows={data.map((row) => ({
            id: row.id,
            name: row.name,
            type: row.type,
            edit: "Edit",
            delete: "Delete",
          }))}
          // @ts-ignore
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

            // @ts-ignore
            .concat([
              {
                field: "edit",
                headerName: "Edit",
                width: 150,
                flex: 1,
                align: "center",
                headerAlign: "center",
                renderCell: (params) => (
                  <
// @ts-ignore
                  Button
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
                  <
// @ts-ignore
                  Button
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
      <AddTools
        isOpen={isOpen}
        closeModal={closeModal}
        title={"Add New Tool"}
      />
      <EditTool
        isOpenEdit={isOpenEdit}
        closeModalEdit={closeModalEdit}
        title={"Edit Tool Information"}
        editTool={editTool}
        
      />
      <DelTool
        isOpen={isOpenDel}
        closeModal={closeModalDel}
        editTool={editTool}
      />
    </Box>
  );
};

export default Tools;
