// eslint-disable-next-line no-unused-vars
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaHeartbeat } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Contents from "./Contents";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Bounce } from "react-toastify";
import { Store } from "../Context/ContextApi";
import "./FormFields.css";

const FormFields = () => {
  const navigate = useNavigate();
  let obj = {};
  const { setName, prediction, setPrediction, formData, setFormData } =
    useContext(Store);
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
    age: Yup.number()
      .required("*Age is required")
      .positive("must be a positive number"),
    sex: Yup.number().required("*Gender is required"),
    cp: Yup.number().required("*Chest Pain Type is required"),
    trestbps: Yup.number()
      .required("*Resting Blood Pressure is required")
      .positive("must be a positive number")
      .min(90, "Resting Blood Pressure must be at least 90")
      .max(200, "Resting Blood Pressure must be at most 200"),
    chol: Yup.number()
      .required("*Cholesterol is required")
      .positive("must be a positive number")
      .min(125, "Cholesterol must be at least 125")
      .max(564, "Cholesterol must be at most 564")
      .moreThan(0, "Cholesterol must be greater than 0"),
    fbs: Yup.number().required("*Fasting Blood Sugar is required"),
    restecg: Yup.number().required("*Rest ECG is required"),
    thalach: Yup.number()
      .required("*Max Heart Rate is required")
      .positive("must be a positive number")
      .min(71, "Max Heart Rate must be at least 71")
      .max(220, "Max Heart Rate must be at most 220")
      .moreThan(0, "Thalach must be greater than 0"),
    exang: Yup.number().required("Exercise Induced Angina is required"),
    oldpeak: Yup.number()
      .required("*Oldpeak is required")
      .min(-0.5, "ST Depression must be at least 0")
      .max(6, "ST Depression must be at most 6")
      .typeError("ST Depression must be a number")
      .lessThan(7, "ST Depression must be less than 7"),
    slope: Yup.number().required("*Slope is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // values.sex = parseInt(values.sex);
      // values.cp = parseInt(values.cp);
      // values.fbs = parseInt(values.fbs);
      // values.restecg = parseInt(values.restecg);
      // values.exang = parseInt(values.exang);
      // values.slope = parseInt(values.slope);
      // alert(JSON.stringify(values, null, 2));
      const keysToParse = ["sex", "cp", "fbs", "restecg", "exang", "slope"];
      keysToParse.forEach((key) => {
        if (values[key]) {
          values[key] = parseInt(values[key]);
        }
      });
      const body = JSON.stringify(values);
      console.log("The body is : ", body);
      obj = JSON.parse(body);
      console.log("The new obj is : ", obj);
      setFormData(obj);
      // const response = await axios.post("http://localhost:5000/api", body, {
      const response = await toast.promise(
        axios.post("https://heart-disease-3.onrender.com/api", body, {
          headers: {
            "Content-Type": "application/json",
          },
        }),
        {
          pending: "Predicting your data...",
          success: {
            render: "Data Predicted Successfully!",
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          },
          error: {
            render: "Error Predicting Your Data!",
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          },
        }
      );
      setPrediction(response.data);
      console.log(response.data);
      setSubmitting(false);
      navigate("/dashboard");
      setName(localName);
      setLocalName("");
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
                  as="select"
                  name="cp"
                  className="dropdown"
                  style={{ backgroundColor: "#DDDDDD" }}
                >
                  <option value="">Select The Chest Pain Type</option>
                  <option value={0}>0 - typical angina</option>
                  <option value={1}>1 - atypical angina</option>
                  <option value={2}>2 - non-anginal pain</option>
                  <option value={3}>3 - asymptomatic</option>
                </Field>
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
                  placeholder="Enter The Resting Blood Pressure"
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
                  placeholder="Enter Your Cholesterol level"
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
                  as="select"
                  name="fbs"
                  className="dropdown"
                  style={{ backgroundColor: "#DDDDDD" }}
                >
                  <option value="">Select The Fasting Blood Sugar level</option>
                  <option value={0}>0 - less than 120 ({"<"}120)</option>
                  <option value={1}>1 - greater than 120 ({">"}120)</option>
                </Field>
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
                  as="select"
                  name="restecg"
                  className="dropdown"
                  style={{ backgroundColor: "#DDDDDD" }}
                >
                  <option value="">Select The Rest ECG level</option>
                  <option value={0}>0 - Normal</option>
                  <option value={1}>1 - Having ST-T wave abnormality</option>
                  <option value={2}>
                    2 - Showing probable or definite left ventricular
                    hypertrophy
                  </option>
                </Field>
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
                  placeholder="Enter Your Max Heart Rate"
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
                  as="select"
                  name="exang"
                  className="dropdown"
                  style={{ backgroundColor: "#DDDDDD" }}
                >
                  <option value="">Select The Exercise Induced Angina</option>
                  <option value={0}>0 - No pain</option>
                  <option value={1}>1 - Feeling Pain</option>
                </Field>
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
                  placeholder="Enter Your ST depression (0 - 6)"
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
                  as="select"
                  name="slope"
                  className="dropdown"
                  style={{ backgroundColor: "#DDDDDD" }}
                >
                  <option value="">Select The Level Of Your Slope</option>
                  <option value={0}>0 - upsloping</option>
                  <option value={1}>1 - flat</option>
                  <option value={2}>2 - downsloping</option>
                </Field>
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
