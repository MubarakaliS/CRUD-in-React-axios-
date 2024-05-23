import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  
  const navigate = useNavigate();
  console.log(id);
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  });
  useEffect(() => {
    axios
      .get(`http://localhost:3001/users/${id}`)
      .then((res) => setValues(res.data)) // Update userData state with fetched data
      .catch((err) => console.error(err));
  }, []); // Include id in dependency array to re-fetch data when id changes


  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:3001/users/${id}`, values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.error(err));
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center bg-light vh-100"
      style={{ flexDirection: "column" }}
    >
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Update a User</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="name">Name :</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Name"
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter Email"
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="phone">Phone :</label>
            <input
              type="text"
              name="phone"
              className="form-control"
              placeholder="Enter Phone"
              value={values.phone}
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
            />
          </div>
          <button className="btn btn-success" type="submit" onClick={handleSubmit}>Update</button>
          <Link to="/" className="btn btn-primary ms-1">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Update;
