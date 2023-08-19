import { useEffect } from "react";

const List = () => {
  useEffect(() => {
    console.log("list mount");
  }, []);

  return (
    <ul>
      <li>abc</li>
      <li>xyz</li>
      <li>123</li>
    </ul>
  );
};

export default List;
