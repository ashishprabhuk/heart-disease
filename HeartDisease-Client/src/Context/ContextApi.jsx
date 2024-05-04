import { createContext, useState } from "react";

export const Store = createContext();

const ContextApi = ({ children }) => {
  const [name, setName] = useState("Patient");
  const [prediction, setPrediction] = useState(false);
  const [formData, setFormData] = useState({});
  return (
    <Store.Provider value={{ name, setName, prediction, setPrediction, formData, setFormData }}>
      {children}
    </Store.Provider>
  );
};

export default ContextApi;
