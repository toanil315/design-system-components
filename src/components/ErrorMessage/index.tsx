import Box from "../Box";
import { StyledErrorMessage } from "./styles";

const ErrorMessage = ({ text }: { text: string }) => {
  return (
    <Box margin="5px 0 0">
      <StyledErrorMessage>{text}</StyledErrorMessage>
    </Box>
  );
};

export default ErrorMessage;
