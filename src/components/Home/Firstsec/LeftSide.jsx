// @ts-nocheck
import { Box, Paper, Typography } from "@mui/material";
import Button from "../../../Ui/Button";
// @ts-ignore
import img1 from "../../../assets/img/img1.png";
import Grid from "@mui/material/Grid";
import {  useNavigate } from "react-router-dom";
const LeftSide = () => {
  const navigate = useNavigate()
  const handelModel = ()=>{
    navigate('/model')
  }
  return (
    <Grid item xs={12} sm={12} lg={6}>
      <Paper
        sx={{
          height: { xl: "214px", lg: "214px", md: "214px" },
          width: "100%",
          p: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: { lg: "nowrap", md: "nowrap", xs: "wrap", sm: "wrap" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
           <h6 className="mb-1 text-xl text-[#696cff]  font-semibold">
          Predict Model (Beds)
          </h6>
          <Typography variant="p"  mb={1}>
          You can predict the number of beds available in a specific period from this model
          </Typography>
          <Button
          onClick={handelModel}
            styles={" border border-solid border-[#696CFE] text-[#5A5CD1] "}
          >
            Go To Model
          </Button>
        </Box>
        <img src={img1} alt="image" />
      </Paper>
    </Grid>
  );
};

export default LeftSide;
