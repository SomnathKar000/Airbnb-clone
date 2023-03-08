import React from "react";
import Card from "./Card";

const Body = () => {
  const values = {
    img: "card.jpg",
    rating: "5.0",
    reviewcount: "6",
    cuntry: "USA",
    title: "Life lessons with Katie Zaferes",
    price: 173,
  };

  return (
    <div>
      <Card values={values} />
    </div>
  );
};

export default Body;
