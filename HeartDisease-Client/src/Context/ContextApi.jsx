import { Children, createContext, useState } from "react";

export const Store = createContext();

const ContextApi = ({ children }) => {
  const [name, setName] = useState("Patient");
  const [prediction, setPrediction] = useState(false);
  const [result, setResult] = useState({});
  return (
    <Store.Provider value={{ name, setName, result, setResult }}>
      {children}
    </Store.Provider>
  );
};

export default ContextApi;
