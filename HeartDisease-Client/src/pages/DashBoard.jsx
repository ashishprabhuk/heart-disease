import React, { useContext, useState } from "react";
import { Store } from "../Context/ContextApi";
import {
  BarChart,
  Bar,
  Area,
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
  AreaChart,
  Cell,
  Legend,
  ZAxis,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";
import CardioYes from "/cardio-yes.svg";
import CardioNo from "/cardio-no.svg";
// import Table from "react-bootstrap/Table";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
} from "@mui/material";
import "./DashBoard.css";

const DashBoard = () => {
  const { name, prediction, formData } = useContext(Store);

  const data = formData;
  const {
    sex,
    cp,
    fbs,
    trestbps,
    chol,
    thalach,
    restecg,
    exang,
    oldpeak,
    slope,
  } = formData;
  const inputData = [
    { name: "RestingBP", value: trestbps },
    { name: "Cholesterol", value: chol },
    { name: "Thalach", value: thalach },
  ];
  const zeroOneData = [
    { name: "sex", value: sex },
    { name: "CP", value: cp },
    { name: "FBS", value: fbs },
    { name: "RestECG", value: restecg },
    { name: "Exang", value: exang },
    { name: "OldPeak", value: oldpeak },
    { name: "Slope", value: slope },
  ];
  const combinedData = [...inputData, ...zeroOneData];

  const color = prediction ? "#ff6060" : "#6aabff";
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  return (
    <>
      <div style={{ color: "white", textAlign: "center" }}>
        <div className="results">
          <h1 style={{ marginTop: "5px" }}>
            Prediction:{" "}
            <span style={{ color }}>
              {prediction ? `YES (${prediction})🙁` : `NO (${prediction})😊`}
            </span>
          </h1>
          <h4>
            Hey{" "}
            <span style={{ color: "#c1c9ea", fontWeight: "600" }}>{name}</span>{" "}
          </h4>
          <div>
            {prediction ? (
              <>
                <h4 className="yes">
                  Consult a doctor for immediate care. Early action can make a
                  difference in managing heart health!
                </h4>
                <img
                  src={CardioYes}
                  className="responsive-image"
                  alt="doctors"
                />
              </>
            ) : (
              <>
                <h4 className="no">
                  Stay healthy with good habits! Keep up the balanced diet and
                  active lifestyle for a happy heart!
                </h4>
                <img
                  src={CardioNo}
                  className="responsive-image"
                  alt="happy-emoji"
                />
              </>
            )}
          </div>
        </div>
      </div>
      <hr />

      <div className="table-box">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {Object.keys(formData).map((head) => (
                  <TableCell key={head}>{head}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                {Object.values(formData).map((value, index) => (
                  <TableCell key={index}>{value}</TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      {/* Charts */}
      <h2 className="chart-head">Charts</h2>
      <div className="charts-container">
        {/* AreaChart */}
        <div className="chart-item">
          <ResponsiveContainer height={250} width="100%">
            <AreaChart data={inputData} margin={{ right: 25, top: 10 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#889ed8"
                fill="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Tooltip />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        {/* BarChart */}
        <div className="chart-item">
          <ResponsiveContainer height={250} width="100%">
            <BarChart
              data={inputData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill={color}>
                {inputData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        {/* Scatter Chart */}
        <div className="chart-item">
          <ResponsiveContainer height={250} width="100%">
            <ScatterChart>
              <CartesianGrid />
              <XAxis type="category" dataKey="name" name="Name" />
              <YAxis type="number" dataKey="value" name="Value" />
              <Tooltip cursor={{ strokeDasharray: "3 3" }} />
              <Legend />
              <Scatter name="Data" data={zeroOneData} fill={color} line />
            </ScatterChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="chart-item">
          <ResponsiveContainer height={250} width="100%">
            <PieChart>
              {/* Pie Chart for inputData */}
              <Pie
                data={inputData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill={color}
                label
              />
              {/* Pie Chart for zeroOneData */}
              <Pie
                data={zeroOneData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={90}
                outerRadius={120}
                fill="#8884d8"
                label
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        {/* Radar Chart */}
        <div className="chart-item">
          <ResponsiveContainer height={250} width="100%">
            <RadarChart outerRadius={100} data={inputData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="name" />
              <PolarRadiusAxis />
              <Tooltip />
              <Radar
                name="Chart"
                dataKey="value"
                stroke={color}
                fill={color}
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        <div className="chart-item">
          <ResponsiveContainer height={250} width="100%">
            <RadarChart outerRadius={100} data={zeroOneData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="name" />
              <PolarRadiusAxis />
              <Tooltip />
              <Radar
                name="Chart"
                dataKey="value"
                stroke={color}
                fill={color}
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
