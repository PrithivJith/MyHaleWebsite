import Air from "./Air";
import Mart from "./Mart";
import Pr from "./Pr";

function Response({ type, formData, setFormData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData);
  };
  let page = "";
  if (type === "mart") {
    page = (
      <div>
        <h2>Asthma Response Guide</h2>
        <Mart
          formData={formData}
          setFormData={setFormData}
          handleChange={handleChange}
        />
      </div>
    );
  } else if (type === "air") {
    page = (
      <div>
        <h2>Asthma Response Guide</h2>
        <Air
          formData={formData}
          setFormData={setFormData}
          handleChange={handleChange}
        />
      </div>
    );
  } else if (type === "pr") {
    page = (
      <div>
        <h2>Asthma Response Guide</h2>
        <Pr
          formData={formData}
          setFormData={setFormData}
          handleChange={handleChange}
        />
      </div>
    );
  } else {
    page = (
      <div className="fillindiv">
        <h3 className="fillin">
          Please fill in the "Treatment Type" dropdown in the "My Information"
          page by using the bottom navigation bar{" "}
        </h3>
      </div>
    );
  }
  return <>{page}</>;
}

export default Response;
