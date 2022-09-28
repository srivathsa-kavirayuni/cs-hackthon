import { TextField, Button } from "@mui/material";
import styled from "styled-components";
import SearchResults from "./SearchResults";

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
  return (
    <div>
      <SearchContainer>
        <InputField variant="outlined" />
        <StyledSearch variant="outlined">Search</StyledSearch>
      </SearchContainer>
      <SearchResults />
    </div>
  );
};

export default SearchComponent;
