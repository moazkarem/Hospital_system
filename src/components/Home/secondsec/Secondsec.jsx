import { Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import Leftside from "./Leftside";
import Rightside from "./Rightside";
const Secondsec = () => {
  return (
    <Stack direction={"row"} gap={2} width={"100%"} mb={3}>
      <Grid container spacing={2} wrap="wrap" >
        <Leftside />
        <Rightside />
      </Grid>
      
    </Stack>
  );
};
export default Secondsec;
