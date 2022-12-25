import shortid from "shortid";
import PropTypes from 'prop-types';

function MonthTable({list}) {
  console.log('MonthTable', list);

  return (
    <div>
      <h2>Month Table</h2>
      <table>
        <tr>
          <th>Month</th>
          <th>Amount</th>
        </tr>
        {list.map(item => (
          <tr key={shortid.generate()}>
            <td>{item.month}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

MonthTable.propTypes = {
  list: PropTypes.array.isRequired
}

export default MonthTable;
