import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";

import { GridToolbar } from "@mui/x-data-grid";
import Button from "../../../Ui/Button";
import TitlePage from "../../../components/Title page/TitlePage";
import { useState } from "react";
import AddLabManager from "./Add Lab Manager/AddLabManager";
import EditLabManager from "./Edit Lab Manager/EditLabManager";
import DelLabManager from "./Del Lab Manager/DelLabManager";
import AddButton from "../../../components/Add Button/AddButton";
import { UseGetLabManager } from "../../../hooks/HLabs/HLabManager/UseGetLabManager";
import { fetchNursing } from "../../../app/features/nursing/GetNursingSlice";
import { useDispatch } from "react-redux";
const LabManager = () => {
  const dispatch = useDispatch();
  const [addLabManager, setaddLabManager] = useState({
    id: 0,
    name: "",
    phone: "",
    email: "",
    password: "",
    static_role: "",
  });
  // ======= ADD MODAL FUNCTIUONS & STATES
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  // ======= EDIT MODAL FUNCTIUONS & STATES
  const [editLabmanager, seteditLabmanager] = useState({
    id: 0,
    name: "",
    phone: "",
    email: "",
    password: "",
    static_role: "",
    address: "",
  });
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const closeModalEdit = () => setIsOpenEdit(false);
  const openModalEdit = (labmanager) => {
    setIsOpenEdit(true);
    seteditLabmanager(labmanager);
  };
  // ======= Del MODAL FUNCTIUONS & STATES
  const [isOpenDel, setIsOpenDel] = useState(false);
  const closeModalDel = () => setIsOpenDel(false);
  const openModalDel = () => setIsOpenDel(true);
  //=========HANDELERS ========

  const { data, isLoading } = UseGetLabManager();
  dispatch(fetchNursing(data));
  if (isLoading) return <h2>loading ...</h2>;

  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
      <TitlePage path={"Dashbord/Users / "} page={"Lab Managers"} />
      <AddButton add={openModal} title={"Add New Lab Manager"} />
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
      <AddLabManager
        isOpen={isOpen}
        closeModal={closeModal}
        title={"Add New Lab Manager"}
        addLabManager={addLabManager}
        setaddLabManager={setaddLabManager}
      />
      <EditLabManager
        isOpenEdit={isOpenEdit}
        closeModalEdit={closeModalEdit}
        title={"Edit Lab Manager Info"}
        editlabmanager = {editLabmanager}
        seteditlabmanager = {seteditLabmanager}
      />
      <DelLabManager
        isOpen={isOpenDel}
        closeModal={closeModalDel}
        title={"Are You Want To Del Lab Manager"}
        editlabmanager = {editLabmanager}
        seteditlabmanager = {seteditLabmanager}
      />
    </Box>
  );
};

export default LabManager;
