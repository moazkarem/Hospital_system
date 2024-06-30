import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";

import Grid from "@mui/material/Grid";

import { IconButton } from "@mui/material";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";

import LineCharts from "../../Linescharts/LineCharts";
import { UseGetreportprice } from "../../../hooks/HReports/UseGetreportprice";
import Loading_spin from "../../../Ui/Loading_spin";
const RightSide = () => {
  const { data, isLoading } = UseGetreportprice();
  return (
    <Grid item xs={12} sm={6} lg={3}>
      {isLoading ? (
        <div className="w-full h-full flex justify-center items-center">
          <Loading_spin />
        </div>
      ) : (
        <Paper
          sx={{
            width: "100%",
            p: 1,
            height: { xl: "214px", lg: "214px", md: "214px" },
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <IconButton
              sx={{
                color: "#9AE7F7",
                backgroundColor: "#24445C",
              }}
            >
              <FolderCopyIcon />
            </IconButton>

            <IconButton
              sx={{
                color: "#9AE7F7",
                backgroundColor: "#24445C",
              }}
            >
              <FolderCopyIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: { xs: "wrap", sm: "wrap", lg: "nowrap" },
            }}
          >
            <div>
              <h1
                style={{
                  color: "#C5C5D5",
                  fontWeight: "bold",
                  marginBottom: 0,
                  fontSize: "16px",
                }}
              >
                Pharmacy
              </h1>
              <h1
                style={{
                  color: "#C5C5D5",
                  fontWeight: "bold",

                  fontSize: "12px",
                }}
              >
                Total Price
              </h1>
              <h1
                style={{
                  color: "#ff8800",
                  fontWeight: "bold",

                  fontSize: "15px",
                }}
              >
                {data.total_price} L.E
              </h1>
            </div>
            <LineCharts width={"65%"} height={"132px"} colore={"#71dd37"} />
          </Box>
        </Paper>
      )}
    </Grid>
  );
};

export default RightSide;
