import React from "react";
import logo from "../images/logo.png";
import { NavigationType, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import foto from "../images/cmg.png";
import lense from "../images/lense.png";
import tripod from "../images/tripod.png";
import light from "../images/led.png";
import para from "../images/studio-lighting.png";
function Product(props) {
  const addToBasket = (item) => {
    props.dispatch({ type: "ADDTOBASKET", value: item });
  };
  let { category } = useParams();
  let { marka } = useParams();
  if (!marka) {
    marka = "";
  }
  let items = [...props.phones];

  return (
    <>
      <div className="procart"></div>

      <div className="links">
        <NavLink to="/shop">
          <h3>Ana Səhifə &#10094;</h3>
        </NavLink>
      </div>
      <div className="filtr">
        <h3>Marka</h3>
        <div className="filtrbutton">
          <input type="text" placeholder="Axtar" />
        </div>
        <div className="filtrhr">
          <hr color="#dadada" />
        </div>
        <div className="filtrinput">
          <input className="filtrcubic" type="checkbox" id="canon" />
          <label for="canon">Canon</label>
          <input className="filtrcubic" type="checkbox" id="nikon" />
          <label for="nikon">Nikon</label>
          <input className="filtrcubic" type="checkbox" id="olympus" />
          <label for="olympus">Olympus</label>
          <input className="filtrcubic" type="checkbox" id="leica" />
          <label for="leica">Leica</label>
          <input className="filtrcubic" type="checkbox" id="fujifilm" />
          <label for="fujifilm">Fujifilm</label>
          <input className="filtrcubic" type="checkbox" id="sony" />
          <label for="sony">Sony</label>
        </div>
      </div>
      <div className="filtrremove">
        <h4>Filtrləri təmizlə</h4>
      </div>
      <div className="filtrazn">
        <h3>Qiymət (AZN)</h3>
        <div className="azninput">
          <input type="text" placeholder="Ən az" /> &#8212;
          <input type="text" placeholder="Ən çox" />
          <button>&#10003;</button>
        </div>
      </div>
      <div className="forwards-all">
        <div className="forwards">
          {items
            .filter(
              (a) =>
                a.category.toLowerCase() == category.toLowerCase() &&
                a.marka.toLowerCase() == marka.toLowerCase()
            )
            .filter((item) => {
              if (
                item.model.toUpperCase().includes(props.filter.toUpperCase())
              ) {
                return item;
              }
            })
            .map((t) => {
              return (
                <>
                  <div className="product-slider1" key={t.id}>
                    <p>Faizsiz kredit</p>
                    {!props.basket.includes(t) ? (
                      <i
                        onClick={() => addToBasket(t)}
                        className="fal fa-shopping-basket addToCard baskets"
                      ></i>
                    ) : (
                      <i
                        onClick={() => addToBasket(t)}
                        className="fal fa-shopping-basket active addToCard baskets"
                      ></i>
                    )}
                    <NavLink to={`shop/details/${t.id}`}>
                      <div className="Productimages">
                        <img src={t.image} />
                        <hr color="#bbc2af" />
                      </div>
                    </NavLink>
                    <div className="Productnames">
                      <h1 className="Prmarka">{t.marka}</h1>
                      <h1 className="Prmodel">{t.model}</h1>
                    </div>
                    <div className="Productprices">
                      <h1 className="price">{t.price} ₼</h1>
                      <button className="credit">12 ay 169.99 ₼</button>
                    </div>
                    <div className="Productbuy">
                      <div className="Productbutt">
                        <NavLink to="/Buy">
                          <button
                            onClick={() =>
                              props.dispatch({ type: "BUY_NOW", value: t })
                            }
                          >
                            Indi al
                          </button>
                        </NavLink>
                      </div>
                      <div className="Productlik">
                        <button className="Prfavori">
                          <i className="fas fa-heart"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
      <div className="finishss">
        <div className="finish-writter">
          <div className="logo-finish">
            <div className="logo-finishes">
              <img src={logo} />
              <h3>NGraphy</h3>
            </div>
            <div className="shop-all">
              <div className="shop-contact">
                <h4>*0343</h4>
                <i className="fal fa-phone"></i>
              </div>
              <div className="shop-info">
                <h3>info@ngraphy.com</h3>
                <i className="fal fa-inbox"></i>
              </div>
              <div className="corporative">
                <h4>
                  Korporativ <br /> satışlar
                </h4>
                <i className="fal fa-suitcase"></i>
              </div>
              <div className="infoes">
                <h4>Haqqımızda</h4>
                <i className="fal fa-info-circle"></i>
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
            <h2>Contact</h2>
            <div className="phon">
              <i className="fa-solid fa-phone">+994 503260343</i>
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
  );
}
let t = (s) => s;
export default connect(t)(Product);
