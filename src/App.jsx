import { useState, useEffect } from "react";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Response from "./Response";
import Info from "./Info";
import { openDB, saveSettings, loadSettings } from "./db.js";
import Navbar from "./Navbar";
function App() {
  const [db, setDb] = useState(null);
  const [formData, setFormData] = useState({
    treatment: "",
    triggers: {
      pollen: false,
      dust: false,
      animals: false,
      smoke: false,
      exercise: false,
      stress: false,
      weather: false,
      mold: false,
    },
    smoking: "",
    otherTriggers: "",
    peakflow: "",
    date: "",
    martInhaler: "",
    morningsMart: "",
    nightsMart: "",
    maxMart: "",
    martWeeks: "",
    airInhaler: "",
    maxAir: "",
    preventerInhaler: "",
    relieverInhaler: "",
    morningsPreventer: "",
    nightsPreventer: "",
    maxReliever:"",
    increasePuffPrev:"",
    increaseTimesPrev:"",
  });

  useEffect(() => {
    const initDB = async () => {
      try {
        const dbInstance = await openDB();
        setDb(dbInstance);

        const savedData = await loadSettings(dbInstance);
        if (savedData) {
          setFormData(savedData);
        }
      } catch (err) {
        console.error("Failed to open DB or load data:", err);
      }
    };

    initDB();
  }, []);
  useEffect(() => {
    openDB().then(setDb).catch(console.error);
  }, []);

  const handleSave = async () => {
    if (!db) return;
    await saveSettings(db, formData);
  };
  useEffect(() => {
    if (!db) return;

    const save = async () => {
      try {
        await saveSettings(db, formData);
        console.log("Auto-saved on change");
      } catch (err) {
        console.error("Save on change failed:", err);
      }
    };

    save();
  }, [formData, db]); // triggers on formData OR db change

  const handleLoad = async () => {
    if (!db) return;
    const data = await loadSettings(db);
    if (data) {
      setFormData(data);
      alert("Settings loaded");
    } else {
      alert("No settings found");
    }
  };

  return (
    <>
      <div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/info"
              element={
                <Info
                  formData={formData}
                  setFormData={setFormData}
                  save={handleSave}
                />
              }
            />
            <Route
              path="/response"
              element={
                <Response
                  type={formData.treatment}
                  formData={formData}
                  setFormData={setFormData}
                />
              }
            />
          </Routes>
        </div>
        <Navbar className="navbar"></Navbar>
      </div>
    </>
  );
}

export default App;
