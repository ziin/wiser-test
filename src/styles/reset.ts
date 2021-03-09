import { css } from "styled-components";

export const ResetCSS = css`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  a {
    background: none;
    cursor: pointer;
  }

  button {
    cursor: pointer;
  }

  input {
    background-color: transparent;
  }

  a,
  input,
  button {
    appearance: none;
    border: 0;
  }

  a,
  button {
    -webkit-tap-highlight-color: transparent;
  }

  ul {
    list-style: none;
    text-align: left;
    padding: 0;
  }
`;
