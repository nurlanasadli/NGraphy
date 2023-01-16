import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, Autoplay, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import whatsapp from "../images/whatsapp.png";
import kapital from "../images/kapital.png";
import word from "../images/word.png";
import unibank from "../images/unibank.png";
import logo from "../images/logo.png";
import tap from "../images/tap.png";
function Details(props) {
  let { id } = useParams();
  let find = props.phones.find((a) => a.id == id);
  const addToBasket = (item) => {
    props.dispatch({ type: "ADDTOBASKET", value: item });
  };
  console.log(find);
  return (
    <>
      <div className="procart"></div>
      <div className="links">
        <NavLink to="/shop">
          <h3>Mağaza &#10094;</h3>
        </NavLink>
        <NavLink to="/basket">
          <h3 className="sebet">Məhsul</h3>
        </NavLink>
      </div>
      <div className="finddetail">
        <h1>{find.model}</h1>
        <div className="detailallflex">
          <div className="detailall">
            <div className="detaalls">
              <div className="detaimages">
                <div className="detaimg">
                  <img src={find.image} alt="" />
                </div>
                <div className="detategs">
                  <h4>#Teglər</h4>
                  <div className="datehave">
                    <button>Stokda var</button>
                    <button className="dtcheap">Pulsuz çatdırılma</button>
                  </div>
                  <button className="dtcredit">Faizsiz kredit</button>
                  <div className="dtcolor">
                    <h2>Rəng</h2>
                    <h3>{find.color}</h3>
                  </div>
                  <div className="detawhats">
                    <button className="dtwhats">
                      <img src={whatsapp} />
                      <h6>Whatsapp ile sifariş</h6>
                    </button>
                    <div className="sebetle">
                      <div className="detasebet">
                        <button>
                          <i
                            className="datacolor"
                            class="fal fa-shopping-basket"
                          ></i>
                          <p> Səbətə əlavə et</p>
                        </button>
                      </div>
                      <div className="dtliked">
                        <button>
                          <i class="fas fa-heart"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="detahr" color="#dadada" />
            <h4>Daxili kredit</h4>
            <div className="alllatecredits">
              <div className="latecredit">
                <div className="months">
                  <h5>6 ay</h5>
                  <h3>
                    İlkin ödəniş: <span> 0.00 ₼</span>
                  </h3>
                  <h3>
                    Ödəniş/ay: <span>373.17 ₼</span>
                  </h3>
                  <h3>
                    Yekun məbləğ: <span>{find.price} ₼</span>
                  </h3>
                  <hr />
                  <button>Müraciət et</button>
                </div>
              </div>

              <div className="latecredit1">
                <div className="months1">
                  <h5>12 ay</h5>
                  <h3>
                    İlkin ödəniş: <span> 0.00 ₼</span>
                  </h3>
                  <h3>
                    Ödəniş/ay: <span>186.12 ₼</span>
                  </h3>
                  <h3>
                    Yekun məbləğ: <span>{find.price} ₼</span>
                  </h3>
                  <hr />
                  <button>Müraciət et</button>
                </div>
              </div>
              <div className="latecredit2">
                <div className="months2">
                  <h5>18 ay</h5>
                  <h3>
                    İlkin ödəniş: <span> 0.00 ₼</span>
                  </h3>
                  <h3>
                    Ödəniş/ay: <span>133.11 ₼</span>
                  </h3>
                  <h3>
                    Yekun məbləğ: <span>{find.price} ₼</span>
                  </h3>
                  <hr />
                  <button>Müraciət et</button>
                </div>
              </div>
            </div>
            <div className="tx">
              <h3>Texniki Parametrlər</h3>
            </div>
            <div className="texdeta">
              <button>
                Marka <span> {find.marka}</span>
              </button>
              <button>
                Rəng <span> {find.color}</span>
              </button>
              <button>
                Piksel <span> {find.pixels}</span>
              </button>
              <button>
                Model <span> {find.model}</span>
              </button>
              <button>
                Yaddaş <span> {find.memory}</span>
              </button>
            </div>
          </div>
          <div className="Detailcredit">
            <div className="detailbuttons">
              <div className="findpricedeta">
                <h1>{find.price} ₼</h1>
              </div>
              <button>İndi al</button>
            </div>
            <button className="dtclicks">
              <img src={tap} /> Bir klikle al
            </button>
            <h5>və ya</h5>
            <div className="bankscred">
              <h4>Taksitlərlə əldə et</h4>
              <button>
                <img src={kapital} /> <p> 6 ay , 180.12 ₼</p>
              </button>
              <button>
                <img src={word} /> <p> 6 ay , 180.12 ₼</p>
              </button>
              <button>
                <img className="unibank" src={unibank} />{" "}
                <p className="unis"> 6 ay , 180.12 ₼</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="Detailsliders">
        <h1>Bənzər məhsullar</h1>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          navigation={true}
          modules={[Pagination, Navigation , Autoplay]}
          className="mySwiper"
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          <div className="swipersliderdetail">
            <SwiperSlide>
              <div className="forward-all">
                <div className="forward">
                  {props.product.map((item) => (
                    <div className="product-slider1f" key={item.id}>
                      <p>Faizsiz kredit</p>
                      <i className="baskets" class="fal fa-shopping-basket"></i>
                      <div className="Productimages">
                        <img src={item.image} />
                        <hr color="#bbc2af" />
                      </div>
                      <div className="Productnames">
                        <h1 className="Prmarka">{item.marka}</h1>
                        <h1 className="Prmodel">{item.model}</h1>
                      </div>
                      <div className="Productprices">
                        <h1 className="price">{item.price} ₼</h1>
                        <button className="credit">12 ay 169.99 ₼</button>
                      </div>
                      <div className="Productbuy">
                        <div className="Productbutt">
                          <button
                            onClick={() => addToBasket(item)}
                            className="addToCard"
                          >
                            Indi al
                          </button>
                        </div>
                        <div className="Productlik">
                          <button className="Prfavori">
                            <i class="fas fa-heart"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          </div>
          <SwiperSlide>
            <div className="forward-all">
              <div className="forward">
                {props.product1.map((item) => (
                  <div className="product-slider1t" key={item.id}>
                    <p>Faizsiz kredit</p>
                    <i className="baskets" class="fal fa-shopping-basket"></i>
                    <div className="Productimages">
                      <img src={item.image} />
                      <hr color="#bbc2af" />
                    </div>
                    <div className="Productnames">
                      <h1 className="Prmarka">{item.marka}</h1>
                      <h1 className="Prmodel">{item.model}</h1>
                    </div>
                    <div className="Productprices">
                      <h1 className="price">{item.price} ₼</h1>
                      <button className="credit">12 ay 169.99 ₼</button>
                    </div>
                    <div className="Productbuy">
                      <div className="Productbutt">
                        <button
                          onClick={() => addToBasket(item)}
                          className="addToCard"
                        >
                          Indi al
                        </button>
                      </div>
                      <div className="Productlik">
                        <button className="Prfavori">
                          <i class="fas fa-heart"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className="forward-all">
                <div className="forward">
                  {props.product2.map((item) => (
                    <div className="product-slider1d" key={item.id}>
                      <p>Faizsiz kredit</p>
                      <i className="baskets" class="fal fa-shopping-basket"></i>
                      <div className="Productimages">
                        <img src={item.image} />
                        <hr color="#bbc2af" />
                      </div>
                      <div className="Productnames">
                        <h1 className="Prmarka">{item.marka}</h1>
                        <h1 className="Prmodel">{item.model}</h1>
                      </div>
                      <div className="Productprices">
                        <h1 className="price">{item.price} ₼</h1>
                        <button className="credit">12 ay 169.99 ₼</button>
                      </div>
                      <div className="Productbuy">
                        <div className="Productbutt">
                          <button
                            onClick={() => addToBasket(item)}
                            className="addToCard"
                          >
                            Indi al
                          </button>
                        </div>
                        <div className="Productlik">
                          <button className="Prfavori">
                            <i class="fas fa-heart"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SwiperSlide>
        </Swiper>
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
            <h2>Contact</h2>
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
  );
}
let t = (s) => s;
export default connect(t)(Details);
