import React from "react";
const RestaurantCard = (props) => {
  const { resName, cuisine, rating, total_times } = props;
  return (
    <div>
      <main>
        <section className="container">
          <div className="rest_card">
            <div className="card">
              <div>
                <img
                  class="rest-img"
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/44bc93b7-e492-4061-96d8-b77e24eb5fa8_97204.jpg"
                  alt="Domino"
                />
              </div>
              <h1>{resName}</h1>
              <h5>{cuisine}</h5>
              <h4>{rating}</h4>
              <h4>{total_times}</h4>
              <h4></h4>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
export default RestaurantCard;
