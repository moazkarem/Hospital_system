import Biechartes from "../../piechartes/Biechartes";
import Grid from "@mui/material/Grid";
import { Paper } from "@mui/material";
import { UseGetreportools } from "../../../hooks/HReports/UseGetreporttools";
const Midside = () => {
  const  {data} = UseGetreportools()
  const allTools =data && data.num_lab_tools + data.num_room_tools
  return (
    <Grid item xs={12} sm={6} lg={3}>
      <Paper
        sx={{
          width: "100%",
          p: 1,
          height: { xl: "214px", lg: "214px", md: "214px" },
        }}
      >
        <h1 style={{ color: "#C5C5D5", fontWeight: "bold" }}>All Tool in Room & Lab</h1>
        <h1 style={{ color: "#C5C5D5", fontWeight: "bold", fontSize: "25px" }}>
          {allTools} <span className="text-[#ff8800] text-sm"> Tool </span>  {" "}
        </h1>
        <Biechartes />
      </Paper>
    </Grid>
  );
};

export default Midside;
