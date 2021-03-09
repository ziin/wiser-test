import styled, { css } from "styled-components";

export const Flex = styled("div")`
  height: 100vh;
  display: flex;
`;

export const ImageRow = styled("div")`
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
    position: relative;
    width: 100%;
    @media (min-width: ${theme.breakpoint.sm}) {
      max-width: 55%;
    }
  `}
`;

export const ImageContainer = styled("div")`
  ${({ theme }) => css`
    position: absolute;
    width: 100%;
    height: 50%;

    @media (min-width: ${theme.breakpoint.sm}) {
      position: static;
      height: 100%;
    }
  `}
`;

export const Gradient = styled("div")`
  ${({ theme }) => css`
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(transparent, ${theme.colors.black});
    z-index: 1;
  `}
`;

export const FormRow = styled("div")`
  ${({ theme }) => css`
    position: absolute;
    top: 50%;
    left: 1em;
    right: 1em;
    transform: translateY(-50%);
    z-index: 2;
    margin: 0 auto;
    max-width: 19em;

    @media (min-width: ${theme.breakpoint.sm}) {
      display: flex;
      justify-content: center;
      transform: translate(0);
      position: static;
      min-width: 25em;
      margin: 0;
    }

    @media (min-width: ${theme.breakpoint.md}) {
      justify-content: flex-start;
    }
  `}
`;

export const FormContainer = styled("div")`
  ${({ theme }) => css`
    width: 100%;
    max-width: 19rem;
    display: flex;
    padding: 1.5rem 1.75rem 2.25rem 1.75rem;
    border-radius: ${theme.radii.md};
    flex-direction: column;
    justify-content: center;
    background-color: ${theme.colors.background};

    @media (min-width: ${theme.breakpoint.sm}) {
      padding: 0;
    }

    @media (min-width: ${theme.breakpoint.md}) {
      margin-left: 15%;
    }
    @media (min-width: ${theme.breakpoint.lg}) {
      margin-left: 20%;
    }
    @media (min-width: ${theme.breakpoint.xl}) {
      margin-left: 30%;
    }

    > h1 {
      line-height: ${theme.lineHeight.lg};
      text-align: center;

      @media (min-width: ${theme.breakpoint.sm}) {
        font-size: ${theme.fontSize.lg};
        line-height: ${theme.lineHeight.xl};
        text-align: start;
      }
    }

    > p:first-of-type {
      font-size: ${theme.fontSize.xs};
      line-height: ${theme.lineHeight.md};
      text-align: center;
      font-weight: ${theme.fontWeight.bold};
      margin-top: 1rem;
      @media (min-width: ${theme.breakpoint.sm}) {
        font-size: ${theme.fontSize.sm};
        text-align: start;
        margin-bottom: 1rem;
      }
    }

    button:only-of-type {
      margin: auto;
      position: absolute;
      bottom: -1.5rem;
      left: 0;
      right: 0;
      margin: 0 auto;

      @media (min-width: ${theme.breakpoint.sm}) {
        position: static;
        bottom: 0;
        width: 100%;
        margin-top: 1rem;
        box-shadow: 0 0.625rem 1.5rem ${theme.colors.shadow};
      }
    }

    > p:last-of-type {
      position: absolute;
      right: 0;
      left: 0;
      bottom: -5rem;
      margin: 0 auto;
      font-size: ${theme.fontSize.sm};
      line-height: ${theme.lineHeight.md};
      text-align: center;
      color: ${theme.colors.white};

      a {
        color: ${theme.colors.white};
      }

      @media (min-width: ${theme.breakpoint.sm}) {
        position: static;
        margin-top: 1.5rem;
        bottom: 0;
        color: ${theme.colors.text};

        a {
          color: ${theme.colors.accent};
        }
      }
    }
  `}
`;
