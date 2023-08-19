import { useRef, useState } from "react";
import { StyledSelect } from "./styled";
import { StyleSheetManager } from "styled-components";

const Select = () => {
  const [styleRef, setStyleRef] = useState<HTMLStyleElement | null>(null);
  const selectRef = useRef<HTMLDivElement>(null);
  const handleChange = (value: string) => {
    const event = new CustomEvent("mf-select-change", {
      bubbles: true,
      composed: true,
      detail: { value },
    });

    selectRef.current?.dispatchEvent(event);
  };

  return (
    <StyleSheetManager target={styleRef as HTMLStyleElement}>
      <style ref={(ref) => setStyleRef(ref)}></style>
      <div style={{ display: "contents" }} ref={selectRef}>
        <StyledSelect
          onChange={handleChange}
          options={[
            { value: "jack", label: "Jack" },
            { value: "lucy", label: "Lucy" },
            { value: "Yiminghe", label: "yiminghe" },
            { value: "disabled", label: "Disabled", disabled: true },
          ]}
        />
      </div>
    </StyleSheetManager>
  );
};

export default Select;
