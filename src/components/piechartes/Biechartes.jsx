import { Box } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";
import { UseGetreportools } from "../../hooks/HReports/UseGetreporttools";

const Biechartes = () => {
 const {data : reportdata } = UseGetreportools()
  const data = [
    {
      id: "Rooms",
      label: "Rooms",
      value: reportdata && reportdata.num_room_tools || 30,
      color: "hsl(199, 70%, 50%)",
    },
    {
      id: "Labs",
      label: "Labs",
      value: reportdata && reportdata.num_lab_tools || 50,
      color: "hsl(2, 30%, 50%)",
    },
  
    {
      id: "All Rooms",
      label: "All Rooms",
      value: reportdata && reportdata.num_room ||50,
      color: "hsl(51, 70%, 50%)",
    },
  ];
  return (
    <Box sx={{ width: "100%", height: "110px" }}>
      <ResponsivePie
        theme={{
          background: "transparent",
          text: {
            fontSize: 11,
            fill: "#333333",
            outlineWidth: 0,
            outlineColor: "transparent",
          },
          axis: {
            domain: {
              line: {
                stroke: "#777777",
                strokeWidth: 1,
              },
            },
            legend: {
              text: {
                fontSize: 12,
                fill: "#333333",
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
            ticks: {
              line: {
                stroke: "#777777",
                strokeWidth: 1,
              },
              text: {
                fontSize: 11,
                fill: "#333333",
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
          },
          grid: {
            line: {
              stroke: "#dddddd",
              strokeWidth: 1,
            },
          },
          legends: {
            title: {
              text: {
                fontSize: 11,
                fill: "#333333",
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
            text: {
              fontSize: 11,
              fill: "#333333",
              outlineWidth: 0,
              outlineColor: "transparent",
            },
            ticks: {
              line: {},
              text: {
                fontSize: 10,
                fill: "#333333",
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
          },
          annotations: {
            text: {
              fontSize: 13,
              fill: "#333333",
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            link: {
              stroke: "#000000",
              strokeWidth: 1,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            outline: {
              stroke: "#000000",
              strokeWidth: 2,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            symbol: {
              fill: "#000000",
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
          },
          tooltip: {
            container: {
              background: "#ffffff",
              color: "#333333",
              fontSize: 12,
            },
            basic: {},
            chip: {},
            table: {},
            tableCell: {},
            tableCellValue: {},
          },
        }}
        data={data}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        startAngle={-65}
        innerRadius={0.7}
        padAngle={8}
        cornerRadius={6}
        activeInnerRadiusOffset={25}
        activeOuterRadiusOffset={8}
        colors={[`#696CFF`, "#03C3EC", "#71DD37"]}
        borderWidth={1}
        borderColor={{ theme: "grid.line.stroke" }}
        enableArcLinkLabels={false}
        arcLinkLabelsSkipAngle={15}
        arcLinkLabelsTextColor="#ffffff"
        arcLinkLabelsOffset={-13}
        arcLinkLabelsStraightLength={5}
        arcLinkLabelsDiagonalLength={10}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabel="value"
        arcLabelsRadiusOffset={0.1}
        arcLabelsSkipAngle={17}
        arcLabelsTextColor={{ theme: "background" }}
        motionConfig={{
          mass: 1,
          tension: 1,
          friction: 280,
          clamp: true,
          precision: 0.01,
          velocity: 0,
        }}
        transitionMode="startAngle"
        legends={[]}
      />
    </Box>
  );
};

export default Biechartes;
