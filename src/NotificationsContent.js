import { Typography } from "@mui/material";
import React from "react";

export const NotificationsContent = () => {
  return (
    <div style={{ width: "500px" }}>
      {/* synopsis of Recent Changes for frequently visting companies will be shown
      here */}
      <div
        style={{
          color: "white",
          border: "1px solid green",
          background: "green",
          margin: "10px",
          fontSize: "10px !important",
        }}
      >
        <Typography variant="body1" style={{ fontSize: "14px" }}>
          slight change in Company Profit in last few weeks. For More info
          please open{" "}
          <a href={"/companies/TE000001"} style={{ color: "blue" }}>
            Company Report
          </a>
        </Typography>
      </div>
      <div
        style={{
          color: "white",
          border: "1px solid red",
          background: "red",
          margin: "10px",
          fontSize: "10px !important",
        }}
      >
        <Typography variant="body1" style={{ fontSize: "14px" }}>
          Decrease in Company financial status in last few weeks please open{" "}
          <a href={"/companies/TE000001"} style={{ color: "blue" }}>
            Company Report
          </a>
        </Typography>
      </div>
    </div>
  );
};

export default NotificationsContent;
