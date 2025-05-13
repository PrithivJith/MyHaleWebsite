import { useState } from "react";
import Tabs from "./Tabs";
import Input from "./Input";
import AlertLogo from "./assets/alert.svg";
function Mart({ formData, setFormData, handleChange }) {
  const [stage, setStage] = useState("everyday");

  return (
    <div>
      <Tabs stage={stage} good="Every day" setStage={setStage} />
      {stage === "everyday" ? (
        <div className="action-content">
          <h4>What is MART therapy?</h4>
          <p>
            MART therapy stands for Maintenance And Reliever therapy. Here a
            single combination inhaler is used as both a reliever and preventer.
          </p>
          <h4>About my MART inhaler: </h4>
          <ul>
            <li>
              <div className="inhaler-name">
                <p className="nomargin">
                  My MART inhaler is called:{" "}
                  <Input
                    className="line"
                    onChange={handleChange}
                    value={formData.martInhaler}
                    name="martInhaler"
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
                It also contains a long-acting reliever, formoterol, which
                relaxes the muscles tightening around my airways
              </p>
            </li>
          </ul>
          <h4>My everyday care</h4>
          <ul>
            <li>
              <div className="mart-day">
                <p>
                  I take{" "}
                  <Input
                    type="number"
                    className="line"
                    onChange={handleChange}
                    value={formData.morningsMart}
                    name="morningsMart"
                  />{" "}
                  puff(s) in the morning.
                </p>
              </div>{" "}
            </li>
            <li>
              <div className="mart-night">
                <p>
                  I take{" "}
                  <Input
                    type="number"
                    className="line"
                    onChange={handleChange}
                    value={formData.nightsMart}
                    name="nightsMart"
                  />{" "}
                  puff(s) at night.
                </p>
              </div>
            </li>
            <li>
              <p>
                If I experience any asthma symptoms (wheezing, tight chest,
                coughing or breathlessness), I take one puff of my same MART
                inhaler (this acts as a reliever).
              </p>
            </li>
            <li>
              <p>
                I can take a <b>maximum</b> of{" "}
                <Input
                  name="maxMart"
                  onChange={handleChange}
                  value={formData.maxMart}
                  className="line"
                  type="number"
                />{" "}
                puffs a day (including my morning and night puffs).
              </p>
            </li>
          </ul>
          <h4>Signs that I am using my MART inhaler effectively</h4>
          <ul>
            <li>
              <p>
                I have no night-time symptoms or only a few day-time symptoms
              </p>
            </li>
            <li>
              <p>My asthma should not interfere with my work and social life</p>
            </li>
            <li>
              <p>I use my MART inhaler EVERYDAY as maintenance</p>
            </li>
            <li>
              <p>I take extra puffs fewer than 3 times in a week</p>
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
            I should contact a medical professional if my symptoms are getting
            worse:
          </h4>
          <ul>
            <li>
              <p>If I am using my MART inhaler 3 or more times/week </p>
            </li>
            <li>
              <p>
                If my asthma symptoms are not controlled after using the maximum{" "}
                <Input
                  name="maxMart"
                  onChange={handleChange}
                  value={formData.maxMart}
                  className="line"
                  type="number"
                />{" "}
                puffs of my MART inhaler per day
              </p>
            </li>
            <li>
              <p>My symptoms are waking me up at night.</p>
            </li>
            <li>
              <p>My symptoms are interfering my work or social life</p>
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
              I NEED TO BOOK AN ASTHMA REVIEW
              <br />
              If I frequently exceed my maximum number of daily puff — my
              treatment may need adjusting for better control.
            </h4>
            <br />
          </div>
        </div>
      ) : (
        ""
      )}
      {stage === "bad" ? (
        <div className="action-content badbull">
          <h4>How do I know if I am having an asthma attack?</h4>
          <ul>
            <li>
              <p>My MART inhaler is not helping with symptoms</p>
            </li>
            <li>
              <p>I am unable to talk in full sentences</p>
            </li>
            <li>
              <p>I find difficulty in breathing</p>
            </li>
            <li>
              <p>I have a lot of wheezing, coughing, and chest tightness.</p>
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
            <ol className="nomargin">
              <li>
                <p>Sit up and keep calm - this will help your breathing.</p>
              </li>
              <li>
                <p>
                  Take <b>one</b> puff of your MART inhaler EVERY{" "}
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
            <ul className="nomargin">
              <li>
                <p>
                  If you don't have your MART inhaler, you can use a blue
                  reliever inhaler, <b>one</b> puff every 30-60 seconds, up to a maximum
                  of 10 puffs.
                </p>
              </li>
            </ul>
          </div>
          <span className="red">Urgent Follow-up after attack</span>
          <p>Follow this advice to make sure you recover well: </p>
          <ul>
            <li>
              <p>
                If you managed with your asthma attack at home, book an URGENT follow-up
                today
              </p>
            </li>
            <li>
              <p>
                If you managed with your asthma attack at A&E, book an URGENT follow-up
                within 48 hours of discharge.
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

export default Mart;
