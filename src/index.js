import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { FullPlayer, Navigation, ProjectsSideBar, Search } from "./components";
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
        <Navigation />        
        <ProjectsSideBar />
        <Search />
        <FullPlayer />

        
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
