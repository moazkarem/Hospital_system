// @ts-nocheck
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { GridToolbar } from "@mui/x-data-grid";
import Button from "../../../Ui/Button";
import TitlePage from "../../../components/Title page/TitlePage";
import AddButton from "../../../components/Add Button/AddButton";
import AddNurse from "./Add Nurse/AddNurse";
import { useState } from "react";
import EditNurse from "./Edit Nurse/EditNurse";
import DelNurse from "./Delet Nurse/DelNurse";
import { UsegetNursing } from "../../../hooks/HNursing/UsegetNursing";
import { useDispatch } from "react-redux";
import { fetchNursing } from "../../../app/features/nursing/GetNursingSlice";
import Loading_spin from "../../../Ui/Loading_spin";

const Nursing = () => {
  const dispatch = useDispatch();
  const [addNurse, setaddNurse] = useState({
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
  const [editNurse, seteditNurse] = useState({
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
  const openModalEdit = (nurse) => {
    setIsOpenEdit(true);
    seteditNurse(nurse);
  };
  // ======= Del MODAL FUNCTIUONS & STATES
  const [isOpenDel, setIsOpenDel] = useState(false);
  const closeModalDel = () => setIsOpenDel(false);
  const openModalDel = (nurse) => {
    setIsOpenDel(true);
    seteditNurse(nurse);
  };
  //=========HANDELERS ========
  const { data, isLoading } = UsegetNursing();
  dispatch(fetchNursing(data));
  if (isLoading)
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loading_spin />
      </div>
    );
  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
      <TitlePage path={"Dashbord/Users / "} page={"Nursing"} />
      <AddButton add={openModal} title={"Add New Nurse"} />
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
      <AddNurse
        isOpen={isOpen}
        closeModal={closeModal}
        title={"Add New Nurse "}
        addNurse={addNurse}
        setaddNurse={setaddNurse}
      />
      <EditNurse
        isOpenEdit={isOpenEdit}
        closeModalEdit={closeModalEdit}
        title={"Edit Nurse Information"}
        editNurse={editNurse}
        seteditNurse={seteditNurse}
      />
      <DelNurse
        isOpen={isOpenDel}
        closeModal={closeModalDel}
        title={"Are Yoy Want To Delete Esraa"}
        editNurse={editNurse}
      />
    </Box>
  );
};
export default Nursing;
