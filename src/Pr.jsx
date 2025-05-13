import { useState } from "react";
import Tabs from "./Tabs";
import Input from "./Input";
import AlertLogo from "./assets/alert.svg";
function Pr({ formData, setFormData, handleChange }) {
  const [stage, setStage] = useState("everyday");

  return (
    <div>
      <Tabs stage={stage} good="Everyday" setStage={setStage} />
      {stage === "everyday" ? (
        <div className="action-content">
          <h4>What is Preventer + Reliever therapy?</h4>
          <p>
            Preventer and Reliever therapy involves two inhalers: a daily
            Preventer to reduce airway inflammation and prevent symptoms, and a
            Reliever used as needed to quickly ease breathing difficulties.
          </p>
          <h4>About my Preventer inhaler: </h4>
          <ul>
            <li>
              <div className="inhaler-name">
                <p className="nomargin">
                  My Preventer(Brown) inhaler is called:{" "}
                  <Input
                    className="line"
                    onChange={handleChange}
                    value={formData.preventerInhaler}
                    name="preventerInhaler"
                  />
                </p>
              </div>
            </li>
            <li>
              <p>
                It has a steroid, to reduce swelling and inflammation inside my
                airways
              </p>
            </li>
            <li>
              <p>This treats the main cause of asthma</p>
            </li>
          </ul>
          <h4>About my Reliever inhaler: </h4>
          <ul>
            <li>
              <div className="inhaler-name">
                <p className="nomargin">
                  My Reliever(Blue) inhaler is called:{" "}
                  <Input
                    className="line"
                    onChange={handleChange}
                    value={formData.relieverInhaler}
                    name="relieverInhaler"
                  />
                </p>
              </div>
            </li>
            <li>
              <p>
                It quickly relaxes the muscles which tightens my airways during
                flare-ups
              </p>
            </li>
            <li>
              <p>
                It relieves symptoms temporarily, but does not treat the
                inflammation.
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
                    className="line small"
                    onChange={handleChange}
                    value={formData.morningsPreventer}
                    name="morningsPreventer"
                  />{" "}
                  puff(s) of my <b>Preventer Inhaler</b> in the <b>morning</b>.
                </p>
              </div>{" "}
            </li>
            <li>
              <div className="mart-night">
                <p>
                  I take{" "}
                  <Input
                    type="number"
                    className="line small"
                    onChange={handleChange}
                    value={formData.nightsPreventer}
                    name="nightsPreventer"
                  />{" "}
                  puff(s) of my <b>Preventer Inhaler</b> at <b>night</b>.
                </p>
              </div>
            </li>
            <li>
              <p>
                If I get asthma symptoms (wheezing, tight chest, coughing or
                breathlessness), I can take a <b>maximum</b> of{" "}
                <Input
                  type="number"
                  className="line small"
                  onChange={handleChange}
                  value={formData.maxReliever}
                  name="maxReliever"
                />{" "}
                puff(s) of my <b>Reliever</b>(blue) inhaler.
              </p>
            </li>
            <li>
              <p>
                I should make sure to <b>always</b> carry my Reliever(blue)
                inhaler with me everyday
              </p>
            </li>
          </ul>
          <h4>Signs my I am using my inhalers propperly</h4>
          <ul>
            <li>
              <p>I have no night-time symptoms or few day-time symptoms</p>
            </li>
            <li>
              <p>My asthma should not interfere with my work and social life</p>
            </li>
            <li>
              <p>I use my Preventer inhaler EVERYDAY as maintenance</p>
            </li>
            <li>
              <p>I use my Reliever inhaler less than 3 times a week</p>
            </li>
            <li>
              <p>
                My peak flow stays above 50% of baseline
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
          <h4>I should contact a medical professional if:</h4>
          <ul>
            <li>
              <p>
                If I use my <b>Reliever</b> inhaler more than 4 times a day
              </p>
            </li>
            <li>
              <p>
                If I use my <b>Reliever</b> inhaler more than 3 times per week.
              </p>
            </li>
            <li>
              <p>
                My symptoms(wheezing, tight chest, coughing or breathlessness)
                are more frequent
              </p>
            </li>
            <li>
              <p>My symptoms are waking me up at night.</p>
            </li>
            <li>
              <p>My symptoms are affecting my work or social life</p>
            </li>
            <li>
              <p>
                My peak flow ranges from 50%-33% of the baseline
                {formData.peakflow != ""
                  ? `: ${Math.round(formData.peakflow * 0.33)} -
                ${Math.round(formData.peakflow * 0.5)} liters/minute`
                  : ""}
              </p>
            </li>
          </ul>
          <h4 className="nomargin"></h4>
          <div className="warning">
            <img src={AlertLogo} width="20px" />
            <br />
            <h4>
              I NEED TO BOOK AN ASTHMA REVIEW <br />
              If my <b>Reliever</b> inhaler does not last for at least{" "}
              <b>six months</b> and if I get worsening symptoms
            </h4>
            <br />
          </div>
          <h4>What can I do to prevent worsening: </h4>
          <ul>
            <li>
              <p>I should make sure that I am taking my preventer EVERYDAY. </p>
            </li>
            <li>
              <p>
                This means I should not rely only on my reliever(blue) inhaler for my
                asthma care.
              </p>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
      {stage === "bad" ? (
        <div className="action-content badbull">
          <h4>How can I tell if I am having an asthma attack:</h4>
          <ul>
            <li>
              <p>My reliever inhaler is not helping with my symptoms</p>
            </li>
            <li>
              <p>I am unable to talk in full sentences</p>
            </li>
            <li>
              <p>I find difficulty in breathing</p>
            </li>
            <li>
              <p>I have lots of wheezing, coughing or chest tightness</p>
            </li>

            <li>
              <p>
                My peak flow drops below 33% of baseline
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
                  Take <b>one</b> puff of your <b>Reliever (blue)</b> inhaler
                  EVERY <b>30-60 seconds</b>, up to <b>10 puffs maximum</b>.
                </p>
              </li>
              <li>
                <p>
                  After 10 puffs, if you are still feeling worse,{" "}
                  <span className="red">call 999</span>. Do <b>not</b> drive
                  yourself to A&E.
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
                <p>(This does not apply if you use a MART inhaler)</p>
              </li>
            </ul>
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

export default Pr;
