import { Typography } from "@mui/material";
import ReactApexChart from "react-apexcharts";

export const chartOptions = {
  chart: {
    height: 150,
    width: 150,
    type: "line",
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
  },
  grid: {
    row: {
      colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
      opacity: 0.5,
    },
  },
  xaxis: {
    categories: ["2021", "2020", "2019", "2018", "2019"],
  },
};

export const WhishlistTrend = () => {
  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div>
          <ReactApexChart
            options={{
              ...chartOptions,
              title: {
                text: "Turnover Trend",
                align: "left",
              },
            }}
            series={[
              {
                name: "Turnover",
                data: [10, 41, 35, 51, 100],
              },
            ]}
            type="line"
            height={150}
            width={250}
          />
        </div>
        <div>
          <ReactApexChart
            options={{
              ...chartOptions,
              title: {
                text: "Profit and Loss Trend",
                align: "left",
              },
            }}
            series={[
              {
                name: "Profit",
                data: [-10, 41, 35, -51, 100],
              },
            ]}
            type="bar"
            height={150}
            width={250}
          />
        </div>
        <div>
          <ReactApexChart
            options={{
              ...chartOptions,
              title: {
                text: "Performance Trend",
                align: "left",
              },
            }}
            series={[
              {
                name: "performance",
                data: [10, 41, 35, 51, 30],
              },
            ]}
            type="line"
            height={150}
            width={250}
          />
        </div>
        <div>
          <ReactApexChart
            options={{
              ...chartOptions,
              title: {
                text: "Credit and Debit",
                align: "left",
              },
            }}
            series={[
              {
                name: "Credit",
                data: [10, 41, 35, 51, 130],
              },
              {
                name: "Debit",
                data: [20, 31, 55, 11, 60],
              },
            ]}
            type="bar"
            height={150}
            width={250}
          />
        </div>
        <div>
          <Typography variant="h">
            Note: For more information please visit Company Report
          </Typography>
        </div>
      </div>
    </>
  );
};

export default WhishlistTrend;
