// import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DashBoard from "./pages/DashBoard";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Header />
      <p className="heading">Heart Disease Prediction</p>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}  
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div>
        <p className="note">
          {" "}
          <span className="note-span">Note: </span>This is a prediction for
          basic guidance; for accurate information, please consult a doctor.
        </p>
      </div>
    </>
  );
}

export default App;
