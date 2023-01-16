import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import About from "./Pages/About";
import Shop from "./Pages/Shop";
import Fact from "./Pages/Fact";
import Account from "./Pages/Account";
import Product from "./Pages/Product";
import { connect } from "react-redux";
import Basket from "./Pages/Basket";
import Buy from "./Pages/Buy";
import Details from "./Pages/Details";
import { useEffect } from "react";
function App(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/account" element={<Account />} />
        <Route path="/fact" element={<Fact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/category/:category" element={<Product />} />
        <Route path="shop/category/:category/:marka" element={<Product />} />
        <Route
          path="/shop/category/:category/:marka/shop/details/:id"
          element={<Details />}
        />
        <Route path="/shop/details/:id" element={<Details />} />
        <Route
          path="/category/:category/:marka/details/:id"
          element={<Details />}
        />
        <Route path="/Buy" element={<Buy />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </>
  );
}
let t = (s) => s;
export default connect(t)(App);
