import React from "react";
import { useState } from "react";
import italy from "../images/italy.jpg";
import montain from "../images/montain.jpg";
function Account() {
  const [actives, setActive] = useState(false);
  return (
    <section>
      <div className={actives ? "container actives" : "container"}>
        <div className="user signinBx">
          <div className="imgBx">
            <img src={italy} />
          </div>
          <div className="formBx">
            <form>
              <h2>Daxil olun</h2>
              <input type="text" placeholder="İstifadəçi adı" />
              <input type="password" placeholder="Parol" />
              <input type="submit" value="Daxil ol" />
              <p className="signup">
                Hesabınız yoxdur?
                <a href="#" onClick={() => setActive(!actives)}>
                  Qeydiyyat.
                </a>
              </p>
            </form>
          </div>
        </div>
        <div className="user signupBx">
          <div className="formBx">
            <form>
              <h2>Hesab yarat</h2>
              <input type="text" placeholder="İstifadəçi adı" />
              <input type="text" placeholder="E-poçt ünvanı" />
              <input type="password" placeholder="Şifrə Yarat" />
              <input type="password" placeholder="Şifrəni təsdiqləyin" />
              <input type="submit" value="Qeydiyyat" />
              <p className="signup">
                Artıq bir hesabınız var mı?
                <a href="#" onClick={() => setActive(!actives)}>
                  Daxil olun.
                </a>
              </p>
            </form>
          </div>
          <div className="imgBx">
            <img src={montain} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Account;
