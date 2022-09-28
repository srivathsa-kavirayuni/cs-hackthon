import React from "react";
import AppBar from "./AppBar";
import "./App.css";
import SideMenu from "./Menu";
import AppComponent from "./AppComponents";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import styled from "styled-components";
import { createStore } from "redux";
import { Provider } from "react-redux";
import appStore from "./store";
import { composeWithDevTools } from "redux-devtools-extension";

const history = createBrowserHistory();

const StyledApp = styled.div`
  position: absolute;
  inset: 5rem 0px 0px;
  display: flex;
  flex-flow: column;
`;

const StyledMain = styled.main`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  overflow: hidden;
`;

function App() {
  const store = createStore(appStore, {}, composeWithDevTools());
  return (
    <Provider store={store}>
      <Router history={history}>
        <StyledApp className="app">
          <AppBar position="fixed" />

          <StyledMain>
            <SideMenu />

            <section style={{ width: "100%" }}>
              <article>
                <AppComponent />
              </article>
            </section>
          </StyledMain>
        </StyledApp>
      </Router>
    </Provider>
  );
}

export default App;
