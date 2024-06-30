
import { ResponsiveLine } from '@nivo/line'
const data =[
    {
      "id": "japan",
      "color": "hsl(168, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 159
        },
        {
          "x": "helicopter",
          "y": 276
        },
        {
          "x": "boat",
          "y": 278
        },
        {
          "x": "train",
          "y": 91
        },
        {
          "x": "subway",
          "y": 46
        },
        {
          "x": "bus",
          "y": 224
        },
        {
          "x": "car",
          "y": 287
        },
        {
          "x": "moto",
          "y": 111
        },
        {
          "x": "bicycle",
          "y": 218
        },
        {
          "x": "horse",
          "y": 178
        },
        {
          "x": "skateboard",
          "y": 184
        },
        {
          "x": "others",
          "y": 81
        }
      ]
    }
  ]
// eslint-disable-next-line react/prop-types
const LineCharts = ({width , height , colore}) => {
  return (
    <div style={{width:width, height:height}}>
     <ResponsiveLine
     theme={
        {
            "background": "transparent",
            "text": {
                "fontSize": 11,
                "fill": "#333333",
                "outlineWidth": 0,
                "outlineColor": "transparent"
            },
            "axis": {
                "domain": {
                    "line": {
                        "stroke": "#777777",
                        "strokeWidth": 1
                    }
                },
                "legend": {
                    "text": {
                        "fontSize": 12,
                        "fill": "#333333",
                        "outlineWidth": 0,
                        "outlineColor": "transparent"
                    }
                },
                "ticks": {
                    "line": {
                        "stroke": "#777777",
                        "strokeWidth": 1
                    },
                    "text": {
                        "fontSize": 11,
                        "fill": "#333333",
                        "outlineWidth": 0,
                        "outlineColor": "transparent"
                    }
                }
            },
            "grid": {
                "line": {
                    "stroke": "#dddddd",
                    "strokeWidth": 1
                }
            },
            "legends": {
                "title": {
                    "text": {
                        "fontSize": 11,
                        "fill": "#333333",
                        "outlineWidth": 0,
                        "outlineColor": "transparent"
                    }
                },
                "text": {
                    "fontSize": 11,
                    "fill": "#333333",
                    "outlineWidth": 0,
                    "outlineColor": "transparent"
                },
                "ticks": {
                    "line": {},
                    "text": {
                        "fontSize": 10,
                        "fill": "#333333",
                        "outlineWidth": 0,
                        "outlineColor": "transparent"
                    }
                }
            },
            "annotations": {
                "text": {
                    "fontSize": 13,
                    "fill": "#333333",
                    "outlineWidth": 2,
                    "outlineColor": "#ffffff",
                    "outlineOpacity": 1
                },
                "link": {
                    "stroke": "#000000",
                    "strokeWidth": 1,
                    "outlineWidth": 2,
                    "outlineColor": "#ffffff",
                    "outlineOpacity": 1
                },
                "outline": {
                    "stroke": "#000000",
                    "strokeWidth": 2,
                    "outlineWidth": 2,
                    "outlineColor": "#ffffff",
                    "outlineOpacity": 1
                },
                "symbol": {
                    "fill": "#000000",
                    "outlineWidth": 2,
                    "outlineColor": "#ffffff",
                    "outlineOpacity": 1
                }
            },
            "tooltip": {
                "container": {
                    "background": "#ffffff",
                    "color": "#333333",
                    "fontSize": 12
                },
                "basic": {},
                "chip": {},
                "table": {},
                "tableCell": {},
                "tableCellValue": {}
            }
        }
     }
        data={data}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        xScale={{ type: 'point' }}
        xFormat=" >-"
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        curve="basis"
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={null}
        enableGridX={false}
        enableGridY={false}
        colors={[colore]}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={3}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-20}
        enableArea={true}
        areaBlendMode="multiply"
        areaOpacity={0.4}
        enablePoints={false}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
    </div>
  )
}

export default LineCharts
