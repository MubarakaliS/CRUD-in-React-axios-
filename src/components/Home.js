import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [userData, setUserData] = useState([]);
  const navigate=useNavigate()
  useEffect(() => {
    axios
      .get("http://localhost:3001/users")
      .then((res) => setUserData(res.data))
      .catch((err) => console.error(err));
  }, []);
  const handleDelete=(id)=>{
    const confirm=window.confirm("Would you like delete");
    if(confirm){
      axios.delete("http://localhost:3001/users/"+id)
      .then(res=>{
        navigate('/')
      }).catch(err=>{
        console.error(err);
      })
    }
  }
  return (
    <div
      className="d-flex justify-content-center align-items-center bg-light vh-100"
      style={{ flexDirection: "column" }}
    >
      <h1>List of Users</h1>

      <div className="w-75 rounded bg-white border shadow p-4">
        <div className="d-flex justify-content-end">
          <button className="btn btn-success" onClick={()=>navigate('/create')}>Add</button>
        </div>
        <table className="table table-srtiped">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((item, index) => (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>
                  <button className="btn btn-sm btn-outline-success me-2"
                  onClick={()=>navigate(`/read/${item.id}`)}>Read</button>
                  <button className="btn btn-sm btn-outline-primary me-2" onClick={()=>navigate(`/update/${item.id}`)}>Edit</button>
                  <button className="btn btn-sm btn-outline-danger" onClick={e=>handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )

 
}

export default Home