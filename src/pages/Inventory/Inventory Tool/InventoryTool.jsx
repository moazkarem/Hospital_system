// @ts-nocheck
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { GridToolbar } from "@mui/x-data-grid";
import TitlePage from "../../../components/Title page/TitlePage";
import { Usegetinvtool } from "../../../hooks/Invntory/Tool/UseGetinvTool";
import { fetchinvtool } from "../../../app/features/inventory/GetinvToolslice";
import { useDispatch } from "react-redux";
import Loading_spin from "../../../Ui/Loading_spin";

const InventoryTool = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = Usegetinvtool();
  dispatch(fetchinvtool(data));
  if (isLoading)
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loading_spin />
      </div>
    );
  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
      <TitlePage path={"Dashbord / Inventory / "} page={"Inventory Tool"} />
      {data && data.length > 0 ? (
        <DataGrid
          rows={data.map((row) => ({
            id: row.id,
            tool: row.tool.name,
            supplier: row.supplier || "not selected",
            stock_in:row.stock_in ||  "not selected",
            stock_out:row.stock_out ,
            type:row.type , 
            used_for:row.used_for ,
            created_at:row.created_at || 'test'
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
    </Box>
  );
};

export default InventoryTool;
