import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = (props) => {
  const totalMax = Math.max(...props.dataPoints.map((dp) => dp.value));

  return (
    <div className="chart">
      {props.dataPoints.map((dp) => (
        <ChartBar
          key={dp.label}
          value={dp.value}
          maxValue={totalMax}
          label={dp.label}
        />
      ))}
    </div>
  );
};

export default Chart;
