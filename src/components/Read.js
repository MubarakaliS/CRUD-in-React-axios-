import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Read = () => {
  const [userData, setUserData] = useState({});
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/users/${id}`)
      .then((res) => setUserData(res.data)) // Update userData state with fetched data
      .catch((err) => console.error(err));
  }, []); // Include id in dependency array to re-fetch data when id changes

  return (
    <div
      className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light vh-100"
      style={{ flexDirection: "column" }}
    >
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Detail of User</h1>

        <div className="mb-2">
          <strong>Name: {userData.name}</strong>
        </div>
        <div className="mb-2">
          <strong>Email: {userData.email}</strong>
        </div>
        <div className="mb-2">
          <strong>Phone: {userData.phone}</strong>
        </div>
        <Link to={`/update/${id}`} className="btn btn-success me-3">
          Edit
        </Link>
        <Link to="/" className="btn btn-primary">
          Back
        </Link>
      </div>
    </div>
  );
};

export default Read;
