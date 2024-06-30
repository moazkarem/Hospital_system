import { Stack } from "@mui/material";

import Grid from "@mui/material/Grid";

import LeftSide from "./LeftSide";
import Midside from "./Midside";
import RightSide from "./RightSide";
const Firstsec = () => {
  return (
    <Stack direction={"row"} gap={2} width={"100%"} mb={3}>
      <Grid container spacing={2} wrap="wrap">
        <LeftSide />
        <Midside />
        <RightSide />
      </Grid>
    </Stack>
  );
};

export default Firstsec;
