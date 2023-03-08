import React from "react";
import star from "../star.png";
import cardImg from "./card.jpg";
const Card = (props) => {
  const { img, rating, reviewcount, cuntry, title, price } = props.values;
  console.log(img);
  console.log(cardImg);
  return (
    <div className="card">
      <img
        // src={`./${img}`}
        src={cardImg}
        style={{ height: "235px", width: "176px", borderRadius: "9px" }}
        alt="Image"
      />
      <div>
        <p className="cspan">
          <img src={star} style={{ height: "20px" }} alt="" />
          <span>{rating} </span>
          <span>({reviewcount}) . </span>
          <span>{cuntry}</span>
        </p>
        <p>{title}</p>
        <p>
          <b>From ${price} </b>/ person
        </p>
      </div>
    </div>
  );
};

export default Card;
