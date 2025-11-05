import React, { useState } from "react";
import axios from "axios";

const PhotoUpload = ({ setResult, setLoading }) => {
  const [file, setFile] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return;
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/analyze_photo`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setResult(res.data);
    } catch (err) {
      setResult({ error: "Upload failed: " + err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card p-3 mt-3">
      <h5>Upload Meal Photo</h5>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button className="btn btn-success mt-2" onClick={handleUpload}>
        Analyze Photo
      </button>
    </div>
  );
};

export default PhotoUpload;
