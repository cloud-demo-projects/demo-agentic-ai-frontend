import React, { useEffect } from "react";
import axios from "axios";

const StatusBar = ({ setStatus }) => {
  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/status`);
        setStatus(`Active Model Source: ${res.data.active_model_source}`);
      } catch (err) {
        setStatus("Server offline or misconfigured.");
      }
    };
    fetchStatus();
  }, [setStatus]);

  return (
    <div className="alert alert-secondary mt-3">
      <strong>System:</strong> Checking model status...
    </div>
  );
};

export default StatusBar;
