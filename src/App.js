import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Tabs, Tab } from "react-bootstrap";
import GoalInput from "./components/GoalInput";
import PhotoUpload from "./components/PhotoUpload";
import ResultPanel from "./components/ResultPanel";
import StatusBar from "./components/StatusBar";

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  return (
    <Container className="mt-4">
      <h2 className="text-center text-primary mb-4">
        🧠 AI Health Strategist Dashboard
      </h2>

      <Tabs defaultActiveKey="meal" className="mb-3" justify>
        <Tab eventKey="meal" title="Meal Plan">
          <GoalInput setResult={setResult} setLoading={setLoading} />
          <ResultPanel result={result} loading={loading} status={status} />
        </Tab>

        <Tab eventKey="photo" title="Photo Insights">
          <PhotoUpload setResult={setResult} setLoading={setLoading} />
          <ResultPanel result={result} loading={loading} status={status} />
        </Tab>

        <Tab eventKey="trends" title="Trends">
          <div className="card p-3 mt-3">
            <h5>📊 Coming Soon</h5>
            <p>
              This section will show glycemic and inflammation trends from your
              AI history — synced with Azure storage or a local DB.
            </p>
          </div>
        </Tab>
      </Tabs>
    </Container>
  );
}

export default App;
