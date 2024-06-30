import Typography from "@mui/material/Typography";
// eslint-disable-next-line react/prop-types
const TitlePage = ({ path, page }) => {
  return (
    <div>
      <Typography variant="h4" mb={2} color={"#CBCBE2"}>
        {path}
        <span className="text-[#ff8800]">{page}</span>
      </Typography>
    </div>
  );
};
export default TitlePage;
