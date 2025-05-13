import { useState } from "react";

function Tabs({ stage, setStage, good }) {
  const everyday = () => setStage("everyday");
  const worse = () => setStage("worse");
  const bad = () => setStage("bad");

  return (
    <div className="tabs">
      <div
        onClick={everyday}
        className={
          "tab everyday " + `${stage === "everyday" ? "focused" : "unfocused"}`
        }
      >
        {good}
      </div>
      <div
        onClick={worse}
        className={
          "tab worse " + `${stage == "worse" ? "focused" : "unfocused"}`
        }
      >
        Worsening
      </div>
      <div
        onClick={bad}
        className={"tab bad " + `${stage === "bad" ? "focused" : "unfocused"}`}
      >
        Severe
      </div>
    </div>
  );
}

export default Tabs;
