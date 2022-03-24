import { FC } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/index";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import MuiTheme from "./theme";
import { styled } from "@mui/material/styles";
import ThemeSwitch from "./components/ThemeSwitch";
import Background from './components/Background';

const App: FC = () => {


  return (
    <div className="App">
      <Provider store={store}>
        <MuiTheme>
          <Background />
          <BrowserRouter>
            <Router />
            <ThemeSwitch />
          </BrowserRouter>
        </MuiTheme>
      </Provider>
    </div>
  );
};

export default App;
