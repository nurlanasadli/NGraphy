import React from "react";
import "./Buy.css";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
function Buy(props) {
  console.log(props.buy);
  return (
    <>
      <div className="procart"></div>
      <div className="links">
        <NavLink to="/shop">
          <h3>Ana Səhifə &#10094;</h3>
        </NavLink>
      </div>
      <div className="buyallcontainer">
        <div className="buycontainer">
          <div className="buytext">
            <h3>20 ₼-dan yuxarı məhsullar şəhərdaxili pulsuz çatdırılır.</h3>
            <h3>
              Məhsulun rəsmiləşdirilməsi zamanı 5-10% komissiya məbləği tələb
              oluna bilər.
            </h3>
          </div>
          <div className="buygiveup">
            <div className="allbuybutton">
              <div className="buybutton">
                <h5>Ad</h5>
                <input type="text" placeholder="Ad" />
              </div>
              <div className="buybutton1">
                <h5>Soyad</h5>
                <input type="text" placeholder="Soyad" />
              </div>
            </div>
            <div className="buybutton2">
              <h5>Mobil nömrəniz</h5>
              <input type="text" placeholder="+994 |" />
            </div>
            <div className="buyhr">
              <hr color="#dadada" />
            </div>
            <div className="buytextsonline">
              <h3>Ödəniş üsulunu seçin</h3>
            </div>
            <div className="buyonlinebutton">
              <button>Qapıda nağd ödəniş</button>
              <button>Qapıda kartla ödəniş</button>
              <button>Online ödəniş</button>
            </div>
          </div>
          <div className="finishbutton">
            <button>Sifarişi tamamla</button>
          </div>
        </div>
        <div className="buybrand">
          {[props.buy]?.map((item, key) => (
            <div key={key} className="brandprice">
              <h2>
                Ödəniləcək məbləğ: <span> {item.price} ₼</span>
              </h2>
              <div className="brandwindows">
                <h3>
                  Toplam qiymət: <span> {item.price} ₼</span>
                </h3>
                <hr />
                <div className="brandwinimages">
                  <h3>
                    {" "}
                    <img src={item.image} />{" "}
                  </h3>
                  <h3>
                    <span>{item.model}</span>
                  </h3>
                </div>
                <div className="brandwincolor">
                  <h4>Rəng:</h4>
                  <p> {item.color}</p>
                </div>
                <div className="brandwincolor">
                  <h4>Piksel:</h4>
                  <p> {item.pixels}</p>
                </div>
                <hr />
                <div className="brandwincolors">
                  <h4>Piksel:</h4>
                  <p> {item.price}₼</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
let t = (s) => s;
export default connect(t)(Buy);
