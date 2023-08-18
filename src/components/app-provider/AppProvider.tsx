import React from "react";
import ReactDOM from "react-dom";

interface Props {
  children: JSX.Element;
}

(window as any).__ACME__React = React;
(window as any).__ACME__ReactDOM = ReactDOM;

const AppProvider = ({ children }: Props) => {
  return <>{children}</>;
};

export default AppProvider;
