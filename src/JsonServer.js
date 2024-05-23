import React, { useEffect, useState } from "react";
import axios from 'axios'
const JsonServer = () => {
    const [data,setData]=useState([])
  useEffect(() => {
    axios.get('http://localhost:3031/users')
    .then(res=>)
  }, []);
  return <div></div>;
};

export default JsonServer;
