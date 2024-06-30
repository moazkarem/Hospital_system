// @ts-nocheck
import { Box, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { IconButton } from "@mui/material";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import LineCharts from "../../Linescharts/LineCharts";
import { UseGetreportDoctors } from "../../../hooks/HReports/UseGetreportDoctorsnum";
import Loading_spin from "../../../Ui/Loading_spin";
import doctor from "../../../../src/assets/img/docs.jpeg";
import nurse from "../../../../src/assets/img/nurse.jpeg";
import Button from "../../../Ui/Button";
import { useNavigate } from "react-router-dom";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import { useSelector } from "react-redux";
const Rightside = () => {
  const {patients : dataPatients } = useSelector((state)=>state.getpatients)
  // console.log(dataPatients  , 'hone [atieny');
  const navigate = useNavigate();
  const { data, isLoading, error } = UseGetreportDoctors(); // Assuming UseGetreportDoctors returns isLoading and error as well
  const doctorNav = () => {
    navigate("/users/doctors");
  };
  const nurseNav = () => {
    navigate("/users/nursing");
  };
  const nursePatients = () => {
    navigate("/patients");
  };
  if (error) {
    return <Typography>Error: {error.message}</Typography>;
  }
  return (
    <Grid item gap={2} lg={6} xs={12} sm={12}>
      {isLoading ? (
        <div className="flex justify-center items-center h-full">
          <Loading_spin />
        </div>
      ) : (
        <Box
          gap={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              height: "188px",
              flexWrap: {
                lg: "nowrap",
                xl: "nowrap",
              },
            }}
            gap={2}
          >
            <Paper
              sx={{
                width: "49%",
                p: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",

                height: { xl: "188px", lg: "188px", md: "188px" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Button
                  onClick={nurseNav}
                  styles={"  bg-[#4D4036] text-[#FFAB00] d h-8 px-6"}
                >
                  Nurses{" "}
                </Button>

                <img
                  src={nurse}
                  style={{
                    width: "50px",
                    objectFit: "cover",
                    height: "50px",
                    borderRadius: "50%",
                  }}
                />
              </Box>
              <Typography
                sx={{
                  color: "rgba(219, 219, 235, .6)",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                Nurses Number
              </Typography>
              {/* {data && data.nurses ? data.nurses : "Empty"}{" "} */}
              <div className="w-full flex justify-center">
                <Gauge
                sx={(theme) => ({
                  [`& .${gaugeClasses.valueText}`]: {
                    fontSize: 20,
                  },
                  [`& .${gaugeClasses.valueArc}`]: {
                    fill: "#696CFF",
                  },
                  [`& .${gaugeClasses.referenceArc}`]: {
                    fill: '#71DD37',
                  },
                })}
                  width={70}
                  height={70}
                  startAngle={-90}
                  endAngle={100}
                  value={data && data.nurses ? data.nurses*2 : "Empty"}
                />
              </div>

              <Typography sx={{ color: "#ff3e1d", textAlign: "center" }}>
                More Details In Nurses Page
              </Typography>
            </Paper>

            <Paper
              sx={{
                width: "49%",
                p: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: { xl: "188px", lg: "188px", md: "188px" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <Button
                  onClick={doctorNav}
                  styles={" bg-[#4D4036] text-[#FFAB00] d h-8 px-6"}
                >
                  Doctors{" "}
                </Button>

                <img
                  src={doctor}
                  style={{
                    width: "50px",
                    objectFit: "cover",
                    height: "50px",
                    borderRadius: "50%",
                  }}
                />
              </Box>
              <Typography
                sx={{
                  color: "rgba(219, 219, 235, .6)",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                Doctor Numbers
              </Typography>
              {}{" "}
              <div className="w-full flex justify-center">
                <Gauge
                 sx={(theme) => ({
                  [`& .${gaugeClasses.valueText}`]: {
                    fontSize: 20,
                  },
                  [`& .${gaugeClasses.valueArc}`]: {
                    fill: "#696CFF",
                  },
                  [`& .${gaugeClasses.referenceArc}`]: {
                    fill: '#71DD37',
                  },
                })}
                  startAngle={-90}
                  endAngle={100}
                  width={70}
                  height={70}
                  value={data && data.doctors ? data.doctors*2 : "N/A"}
                />
              </div>
              <Typography sx={{ color: "#ff3e1d", textAlign: "center" }}>
                More Details in Doctors Page
              </Typography>
            </Paper>
          </Box>

          <Paper
            sx={{
              width: "100%",
              p: 1,
              height: { xl: "192px", lg: "192px", md: "192px" },
              flexGrow: { xs: 1 },
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >  <Button
            onClick={nursePatients}
            styles={"  bg-[#4D4036] text-[#FFAB00] d h-8 px-6"}
          >
            Patients{" "}
          </Button>

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
                    fontSize: "18px",
                  }}
                >
                  Patients
                </h1>
                <h1
                  style={{
                    color: "#C5C5D5",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  {dataPatients && dataPatients.length ? dataPatients.length : 0}
                </h1>
                <h1
                  style={{
                    color: "#ff8800",
                    fontWeight: "bold",
                    fontSize: "13px",
                  }}
                >
                  patient
                </h1>
              </div>
              <LineCharts width={"85%"} height={"140px"} colore={"#ffab00"} />
            </Box>
          </Paper>
        </Box>
      )}
    </Grid>
  );
};

export default Rightside;
