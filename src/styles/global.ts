import { createGlobalStyle, css } from "styled-components";
import { ResetCSS } from "./reset";
import { Fonts } from "./fonts";

export const GlobalStyled = createGlobalStyle`
  ${ResetCSS}
  ${Fonts}
  ${({ theme }) => css`
    :root {
      --font: 16px "Montserrat", -apple-system, sans-serif;
    }

    html {
      height: 100%;
    }

    body,
    #__next {
      min-height: 100vh;
    }

    body {
      font: var(--font);
      color: ${theme.colors.text};
      background-color: ${theme.colors.background};
      text-rendering: optimizeLegibility !important;
      -webkit-font-smoothing: antialiased !important;
      -moz-osx-font-smoothing: grayscale;
    }

    input,
    input::placeholder {
      color: ${theme.colors.text};
      font: var(--font);
    }

    button {
      appearance: none;
      font: var(--font);
      font-weight: ${theme.fontWeight.bold};
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
    }

    a {
      color: ${theme.colors.accent};
    }

    h1 {
      font-weight: ${theme.fontWeight.heading};
      font-size: ${theme.fontSize.heading};
      color: ${theme.colors.primary};
    }
  `};
`;
