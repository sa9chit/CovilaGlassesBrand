import { Context } from "./context";
import { useState } from "react";

export const ContextProvider = (props) => {
  const [data, setData] = useState(null);

  return (
    <Context.Provider value={{ data, setData }}>
      {props.children}
    </Context.Provider>
  );
};
