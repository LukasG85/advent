import React, { useState, useEffect } from "react";
import { createCalendar } from "./helpers";
import "./App.scss";
import Hatch from "./Hatch";

function App() {
  const [hatches, setHatches] = useState([]);

  useEffect(() => {
    const calendar = localStorage.calendar
      ? JSON.parse(localStorage.calendar)
      : createCalendar();

    setHatches(calendar);
  }, []);

  // Store calendar in localStorage
  useEffect(() => {
    hatches.length && localStorage.setItem("calendar", JSON.stringify(hatches));
  }, [hatches]);

  const handleFlipHatch = id => {
    const updateHatches = hatches.map(hatch =>
      hatch.id === id ? { ...hatch, open: !hatch.open } : hatch
    );
    setHatches(updateHatches);
  };
  return (
    <div className="App">
      {hatches.map(hatch => (
        <Hatch key={hatch.id} hatch={hatch} handleClick={handleFlipHatch} />
      ))}
    </div>
  );
}

export default App;
