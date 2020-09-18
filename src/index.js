import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { SignUpModal, PrimaryButton } from "./components";
import { GlobalStyle, darkTheme, defaultTheme } from "./utils";

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  const [showModal, setShowModal] = useState(false);
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
          <PrimaryButton onClick={() => setShowModal(!showModal)}>
            Toggle modal
          </PrimaryButton>
        </div>

        <div
          style={{
            width: "100vw",
            height: "90vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <SignUpModal showModal={showModal} setShowModal={setShowModal} />
        </div>
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
