import React from "react";
import Card from "./Card";
import Card_2 from "./Card_2";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function app() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Card />} />
          <Route exact path="/card-1" element={<Card_2 />} />
        </Routes>
      </Router>
    </div>
  );
}
