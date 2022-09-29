import React, { useState } from "react";
import { Button, Typography, IconButton, Tooltip } from "@mui/material";
import { connect } from "react-redux";
import {
  ShowChart,
  OnlinePrediction,
  Insights,
  ContentPasteSearch,
} from "@mui/icons-material";
import WhishlistTrend from "./WhishlistViewTrend";
import Model from "./Model";
import CompanyInsights from "./WhishlistCompanyInsights";
import { useNavigate } from "react-router";
import { StyledInfo } from "./SearchResults";
import Prediction from "./WhishlistPrediction";

export const WhishlistedCompanies = (props) => {
  const navigate = useNavigate();
  const [openModel, updateOpenModel] = useState({
    show: false,
    Component: undefined,
  });
  const filteredList =
    props.companiesList.length > 0
      ? props.companiesList.filter((company) => company.whishlisted)
      : [];
  return (
    <>
      <Model
        title={openModel.title}
        renderComponent={openModel.Component}
        onClose={() => updateOpenModel({ show: false, Component: undefined })}
        open={openModel.show}
      />
      {filteredList.length > 0 && (
        <Typography variant="h5">Your Interested Recommendations</Typography>
      )}
      <div style={{ padding: "30px" }}>
        {filteredList.length
          ? filteredList.map((company) => {
              return (
                <div style={{ borderBottom: "1px solid lightgray" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "15px",
                    }}
                  >
                    <Typography variant="h6">{company.name}</Typography>
                    <Typography variant="body1" style={{ alignSelf: "center" }}>
                      <span style={{ fontWeight: "bold" }}>Safe Number :</span>{" "}
                      {company.safeNumber}
                    </Typography>
                    <Typography variant="body1" style={{ alignSelf: "center" }}>
                      <span style={{ fontWeight: "bold" }}>Credit Score :</span>{" "}
                      {company.creditScore}
                    </Typography>
                    <Typography variant="body1" style={{ alignSelf: "center" }}>
                      <span style={{ fontWeight: "bold" }}>Turnover :</span>{" "}
                      {company.turnover}
                    </Typography>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "10px",
                    }}
                  >
                    <Button
                      style={{
                        background: "#329BE2",
                        color: "white",
                        height: "30px",
                      }}
                      onClick={() =>
                        updateOpenModel({
                          show: true,
                          Component: (
                            <WhishlistTrend safeNumber={company.safeNumber} />
                          ),
                          title: (
                            <Typography variant="h6">
                              Company Trends by Last Few Years
                              <Tooltip
                                title={
                                  "These trends are based on various criterias of company performance"
                                }
                              >
                                <StyledInfo />
                              </Tooltip>
                            </Typography>
                          ),
                        })
                      }
                    >
                      View Trend <ShowChart />
                    </Button>
                    <Button
                      style={{
                        background: "orange",
                        color: "white",
                        height: "30px",
                      }}
                      onClick={() =>
                        updateOpenModel({
                          show: true,
                          Component: <CompanyInsights data={company} />,
                          title: "Company Insights",
                        })
                      }
                    >
                      View Insights <Insights />
                    </Button>
                    <Button
                      style={{
                        background: "#329BE2",
                        color: "white",
                        height: "30px",
                      }}
                      onClick={() =>
                        updateOpenModel({
                          show: true,
                          Component: <Prediction />,
                          title: (
                            <Typography variant="h6">
                              Creditsafe Prediction
                              <Tooltip
                                title={
                                  "This future prediction is based on company last 5 years performance"
                                }
                              >
                                <StyledInfo />
                              </Tooltip>
                            </Typography>
                          ),
                        })
                      }
                    >
                      Prediction <OnlinePrediction />
                    </Button>
                    <Button
                      variant="outlined"
                      style={{ height: "30px" }}
                      onClick={() =>
                        navigate(`/companies/${company.safeNumber}`)
                      }
                    >
                      View Company <ContentPasteSearch />
                    </Button>
                  </div>
                </div>
              );
            })
          : "No Companies you are watching"}
      </div>
    </>
  );
};

export const mapStateToProps = (state) => ({
  companiesList: state.app.companiesList,
});
export default connect(mapStateToProps)(WhishlistedCompanies);
