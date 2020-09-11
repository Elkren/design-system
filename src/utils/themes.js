import { blue, neutral } from "./colours";
import { primaryFont } from "./typography";

export const defaultTheme = {
  primaryColor: blue[300],
  primaryHoverColor: blue[200],
  primaryActiveColor: blue[100],

  textColorOnPrimary: neutral[100],
  textColor: neutral[600],
  textColorInverted: neutral[100],

  disabled: neutral[400],
  textOnDisabled: neutral[300],

  primaryFont,
};
