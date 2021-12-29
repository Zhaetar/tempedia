import "antd/dist/antd.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Details from "../Details";
import ListPage from "../List";
import "./styles.css";

const App: React.FC = () => {
  return (
    <div className="tempedia">
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="about" element={<Details />} />
      </Routes>
    </div>
  );
};

export default App;
