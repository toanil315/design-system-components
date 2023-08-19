import { DatePicker } from "antd";
import styled, { css } from "styled-components";
import Box from "../Box";
import theme from "../theme/theme";

interface WrapperProps {
  width?: string;
}

interface DatePickerWrapperProps {
  disabled?: boolean;
  isError?: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  width: ${({ width }) => width ?? "100%"};
  position: relative;
`;

export const Label = styled(Box)`
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

export const DatePickerWrapper = styled.div<DatePickerWrapperProps>`
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
      background-color: ${theme.colors.lightGray};
      border-color: ${theme.colors.lightGray} !important;
      box-shadow: unset !important;
      cursor: no-drop;
      input {
        pointer-events: none;
      }
    `};
`;

export const StyledDatePicker = styled(DatePicker)`
  padding: 14px 16px;
  width: 100%;
  border: 0;
  outline: none;
  box-shadow: unset;

  .ant-picker-content
    .ant-picker-cell-in-view.ant-picker-cell-selected
    .ant-picker-cell-inner {
    &::before {
      border-color: ${theme.colors.primary} !important;
    }
    background: ${theme.colors.primary} !important;
  }

  .ant-picker-cell-in-view.ant-picker-cell-today .ant-picker-cell-inner {
    &::before {
      border-color: ${theme.colors.primary} !important;
    }
  }
`;
