import React from "react";
import Card from "./Card";
import Card2 from "./Card_2";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function app() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Card />} />
          <Route exact path="/card_2" element={<Card2 />} />
        </Routes>
      </Router>
    </div>
  );
}
