export default function PgaTable({ data }) {
  return (
    <div className='leaderboard-table'>
      <table className='leaderboard-table'>
        <tbody>
          <tr>
            {data.columns.map((column) => {
              return <th key={column}>{column}</th>;
            })}
          </tr>
          {data.data.map((values) => {
            return (
              <tr key={values[0]} className='grid-1-5'>
                {values.map((value, key) => {
                  return <td key={data.columns[key] + values[0]}>{value}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
