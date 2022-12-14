import { Typography } from "@mui/material";
import ReactApexChart from "react-apexcharts";
import { useNavigate } from "react-router";

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

export const WhishlistTrend = (props) => {
  const navigate = useNavigate();
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
                text: "Industry Trend",
                align: "left",
              },
            }}
            series={[
              {
                name: "Industry Trend",
                data: [10, 41, 35, 51, 130],
              },
            ]}
            type="line"
            height={150}
            width={250}
          />
        </div>
        <div>
          <Typography variant="h">
            Note: For more information please visit{" "}
            <a href={`/companies/${props.safeNumber}`}>Company Report</a>
          </Typography>
        </div>
      </div>
    </>
  );
};

export default WhishlistTrend;
