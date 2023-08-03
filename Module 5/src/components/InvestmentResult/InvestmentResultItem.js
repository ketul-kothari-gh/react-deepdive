const InvestmentResultItem = (props) => {
  return (
    <tr>
      <td>{props.item.year}</td>
      <td>{props.item.savingsEndOfYear.toFixed(2)}</td>
      <td>{props.item.yearlyInterest.toFixed(2)}</td>
      <td>{props.item.interestGainedTillEndOfYear.toFixed(2)}</td>
      <td>{props.item.capitalTillEndOfYear.toFixed(2)}</td>
    </tr>
  );
};

export default InvestmentResultItem;
