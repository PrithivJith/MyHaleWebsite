import { useState } from "react";
import Input from "./Input.jsx";
import Dropdown from "./Dropdown.jsx";
import Checkbox from "./Checkbox.jsx";
import Button from "./Button.jsx";

function Info({ formData, setFormData, save }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData);
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    console.log(formData);
    setFormData((prev) => ({
      ...prev,
      triggers: {
        ...prev.triggers,
        [name]: checked,
      },
    }));
  };

  return (
    <div className="info">
      <h2>My Information</h2>
      <hr />
      <div className="form">
        <Dropdown
          name="treatment"
          value={formData.treatment}
          label="Treatment Type"
          onChange={handleChange}
          options={[
            { value: "mart", label: "MART" },
            { value: "air", label: "AIR" },
            { value: "pr", label: "Preventer and Reliever" },
          ]}
        />
        <div className="triggers">
          <h4>Triggers</h4>
          <div className="checks">
            <Checkbox
              checked={formData.triggers.pollen}
              name="pollen"
              label="Pollen"
              onChange={handleCheckboxChange}
            />
            <Checkbox
              checked={formData.triggers.dust}
              name="dust"
              label="Dust"
              onChange={handleCheckboxChange}
            />
            <Checkbox
              checked={formData.triggers.animals}
              name="animals"
              label="Animals"
              onChange={handleCheckboxChange}
            />
            <Checkbox
              checked={formData.triggers.smoke}
              name="smoke"
              label="Smoke"
              onChange={handleCheckboxChange}
            />
            <Checkbox
              checked={formData.triggers.exercise}
              name="exercise"
              label="Exercise"
              onChange={handleCheckboxChange}
            />
            <Checkbox
              checked={formData.triggers.stress}
              name="stress"
              label="Stress"
              onChange={handleCheckboxChange}
            />
            <Checkbox
              checked={formData.triggers.weather}
              name="weather"
              label="Weather"
              onChange={handleCheckboxChange}
            />
            <Checkbox
              checked={formData.triggers.mold}
              name="mold"
              label="Mould"
              onChange={handleCheckboxChange}
            />
            <Input
              placeholder="Others"
              className="other"
              name="otherTriggers"
              value={formData.otherTriggers}
              onChange={handleChange}
            />
          </div>
        </div>
        <Dropdown
          name="smoking"
          value={formData.smoking}
          label="Smoking status"
          onChange={handleChange}
          options={[
            { value: "Never Smoked", label: "Never Smoked " },
            { value: "Ex Smoker", label: "Ex Smoker" },
            { value: "Currently Smoking", label: "Currently Smoking" },
            {
              value: "Passive Smoking",
              label: "Passive Smoking",
            },
            { value: "E-cigarette", label: "E-cigarette" },
          ]}
        />

        <Input
          type="number"
          className="peak"
          name="peakflow"
          value={formData.peakflow}
          placeholder="Liters/minute"
          onChange={handleChange}
          label="Peak flow (baseline)"
        />
        <Input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          label="Next asthma review"
        />
        <Input
          type="text"
          name="devices"
          className="devices"
          placeholder="(Excluding inhalers)"
          value={formData.devices}
          onChange={handleChange}
          label="Other Medical Devices"
        />
      </div>
    </div>
  );
}

export default Info;
