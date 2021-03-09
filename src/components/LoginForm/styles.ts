import styled, { css } from "styled-components";

export const Form = styled("form")`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Label = styled("label")`
  ${({ theme }) => css`
    display: block;
    font-size: ${theme.fontSize.xxs};
    text-transform: uppercase;
    padding-left: 0.625rem;
    margin-bottom: 0.5rem;
    color: ${theme.colors.primary};
  `}
`;

export const Input = styled("input")`
  ${({ theme, type }) => css`
    appearance: none;
    padding: 1rem;
    border: 0.0625rem solid ${theme.colors.secondary};
    border-radius: ${theme.radii.md};
    width: 100%;
    font-family: ${type === "password" && "monospace"};
    font-size: ${theme.fontSize.xxs};

    &:focus {
      color: ${theme.colors.primary};
    }

    &::placeholder {
      font-size: ${theme.fontSize.xxs};
    }
  `}
`;

export const ErrorMessage = styled(Label)`
  ${({ theme }) => css`
    text-transform: none;
    margin-top: 0.5rem;
    color: ${theme.colors.error};
  `}
`;
