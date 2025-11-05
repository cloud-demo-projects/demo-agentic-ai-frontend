import React, { useState } from "react";
import axios from "axios";

const GoalInput = ({ setResult, setLoading }) => {
  const [goal, setGoal] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!goal) return;
    setLoading(true);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/generate_meal_plan`,
        { goal }
      );
      setResult(res.data);
    } catch (err) {
      setResult({ error: "Request failed: " + err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card p-3 mt-3">
      <h5>Enter Your Health Goal</h5>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="e.g. anti-inflammatory meal for prediabetes"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />
        <button className="btn btn-primary mt-2">Generate Plan</button>
      </form>
    </div>
  );
};

export default GoalInput;
