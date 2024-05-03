import React from "react";
import FormFields from "../components/FormFields";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <p className="para">
        <span className="span-head">
          Heart Disease Prediction based on ECG using enhanced machine learning
          models
        </span>
        {"  "}
        is our Final-Year project that develops a model to assess individuals
        risk of heart disease. Analyzing factors like age, gender, cholesterol,
        and lifestyle, it aims for early detection and intervention, striving to
        improve patient outcomes and promote cardiovascular health through
        data-driven preventative care.
      </p>
      <FormFields />
    </div>
  );
}