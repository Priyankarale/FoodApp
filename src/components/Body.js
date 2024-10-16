import React from "react";
import Header from "./Header";
import RestaurantCard from "./RestaurantCard";
const Body = () => {
  return (
    <div>
      <Header />
      <RestaurantCard
        resName="Domino's Pizza"
        cuisine="Pizzas, Italian, Pastas, Desserts"
        rating="4.5"
        total_times="20-35 min"
      />
    </div>
  );
};
export default Body;
