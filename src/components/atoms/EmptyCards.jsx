import React from "react";

const EmptyCards = () => {
  let lengthEmpty = new Array(4 - 0);
  let emptyCards = lengthEmpty.map((_, i) => {
    return <div className="card" key="i"></div>;
  });
  return <>{emptyCards}</>;
};

export default EmptyCards;
