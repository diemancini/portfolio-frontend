import React from "react";
import Plot from "react-plotly.js";

import Scatter from "../../utils/scatter";

import portfolioData from "../../data/portfolio_data.json";

function ScatterChart() {
  const getScatterData = () => {
    portfolioData.tangency_portfolio.symbol = "star";
    portfolioData.tangency_portfolio.size = 4;
    const tangency_portfolio = portfolioData.tangency_portfolio;
    const scatterData = [tangency_portfolio, ...portfolioData.data];

    return scatterData;
  };

  const scatterData = getScatterData();
  const scatter = new Scatter(scatterData);

  // Maximum values for each axis.
  const xMax = scatter.getRangeAxisValue(true);
  const yMax = scatter.getRangeAxisValue(false);

  // Create traces
  const traces = [scatter.getMainTraces(), scatter.getTangencyTraces()];

  // Layout configuration
  const layout = scatter.getLayoutConfiguration(xMax, yMax);

  // Configuration options
  const config = {
    responsive: true,
    displayModeBar: true,
  };

  return (
    <div style={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}>
      <Plot
        data={traces}
        layout={layout}
        config={config}
        style={{ width: "100%", height: "500px" }}
        onInitialized={(figure) => console.log("Chart initialized", figure)}
        onUpdate={(figure) => console.log("Chart updated", figure)}
      />
    </div>
  );
}

export default ScatterChart;
