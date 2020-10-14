import { blue, neutral, yellow, red, green } from "./colours";
import { primaryFont, typeScale } from "./typography";

export const defaultTheme = {
  primaryColor: blue[300],
  primaryHoverColor: blue[200],
  primaryActiveColor: blue[100],

  textColorOnPrimary: neutral[100],
  textColor: neutral[600],
  textColorInverted: neutral[100],

  disabled: neutral[400],
  textOnDisabled: neutral[300],

  formElementBackground: neutral[100],
  textOnFormElementBackground: neutral[600],
  illustrationBackgroundColor: neutral[100],

  primaryFont,
  fields: {
    typeSize: typeScale.paragraph,
    borderColor: neutral[600],
    defaultBorderColor: "transparent",
    textColor: neutral[600],
    inputTextColor: neutral[600],
    inputBackgroundColor: neutral[100],
  },

  status: {
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300],
  },
};

export const darkTheme = {
  primaryColor: neutral[100],
  primaryHoverColor: neutral[200],
  primaryActiveColor: neutral[300],
  textColorOnPrimary: blue[300],
  textColor: blue[300],
  textColorInverted: neutral[100],

  formElementBackground: blue[100],
  textOnFormElementBackground: neutral[100],
  illustrationBackgroundColor: neutral[100],

  primaryFont: primaryFont,
  fields: {
    typeSize: typeScale.paragraph,
    borderColor: neutral[100],
    defaultBorderColor: neutral[100],
    textColor: neutral[100],
    inputTextColor: neutral[100],
    inputBackgroundColor: blue[500],
  },

  disabled: neutral[400],
  textOnDisabled: neutral[300],
  status: {
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300],
  },
};
