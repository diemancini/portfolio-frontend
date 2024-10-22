export default function PgaTableSection({ data }) {
  return (
    <section class='wrapper'>
      {/* Row title */}
      <main class='row title'>
        <ul>
          {data.columns.map((column) => {
            return <li key={column}>{column}</li>;
          })}
        </ul>
      </main>

      {data.data.map((values) => {
        return (
          <article class='row'>
            <ul>
              {values.map((value, key) => {
                return <li key={data.columns[key] + values[0]}>{value}</li>;
              })}
            </ul>
            <ul class='more-content'>
              <li>
                This 1665-player contest boasts a $300,000.00 prize pool and
                pays out the top 300 finishing positions. First place wins
                $100,000.00. Good luck!
              </li>
            </ul>
          </article>
        );
      })}
    </section>
  );
}
