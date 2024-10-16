import React from "react";

const Header = () => {
  return (
    <div>
      <header className="header">
        <img
          className="logo"
          src="https://img.freepik.com/premium-vector/food-logo-with-smile-spoon-fork-delicious-food-design-illustration-tongue-saliva_207371-61.jpg?w=2000"
          alt="logo"
        />
        <div className="location__text">
          <a href="#" class="other">
            other
          </a>
          <input
            type="text"
            className="location"
            placeholder="70 Feet Rd, New Paccha peth, Sakhar Peth, Solapur, Maharashtra 413006, India"
            readonly
          />
          <i className="fa-solid fa-angle-down"></i>
        </div>
        <nav className="nav__items">
          <ul>
            <li>
              <i className="fa-solid fa-suitcase"></i>Priyanka Corporate
            </li>
            <li>
              <i className="fa-solid fa-magnifying-glass"></i>Search
            </li>
            <li>
              <i class="fa-solid fa-percent"></i>Offers
            </li>
            <li>
              <i className="fa-solid fa-dharmachakra"></i>Help
            </li>
            <li>
              <i className="fa-regular fa-user"></i>Sign In
            </li>
            <li>
              <i className="fa-solid fa-cart-shopping"></i>Cart
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
export default Header;
