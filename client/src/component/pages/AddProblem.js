import React, { useState } from "react";
import "./AddProblem.css";
import axios from "axios";
const AddProblem = () => {
  const [user, setUser] = useState({
    name: "",
    description: ""
  });

  const handleChange = e => {
    const { name, value } = e.target;
    console.log(name, value);
    setUser({
      ...user,
      [name]: value
    });
  };

  const Addproblem = () => {
    const { name, description } = user;
      alert("posted");
      axios
        .post("http://localhost:8000/addproblem", user)
        .then(res => alert(res.data.message))
        .catch(err => console.log(err));
  };

  return (
    <div className="register">
      {console.log("user", user)}
      <h1>Add your Problem</h1>
      <input
        type="text"
        name="name"
        value={user.name}
        placeholder="Your Name"
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        value={user.description}
        placeholder="Your Problem decription"
        onChange={handleChange}
      />
      <div className="button" onClick={Addproblem}>
        Register
      </div>
    </div>
  );
};

export default AddProblem;