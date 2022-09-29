import React from "react";
import { TextField, Button } from "@mui/material";
import styled from "styled-components";
import SearchResults from "./SearchResults";
import { useDispatch } from "react-redux";
import { getCompany, getRecommendedCompanies } from "./store/appActions";
import axios from "axios";

const InputField = styled(TextField)`
  .MuiInputBase-root {
    height: 2.5rem;
    width: 50rem;
  }
`;
const StyledSearch = styled(Button)`
  background: rgb(195, 38, 30) !important;
  border: 1px solid rgb(238, 46, 36) !important;
  height: 2.5rem;
  color: white !important;
  border-radius: 0px 7px 7px 0px !important;
  /* font-size: 1.4rem !important; */
  left: -0.1rem;
`;
const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  top: 1rem;
  margin-top: 1rem;
`;
export const SearchComponent = ({}) => {
  const dispatch = useDispatch();
  const [searchInput, updateSearchInput] = React.useState("");
  return (
    <div>
      <SearchContainer>
        <InputField
          variant="outlined"
          onChange={(e) => updateSearchInput(e.target.value)}
        />
        <StyledSearch
          variant="outlined"
          onClick={() => {
            // http://10.70.10.129:8000
            axios
              .get(
                `https://hackthon-401unauthorized-api.herokuapp.com/company/${searchInput}`
              )
              .then((response) => dispatch(getCompany(response.data)))
              .catch((err) => console.log("Err"));
            axios
              .get(
                `https://hackthon-401unauthorized-api.herokuapp.com/company/${searchInput}/recommended`
              )
              .then((response) =>
                dispatch(getRecommendedCompanies(response.data))
              )
              .catch((err) => console.log("Err"));
          }}
        >
          Search
        </StyledSearch>
      </SearchContainer>
      <SearchResults />
    </div>
  );
};

export default SearchComponent;
