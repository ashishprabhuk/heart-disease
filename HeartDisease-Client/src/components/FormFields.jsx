// eslint-disable-next-line no-unused-vars
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaHeartbeat } from "react-icons/fa";
import "./FormFields.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Contents from "./Contents";
import { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Bounce } from "react-toastify";
import { Store } from "../Context/ContextApi";

const FormFields = () => {
  const navigate = useNavigate();
  let obj = {};
  const { name, setName } = useContext(Store);
  const [localName, setLocalName] = useState("");
  const data = {
    age: "",
    sex: "",
    cp: "",
    trestbps: "",
    chol: "",
    fbs: "",
    restecg: "",
    thalach: "",
    exang: "",
    oldpeak: "",
    slope: "",
  };

  const schema = Yup.object().shape({
    age: Yup.number().required("*Age is required"),
    sex: Yup.number().required("*Gender is required"),
    cp: Yup.number().required("*Chest Pain Type is required"),
    trestbps: Yup.number().required("Resting Blood Pressure is required"),
    chol: Yup.number().required("*Cholesterol is required"),
    fbs: Yup.number().required("*Fasting Blood Sugar is required"),
    restecg: Yup.number().required("*Rest ECG is required"),
    thalach: Yup.number().required("*Max Heart Rate is required"),
    exang: Yup.number().required("Exercise Induced Angina is required"),
    oldpeak: Yup.number().required("*ST Depression is required"),
    slope: Yup.number().required("*ST Depression is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      values.sex = parseInt(values.sex);
      const body = JSON.stringify(values);

      obj = JSON.parse(body);
      console.log("The new obj is : ", obj);
      const response = await axios.post("http://localhost:5000/api", body, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const prediction = response.data;
      toast.success("Data Predicted Successfully!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      console.log(prediction);
      setSubmitting(false);
      navigate("/dashboard");
      setName(localName);
      setLocalName('');
    } catch (error) {
      console.error("There is an error fetching the server:", error);
      setSubmitting(false);
      toast.error("Error Predicting Your Data!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  return (
    <>
      <div className="box">
        <Contents />
        <div className="container">
          <Formik
            initialValues={data}
            validationSchema={schema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, touched, errors }) => (
              <Form>
                <div className="name-box">
                  <label
                    htmlFor="name-label"
                    className=""
                    style={{ color: "#FAF0E6" }}
                  >
                    Name
                  </label>
                  <input
                    className="name-input"
                    style={{ backgroundColor: "#DDDDDD" }}
                    type="text"
                    placeholder="Enter Your Name"
                    required
                    value={localName}
                    onChange={(e) => setLocalName(e.target.value)}
                  />
                </div>
                <label htmlFor="age" style={{ color: "#FAF0E6" }}>
                  Age
                </label>
                <Field
                  type="number"
                  name="age"
                  placeholder="Enter Your Age"
                  style={{ backgroundColor: "#DDDDDD" }}
                />
                <ErrorMessage
                  name="age"
                  component="div"
                  style={{
                    color: "#ffcccc",
                    padding: "5px",
                    backgroundColor: "#7e2e38",
                    borderRadius: "8px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  }}
                />

                <label htmlFor="sex" style={{ color: "#FAF0E6" }}>
                  Sex
                </label>
                <Field
                  as="select"
                  name="sex"
                  className="dropdown"
                  style={{ backgroundColor: "#DDDDDD" }}
                >
                  <option value="">Select Your Gender</option>
                  <option value={0}>Female</option>
                  <option value={1}>Male</option>
                </Field>
                <ErrorMessage
                  name="sex"
                  component="div"
                  style={{
                    color: "#ffcccc",
                    padding: "5px",
                    backgroundColor: "#7e2e38",
                    borderRadius: "8px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  }}
                />

                <label htmlFor="cp" style={{ color: "#FAF0E6" }}>
                  Chest Pain Type
                </label>
                <Field
                  type="number"
                  name="cp"
                  placeholder="Select The Chest Pain Type"
                  style={{ backgroundColor: "#DDDDDD" }}
                />
                <ErrorMessage
                  name="cp"
                  component="div"
                  style={{
                    color: "#ffcccc",
                    padding: "5px",
                    backgroundColor: "#7e2e38",
                    borderRadius: "8px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  }}
                />

                <label htmlFor="trestbps" style={{ color: "#FAF0E6" }}>
                  Resting Blood Pressure
                </label>
                <Field
                  type="number"
                  name="trestbps"
                  placeholder="Select The Resting Blood Pressure"
                  style={{ backgroundColor: "#DDDDDD" }}
                />
                <ErrorMessage
                  name="trestbps"
                  component="div"
                  style={{
                    color: "#ffcccc",
                    padding: "5px",
                    backgroundColor: "#7e2e38",
                    borderRadius: "8px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  }}
                />

                <label htmlFor="chol" style={{ color: "#FAF0E6" }}>
                  Cholesterol
                </label>
                <Field
                  type="number"
                  name="chol"
                  placeholder="Select The Cholesterol"
                  style={{ backgroundColor: "#DDDDDD" }}
                />
                <ErrorMessage
                  name="chol"
                  component="div"
                  style={{
                    color: "#ffcccc",
                    padding: "5px",
                    backgroundColor: "#7e2e38",
                    borderRadius: "8px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  }}
                />

                <label htmlFor="fbs" style={{ color: "#FAF0E6" }}>
                  Fasting Blood Sugar
                </label>
                <Field
                  type="number"
                  name="fbs"
                  placeholder="Select The Fasting Blood Sugar"
                  style={{ backgroundColor: "#DDDDDD" }}
                />
                <ErrorMessage
                  name="fbs"
                  component="div"
                  style={{
                    color: "#ffcccc",
                    padding: "5px",
                    backgroundColor: "#7e2e38",
                    borderRadius: "8px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  }}
                />

                <label htmlFor="restecg" style={{ color: "#FAF0E6" }}>
                  RestECG
                </label>
                <Field
                  type="number"
                  name="restecg"
                  placeholder="Select The Rest ECG"
                  style={{ backgroundColor: "#DDDDDD" }}
                />
                <ErrorMessage
                  name="restecg"
                  component="div"
                  style={{
                    color: "#ffcccc",
                    padding: "5px",
                    backgroundColor: "#7e2e38",
                    borderRadius: "8px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  }}
                />

                <label htmlFor="thalach" style={{ color: "#FAF0E6" }}>
                  Thalach
                </label>
                <Field
                  type="number"
                  name="thalach"
                  placeholder="Select The Max Heart Rate"
                  style={{ backgroundColor: "#DDDDDD" }}
                />
                <ErrorMessage
                  name="thalach"
                  component="div"
                  style={{
                    color: "#ffcccc",
                    padding: "5px",
                    backgroundColor: "#7e2e38",
                    borderRadius: "8px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  }}
                />

                <label htmlFor="exang" style={{ color: "#FAF0E6" }}>
                  Exercise Induced Angina
                </label>
                <Field
                  type="number"
                  name="exang"
                  placeholder="Select The Exercise Induced Angina"
                  style={{ backgroundColor: "#DDDDDD" }}
                />
                <ErrorMessage
                  name="exang"
                  component="div"
                  style={{
                    color: "#ffcccc",
                    padding: "5px",
                    backgroundColor: "#7e2e38",
                    borderRadius: "8px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  }}
                />

                <label htmlFor="oldpeak" style={{ color: "#FAF0E6" }}>
                  Old Peak
                </label>
                <Field
                  type="number"
                  name="oldpeak"
                  placeholder="Select The ST Depression"
                  style={{ backgroundColor: "#DDDDDD" }}
                />
                <ErrorMessage
                  name="oldpeak"
                  component="div"
                  style={{
                    color: "#ffcccc",
                    padding: "5px",
                    backgroundColor: "#7e2e38",
                    borderRadius: "8px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  }}
                />

                <label htmlFor="slope" style={{ color: "#FAF0E6" }}>
                  Slope
                </label>
                <Field
                  type="number"
                  name="slope"
                  placeholder="Select The Slope"
                  style={{ backgroundColor: "#DDDDDD" }}
                />
                <ErrorMessage
                  name="slope"
                  component="div"
                  style={{
                    color: "#ffcccc",
                    padding: "5px",
                    backgroundColor: "#7e2e38",
                    borderRadius: "8px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  }}
                />

                <button type="submit" className="submit-btn">
                  <b>Predict My Risk</b>
                  <FaHeartbeat size="20px" style={{ marginLeft: "10px" }} />
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default FormFields;