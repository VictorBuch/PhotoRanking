import React, { useState } from "react";
import Rating from "@material-ui/lab/Rating";

export default function ImageCard(props) {
  const [rating, setRating] = useState(0);

  function handleRating(image, rating) {
    console.log("Image: " + image.target.id);
    console.log("Rating: " + rating);
  }

  return (
    <div className="card" style={{ width: "18rem", margin: "3px" }}>
      <img
        key={props.index}
        src={props.index}
        alt=""
        className="card-img-top"
      />
      <div className="card-img-overlay d-flex align-items-end m-0 p-0">
        <Rating
          onChange={(image, rating) => {
            handleRating(image, rating);
          }}
          defaultValue={Math.ceil(Math.random() * 4)}
        />
      </div>
    </div>
  );
}
