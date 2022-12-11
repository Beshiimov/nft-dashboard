import React, {FC} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import {chartsType} from "../../redux/slices/currencies/types";

ChartJS.register(
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  CategoryScale,
);

const data = (element, growUp) => {
  const chart = useSelector<RootState, chartsType[]>(state => state.currenciesSlice.charts).filter(e => e.Name === element)[0]
  if (!chart) {
    return <h2>Can't load charts...</h2>
  }

  const data: number[] = chart.Data.map(e => e.open)

  return {
    labels: chart.Data.map(e => e.open),
    datasets: [
      {
        label: "",
        lineTension: 0.5,
        borderWidth: 2,
        borderColor: growUp ? "rgba(75,192,192,1)" : "rgba(168,41,23,0.8)",
        fill: "start",
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 120);
          growUp ? gradient.addColorStop(0, "rgba(0,255,62, 0.9)") :
            gradient.addColorStop(0, "rgba(220,9,9,0.9)");
          gradient.addColorStop(.7, "rgba(0,0,0,0)");
          return gradient;
        },
        borderJoinStyle: "miter",
        data: data
      },
    ],
  }
};
const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  elements: {
    point: {
      radius: 0
    },
  },
  scales: {
    x: {
      display: false
    },
    y: {
      display: false
    }
  },
  layout: {
    padding: {
      top: 30,
      bottom: 5
    },
  }
};

type ChartLineType = {
  element: string
  growUp: boolean
}

const ChartLine:FC<ChartLineType> = React.memo(({element, growUp}) => {

  return (
    // @ts-ignore
    <Line options={options} data={data(element, growUp)} type="line"/>
  )
})

export default ChartLine