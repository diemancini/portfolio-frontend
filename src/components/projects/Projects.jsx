import { Link } from "react-router-dom";
import ScatterChart from "./ScatterChartPlotly";
//import ScatterChart from "./ScatterChart";

function Projects() {
  return (
    <>
      {/* <Outlet /> */}
      <div>Projecs</div>
      <ScatterChart />
      <Link to='/' className='hover:text-accentCyan'>
        Back to Home
      </Link>
    </>
  );
}

export default Projects;
