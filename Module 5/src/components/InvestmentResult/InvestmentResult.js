import InvestmentResultItem from "./InvestmentResultItem";
import style from "./InvestmentResult.css";

const InvestmentResult = (props) => {
  return (
    <div>
      {props.resultData.length === 0 && (
        <p id="noInvestmentMessage">Investment details not available</p>
      )}
      {props.resultData.length > 0 && (
        <table className={style.result}>
          <thead>
            <tr>
              <th>Year</th>
              <th>Total Savings</th>
              <th>Interest (Year)</th>
              <th>Total Interest</th>
              <th>Invested Capital</th>
            </tr>
          </thead>
          <tbody>
            {props.resultData.map((item) => {
              return <InvestmentResultItem key={item.year} item={item} />;
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default InvestmentResult;
