import styled, { css } from "styled-components";

export const Button = styled("button")`
  ${({ theme, disabled }) => css`
    height: 3rem;
    border-radius: ${theme.radii.md};
    padding-left: 3rem;
    padding-right: 3rem;
    text-transform: uppercase;
    background: linear-gradient(
      70deg,
      ${theme.colors.accent},
      ${theme.colors.primary}
    );

    &:active {
      transform: translateY(1px);
    }

    ${disabled &&
    css`
      background: ${theme.colors.accent};
    `}
  `}
`;
