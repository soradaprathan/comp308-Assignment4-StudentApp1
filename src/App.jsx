import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";
import StudentForm from "./components/StudentForm.jsx";

const App = () => (
  <>
    <div className="container mt-5">
      <div>App Name: studentapp1</div>
      <StudentForm />
    </div>
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
