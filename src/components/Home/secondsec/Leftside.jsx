import { Box, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Barchartes from "../../BarChartes/Barchartes";
import Button from "../../../Ui/Button";
import { Gauge ,gaugeClasses  } from "@mui/x-charts/Gauge";


import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import { useNavigate } from "react-router-dom";
import { UseGetreportools } from "../../../hooks/HReports/UseGetreporttools";
const Leftside = () => {
  const navigate = useNavigate();
  const handelModel = () => {
    navigate("/toolmodel");
  };
  const { data } = UseGetreportools();
  const value = (data && data.num_room * 4) || 'loading';
  return (
    <Grid item xs={12} md={12} lg={6} sm={12}>
      <Paper
        sx={{
          width: "100%",
          p: 2,

          height: { xl: "396px", lg: "396px", md: "396px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              lg: "row",
              xl: "row",
              md: "row",
              sm: "column",
              xs: "column",
            },
            alignItems: {
              sm: "center",
              xs: "center",
              lg: "inherit",
              xl: "inherit",
              md: "inherit",
            },
          }}
        >
          <Box sx={{ width: "70%" }}>
            <Typography sx={{ color: "rgpa(235 , 235 , 219 , .6)" }}>
              Patients / Month
            </Typography>
            <Barchartes
              width={"100%"}
              height={"340px"}
              showaxisandgrids={true}
            />
          </Box>
          <Box
            display={"flex"}
            ml={2}
            justifyContent={"space-around"}
            flexDirection={"column"}
            alignItems={"center"}
          >
            <Button
              onClick={handelModel}
              styles={" border border-solid border-[#696CFE] text-[#5A5CD1] "}
            >
              Predict Model
            </Button>

            {/* <img src={img1} className="w-96" /> */}
            <Gauge
              sx={(theme) => ({
                [`& .${gaugeClasses.valueText}`]: {
                  fontSize: 24,
                },
                [`& .${gaugeClasses.valueArc}`]: {
                  fill: "#696CFF",
                },
                [`& .${gaugeClasses.referenceArc}`]: {
                  fill: '#c5c5d5',
                },
              })}
              width={200}
              height={200}
              value={value}
              format={(value) => `${value} room`}
            />
              

              

            <Typography
              sx={{ color: "rgpa(235 , 235 , 219 , .6)", borderRadius: "10px" , display:'flex' , justifyContent:'center' , alignItems:'center' }}
              variant="body1"
            >
              Rooms Number  { ' '}
            <ArrowUpwardIcon />
            </Typography>
            <Box display={"flex"} width={"100%"}>
              <Box width={"45%"} sx={{ display: "flex" }}>
{/*                 
                <Box>
                  <Typography sx={{ color: "rgpa(219 , 219 , 235 , .6)" }}>
                    {" "}
                    Labs{" "}
                  </Typography>
                  <Typography sx={{ color: "#ff8800" }}>
                    {" "}
                    {(data && data.num_labs + " lab") || "Empty"}{" "}
                  </Typography>
                </Box> */}
              </Box>

              <Box sx={{ display: "flex" }}>
                
                {/* <Box>
                  <Typography sx={{ color: "rgpa(219 , 219 , 235 , .6)" }}>
                    {" "}
                    Rooms{" "}
                  </Typography>
                  <Typography sx={{ color: "#ff8800" }}>
                    {" "}
                    {(data && data.num_room + " room") || "Empty"}{" "}
                  </Typography>
                </Box> */}
              </Box>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default Leftside;
