import register from "preact-custom-element";
import Alert from "./Alert";

register(Alert, "mf-alert", ["type"], { shadow: true });
