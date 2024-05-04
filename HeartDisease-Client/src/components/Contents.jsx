import React from "react";
import { Accordion } from "react-bootstrap";
import heart from "/heart-nbg1.gif";
import "./Contents.css";

export default function Contents() {
  const accordionData = [
    { title: "Age", content: <h5>Age of the person in years</h5> },
    {
      title: "Sex",
      content: (
        <>
          <h5>Gender of the person</h5>
          <ul>
            <li>[1: Male, 0: Female]</li>
          </ul>
        </>
      ),
    },
    {
      title: "Chest Pain Type",
      content: (
        <>
          <h5>cp - Chest pain type</h5>
          <ul>
            <li>0 - Typical Type Angina</li>
            <li>1 - Atypical Type Angina</li>
            <li>2 - Non-angina pain</li>
            <li>3 - Asymptomatic</li>
          </ul>
        </>
      ),
    },
    {
      title: "Resting Blood Pressure",
      content: (
        <>
          <h5>Resting Blood Pressure in mm Hg</h5>
          <ul>
            <li>Ranging from 90 to 200</li>
          </ul>
        </>
      ),
    },
    {
      title: "Cholesterol",
      content: (
        <>
          <h5>The person’s cholesterol measurement in mg/dl</h5>
          <ul>
            <li>Ranging from 126 to 564</li>
          </ul>
        </>
      ),
    },
    {
      title: "Fasting Blood Sugar",
      content: (
        <>
          <h5>The person’s fasting blood sugar</h5>
          <ul>
            <li>0 : {"<"}120 mg/dl - False</li>
            <li>1 : {">"}120 mg/dl - True</li>
          </ul>
        </>
      ),
    },
    {
      title: "Rest ECG",
      content: (
        <>
          <h5>Resting Electrocardiographic Results</h5>
          <ul>
            <li>0 - Normal</li>
            <li>1 - Having ST-T wave abnormality</li>
            <li>
              2 - Showing probable or definite left ventricular hypertrophy by
              Estes’ criteria
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Thalach",
      content: (
        <div>
          <h5>
            Thalach is a test attribute that measures a person&apos;s maximum
            heart rate
          </h5>
          <p>To estimate your maximum age-related heart rate:</p>
          <ul>
            <li>Subtract your age from 220.</li>
            <li>
              For example, for a 50-year-old person, the estimated maximum
              age-related heart rate would be calculated as 220 – 50 years = 170
              beats per minute (bpm).
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Exercise Induced Angina",
      content: (
        <>
          <h5>
            Exang is the &apos;Exercise Induced Angina&apos;
            <br />
            which is recorded as:
          </h5>
          <ul>
            <li>0 - if there is no pain</li>
            <li>1 - if there is pain</li>
          </ul>
        </>
      ),
    },
    {
      title: "Old Peak",
      content: (
        <h5>
          Oldpeak is the ST depression caused by activity relative to rest.{" "}
        </h5>
      ),
    },
    {
      title: "Slope",
      content: (
        <div>
          <h4>Slope of the Peak Exercise ST segment</h4>
          <ul>
            <li>1: Upsloping</li>
            <li>2: Flat</li>
            <li>3: Downsloping</li>
          </ul>
        </div>
      ),
    },
  ];
  return (
    <div className="main">
      <div className="sider">
        <img className="image" src={heart} alt="heart" />
        <div className="accordion">
          <Accordion defaultActiveKey="0">
            {accordionData.map((data, index) => (
              <Accordion.Item eventKey={index} key={index}>
                <Accordion.Header>{data.title}</Accordion.Header>
                <Accordion.Body>{data.content}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
