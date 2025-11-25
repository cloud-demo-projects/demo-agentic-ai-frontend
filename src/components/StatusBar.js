import React, { useEffect, useState } from "react";
import axios from "axios";

const StatusBar = () => {
  const [status, setStatus] = useState("Checking...");

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/status`);
        setStatus(
          `✅ Backend Active — Model: ${res.data.active_model_source} (${res.data.ollama_model})`
        );
      } catch {
        setStatus("❌ Cannot reach backend");
      }
    };
    fetchStatus();
  }, []);

  return (
    <div className="alert alert-secondary mt-3 text-center">
      {status}
    </div>
  );
};

export default StatusBar;
