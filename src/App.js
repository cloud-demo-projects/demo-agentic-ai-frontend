import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import GoalInput from "./components/GoalInput";
import PhotoUpload from "./components/PhotoUpload";
import ResultPanel from "./components/ResultPanel";
import StatusBar from "./components/StatusBar";

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  return (
    <div className="container mt-4">
      <h2 className="text-center text-primary">AI Health Strategist</h2>
      <StatusBar setStatus={setStatus} />
      <GoalInput setResult={setResult} setLoading={setLoading} />
      <PhotoUpload setResult={setResult} setLoading={setLoading} />
      <ResultPanel result={result} loading={loading} status={status} />
    </div>
  );
}

export default App;
