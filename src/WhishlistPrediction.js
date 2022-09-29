import React from "react";
import ReactApexChart from "react-apexcharts";
import { chartOptions } from "./WhishlistViewTrend";

export const Prediction = () => {
  return (
    <>
      <div>
        <ReactApexChart
          options={{
            ...chartOptions,
            title: {
              text: "Future Performance",
              align: "left",
            },
            xaxis: {
              categories: ["2022", "2023", "2024", "2025", "2026"],
            },
          }}
          series={[
            {
              name: "company performance",
              data: [10, 41, 35, 51, 100],
            },
          ]}
          type="line"
          height={150}
          width={550}
        />
      </div>
    </>
  );
};

export default Prediction;
