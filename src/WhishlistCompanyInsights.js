import { Typography } from "@mui/material";
import ReactApexChart from "react-apexcharts";
import { chartOptions } from "./WhishlistViewTrend";

export const CompanyInsights = ({ data }) => {
  return (
    <>
      <div
        style={{
          width: "600px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div>
          {/* <Paper> */}
          <div>
            <Typography variant="body1" style={{ fontWeight: "bold" }}>
              Company: {data.name}
            </Typography>
          </div>
          <div>
            <Typography variant="body1">{data.safeNumber}</Typography>
          </div>
          <div>
            <Typography variant="body1" style={{ fontWeight: "bold" }}>
              Industry:{" "}
            </Typography>
            {data.industry}
          </div>
          <div>
            <Typography variant="body1" style={{ fontWeight: "bold" }}>
              Current Director :
            </Typography>
            {"John Abraham"}
          </div>
          <div>
            <Typography variant="body1" style={{ fontWeight: "bold" }}>
              Profit Or Loss :
            </Typography>
            {"$12543089"}
          </div>
          <div>
            <Typography variant="body1" style={{ fontWeight: "bold" }}>
              No. Of Employes
            </Typography>
            {"1254"}
          </div>
        </div>
        <div>
          <ReactApexChart
            options={{
              ...chartOptions,
              title: {
                text: "Compared to Competitors",
                align: "left",
              },
              fill: {
                type: "gradient",
                gradient: {
                  shade: "dark",
                  gradientToColors: ["#FDD835"],
                  shadeIntensity: 1,
                  type: "horizontal",
                  opacityFrom: 1,
                  opacityTo: 1,
                  stops: [0, 100, 100, 100],
                },
              },
            }}
            series={[
              {
                name: "Profit",
                data: [25, 41, 35, 51, 100],
              },
            ]}
            type="line"
            height={150}
            width={250}
          />
        </div>
        {/* </Paper> */}
      </div>
    </>
  );
};

export default CompanyInsights;
