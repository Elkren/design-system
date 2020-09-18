import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from "./components/Buttons";
import { GlobalStyle, darkTheme, defaultTheme } from "./utils";

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  console.log(darkTheme);
  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <div
        style={{
          background: useDarkTheme
            ? defaultTheme.primaryColor
            : darkTheme.primaryColor,
        }}
      >
        <div
          style={{
            width: "100vw",
            display: "flex",
            justifyContent: "space-around",
            paddingTop: "30px",
          }}
        >
          <PrimaryButton onClick={() => setUseDarkTheme(false)}>
            Default theme
          </PrimaryButton>
          <PrimaryButton onClick={() => setUseDarkTheme(true)}>
            Dark theme
          </PrimaryButton>
        </div>

        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <PrimaryButton>Hello world</PrimaryButton>
          <SecondaryButton modifiers="success">Goodbye world</SecondaryButton>
          <TertiaryButton>Hey world</TertiaryButton>
        </div>
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
