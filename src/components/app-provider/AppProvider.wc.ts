import register from "preact-custom-element";
import AppProvider from "./AppProvider";

register(AppProvider, "mf-app-provider", [], { shadow: true });
