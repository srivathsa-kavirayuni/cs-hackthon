import { Routes, Route } from "react-router-dom";
import CompaniesReport from "./CompaniesReport";
import Monitoring from "./Monitoring";
import SearchComponent from "./SearchComponent";
import WhishlistedCompanies from "./Whishlisted";

export const AppComponent = () => {
  return (
    <>
      <Routes>
        <Route exact path={"/creditsafeHome"} element={<SearchComponent />} />
        <Route path={"/"} element={<SearchComponent />} />
        <Route exact path={"/monitoring"} element={<Monitoring />} />
        <Route exact path={"/whishlisted"} element={<WhishlistedCompanies />} />
        <Route exact path={"/companies/:id"} element={<CompaniesReport />} />
      </Routes>
    </>
  );
};
export default AppComponent;
