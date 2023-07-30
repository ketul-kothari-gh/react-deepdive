import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointsValues = props.dataPoints.map((dp) => dp.value);
  const maxValue = Math.max(...dataPointsValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dp) => (
        <ChartBar
          key={dp.label}
          value={dp.value}
          label={dp.label}
          maxValue={maxValue}
        ></ChartBar>
      ))}
    </div>
  );
};

export default Chart;
