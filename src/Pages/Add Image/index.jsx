import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import "./styles.css";

const AddImage = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tag: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div>
      <Navbar />
      <div className="add-image-container">
        <h2 className="add-image-title">Add a New Image</h2>
        <form onSubmit={handleSubmit} className="image-form">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="tag"
            placeholder="Tag"
            value={formData.tag}
            onChange={handleChange}
            required
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            required
          />
          <button type="submit">Upload Image</button>
        </form>
      </div>
    </div>
  );
};

export default AddImage;
