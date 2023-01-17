import React, { Fragment } from 'react';
import { FormatNumbers } from '../FormatNumbers';


const TableRow = (props) => {
    const gross_income = props.tableAmounts.tableAmounts.gross_income;
    const tax = props.tableAmounts.tableAmounts.tax;
    const income = props.tableAmounts.tableAmounts.income;
    const weekly_gross_income = props.tableAmounts.tableAmounts.weekly_gross_income;
    const weekly_tax = props.tableAmounts.tableAmounts.weekly_tax;
    const weekly_income = props.tableAmounts.tableAmounts.weekly_income;
    const fortnightly_gross_income = props.tableAmounts.tableAmounts.fortnightly_gross_income;
    const fortnightly_tax = props.tableAmounts.tableAmounts.fortnightly_tax;
    const fortnightly_income = props.tableAmounts.tableAmounts.fortnightly_income;
    const monthly_gross_income = props.tableAmounts.tableAmounts.monthly_gross_income;
    const monthly_tax = props.tableAmounts.tableAmounts.monthly_tax;
    const monthly_income = props.tableAmounts.tableAmounts.monthly_income;

  return (
    <Fragment>
      <tr>
        <td className="border px-10 py-2">Gros Income</td>
        <td className="border px-10 py-2">
        <FormatNumbers value={weekly_gross_income} />
        </td>
        <td className="border px-10 py-2">
        <FormatNumbers value={fortnightly_gross_income} />
        </td>
        <td className="border px-10 py-2">
        <FormatNumbers value={monthly_gross_income} />
        </td>
        <td className="border px-10 py-2">
        <FormatNumbers value={gross_income} />
        </td>
      </tr>
      <tr>
        <td className="border px-10 py-2">Net Income</td>
        <td className="border px-10 py-2">
        <FormatNumbers value={weekly_income} />
        </td>
        <td className="border px-10 py-2">
        <FormatNumbers value={fortnightly_income} />
        </td>
        <td className="border px-10 py-2">
        <FormatNumbers value={monthly_income} />
        </td>
        <td className="border px-10 py-2">
        <FormatNumbers value={income} />
        </td>
      </tr>
      <tr>
        <td className="border px-10 py-2">Tax</td>
        <td className="border px-10 py-2">
        <FormatNumbers value={weekly_tax} />
        </td>
        <td className="border px-10 py-2">
        <FormatNumbers value={fortnightly_tax} />
        </td>
        <td className="border px-10 py-2">
        <FormatNumbers value={monthly_tax} />
        </td>
        <td className="border px-10 py-2">
        <FormatNumbers value={tax} />
        </td>
      </tr>
    </Fragment>
  );
};
export default TableRow;