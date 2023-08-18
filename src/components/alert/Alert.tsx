import { useState } from "react";
import Button from "../button/Button";
import { StyledAlert } from "./styled";
import { StyleSheetManager } from "styled-components";

interface Props {
  children: JSX.Element;
  type: "info" | "error";
}

const Alert = ({ children, type = "info" }: Props) => {
  const [styleRef, setStyleRef] = useState<HTMLStyleElement | null>(null);

  return (
    <StyleSheetManager target={styleRef as HTMLStyleElement}>
      <style ref={(ref) => setStyleRef(ref)}></style>
      <StyledAlert className={`${type}`}>
        {children}
        <Button
          onClick={() => {
            console.log("alert click");
          }}
        >
          dismiss
        </Button>
      </StyledAlert>
    </StyleSheetManager>
  );
};

export default Alert;
