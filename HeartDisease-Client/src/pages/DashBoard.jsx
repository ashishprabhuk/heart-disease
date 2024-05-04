import React, { useContext, useState } from "react";
import { Store } from "../Context/ContextApi";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  LineChart,
  Line,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import CardioYes from "/cardio-yes.svg";
import CardioNo from "/cardio-no.svg";
import "./DashBoard.css";

const DashBoard = () => {
  const { name, prediction } = useContext(Store);

  const [data, setData] = useState({
    age: 52,
    sex: 1,
    cp: 0,
    trestbps: 2,
    chol: 122,
    fbs: 1,
    restecg: 0,
    thalach: 255,
    exang: 1,
    oldpeak: 1,
    slope: 2,
  });

  const color = prediction ? "#ff6060" : "#6aabff";

  return (
    <>
      <div style={{ color: "white", textAlign: "center" }}>
        <div className="results">
          <h1 style={{ marginTop: "5px" }}>
            Prediction:{" "}
            <span style={{ color }}>{prediction ? `YES (${prediction})🙁` : `NO (${prediction})😊`}</span>
          </h1>
          <h4>
            Hey <span style={{ color: "#c1c9ea", fontWeight: "600" }}>{name}</span>{" "}
          </h4>
          <div>
          {prediction ? (
              <>
                <h4 className="yes">
                  Consult a doctor for immediate care. Early action can make a
                  difference in managing heart health!
                </h4>
                <img src={CardioYes} className="responsive-image" alt="doctors" />
              </>
            ) : (
              <>
                <h4 className="no">
                  Stay healthy with good habits! Keep up the balanced diet and
                  active lifestyle for a happy heart!
                </h4>
                <img src={CardioNo} className="responsive-image" alt="happy-emoji" />
              </>
            )}
          </div>
        </div>
      </div>
      <hr />
      <div className="horizontal-line"></div>

      {/* Charts */}
      <h2 className="chart-head">Charts</h2>
      <div className="charts-container">
        {/* Bar Chart */}
        <div className="chart-item">
          <ResponsiveContainer width="100%" aspect={4 / 3}>
            <BarChart
              data={[
                { name: "Male", value: data.sex },
                { name: "Female", value: 1 - data.sex },
              ]}
            >
              <Bar dataKey="value" fill={color} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </BarChart>
          </ResponsiveContainer>
        </div>
        {/* Pie Chart */}
        <div className="chart-item">
          <ResponsiveContainer width="100%" aspect={4 / 3}>
            <PieChart>
              <Pie
                data={[
                  { name: "Type 0", value: data.cp === 0 ? 1 : 0 },
                  { name: "Type 1", value: data.cp === 1 ? 1 : 0 },
                  { name: "Type 2", value: data.cp === 2 ? 1 : 0 },
                  { name: "Type 3", value: data.cp === 3 ? 1 : 0 },
                ]}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill={color}
                label
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        {/* Scatter Chart */}
        <div className="chart-item">
          <ResponsiveContainer width="100%" aspect={4 / 3}>
            <ScatterChart>
              <CartesianGrid />
              <XAxis type="number" dataKey="age" name="Age" />
              <YAxis type="number" dataKey="thalach" name="Maximum Heart Rate Achieved" />
              <Tooltip cursor={{ strokeDasharray: "3 3" }} />
              <Scatter
                name="Age vs. Max Heart Rate"
                data={[{ age: data.age, thalach: data.thalach }]}
                fill={color}
              />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
        {/* Line Chart */}
        <div className="chart-item">
          <ResponsiveContainer width="100%" aspect={4 / 3}>
            <LineChart data={[{ age: data.age, thalach: data.thalach }]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="age" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="thalach" stroke={color} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default DashBoard;

