import { Modal as AntdModal } from "antd";
import { useState } from "react";
import Button from "../button/Button";
// import styles from "antd/lib/modal/style/index";

interface Props {
  children: JSX.Element;
}

const Modal = ({ children }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* <style>{styles}</style> */}
      <Button onClick={showModal}>Open Modal</Button>
      <AntdModal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {children}
      </AntdModal>
    </>
  );
};

export default Modal;
