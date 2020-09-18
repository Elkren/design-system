import styled from "styled-components";
import { defaultTheme, typeScale } from "../utils";
import { applyStyleModifiers } from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${typeScale.helperText};
    padding: 8px;
  `,
  large: () => `
    font-size: ${typeScale.h5};
    padding: 16px 24px;
  `,
};

const PRIMARY_BUTTON_MODIFIERS = {
  ...BUTTON_MODIFIERS,
  warning: () => `
    background-color: ${defaultTheme.status.warningColor};
    color: ${defaultTheme.textColorInverted};

    &:hover, &:focus {
      background-color: ${defaultTheme.status.warningColorHover};
      outline: 3px solid ${defaultTheme.status.warningColorHover};
      outline-offset: 2px;
    }

    &:active {
      background-color: ${defaultTheme.status.warningColorActive};
    }
  `,
  error: () => `
    background-color: ${defaultTheme.status.errorColor};
    color: ${defaultTheme.textColorInverted};

    &:hover, &:focus {
      background-color: ${defaultTheme.status.errorColorHover};
      outline: 3px solid ${defaultTheme.status.errorColorHover};
      outline-offset: 2px;
    }

    &:active {
      background-color: ${defaultTheme.status.errorColorActive};
    }
  `,
  success: () => `
    background-color: ${defaultTheme.status.successColor};
    color: ${defaultTheme.textColorInverted};

    &:hover, &:focus {
      background-color: ${defaultTheme.status.successColorHover};
      outline: 3px solid ${defaultTheme.status.successColorHover};
      outline-offset: 2px;
    }

    &:active {
      background-color: ${defaultTheme.status.successColorActive};
    }
  `,
};

const SECONDARY_BUTTON_MODIFIERS = {
  ...BUTTON_MODIFIERS,
  warning: () => `
    background: none;
    border: 2px solid ${defaultTheme.status.warningColor};
    color: ${defaultTheme.status.warningColor};
    
    &:hover, &:focus {
      background-color: ${defaultTheme.status.warningColorHover};
      outline: 3px solid ${defaultTheme.status.warningColorHover};     
      color: ${defaultTheme.textColorInverted} 
    }

    &:active {
      background-color: ${defaultTheme.status.warningColorActive};  
      border-color: transparent;        
    }
  `,
  error: () => `
    background: none;
    border: 2px solid ${defaultTheme.status.errorColor};
    color: ${defaultTheme.status.errorColor};
    
    &:hover, &:focus {
      background-color: ${defaultTheme.status.errorColorHover};
      outline: 3px solid ${defaultTheme.status.errorColorHover};     
      color: ${defaultTheme.textColorInverted} 
    }

    &:active {
      background-color: ${defaultTheme.status.errorColorActive};  
      border-color: transparent;        
    }
  `,
  success: () => `
    background: none;
    border: 2px solid ${defaultTheme.status.successColor};
    color: ${defaultTheme.status.successColor};
    
    &:hover, &:focus {
      background-color: ${defaultTheme.status.successColorHover};
      outline: 3px solid ${defaultTheme.status.successColorHover};     
      color: ${defaultTheme.textColorInverted} 
    }

    &:active {
      background-color: ${defaultTheme.status.successColorActive};  
      border-color: transparent;        
    }
  `,
};

const TERTIARY_BUTTON_MODIFIERS = {
  ...BUTTON_MODIFIERS,
  warning: () => `
    background: none;
    color: ${defaultTheme.status.warningColor};
    
    &:hover, &:focus {
      background-color: ${defaultTheme.status.warningColorHover};
      outline: 3px solid ${defaultTheme.status.warningColorHover};    
      color: ${defaultTheme.textColorInverted}   
    }

    &:active {
      background-color: ${defaultTheme.status.warningColorActive};
    }
  `,
  error: () => `
    background: none;
    color: ${defaultTheme.status.errorColor};
    
    &:hover, &:focus {
      background-color: ${defaultTheme.status.errorColorHover};
      outline: 3px solid ${defaultTheme.status.errorColorHover};    
      color: ${defaultTheme.textColorInverted}   
    }

    &:active {
      background-color: ${defaultTheme.status.errorColorActive};
    }
  `,
  success: () => `
    background: none;
    color: ${defaultTheme.status.successColor};
    
    &:hover, &:focus {
      background-color: ${defaultTheme.status.successColorHover};
      outline: 3px solid ${defaultTheme.status.successColorHover};    
      color: ${defaultTheme.textColorInverted}   
    }

    &:active {
      background-color: ${defaultTheme.status.successColorActive};
    }
  `,
};

const Button = styled.button`
  padding: 12px 24px;
  font-size: ${typeScale.paragraph};
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: ${defaultTheme.primaryFont};
  transition: background-color 0.2s linear, color 0.2s linear;

  &:hover {
    background-color: ${defaultTheme.primaryHoverColor};
    color: ${defaultTheme.textColorOnPrimary};
  }

  &:focus {
    outline: 3px solid ${defaultTheme.primaryHoverColor};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${defaultTheme.primaryActiveColor};
    border-color: ${defaultTheme.primaryActiveColor};
    color: ${defaultTheme.textColorOnPrimary};
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};
  border: none;
  color: white;

  &:disabled {
    background: ${defaultTheme.disabled};
    color: ${defaultTheme.textOnDisabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(PRIMARY_BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
  background: none;
  border: 2px solid ${defaultTheme.primaryColor};
  color: ${defaultTheme.primaryColor};

  &:disabled {
    background: none;
    color: ${defaultTheme.disabled};
    border-color: ${defaultTheme.disabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(SECONDARY_BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
  background: none;
  border: none;
  color: ${defaultTheme.primaryColor};

  &:disabled {
    background: none;
    color: ${defaultTheme.disabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(TERTIARY_BUTTON_MODIFIERS)}
`;
