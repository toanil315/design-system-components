import { MouseEvent, useState } from "react";
// import styles from "./Button.css";
import { StyledButton } from "./styled";
import { StyleSheetManager } from "styled-components";

interface Props {
  children: JSX.Element | string;
  onClick: (e: MouseEvent<HTMLButtonElement> | undefined) => void;
}

const Button = ({ children, onClick }: Props) => {
  const [styleRef, setStyleRef] = useState<HTMLStyleElement | null>(null);

  const handleClick = (e: MouseEvent<HTMLButtonElement> | undefined) => {
    const event = new CustomEvent("mf-button-click", {
      bubbles: true,
      composed: true,
      detail: { message: "Button clicked" },
    });

    console.log(event);

    e?.target.dispatchEvent(event);

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <StyleSheetManager target={styleRef as HTMLStyleElement}>
      <style ref={(ref) => setStyleRef(ref)}></style>
      <StyledButton className={StyledButton.toString()} onClick={handleClick}>
        <span className="content">{children}</span>
      </StyledButton>
    </StyleSheetManager>
  );
};

export default Button;
