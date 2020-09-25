import { addDecorator } from "@storybook/react";
import { withContexts } from "@storybook/addon-contexts/react";
import { contexts } from "./context";

addDecorator(withContexts(contexts));

export const parameters = {
  backgrounds: {
    values: [
      { name: "Default theme", value: "#ffffff", default: true },
      { name: "Dark theme", value: "#050449" },
    ],
  },
};
