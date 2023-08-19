import register from "preact-custom-element";

import { MouseEvent, ReactNode, useState } from "react";
// import styles from "./Button.css";
import { StyleSheetManager } from "styled-components";
import Button from "./Button";

interface Props {
  $type?: "primary" | "secondary" | "white";
  children: ReactNode;
  loading?: boolean;
  onClick: (e: MouseEvent<HTMLButtonElement> | undefined) => void;
}

const WCButton = ({ children, onClick, ...restProps }: Props) => {
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
      <Button {...restProps} onClick={handleClick}>
        {children}
      </Button>
    </StyleSheetManager>
  );
};

register(WCButton, "mf-button", ["$type", "loading"], { shadow: true });
