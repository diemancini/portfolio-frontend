
import IScatter from "../types/global"
class Scatter implements IScatter {
  scatterData: IScatterData[];
  tangencyPortfolio: IScatterData;

  constructor(scatterData: IScatterData[]) {
    this.scatterData = scatterData;
    this.tangencyPortfolio = scatterData[0];
    // Private field convention (not truly private)
    //this._ssn = ssn;
  }
  
  getRangeAxisValue = (isXAxis: boolean) => {
    const minAxis =
      Math.round(
        Math.min(...this.scatterData.map((obj) => (isXAxis ? obj.x : obj.y))) * 100
      ) / 100;
    const maxAxix =
      Math.round(
        Math.max(...this.scatterData.map((obj) => (isXAxis ? obj.x : obj.y))) * 100
      ) / 100;
    return { min: minAxis > 0.1 ? 0.1 : minAxis, max: maxAxix };
  };
  
  getMainTraces = () => {
    return {
      // Main scatter trace
      x: this.scatterData.map((point) => point.x),
      y: this.scatterData.map((point) => point.y),
      mode: "markers",
      type: "scattergl",
      name: "Portfolio Points",
      marker: {
        size: 8,
        color: this.scatterData.map((point) => point.y),
        colorscale: "Jet",
        colorbar: {
          title: "Sharpe Ratio",
          thickness: 20,
        },
        line: {
          width: 1,
          color: "#404040",
        },
        opacity: 0.8,
      },
      hoverinfo: "text",
      hovertext: this.scatterData.map((point) =>
        point.x == this.tangencyPortfolio.x && point.y === this.tangencyPortfolio.y
          ? `★ Tangency Portfolio ★ <br> Value: ${point.x.toFixed(
              4
            )}, ${point.y.toFixed(4)}`
          : `Portfolio Points <br> Value: ${point.x.toFixed(
              4
            )}, ${point.y.toFixed(4)}`
      ),
    };
  };

  getTangencyTraces = () => {
    return {
      // Special star point trace
      x: [this.tangencyPortfolio.x],
      y: [this.tangencyPortfolio.y],
      mode: "markers",
      type: "scattergl",
      name: "Special Point",
      marker: {
        size: 18,
        symbol: "star",
        color: "gold",
        line: {
          color: "darkgoldenrod",
          width: 2,
        },
      },
    };
  };

  getLayoutConfiguration = (xMax: IRangeAxis, yMax: IRangeAxis) => {
    return {
      title: "Scatter Chart with Star Symbol",
      showlegend: true,
      hovermode: "closest",
      xaxis: {
        title: {
          text: "Expected Volatility",
          color: "black",
        },
        range: [xMax.min, xMax.max],
        showgrid: true,
        zeroline: true,
      },
      yaxis: {
        title: {
          text: "Expected Return",
          color: "black",
          size: 10,
        },
        range: [yMax.min, yMax.max],
        showgrid: true,
        zeroline: true,
      },
      margin: {
        l: 50,
        r: 50,
        b: 50,
        t: 50,
        pad: 4,
      },
    };
  };
}

export default Scatter;


