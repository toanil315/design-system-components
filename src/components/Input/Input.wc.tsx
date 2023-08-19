import register from "preact-custom-element";
import { StyleSheetManager } from "styled-components";
import { useState } from "react";
import Input from ".";

interface Props {
  width?: string;
  label?: string;
  isRequired?: boolean;
  error?: { message?: string };
  onChange?: (value: string | number | undefined) => void;
}

const WCInput = ({ onChange, ...restProps }: Props) => {
  const [inputRef, setInputRef] = useState<HTMLDivElement | null>();
  const [styleRef, setStyleRef] = useState<HTMLStyleElement | null>(null);

  const handleChange = (value: string) => {
    const event = new CustomEvent("mf-input-change", {
      bubbles: true,
      composed: true,
      detail: { value },
    });

    inputRef?.dispatchEvent(event);

    if (onChange) {
      onChange(value);
    }
  };

  return (
    <StyleSheetManager target={styleRef as HTMLStyleElement}>
      <style ref={(ref) => setStyleRef(ref)}></style>
      <div ref={(ref) => setInputRef(ref)} style={{ display: "contents" }}>
        <Input {...restProps} handleChange={handleChange} />
      </div>
    </StyleSheetManager>
  );
};

register(WCInput, "mf-input", ["error", "label", "isRequired"], {
  shadow: true,
});
