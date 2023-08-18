import register from "preact-custom-element";
import Button from "./Button";

register(Button, "mf-button", ["onClick"], { shadow: true });

document.addEventListener("DOMContentLoaded", () => {
  const customButton: any = document.querySelector("mf-button");
  console.log("custom button: ", customButton);
  customButton?.addEventListener("mf-button-click", (e: MouseEvent) => {
    console.log("click event trigger");
    if (customButton.onClick) {
      const onClickHandler: Function = window[
        customButton.onClick
      ] as unknown as Function;
      if (onClickHandler && typeof onClickHandler === "function") {
        onClickHandler(e);
      }
    }
  });
});
