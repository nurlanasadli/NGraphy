import React, { useState } from "react";
import { connect } from "react-redux";
import $ from "jquery";
import comments from "../images/comments.png";
import parabolix from "../images/parabolix.png";
import broncolor from "../images/broncolor.png";
import partnyor1 from "../images/partnyor1.png";
import partnyor2 from "../images/partnyor2.png";
import partnyor3 from "../images/partnyor3.png";
import partnyor4 from "../images/partnyor4.png";
import partnyor5 from "../images/partnyor5.png";
import partnyor6 from "../images/partnyor6.png";
import shop1 from "../images/shop1.jpg";
import shop2 from "../images/shop2.jpg";
import shop3 from "../images/shop3.jpg";
import shop4 from "../images/shop4.jpg";
import shop5 from "../images/shop5.png";
import shop6 from "../images/shop6.jpg";
import search from "../images/search.png";
import Phone from "../Components/Phone";
import input from "../images/search.png";
import camera from "../images/camera.png";
import logo from "../images/logo.png";
import foto from "../images/cmg.png";
import lense from "../images/lense.png";
import tripod from "../images/tripod.png";
import light from "../images/led.png";
import para from "../images/studio-lighting.png";
import user from "../images/user.png";
import heart from "../images/heart.png";
import cart from "../images/cart.png";
import account from "../images/account.png";
import right from "../images/next.png";
import email from "../images/email.png";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, Autoplay, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import slider20 from "../images/10.jfif";
import slider21 from "../images/11.jfif";
import slider22 from "../images/12.jfif";
import slider23 from "../images/13.webp";
import slider24 from "../images/14.jfif";
function Shop(props) {
  const addToBasket = (item) => {
    props.dispatch({ type: "ADDTOBASKET", value: item });
  };
  const [loadMore, setloadMore] = useState(8);
  $(document).ready(function () {
    $("li").on("click", function () {
      $(this).siblings().removeClass("active");
      $(this).addClass("active");
    });
  });
  return (
    <>
      <div className="boxs">
        <img src={comments} alt="" />
      </div>
      <div className="alls"></div>
      {/* <div className="search">
        <div className="category">
        </div>
        <div className="search-input">
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
      <div className="outlet">
        {/*  */}
        <div className="auto_slider">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <div className="swiper-slide">
              <SwiperSlide>
                <img src={shop5} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={shop1} />
              </SwiperSlide>
              <SwiperSlide>
                <img className="shop2" src={shop2} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={shop4} />
              </SwiperSlide>
              <SwiperSlide>
                <img className="shop3" src={shop3} />
              </SwiperSlide>
              <SwiperSlide>
                <img className="shop6" src={shop6} />
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
      <div className="scrolloutlet">
        <div className="outlets">
          <ul className="catalogsall">
            <li className="catalog1">
              <NavLink to="/category/camera">
                <h6 className="cameraact">Kameralar</h6>
              </NavLink>
              <div className="clicks">
                <div className="licategory1">
                  <ul className="click1">
                    <h2>Kamera</h2>
                    <li>
                      <NavLink className="btn1" to="category/camera/Canon">
                        <div className="imgscamera">
                          <img src="https://w7.pngwing.com/pngs/723/795/png-transparent-canon-camera-classic-canon-camera-slr.png" />
                          <h4>Canon</h4>
                        </div>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="btn1" to="category/camera/Fujifilm">
                        <div className="imgscamera">
                          <img src="https://mpng.subpng.com/20180705/bsq/kisspng-fujifilm-x100t-fujifilm-x100f-photography-point-an-fujifilm-xa1-5b3e926acdd1d2.7822335515308273708431.jpg" />
                          <h4>Fujifilm</h4>
                        </div>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="btn1" to="category/camera/Nikon">
                        <div className="imgscamera">
                          <img src="https://w7.pngwing.com/pngs/927/632/png-transparent-nikon-d5600-nikon-d5500-digital-slr-nikon-dx-format-camera-nikon-lens-camera-lens-photography.png" />
                          <h4>Nikon</h4>
                        </div>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="btn1" to="category/camera/Leica">
                        <div className="imgscamera">
                          <img src="https://img.favpng.com/6/6/3/leica-m-monochrom-typ-246-leica-m10-leica-m7-png-favpng-DLbuFrBgYFsyaQCG7fsNhJQVS.jpg" />
                          <h4>Leica</h4>
                        </div>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="btn1" to="category/camera/Sony">
                        <div className="imgscamera">
                          <img src="https://www.pngfind.com/pngs/m/648-6489782_photo-camera-png-image-transparent-sony-a9-camera.png" />
                          <h4>Sony</h4>
                        </div>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="btn1" to="category/camera/OLYMPUS">
                        <div className="imgscamera">
                          <img src="https://e7.pngegg.com/pngimages/749/718/png-clipart-olympus-om-d-e-m5-mark-ii-mirrorless-interchangeable-lens-camera-graphy-dslr-lens-camera-lens.png" />
                          <h4>Olympus</h4>
                        </div>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li className="catalog2">
              <NavLink to="category/lenses">
                <h6>Linzalar</h6>
              </NavLink>
              <div className="clicks">
                <div className="licategory2">
                  <ul className="click">
                    <h2 className="lin">Linza</h2>
                    <li>
                      <NavLink className="btn1" to="category/lenses/Canon">
                        <div className="imgscamera">
                          <img src="https://e7.pngegg.com/pngimages/510/43/png-clipart-canon-ef-14mm-lens-canon-ef-lens-mount-canon-ef-s-60mm-f-2-8-macro-usm-lens-camera-lens-ultra-wide-angle-lens-lens-take-the-camera-equipment-camera-lens-lens-photography.png" />
                          <h4>Canon</h4>
                        </div>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="btn1" to="category/lenses/Nikon">
                        <div className="imgscamera">
                          <img src="https://w7.pngwing.com/pngs/1015/657/png-transparent-nikon-af-s-dx-zoom-nikkor-18-55mm-f-3-5-5-6g-nikon-af-s-dx-nikkor-35mm-f-1-8g-nikon-af-s-dx-nikkor-18-55mm-f-3-5-5-6g-vr-ii-dx-nikkor-camera-lens-camera-lens-nikkor.png" />
                          <h4>Nikon</h4>
                        </div>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="btn1" to="category/lenses/Leica">
                        <div className="imgscamera">
                          <img src="https://banner2.cleanpng.com/20180623/ouc/kisspng-leica-m-mount-leica-camera-summilux-camera-lens-leica-m7-5b2ee00f5790f6.2616388715297986713587.jpg" />
                          <h4>Leica</h4>
                        </div>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="btn1" to="category/lenses/OLYMPUS">
                        <div className="imgscamera">
                          <img src="https://e7.pngegg.com/pngimages/452/267/png-clipart-olympus-m-zuiko-digital-ed-9-18mm-f-4-5-6-micro-four-thirds-system-wide-angle-lens-camera-lens-lens-camera-lens.png" />
                          <h4>Olympus</h4>
                        </div>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="catalog3">
              <NavLink to="category/tripod">
                <h6>Tripodlar</h6>
              </NavLink>
              <div className="clicks">
                <div className="licategory3">
                  <ul className="click lins3">
                    <h2 className="lin3">Tripod</h2>
                    <li>
                      <NavLink className="btn1" to="category/tripod/Manfrotto">
                        <div className="imgscamera">
                          <img src="https://img.favpng.com/13/19/8/manfrotto-compact-light-tripod-monopod-photography-png-favpng-0R8f9mZpPuQRCJGpG6fHq4dWM.jpg" />
                          <h4>Manfrotto</h4>
                        </div>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="btn1" to="category/tripod/Joby">
                        <div className="imgscamera">
                          <img src="https://img.favpng.com/9/19/14/joby-joby-gorillapod-joby-gorillapod-magnetic-mini-tripod-joby-gorillapod-magnetic-325-png-favpng-fqj6gR5CdUbeWxHMa9wfTQVD3.jpg" />
                          <h4>Joby</h4>
                        </div>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="catalog4">
              <NavLink to="category/lights">
                <h6>İşıqlar</h6>
              </NavLink>
              <div className="clicks">
                <div className="licategory4">
                  <ul className="click lins4">
                    <h2 className="lin4">İşıq</h2>
                    <li>
                      <NavLink className="btn1" to="category/lights/Amaran">
                        <div className="imgscamera">
                          <img src="https://www.aputure.com/wp-content/uploads/2020/12/100x-1.png" />
                          <h4>Amaran</h4>
                        </div>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="btn1" to="category/lights/Aputure">
                        <div className="imgscamera">
                          <img src="https://marvel-b1-cdn.bc0a.com/f00000000269197/www.aputure.com/wp-content/uploads/2021/08/LS-600x-Pro_Transparent-BG_0003.png" />
                          <h4>Aputure</h4>
                        </div>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="btn1" to="category/lights/NANLITE">
                        <div className="imgscamera">
                          <img src="https://image.pngaaa.com/371/1213371-middle.png" />
                          <h4>Nanlite</h4>
                        </div>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="catalog5">
              <NavLink to="category/paras">
                <h6>Paras</h6>
              </NavLink>
              <div className="clicks">
                <div className="licategory5">
                  <ul className="click lins5">
                    <h2 className="lin5">Paras</h2>
                    <li>
                      <NavLink className="btn1" to="category/paras/PARABOLIX">
                        <div className="imgscamera">
                          <img src={parabolix} />
                          <h4>Parabolix</h4>
                        </div>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="btn1" to="category/paras/BRONCOLOR">
                        <div className="imgscamera">
                          <img src={broncolor} />
                          <h4>Broncolor</h4>
                        </div>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="shop-most">
        <h2>Ən çox Satılanlar</h2>
      </div>
      <div className="forward-all">
        <div className="forward">
          {props.endirim.slice(0, loadMore).map((item) => (
            <div className="product-slider1" key={item.id}>
              <p>Faizsiz kredit</p>
              <i
                onClick={() => addToBasket(item)}
                className="fal fa-shopping-basket addToCard baskets"
              ></i>
              <NavLink to={`/shop/details/${item.id}`}>
                <div className="Productimages">
                  <img src={item.image} />
                  <hr color="#bbc2af" />
                </div>
              </NavLink>
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
                  <NavLink to="/Buy">
                    <button
                      onClick={() =>
                        props.dispatch({ type: "BUY_NOW", value: item })
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
          ))}
        </div>
        <div className="forinfo">
          {loadMore == 8 && (
            <button onClick={() => setloadMore(20)}>Daha çox</button>
          )}
        </div>
      </div>
      <div className="shop-most">
        <h2>Yeni Məhsullar</h2>
      </div>
      <div className="forward-all">
        <div className="forward">
          {props.yeni.slice(0, loadMore).map((item) => (
            <div className="product-slider1s" key={item.id}>
              <p>Faizsiz kredit</p>
              <i
                onClick={() => addToBasket(item)}
                className="fal fa-shopping-basket addToCard baskets"
              ></i>
              <NavLink to={`/shop/details/${item.id}`}>
                <div className="Productimages">
                  <img src={item.image} />
                  <hr color="#bbc2af" />
                </div>
              </NavLink>
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
                  <button onClick={props.dispatch({type: "BUY_NOW", value: item})} >Indi al</button>
                </div>
                <div className="Productlik">
                  <button className="Prfavori">
                    <i className="fas fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="forinfo">
          {loadMore == 8 && (
            <button onClick={() => setloadMore(20)}>Daha çox</button>
          )}
        </div>
      </div>
      <div className="Shop-Partnyor">
        <h1>Partnyorlar</h1>
        <div className="partnyors">
          <div className="partnyorresponsive">
            <img src={partnyor1} />
            <img src={partnyor2} />
            <img src={partnyor3} />
            <img src={partnyor4} />
            <img src={partnyor5} />
            <img src={partnyor6} />
          </div>
        </div>
      </div>
      <div className="finish">
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
            <h2>Mağaza</h2>
            <h3>Kamera</h3>
            <h3>Linzalar</h3>
            <h3>Tripodlar</h3>
            <h3>Işıqlar</h3>
            <h3>Paras</h3>
          </div>
          <div className="finish3">
            <h2>Kontakt</h2>
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
let t = (a) => a;
export default connect(t)(Shop);
