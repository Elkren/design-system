import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { FullPlayer, Navigation, ProjectsSideBar, Search } from "./components";
import { GlobalStyle, darkTheme, defaultTheme } from "./utils";

const LayoutWrapper = styled.div`
  display: block;
  z-index: 0;

  @media (min-width: 1100px) {
    display: grid;

    grid-template-areas:
      "header header"
      "sidebar content";

    grid-template-columns: 205px auto;
    grid-template-rows: 4rem calc(100vh - 4rem);
  }
`;

const NavigationWrapper = styled.div`
  grid-area: header;
`;

const SideBarWrapper = styled.div`
  display: none;
  @media (min-width: 1100px) {
    display: block;
    grid-area: sidebar;
  }
`;

const PageContentWrapper = styled.div`
  grid-area: content;
`;

const PlayerWrapper = styled.div`
  z-index: 1;
`;

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <LayoutWrapper
        style={{
          background: useDarkTheme
            ? defaultTheme.primaryColor
            : darkTheme.primaryColor,
        }}
      >
        <NavigationWrapper>
          <Navigation />
        </NavigationWrapper>
        <SideBarWrapper>
          <ProjectsSideBar />
        </SideBarWrapper>
        <PageContentWrapper>
          <Search />
        </PageContentWrapper>
        <PlayerWrapper>
          <FullPlayer />
        </PlayerWrapper>
      </LayoutWrapper>
      <GlobalStyle />
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
