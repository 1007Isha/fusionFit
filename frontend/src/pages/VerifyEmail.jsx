// VerifyEmail.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const VerifyEmail = () => {
  const { token } = useParams();
  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log("Hi i am in not foubd page");
    const verifyEmail = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/users/verify-email/${token}`);
        setMessage(response.data.message);
      } catch (error) {
        setMessage(error.response?.data?.message || "An error occurred");
      }
    };
  
    verifyEmail();
  }, [token]);
  

  return (
    <div className="text-center flex justify-center items-center">
      <h1 className="text-6xl">{message}</h1>
    </div>
  );
};

export default VerifyEmail;


