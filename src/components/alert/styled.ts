import { styled } from "styled-components";

export const StyledAlert = styled.div`
  padding: 10px 15px;
  border-radius: 8px;
  border: 1px solid transparent;

  font-weight: 600;

  &.error {
    border-color: red;
    color: red;
  }

  &.info {
    border-color: green;
    color: green;
  }
`;
