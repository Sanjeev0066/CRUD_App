import React, { useState, useRef } from "react";
import axios from "axios";
export default function Form() {
  const formRef = useRef(null);
  const clickHandler = (e) => {
    e.preventDefault();
    console.log(" I was clicked");
    postData(FormData);
    formRef.current.reset();
  };
  const [FormData, setFormData] = useState({ firstName: "", lastName: "", fees: "", college: "", course: "" });

  const onChangeHandler = (e) => {
    let a = e.target.name;
    console.log(a);
    console.log(e.target.value);
    // console.log(FormData[a]);
    setFormData({
      ...FormData, // Spread the existing formData
      [a]: e.target.value, // Update the field specified by name with the new value
    });
  };
  // let b=...FormData;
  console.log(`i am the form data sanjeev ${JSON.stringify(FormData)}`);

  const postData = async () => {
    console.log(" i am called by post after submit" + JSON.stringify(FormData));
    try {
      const url = "http://localhost:8000/api/create";
      const response = await axios.post(url, FormData);
      console.log("Response:", response.data);
      return response.data; // Return whatever data you need from the response
    } catch (error) {
      console.error("Error:", error);
      throw error; // Optionally re-throw the error to handle it further up the chain
    }
  };
  //   console.log(postData);
  return (
    <div className="form-container">
      <form ref={formRef}>
        <div className="form-group">
          <label>First Name</label>
          <input type="text" id="firstName" placeholder="firstName" autoComplete="off" name="firstName" onChange={onChangeHandler} />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input type="text" name="lastName" id="lastName" autoComplete="off" placeholder="lastName" onChange={onChangeHandler} />
        </div>

        <div className="form-group">
          <label>Course</label>
          <input type="text" name="course" id="course" autoComplete="off" placeholder="course" onChange={onChangeHandler} />
        </div>

        <div className="form-group">
          <label>Fees</label>
          <input type="text" name="fees" id="fees" autoComplete="off" placeholder="fees" onChange={onChangeHandler} />
        </div>

        <div className="form-group">
          <label>College</label>
          <input type="text" name="college" id="college" autoComplete="off" placeholder="college" onChange={onChangeHandler} />
        </div>

        <button type="submit" onClick={clickHandler}>
          Submit
        </button>
      </form>
    </div>
  );
}
