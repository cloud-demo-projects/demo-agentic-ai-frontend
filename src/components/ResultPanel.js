import React from "react";
import { Spinner, Card, Alert } from "react-bootstrap";

const ResultPanel = ({ result, loading, status }) => {
  if (loading)
    return (
      <Alert variant="info" className="mt-3 text-center">
        <Spinner animation="border" size="sm" /> Processing your request...
      </Alert>
    );

  if (!result) return null;

  return (
    <Card className="mt-3 p-3">
      {result.error ? (
        <Alert variant="danger">{result.error}</Alert>
      ) : (
        <>
          <h5 className="text-success mb-2">AI Response</h5>
          <pre style={{ whiteSpace: "pre-wrap" }}>
            {JSON.stringify(result, null, 2)}
          </pre>
        </>
      )}
      {status && (
        <div className="mt-2 text-muted">
          <small>{status}</small>
        </div>
      )}
    </Card>
  );
};

export default ResultPanel;
