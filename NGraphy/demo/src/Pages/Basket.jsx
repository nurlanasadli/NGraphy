import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import logo from "../images/logo.png";
import baskets from "../images/baskets.png";
function Basket(props) {
    const handleClick = () => {
      alert("Silinsin ?");
    }
  console.log(props.basket);
  const total = () => {
    return props.basket
      .map((item) => item.price * item.quantity)
      .reduce((i, j) => i + j);
  };
  return props.basket.length ? (
    <>
      <div className="procart"></div>
      {/* <div className="shop-product">
        <div className="shop-marka">
          <i className="fal fa-align-justify"></i>
        </div>
        <div className="shop-search">
          <i className="fal fa-search"></i>
          <input type="text" placeholder="Search..." />
        </div>
        <div className="icons">
          <NavLink to="/account">
            <i className="fal fa-user"></i>
          </NavLink>
          <i className="fal fa-heart"></i>
          <NavLink to="/basket">
            <i className="fal fa-shopping-basket"></i>
          </NavLink>
        </div>
      </div> */}
      <div className="links">
        <NavLink to="/shop">
          <h3>Ana Səhifə &#10094;</h3>
        </NavLink>
        <NavLink to="/basket">
          <h3 className="sebet">Səbətim</h3>
        </NavLink>
      </div>
      <div className="basket-sp">
        <h2>Səbətim</h2>
      </div>
      <div className="basket-all">
        <div className="Allbasketfilters">
          <div className="basket-border">
            {props.basket.map((item) => (
              <>
                <div className="common">
                  <div className="basket-items" key={item.id}>
                    <div
                      className="exits"
                      onClick={() => {
                        props.dispatch({
                          type: "REMOVEBASKET",
                          value: item.id,
                        });
                      }}
                    >
                      <i className="fal fa-times" onClick={handleClick}></i>
                    </div>
                    <div className="basketImg">
                      <img src={item.image} />
                    </div>
                    <div className="basketName">
                      <p>{item.model}</p>
                      <h3>{item.price} ₼</h3>
                      <div className="Bothbasket">
                        <button>Faizsiz kredit</button>
                        <h4>
                          <span>Cemi</span>: {item.price} ₼
                        </h4>
                      </div>
                      <div className="BasketColors">
                        <div className="basketColor">
                          <h5>Rəng</h5>
                          <h2></h2>
                        </div>
                        <div className="basketmemoryAll">
                          <div className="basketMemory">
                            <span
                              className="minus"
                              onClick={() => {
                                props.dispatch({
                                  type: "DECREASEITEM",
                                  value: item.id,
                                });
                              }}
                            >
                              <i class="fal fa-minus"></i>
                            </span>
                          </div>
                          <div className="numbers">
                            <p>{item.quantity}</p>
                          </div>
                          <div
                            className="basketPuls"
                            onClick={() => {
                              props.dispatch({
                                type: "INCREASEITEM",
                                value: item.id,
                              });
                            }}
                          >
                            <i class="fal fa-plus"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
        <div className="basketCommon">
          <h3>Məhsullar</h3>
          <h4>
            Toplam qiymət : <span> {total()} ₼</span>
          </h4>
          <h5>
            Endirim : <span>0 ₼</span>{" "}
          </h5>
          <hr />
          <div className="basketallprice">
            <h6>
              Toplam ödəniləcək : <span>{total()} ₼</span>{" "}
            </h6>
            <button>Sifarişi tamamla</button>
          </div>
        </div>
      </div>

      <div className="finishbasket">
        <div className="finish-writter">
          <div className="logo-finish">
            <div className="logo-finishes">
              <img src={logo} />
              <h3>NGraphy</h3>
            </div>
            <div className="shop-all">
              <div className="shop-contact">
                <h4>*0343</h4>
                <i class="fal fa-phone"></i>
              </div>
              <div className="shop-info">
                <h3>info@ngraphy.com</h3>
                <i class="fal fa-inbox"></i>
              </div>
              <div className="corporative">
                <h4>
                  Korporativ <br /> satışlar
                </h4>
                <i class="fal fa-suitcase"></i>
              </div>
              <div className="infoes">
                <h4>Haqqımızda</h4>
                <i class="fal fa-info-circle"></i>
              </div>
            </div>
          </div>
          <div className="finish2">
            <h2>Paras</h2>
            <h3>Parabolix</h3>
            <h3>Broncolor</h3>
          </div>
          <div className="finish2">
            <h2>İşıqlar</h2>
            <h3>Amaran</h3>
            <h3>Aputure</h3>
            <h3>Nanlite</h3>
          </div>
          <div className="finish2">
            <h2>Tripodlar</h2>
            <h3>Manfrotto</h3>
            <h3>Joby</h3>
          </div>
          <div className="finish2">
            <h2>Linzalar</h2>
            <h3>Canon</h3>
            <h3>Nikon</h3>
            <h3>Leica</h3>
            <h3>Olympus</h3>
          </div>
          <div className="finish2">
            <h2>Kamera</h2>
            <h3>Canon</h3>
            <h3>Fujifilm</h3>
            <h3>Nikon</h3>
            <h3>Leica</h3>
            <h3>Sony</h3>
            <h3>Olympus</h3>
          </div>
          <div className="finish2">
            <h2>Shop</h2>
            <h3>Kamera</h3>
            <h3>Linzalar</h3>
            <h3>Tripodlar</h3>
            <h3>Işıqlar</h3>
            <h3>Paras</h3>
          </div>
          <div className="finish3">
            <h2>Kontakt</h2>
            <div className="phon">
              <i class="fal fa-phone">+994 503260343</i>
            </div>
            <input type="email" placeholder="E-poçt ünvanı" />
            <div className="sub">
              <button>subscribe</button>
            </div>
          </div>
        </div>
        <div className="shop-hr">
          <hr />
          <h4>Bütün hüquqlar qorunur &#169; NGraphy 2022</h4>
        </div>
      </div>
    </>
  ) : (
    <div className="basketEmpty">
      <div className="basketbox">
        <div className="basketclick">
          <img src={baskets} />
          <h3>Səbətinizdə məhsul yoxdur</h3>
         <NavLink to="/shop"> <button>Ana Səhifə</button></NavLink>
        </div>
      </div>
    </div>
  );
}

let t = (s) => s;
export default connect(t)(Basket);
