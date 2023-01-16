import React from "react";
import fact1 from "../images/fact1.jpg";
import fact2 from "../images/fact2.jpg";
import fact3 from "../images/fact3.png";
function Fact() {
  return (
    <>
      <div className="fact-wrapper">
        <div className="procart"></div>
        <div className="fact">
          <div className="fact1">
            <img src={fact1} />
          </div>
          <h3>Nikon yeni məhsulları ilə ön plandadı , Nikon yeni kamera linzaları tezliklə</h3>
        </div>
      </div>
    </>
  );
}

export default Fact;
