import "./App.css";
import Modal from "./components/modal/Modal";
import { StyledSelect } from "./components/select/styled";
import Table from "./components/table/Table";

function App() {
  return (
    <>
      <StyledSelect
        options={[
          { value: "jack", label: "Jack" },
          { value: "lucy", label: "Lucy" },
          { value: "Yiminghe", label: "yiminghe" },
          { value: "disabled", label: "Disabled", disabled: true },
        ]}
      />
      <Modal>
        <p>test</p>
      </Modal>
      <Table />
    </>
  );
}

export default App;
