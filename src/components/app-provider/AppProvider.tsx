import React from "react";
import ReactDOM from "react-dom";
import { InputNumber, Select, Modal } from "antd";

interface Props {
  children: JSX.Element;
}

(window as any).__MFC__React = React;
(window as any).__MFC__ReactDOM = ReactDOM;
(window as any).__MFC__Antd = { InputNumber, Select, Modal };

const AppProvider = ({ children }: Props) => {
  return <>{children}</>;
};

export default AppProvider;
