import styled from "styled-components";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { FavoriteRounded, FavoriteBorderRounded } from "@mui/icons-material";
import { mockSearchResults } from "./staticData";
import Trend from "react-trend";
import Tooltip from "@mui/material/Tooltip";
import { connect, useDispatch } from "react-redux";
import { updateWhishlist } from "./store/appActions";

const SearchResultsContainer = styled.div`
  padding: 1rem 3rem;
  align-content: center;
`;

const Container = styled.div`
  /* border: 1px solid; */
  margin: 1rem;
  /* border-top-color: red; */
  background-color: #ffffff;
  border: 1px solid #cbcbcb;
  border-top: 1px solid #ee2e24;
`;

const StyledTh = styled(TableCell)`
  font-weight: bold !important;
  color: #474647 !important;
  text-align: left !important;
  /* padding: 0.5em; */
`;

const StyledTc = styled(TableCell)`
  color: #474647 !important;
  text-align: left !important;
  cursor: pointer;
  svg {
    color: red;
  }
`;

export const StyledInfo = styled(InfoIcon)`
  svg {
    color: "gray";
  }
  .MuiSvgIcon-root {
    color: "gray";
  }
`;

export const SearchResults = (props) => {
  const dispatch = useDispatch();

  return (
    <SearchResultsContainer>
      <Container>
        <Typography style={{ margin: "1rem" }} variant="h6">
          Creditsafe Recommended Companies{" "}
          <Tooltip title={recommendedInfoMessage} className="test">
            <StyledInfo />
          </Tooltip>
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <StyledTh></StyledTh>
                <StyledTh>Industry</StyledTh>
                <StyledTh align="right">Name</StyledTh>
                <StyledTh align="right">Safe Number</StyledTh>
                <StyledTh align="right">Creditscore</StyledTh>
                <StyledTh align="right">Turnover</StyledTh>
                <StyledTh align="right">
                  Trend
                  <Tooltip
                    title={trendMessage}
                    placement="top-start"
                    className="test"
                  >
                    <StyledInfo data-tip data-for="trendInfo" />
                  </Tooltip>
                </StyledTh>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.companiesList.length > 0 &&
                props.companiesList.map((row, index) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <StyledTc
                      component="th"
                      scope="row"
                      onClick={() => {
                        const modifiedList = props.companiesList.map(
                          (company) => {
                            if (company.safeNumber === row.safeNumber) {
                              return {
                                ...company,
                                whishlisted: !company.whishlisted,
                              };
                            } else {
                              return company;
                            }
                          }
                        );
                        dispatch(updateWhishlist(modifiedList));
                      }}
                    >
                      <Tooltip title="Add to watchlist">
                        {row.whishlisted ? (
                          <FavoriteRounded
                            color="red"
                            style={{ color: "red !important" }}
                          />
                        ) : (
                          <FavoriteBorderRounded
                            color="red"
                            style={{ color: "red !important" }}
                          />
                        )}
                      </Tooltip>
                    </StyledTc>
                    <StyledTc component="th" scope="row">
                      {row.industry}
                    </StyledTc>

                    <StyledTc component="th" scope="row">
                      {row.name}
                    </StyledTc>
                    <StyledTc align="right">{row.safeNumber}</StyledTc>
                    <StyledTc align="right">{row.creditScore}</StyledTc>
                    <StyledTc align="right">{row.turnover}</StyledTc>
                    <StyledTc align="right">
                      <Trend
                        data={row.trendData}
                        autoDraw
                        smooth
                        gradient={["red", "orange", "yellow"]}
                        radius={10}
                        strokeWidth={2}
                        strokeLinecap={"square"}
                        autoDrawDuration={2000}
                        autoDrawEasing="ease-in"
                        height={50}
                        width={100}
                      />
                    </StyledTc>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </SearchResultsContainer>
  );
};

const trendMessage =
  "This Trend is based on company turnover, creditscore and debtInformation";
const recommendedInfoMessage =
  "Creditsafe recommends companies based on your interest, frequent opened companies, most match industry sector etc...";
const mapStateToProps = (state) => ({
  companiesList: state.app.companiesList,
});
export default connect(mapStateToProps)(SearchResults);
