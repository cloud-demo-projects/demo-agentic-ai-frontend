import React from "react";

const ResultPanel = ({ result, loading, status }) => {
  if (loading) return <div className="alert alert-info mt-3">Processing...</div>;
  if (!result) return null;

  return (
    <div className="card p-3 mt-3">
      {result.error ? (
        <div className="alert alert-danger">{result.error}</div>
      ) : (
        <>
          <h5 className="text-success">AI Result</h5>
          <pre style={{ whiteSpace: "pre-wrap" }}>
            {JSON.stringify(result, null, 2)}
          </pre>
        </>
      )}
      {status && <div className="mt-2 text-muted">Status: {status}</div>}
    </div>
  );
};

export default ResultPanel;
