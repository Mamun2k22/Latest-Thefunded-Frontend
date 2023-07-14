import { useEffect, useState } from "react";

// chart
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
} from "recharts";

export default function Chart() {
  const [disWith, setDisWith] = useState({
    top: 30,
    right: 15,
    left: 10,
    bottom: 20,
  });

  useEffect(() => {
    if (screen.width > 560) {
      setDisWith({
        top: 30,
        right: 30,
        left: 30,
        bottom: 30,
      });
    }
  }, []);

  const data = [
    {
      name: "1",
      day: 1,
      Profit: 0,
      "Max daily DD": "null",
    },
    {
      name: "2",
      day: 2,
      Profit: 320,
      "Max daily DD": "null",
    },
    {
      name: "3",
      day: 3,
      Profit: -140,
      "Max daily DD": "null",
    },
    {
      name: "4",
      day: 4,
      Profit: 295,
      "Max daily DD": "null",
    },
    {
      name: "5",
      day: 5,
      Profit: 150,
      "Max daily DD": "null",
    },
    {
      name: "6",
      day: 6,
      Profit: -200,
      "Max daily DD": "null",
    },
    {
      name: "7",
      day: 7,
      Profit: 500,
      "Max daily DD": "null",
    },
    {
      name: "8",
      day: 8,
      Profit: 356,
      "Max daily DD": "null",
    },
    {
      name: "9",
      day: 9,
      Profit: 350,
      "Max daily DD": "null",
    },
    {
      name: "10",
      day: 10,
      Profit: 400,
      "Max daily DD": "null",
    },
  ];

  const gradientOffset = () => {
    const dataMax = Math.max(...data.map((i) => i.uv));
    const dataMin = Math.min(...data.map((i) => i.uv));

    if (dataMax <= 0) {
      return 0;
    }
    if (dataMin >= 0) {
      return 1;
    }

    return dataMax / (dataMax - dataMin);
  };

  const off = gradientOffset();

  return (
    <ResponsiveContainer height="100%">
      <AreaChart data={data} margin={disWith}>
        <CartesianGrid />
        <XAxis />
        <YAxis />
        <Tooltip />
        <defs>
          <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
            <stop offset={off} stopColor="#c7b3fc34" stopOpacity={1} />
            <stop offset={off} stopColor="#c381fc34" stopOpacity={1} />
          </linearGradient>
        </defs>
        <Area dataKey="Max daily DD" stroke="#c382fc" fill="url(#splitColor)" />
        <Area dataKey="Profit" stroke="#c382fc" fill="url(#splitColor)" />
      </AreaChart>
    </ResponsiveContainer>
  );
}
