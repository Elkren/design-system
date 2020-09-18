import { typeScale } from "../utils";

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

export const PRIMARY_BUTTON_MODIFIERS = {
  ...BUTTON_MODIFIERS,
  warning: ({ theme }) => `
      background-color: ${theme.status.warningColor};
      color: ${theme.textColorInverted};
  
      &:hover, &:focus {
        background-color: ${theme.status.warningColorHover};
        outline: 3px solid ${theme.status.warningColorHover};
        outline-offset: 2px;
      }
  
      &:active {
        background-color: ${theme.status.warningColorActive};
      }
    `,
  error: ({ theme }) => `
      background-color: ${theme.status.errorColor};
      color: ${theme.textColorInverted};
  
      &:hover, &:focus {
        background-color: ${theme.status.errorColorHover};
        outline: 3px solid ${theme.status.errorColorHover};
        outline-offset: 2px;
      }
  
      &:active {
        background-color: ${theme.status.errorColorActive};
      }
    `,
  success: ({ theme }) => `
      background-color: ${theme.status.successColor};
      color: ${theme.textColorInverted};
  
      &:hover, &:focus {
        background-color: ${theme.status.successColorHover};
        outline: 3px solid ${theme.status.successColorHover};
        outline-offset: 2px;
      }
  
      &:active {
        background-color: ${theme.status.successColorActive};
      }
    `,
};

export const SECONDARY_BUTTON_MODIFIERS = {
  ...BUTTON_MODIFIERS,
  warning: ({ theme }) => `
      background: none;
      border: 2px solid ${theme.status.warningColor};
      color: ${theme.status.warningColor};
      
      &:hover, &:focus {
        background-color: ${theme.status.warningColorHover};
        outline: 3px solid ${theme.status.warningColorHover};     
        color: ${theme.textColorInverted} 
      }
  
      &:active {
        background-color: ${theme.status.warningColorActive};  
        border-color: transparent;        
      }
    `,
  error: ({ theme }) => `
      background: none;
      border: 2px solid ${theme.status.errorColor};
      color: ${theme.status.errorColor};
      
      &:hover, &:focus {
        background-color: ${theme.status.errorColorHover};
        outline: 3px solid ${theme.status.errorColorHover};     
        color: ${theme.textColorInverted} 
      }
  
      &:active {
        background-color: ${theme.status.errorColorActive};  
        border-color: transparent;        
      }
    `,
  success: ({ theme }) => `
      background: none;
      border: 2px solid ${theme.status.successColor};
      color: ${theme.status.successColor};
      
      &:hover, &:focus {
        background-color: ${theme.status.successColorHover};
        outline: 3px solid ${theme.status.successColorHover};     
        color: ${theme.textColorInverted} 
      }
  
      &:active {
        background-color: ${theme.status.successColorActive};  
        border-color: transparent;        
      }
    `,
};

export const TERTIARY_BUTTON_MODIFIERS = {
  ...BUTTON_MODIFIERS,
  warning: ({ theme }) => `
      background: none;
      color: ${theme.status.warningColor};
      
      &:hover, &:focus {
        background-color: ${theme.status.warningColorHover};
        outline: 3px solid ${theme.status.warningColorHover};    
        color: ${theme.textColorInverted}   
      }
  
      &:active {
        background-color: ${theme.status.warningColorActive};
      }
    `,
  error: ({ theme }) => `
      background: none;
      color: ${theme.status.errorColor};
      
      &:hover, &:focus {
        background-color: ${theme.status.errorColorHover};
        outline: 3px solid ${theme.status.errorColorHover};    
        color: ${theme.textColorInverted}   
      }
  
      &:active {
        background-color: ${theme.status.errorColorActive};
      }
    `,
  success: ({ theme }) => `
      background: none;
      color: ${theme.status.successColor};
      
      &:hover, &:focus {
        background-color: ${theme.status.successColorHover};
        outline: 3px solid ${theme.status.successColorHover};    
        color: ${theme.textColorInverted}   
      }
  
      &:active {
        background-color: ${theme.status.successColorActive};
      }
    `,
};
