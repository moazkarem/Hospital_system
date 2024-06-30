// @ts-nocheck
import { Avatar } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import ourLogo from "../../../src/assets/img/ourlogo.jpg";
// eslint-disable-next-line react/prop-types
const Logo = ({ open }) => {
  const theme = useTheme();
  return (
    <>
      <Avatar
        sx={{
          mx: "auto",
          mt: 1,
          mb: 1,
          width: open ? 88 : 44,
          height: open ? 88 : 44,
          border: "2px solid gray",
          transition: ".25s",
        }}
        alt="Travis Howard"
        src={ourLogo}
      />
      <Typography
        align="center"
        fontSize={open ? 17 : 0}
        sx={{ transition: ".25s" }}
      >
        Hospital
      </Typography>
      <Typography
        align="center"
        fontSize={open ? 15 : 0}
        sx={{ mb: 1, transition: ".25s", color: theme.palette.primary.dark }}
      >
        Resourse Management
      </Typography>
    </>
  );
};

export default Logo;
