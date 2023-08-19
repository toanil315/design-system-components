import { styled } from "styled-components";
import theme from "../theme/theme";

export const StyledErrorMessage = styled.p`
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights.medium};
  line-height: ${theme.lineHeights.small};
  color: ${theme.colors.danger};
`;
