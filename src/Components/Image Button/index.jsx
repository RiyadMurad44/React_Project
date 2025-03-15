import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const ImageButton = () => {
  return (
    <div>
      <Link to={"/addImage"}>
        <button className="image-button">
          <p>Add Image</p>
        </button>
      </Link>
    </div>
  );
};

export default ImageButton;
