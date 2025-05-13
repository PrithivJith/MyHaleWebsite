import { useState } from "react";
import Tabs from "./Tabs";
import Input from "./Input";
import AlertLogo from "./assets/alert.svg";
function Air({ formData, setFormData, handleChange }) {
  const [stage, setStage] = useState("everyday");

  return (
    <div>
      <Tabs stage={stage} good="Stable days" setStage={setStage} />
      {stage === "everyday" ? (
        <div className="action-content">
          <h4>What is AIR therapy and how does it work?</h4>
          <p>
            AIR therapy stands for anti-inflammatory reliever therapy. Here a
            combination inhaler (containing two medicines) is used to relieve
            symptoms as and when required.
          </p>
          <h4>About my AIR inhaler: </h4>
          <ul>
            <li>
              <div className="inhaler-name ">
                <p className="nomargin">
                  My AIR inhaler is called: {"  "}
                  <Input
                    className="line"
                    onChange={handleChange}
                    value={formData.airInhaler}
                    name="airInhaler"
                  />
                </p>
              </div>
            </li>
            <li>
              <p>
                It contains a steroid, to reduce swelling and inflammation
                inside my airways
              </p>
            </li>
            <li>
              <p>
                It also contains a reliever, formoterol, which relaxes the
                muscles tightening around my airways
              </p>
            </li>
          </ul>
          <h4>My Every day care</h4>
          <ul>
            <li>
              <p>
                I carry my AIR inhaler with me every day, so that I can use it
                if I get any symptoms.
              </p>
            </li>
            <li>
              <p>I do not need a separate blue reliever inhaler anymore</p>
            </li>
            <li>
              <p>
                {" "}
                I take <b>one puff</b> of my AIR inhaler if I get symptoms like
                wheezing, tight chest, coughing, or breathlessness
              </p>
            </li>
            <li>
              {" "}
              <p>
                If my symptoms have not improved after a few minutes, I can take
                another puff.
              </p>
            </li>
            <li>
              <p>
                I should not take more than{" "}
                <Input
                  className="line"
                  onChange={handleChange}
                  value={formData.maxAir}
                  name="maxAir"
                />{" "}
                puffs at any one time.
              </p>
            </li>
          </ul>
          <h4>Signs that I am using my AIR inhaler properly:</h4>
          <ul>
            <li>
              <p>I have no night-time symptoms or few day-time symptoms</p>
            </li>
            <li>
              <p>My asthma should not interfere with my work and social life</p>
            </li>
            <li>
              <p>I use my AIR inhaler occasionally, only when needed</p>
            </li>
            <li>
              <p>
                My peak flow stays above 50% of my baseline
                {formData.peakflow != ""
                  ? `: >${formData.peakflow * 0.5} liters/minute`
                  : ""}
              </p>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
      {stage === "worse" ? (
        <div className="action-content worsebull">
          <h4>
            {" "}
            I should contact a medical professional if my symptoms are getting
            worse:
          </h4>
          <ul>
            <li>
              <p>If I am using my AIR inhaler 3 or more times/week </p>
            </li>
            <li>
              <p>
                If my symptoms are not controlled after using the maximum{" "}
                <Input
                  name="maxAir"
                  onChange={handleChange}
                  value={formData.maxAir}
                  className="line"
                  type="number"
                />{" "}
                puffs of my AIR inhaler per day
              </p>
            </li>
            <li>
              <p>My symptoms are waking me up at night</p>
            </li>
            <li>
              <p>My symptoms are affecting my work or social life</p>
            </li>

            <li>
              <p>
                My peak flow ranges from 50%-33% of my baseline
                {formData.peakflow != ""
                  ? `: ${Math.round(formData.peakflow * 0.33)} -
                ${Math.round(formData.peakflow * 0.5)} liters/minute`
                  : ""}
              </p>
            </li>
          </ul>
          <br />
          <h4 className="nomargin"></h4>
          <div className="warning">
            <img src={AlertLogo} width="20px" />
            <br />
            <h4>
              I NEED TO BOOK AN ASTHMA REVIEW <br />If I frequently exceed my maximum
              daily puffs — my treatment may need adjusting for better control.
            </h4>
            <br />
          </div>
        </div>
      ) : (
        ""
      )}
      {stage === "bad" ? (
        <div className="action-content badbull">
          <h4>How can I tell if I have an asthma attack:</h4>
          <ul>
            <li>
              <p>My AIR inhaler is not helping with symptoms</p>
            </li>
            <li>
              <p>I am unable to talk in full sentences</p>
            </li>
            <li>
              <p>I find difficulty in breathing</p>
            </li>
            <li>
              <p>I have a lot of wheezing, coughing and chest tightness</p>
            </li>

            <li>
              <p>
                My peak flow drops below 33% of my baseline
                {formData.peakflow != ""
                  ? `: <${Math.round(formData.peakflow * 0.33)} liters/minute`
                  : ""}
              </p>
            </li>
          </ul>

          <div className="instruction">
            <h3>What to do during an asthma attack</h3>
            <ol>
              <li>
                <p>Sit up and keep calm - this will help your breathing.</p>
              </li>
              <li>
                <p>
                  Take <b>one</b> puff of your AIR inhaler EVERY{" "}
                  <b>1-3 minutes</b>, up to <b>6 puffs maximum</b>.
                </p>
              </li>
              <li>
                <p>
                  After 6 puffs, if you are still feeling worse,{" "}
                  <span className="red">call 999</span>. Do <b>not</b>{" "}
                  drive yourself to A&E.
                </p>
              </li>
              <li>
                <p>
                  If the ambulance has not arrived after 10 minutes and you are
                  still feeling worse, <b>repeat step 2.</b>
                </p>
              </li>
            </ol>
          </div>
          <span className="red">Urgent Followup after attack</span>
          <p>Follow this advice to make sure you recover well: </p>
          <ul>
            <li>
              <p>
                If you managed with your asthma attack at home, book an URGENT
                follow-up today
              </p>
            </li>
            <li>
              <p>
                If you managed with your asthma attack at A&E, book an URGENT
                follow-up within 48 hours of discharge.
              </p>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Air;
