import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { useState, useEffect } from "react";

function Chart({ item }) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    getChartData();
  }, [item]);

  async function getChartData() {
    const fetchedData = await fetch(
      `https://api.coinstats.app/public/v1/charts?period=1y&coinId=${item.id}`
    );
    const result = await fetchedData.json();
    setChartData(result.chart);
  }

  const data = chartData.map((array) => {
    return { name: `day ${chartData.indexOf(array)}`, price: array[1] };
  });

  return (
    <div>
      <LineChart width={360} height={240} data={data}>
        <Line type="monotone" dataKey="price" stroke="#EBE645" dot={false} />
        <CartesianGrid stroke="#8692bd" strokeDasharray="5 5" />
        <XAxis dataKey="name" hide={true} />
        <YAxis stroke="#8692bd" />
        <Tooltip
          contentStyle={{ borderRadius: "0.5rem" }}
          labelStyle={{ color: "rgba(5, 8, 114, 1)" }}
          itemStyle={{ color: "rgba(5, 8, 114, 1)" }}
        />
      </LineChart>
    </div>
  );
}

export default Chart;
