import React from "react";
import ReactDOM from "react-dom";
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from "./components/Buttons";
import { GlobalStyle } from "./utils";

const App = () => (
  <>
    {/* <PrimaryButton>Hello world</PrimaryButton>
    <SecondaryButton>Goodbye world</SecondaryButton>
    <TertiaryButton>Hey world</TertiaryButton> */}
    <PrimaryButton modifiers={"success"}>Hello world</PrimaryButton>
    <SecondaryButton modifiers={"success"}>Goodbye world</SecondaryButton>
    <TertiaryButton modifiers={"success"}>Hey world</TertiaryButton>
    {/* <PrimaryButton disabled>Hello world</PrimaryButton>
    <SecondaryButton disabled>Goodbye world</SecondaryButton>
    <TertiaryButton disabled>Hey world</TertiaryButton> */}
    <GlobalStyle />
  </>
);

ReactDOM.render(<App />, document.querySelector("#root"));
