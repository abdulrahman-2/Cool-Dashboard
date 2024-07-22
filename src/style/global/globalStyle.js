import { createGlobalStyle } from "styled-components";
import { theme } from "../theme/theme";

export const GlobalStyle = createGlobalStyle`
  * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     font-family: inherit;
} 
  html {
    scroll-behavior: smooth;
}
  body {
    font-family: ${theme.typography.fontFamily};
    font-weight: ${theme.typography.fontWeight};
    font-size: ${theme.typography.fontSize};
    background: ${theme.colors.oxfordBlue};
    line-height: ${theme.typography.lineHeight};
}   
  ul {
    list-style: none;
}
  img {
    width: 100%;
    max-width: 100%;
    display: block;  
}
  a {
    text-decoration: none;
    color: unset;
    transition: ${theme.transitions.easeInOut};
}

// button style
  button {
    border: none;
    cursor: pointer;
    background: transparent;
    transition: ${theme.transitions.easeInOut};
    outline: none;
  
    &:hover {
      opacity: 0.9;
    }
}
  .scrollbar {
    &::webkit-scrollbar {
      width: 6px;
      height: 6px;
    }  
    &::webkit-scrollbar-track {
      background-color: transparent;
    }
    &::webkit-scrollbar-thumb {
      border-radius: 100vh !important;
      background-color: ${theme.colors.majorelleBlue};
      outline: 1px solid rgba(0, 0, 0, 0.02);
      outline-offset: -1px;
    }
}
`;
