import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import { getUrl, useHttp } from "../../hooks/http.js";
import PgaTable from "../UI/PgaTable.jsx";

const requestConfig = {};

export default function Pga() {
  const {
    //data: loadedMeals,
    data,
    isLoading,
    error,
  } = useHttp(getUrl(), requestConfig, []);

  let content;

  if (isLoading) {
    //console.log("IS PENDING....");
    content = (
      <div className='div-center'>
        <LoadingIndicator />
      </div>
    );
  }

  //if (isError) {
  if (error) {
    content = (
      <div className='div-center'>
        <ErrorBlock
          title='An error occurred'
          message={error.info?.message || "Failed to fetch leaderboard."}
        />
      </div>
    );
  }

  if (data !== undefined && data.data !== undefined) {
    content = <PgaTable data={data} />;
  }

  return (
    <section className='content-section' id='leaderboard-section'>
      <header className='center'>
        <h2>Leaderboard</h2>
      </header>
      {content}
    </section>
  );
}
