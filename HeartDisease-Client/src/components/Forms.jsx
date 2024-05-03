import { useState } from "react";
import { useFormik } from "formik";

const Forms = () => {
  const [formData, setFormData] = useState({
    gender: "",
    name: "",
    age: "",
    chestPainType: "",
    restingBloodPressure: "",
    cholesterol: "",
    fastingBloodSugar: "",
    restECG: "",
    maxHeartRate: "",
    exerciseInducedAngina: "",
    stDepression: "",
    slope: "",
    numMajorVessels: "",
  });

  const formik = useFormik({
    initialValues: {
      gender: "",
      name: "",
      age: "",
      chestPainType: "",
      restingBloodPressure: "",
      cholesterol: "",
      fastingBloodSugar: "",
      restECG: "",
      maxHeartRate: "",
      exerciseInducedAngina: "",
      stDepression: "",
      slope: "",
      numMajorVessels: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h2>Heart Disease Prediction Form</h2>
      
      <form onSubmit={handleSubmit}>
        <label>
          Gender:
          <input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </label>
        <br />
        {/* Add more fields below */}
        {/* You can customize input types and labels based on your requirements */}
        <label>
          Chest Pain Type:
          <input
            type="text"
            name="chestPainType"
            value={formData.chestPainType}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Resting Blood Pressure:
          <input
            type="text"
            name="restingBloodPressure"
            value={formData.restingBloodPressure}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Cholesterol:
          <input
            type="text"
            name="cholesterol"
            value={formData.cholesterol}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Fasting Blood Sugar:
          <input
            type="text"
            name="fastingBloodSugar"
            value={formData.fastingBloodSugar}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Rest ECG:
          <input
            type="text"
            name="restECG"
            value={formData.restECG}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Max Heart Rate:
          <input
            type="text"
            name="maxHeartRate"
            value={formData.maxHeartRate}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Exercise Induced Angina:
          <input
            type="text"
            name="exerciseInducedAngina"
            value={formData.exerciseInducedAngina}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          ST Depression:
          <input
            type="text"
            name="stDepression"
            value={formData.stDepression}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Slope:
          <input
            type="text"
            name="slope"
            value={formData.slope}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Number of Major Vessels:
          <input
            type="text"
            name="numMajorVessels"
            value={formData.numMajorVessels}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Forms;
