import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
// const CandlestickChart = ({ data }) => {
//   const chartContainerRef = useRef(null);

//   useEffect(() => {
//     const parentContainer = chartContainerRef.current.parentElement;
//     parentContainer.style.width = "100%";
//     const convertedData = data.map((item) => {
//       return {
//         time: item[0],
//         value: item[1],
//       };
//     });
//     const chart = createChart(chartContainerRef.current, {
//       width: 700,
//       height: 280,
//       layout: {
//         background: {
//           type: "solid",
//           color: "rgb(43, 43, 43)",
//         },
//         textColor: "white",
//       },
//     });
//     // chart.applyOptions({
//     //   width: "100%",
//     // });
//     chart.priceScale("right").applyOptions({
//       visible: false,
//     });
//     chart.priceScale("left").applyOptions({
//       visible: true,
//     });
//     const areaSeries = chart.addAreaSeries({
//       lineColor: "#FF9500",
//       topColor: "#FF9500",
//       bottomColor: "rgba(247, 228, 147, 0.918)",
//     });

//     areaSeries.setData(convertedData);
//     chart.timeScale().fitContent();

//     return () => chart.remove();
//   }, [data]);
//   return (
//     <div
//       ref={chartContainerRef}
//       className={` col-12 ${style.chartContainer} px-3`}
//     />
//   );
// };
// const data = {
//   labels: refdata.map((obj) => obj[0]), // Replace with your timestamps
//   datasets: [
//     {
//       label: "Opening Price",
//       borderColor: "rgb(255, 99, 132)",
//       data: refdata.map((obj) => obj[1]), // Replace with your opening prices
//       fill: false,
//     },
//     {
//       label: "Highest Price",
//       borderColor: "rgb(54, 162, 235)",
//       data: refdata.map((obj) => obj[2]), // Replace with your highest prices
//       fill: false,
//     },
//     {
//       label: "Lowest Price",
//       borderColor: "rgb(75, 192, 192)",
//       data: refdata.map((obj) => obj[3]), // Replace with your lowest prices
//       fill: false,
//     },
//   ],
// };
// const options = {
//   scales: {
//     x: {
//       title: {
//         display: true,
//         text: "Time",
//       },
//     },
//     y: {
//       title: {
//         display: true,
//         text: "Price",
//       },
//     },
//   },
// };
function formatTime(timestampInSeconds) {
  let milliseconds = timestampInSeconds * 1000;
  let date = new Date(milliseconds);

  // Extracting individual components of the date
  let year = date.getFullYear();
  let month = date.getMonth() + 1; // Adding 1 because months are zero-based
  let day = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  // Formatting the date in a human-readable format
  let formattedTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  return formattedTime;
}
const CandlestickChart = ({ data }) => {
  const chartData = {
    labels: data.map((obj) => formatTime(obj[0])),
    datasets: [
      {
        label: "High",
        data: data.map((obj) => obj[1]),
        borderColor: "blue",
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    responsive: true,
  };
  return <Line options={options} data={chartData} />;
};
export default CandlestickChart;
