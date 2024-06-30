import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { GridToolbar } from "@mui/x-data-grid";

import TitlePage from "../../../components/Title page/TitlePage";
import { useState } from "react";
import AddButton from "../../../components/Add Button/AddButton";
import AddLabPatients from "./Add Lab Patients/AddLabPatients";
import Loading_spin from "../../../Ui/Loading_spin";

import { UseGetLabPatients } from "../../../hooks/HLabs/LabPatients/UseGetLabPatients";

const Labpatients = () => {
  // ======= ADD MODAL FUNCTIUONS & STATES
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const { data, isLoading } = UseGetLabPatients();
  console.log(data, "lab patients");
  if (isLoading)
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loading_spin />
      </div>
    );

  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
      <TitlePage path={"Dashbord / Labs / "} page={"Lab Patients"} />
      <AddButton add={openModal} title={"Add New Lab Patients"} />
      {data && data.length > 0 ? (
        <DataGrid
          rows={data.map((row) => ({
            id: row.id,
            patient: row.patient.name,
            laboratory: row.laboratory.name,
            appointment: row.appointment,
            description: row.description,
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
      <AddLabPatients
        isOpen={isOpen}
        closeModal={closeModal}
        title={"Add New Patients In The Lab "}
      />
    </Box>
  );
};

export default Labpatients;
