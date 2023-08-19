import register from "preact-custom-element";
import { StyleSheetManager } from "styled-components";
import { useState } from "react";
import DatePicker from ".";

interface Props {
  error?: { message?: string };
  label?: string;
  isRequired?: boolean;
  format: string;
  onChange: (value: any) => void;
}

const WCDatePicker = ({ onChange, ...restProps }: Props) => {
  const [datePickerRef, setDatePickerRef] = useState<HTMLDivElement | null>();
  const [styleRef, setStyleRef] = useState<HTMLStyleElement | null>(null);

  const handleChange = (value: any) => {
    const event = new CustomEvent("mf-datepicker-change", {
      bubbles: true,
      composed: true,
      detail: { value },
    });

    datePickerRef?.dispatchEvent(event);

    if (onChange) {
      onChange(value);
    }
  };

  return (
    <StyleSheetManager target={styleRef as HTMLStyleElement}>
      <style ref={(ref) => setStyleRef(ref)}></style>
      <div ref={(ref) => setDatePickerRef(ref)} style={{ display: "contents" }}>
        <DatePicker {...restProps} onChange={handleChange} />
      </div>
    </StyleSheetManager>
  );
};

register(
  WCDatePicker,
  "mf-date-picker",
  ["error", "label", "isRequired", "format"],
  {
    shadow: false,
  }
);
