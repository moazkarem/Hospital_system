import { Box } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { UseGetreporyears } from ".././../hooks/HReports/UseYearsReports";
// eslint-disable-next-line react/prop-types
const Barchartes = ({ width, height, showaxisandgrids }) => {


const {data:dataYears} = UseGetreporyears()
  
const data = [
  {
    Month: "Jan",
    "hot dog": 124,
    "hot dogColor": "red",
    burger: 155,
  },
  {
    Month: "Feb",
    "hot dog": 24,
    "hot dogColor": "red",
    burger: 93,
  },
  {
    Month: "Mar",
    "hot dog": 154,
    "hot dogColor": "hsl(193, 70%, 50%)",
    burger: 42,
  },
  {
    Month: "Abr",
    "hot dog": 129,
    "hot dogColor": "hsl(124, 70%, 50%)",
    burger: 175,
  },
  {
    Month: "May",
    "hot dog": 115,
    "hot dogColor": "hsl(227, 70%, 50%)",
    burger: 190,
  },
  {
    Month: "Jun",
    "hot dog": 68,
    "hot dogColor": "hsl(26, 70%, 50%)",
    burger: 88,
  },
  {
    Month: "Jul",
    "hot dog": 150,
    "hot dogColor": "hsl(40, 70%, 50%)",
    burger: 163,
  },
];
  return (
    <Box sx={{ width: width, height: height }}>
      <ResponsiveBar
        data={data}
        keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
        theme={{
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
                fontSize: 16,
                fontWeight: "bold",
                fill: "rgba(219, 219, 235,.87)",
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
            ticks: {
              line: {
                stroke: "",
                strokeWidth: 1,
              },
              text: {
                fontSize: 11,
                fill: "rgba(219, 219, 235,.87)",
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
          },

          grid: {
            line: {
              stroke: "rgba(219, 219, 235,.87)",
              strokeWidth: 0.2,
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
        indexBy="Month"
        enableGridY={showaxisandgrids ? true : false}
        margin={{ top: 0, right: 0, bottom: 30, left: 30 }}
        padding={0.6}
        innerPadding={8}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={["#03C3EC", "#696CFF"]}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "fries",
            },
            id: "dots",
          },
          {
            match: {
              id: "sandwich",
            },
            id: "lines",
          },
        ]}
        enableLabel={false}
        borderRadius={10}
        borderColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: -25,

          legendPosition: "middle",
          legendOffset: 37,
          truncateTickAt: 0,
        }}
        axisLeft={
          showaxisandgrids
            ? {
                tickSize: 5,
                tickPadding: 5,
                tickRotation: -25,
                legend: "",
                legendPosition: "middle",
                legendOffset: -50,
                truncateTickAt: 0,
              }
            : null
        }
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        animate={false}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={(e) =>
          e.id + ": " + e.formattedValue + " in Month: " + e.indexValue
        }
      />
    </Box>
  );
};

export default Barchartes;
