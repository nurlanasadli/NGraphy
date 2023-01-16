import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import { connect } from "react-redux";
function Header(props) {
  const handleInput = (e) => {
    {
      props.dispatch({ type: "SETFILTER", value: e.target.value });
    }
  };

  return (
    <>
      <div className="header-rol">
        <header>
          <div className="header-logo">
            <NavLink to="/">
              <img src={logo} />
            </NavLink>
          </div>
          <ul>
            <li>
              <NavLink className="btn right" to="/">
                <p> Home</p>
              </NavLink>
            </li>
            <li>
              <NavLink className="btn right" to="/about">
                <p> About</p>
              </NavLink>
            </li>
            <li>
              <NavLink className="btn right c-right" to="/shop">
                <p> Shop </p>
              </NavLink>
            </li>
            <li>
              <div className="basketsearch">
                <NavLink to="/basket">
                  <div className="headericon">
                    <i className="fal fa-shopping-basket"></i>
                    {props.basket.length ? (
                      <span>{props.basket.length}</span>
                    ) : (
                      props.basket
                    )}
                  </div>
                </NavLink>
                <li>
                  <div className="shop-searchs">
                    <i className="fal fa-search"></i>
                    <input
                      onChange={handleInput}
                      type="text"
                      placeholder="Search..."
                    />
                  </div>
                </li>
              </div>
            </li>
            <li>
              <NavLink className="btn right c-right" to="/account">
                <button>Account</button>
              </NavLink>
            </li>
          </ul>
        </header>
      </div>
    </>
  );
}

let t = (s) => s;
export default connect(t)(Header);
