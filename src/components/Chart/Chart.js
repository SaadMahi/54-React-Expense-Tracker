import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);

  const totalMAximum = Math.max(...dataPointValues); // Math.max needs number like this to filter the maximum number (1, 4, 5, 10) //10

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxVal={totalMAximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
