//import PlotData from "plotly.js";
declare global {
  interface IScatterData {
    readonly x: number;
    readonly y: number;
  }
  interface IRangeAxis {
    min: number;
    max: number;
  }

  interface IDictionary<T> {
    [Key: string]: T;
  }

  interface IScatter {
    scatterData: IScatterData[];
    tangencyPortfolio: IScatterData;
    getRangeAxisValue(isXAxis: boolean): IRangeAxis;
    getMainTraces(): IDictionary<string | number | Array<number | string> | object>;
    getTangencyTraces(): IDictionary<string | number | Array<number | string> | object>;
    getLayoutConfiguration(xMax: IRangeAxis, yMax: IRangeAxis): IDictionary<string | number | boolean | object>;
  }
}

export {};