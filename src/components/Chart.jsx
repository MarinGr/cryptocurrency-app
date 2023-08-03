import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

function Chart({ chartData }) {
  const data = chartData.map((array) => {
    return { name: `day ${chartData.indexOf(array)}`, price: array[1] };
  });

  return (
    <div>
      <LineChart width={360} height={240} data={data}>
        <Line
          type="monotone"
          dataKey="price"
          stroke="var(--accent-color)"
          dot={false}
        />
        <CartesianGrid
          stroke="var( --secondary-text-color)"
          strokeDasharray="5 5"
        />
        <XAxis dataKey="name" hide={true} />
        <YAxis stroke="var( --secondary-text-color)" />
        <Tooltip
          contentStyle={{ borderRadius: "0.5rem" }}
          labelStyle={{ color: "var(--primary-color)" }}
          itemStyle={{ color: "var(--primary-color)" }}
        />
      </LineChart>
    </div>
  );
}

export default Chart;
