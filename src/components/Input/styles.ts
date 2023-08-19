import styled, { css } from "styled-components";
import theme from "../theme/theme";

interface WrapperProps {
  width?: string;
}

interface InputWrapperProps {
  disabled?: boolean;
  isError?: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  width: ${({ width }) => width ?? "100%"};
  position: relative;
`;

export const Label = styled.span`
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights.regular};
  line-height: ${theme.lineHeights.small};
  color: ${theme.colors.text};
  padding: 0 8px;
  background-color: white;

  position: absolute;
  top: -9px;
  left: 18px;
  z-index: 2;
`;

export const InputWrapper = styled.div<InputWrapperProps>`
  display: flex;
  align-items: center;
  padding: 0 6px;

  border-width: 2px;
  border-style: solid;
  border-color: ${({ isError }) =>
    !isError ? theme.colors.lightGray : `${theme.colors.danger} !important`};
  border-radius: 6px;
  transition: all 0.2s ease-in;
  &:focus-within {
    border-color: ${theme.colors.primary};
    box-shadow: 0 1px 8px -2px ${({ isError }) => (!isError ? `#FDD32B` : `#F27166`)};
  }
  &:hover {
    border-color: ${theme.colors.primary};
  }
  ${({ disabled }) =>
    disabled &&
    css`
      border-color: ${theme.colors.lightGray} !important;
      box-shadow: unset !important;
      cursor: no-drop;
      input {
        pointer-events: none;
      }
    `};
  input {
    width: 100%;
    padding: 14px 10px;
    color: ${theme.colors.textLight};
    font-weight: ${theme.fontWeights.regular};
    font-size: ${theme.fontSizes.sm};
    line-height: ${theme.lineHeights.normal};
    background-color: transparent !important;
    border: 0;
    &:focus {
      color: ${theme.colors.text} !important;
      outline: none;

      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
        -webkit-text-fill-color: ${theme.colors.text};
      }
    }

    // Remove background color of autocomplete
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-text-fill-color: ${theme.colors.textLight};
      transition: background-color 50000s ease-in-out 0s;
    }

    &::placeholder {
      letter-spacing: 0.5px;
    }
  }
`;
