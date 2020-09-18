import { addDecorator } from "@storybook/react";
import { withContexts } from "@storybook/addon-contexts/react";
import { withKnobs } from "@storybook/addon-knobs";
import { contexts } from "./context";

addDecorator(withContexts(contexts));
addDecorator(withKnobs);

export const parameters = {
  backgrounds: {
    values: [
      { name: "Default theme", value: "#ffffff", default: true },
      { name: "Dark theme", value: "#050449" },
    ],
  },
};
