import {
  VictoryChart,
  VictoryScatter,
  //VictoryLabel,
  VictoryVoronoiContainer,
  VictoryTheme,
  VictoryTooltip,
  VictoryAxis,
} from "victory";

import portfolioData from "../../data/portfolio_data.json";
//import portfolioData from "../../data/portfolio_data_1k.json";

function ScatterChart() {
  portfolioData.tangency_portfolio.symbol = "star";
  portfolioData.tangency_portfolio.size = 4;
  const tangency_portfolio = portfolioData.tangency_portfolio;
  const data = [...portfolioData.data, tangency_portfolio];

  // Maximum values for each axis.
  const xMax = Math.round(Math.max(...data.map((obj) => obj.x)) * 100) / 100;
  const yMax = Math.round(Math.max(...data.map((obj) => obj.y)) * 100) / 100;
  // const aggregatedData = aggregatePoints(data, 0.01); // 0.1 unit radius
  // console.log(aggregatedData.lenght);
  return (
    <>
      <div>Victory</div>

      <VictoryChart
        domain={{ x: [0, xMax], y: [0, yMax] }}
        containerComponent={
          <VictoryVoronoiContainer
            labels={({ datum }) =>
              `X: ${datum.x.toFixed(4)}, Y: ${datum.y.toFixed(4)}`
            }
          />
        }
        theme={VictoryTheme.clean}
        style={{
          background: { fill: "#ffff" },
        }}
      >
        {/* Change colors of axis labels */}
        <VictoryAxis
          label='Expected Volatility'
          style={{
            axisLabel: { fill: "#ffff" },
            tickLabels: { fill: "#ffff", fontSize: 6 },
          }}
        />
        <VictoryAxis
          dependentAxis
          label='Expected Returns'
          style={{
            axisLabel: { fill: "#ffff" },
            tickLabels: { fill: "#ffff", fontSize: 6 },
          }}
        />
        <VictoryScatter
          //size={1}
          data={data}
          // labelComponent={
          //   <VictoryLabel
          //     angle={15}
          //     lineHeight={1.2}
          //     style={{ fontSize: 2, fill: "#2d7ff9" }}
          //   />
          // }
          size={(datum, active) => (active ? 5 : 1)}
          // labels={({ datum }) =>
          //   `X: ${datum.x.toFixed(4)}, Y: ${datum.y.toFixed(4)}`
          // }
          labelComponent={<VictoryTooltip />}
          style={{
            data: {
              fill: ({ datum }) => {
                if (datum.symbol === "star") {
                  return `rgb(0, 255, 0)`;
                }
                const normalizedY = datum.y / yMax;
                const red = Math.round(255 * normalizedY);
                const blue = Math.round(255 * (1 - normalizedY));
                return `rgb(${red}, 100, ${blue})`;
              },
            },
          }}
        />
      </VictoryChart>

      {/* Gradient sidebar (custom SVG) */}
      {/* <svg width={50} height={300}>
        <defs>
          <linearGradient id='gradient' x1='0%' y1='100%' x2='0%' y2='0%'>
            <stop offset='0%' stopColor='rgb(0, 100, 255)' />
            <stop offset='100%' stopColor='rgb(255, 100, 0)' />{" "}
            
          </linearGradient>
        </defs>
        <rect x='0' y='0' width='30' height='300' fill='url(#gradient)' />
        <text x='35' y='20' fontSize={10}>
          100
        </text>{" "}
        
        <text x='35' y='280' fontSize={10}>
          0
        </text>{" "}
       
      </svg> */}
    </>
  );
}

export default ScatterChart;
