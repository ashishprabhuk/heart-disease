import React from "react";
import { Accordion } from "react-bootstrap";
import heart from "/heart-nbg1.gif";
import "./Contents.css";

export default function Contents() {
  const accordionData = [
    { title: 'Age', content: 'Your age category.' },
    { title: 'Sex', content: 'Your gender category.' },
    { title: 'Chest Pain Type', content: 'Chest Pain type is your level of chest pain.' },
    { title: 'Resting Blood Pressure', content: 'Resting Blood pressure is the level of your blood pressure.' },
    { title: 'Cholesterol', content: 'Cholesterol is the level of your chol.' },
    { title: 'Fasting Blood Sugar', content: 'Fasting Blood Sugar is the level of your blood sugar.' },
    { title: 'Rest ECG', content: 'RestECG is the level of your ECG.' },
    { title: 'Thalach', content: 'Thalach is the level of your thalach.' },
    { title: 'Exercise Induced Angina', content: 'Exercise Induced Angina is the level of your exang.' },
    { title: 'Old Peak', content: 'Old Peak is the level of your peaks.' },
    { title: 'Slope', content: 'Slope is the level of your slopes.' }
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
