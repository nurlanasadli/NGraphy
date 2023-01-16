import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import company from "../images/company.jpg";
import quote from "../images/quote.png";
import compay1 from "../images/compay1.jpeg";
import compay2 from "../images/compay2.jpeg";
import check from "../images/check.png";
import late from "../images/late.jpeg";
import comments from "../images/comments.png";

function About() {
  return (
    <>
      <div className="boxs">
        <img src={comments} alt="" />
      </div>
      <div className="procart"></div>
      <div className="companycontainer">
        <div className="companyimg">
          <img src={company} />
          <h3 >
            <span>
              {" "}
              <p> BİZİM HAQQIMIZDA</p>
            </span>{" "}
            <br /> Söhbət təkcə ondan getmir <span> biz nə edirik</span>,
            haqqındadır <br /> <span> Biz kimik</span> ve{" "}
            <span> biz bunu necə edirik.</span>
          </h3>
        </div>
        <div className="companyread">
          <div className="companytext" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
            <h1>Hekayemizi oxuyun</h1>
            <h3>
              Biz NGraphy-a 2008-ci ilde aydın bir məqsəd qoyaraq başladıq
              müştərilərimizin texnologiyaya əsaslanan müvəffəqiyyətli olmasına
              kömək edin təşkilatlar.
            </h3>
            <h4>
              14 ildən artıqdır ki, İTMAGINATION müştərilərimiz üçün proqram
              həlləri yaradır və onlara daha yaxşı və daha sürətli innovasiyalar
              yaratmağa imkan verir.
            </h4>
            <h5>
              İnanırıq ki, hər birimizdə bir yenilikçi var və biz də varıq
              innovativ və səmərəli proqram sistemləri yaratmaq missiyasındadır
              erasında böyük bizneslərin pik performansa çatmasına kömək etmək
              maliyyə etibarsızlığı.
            </h5>
            <div className="companyrift" data-aos="fade-up"
     data-aos-duration="3000">
              <img src={quote} alt="" />
              <h3>
              Məqsədimiz böyük çatdırmaq olub <br /> texnoloji həllər
              an <br />
              münasib qiymətə və insanla <br /> üz.
              </h3>
            </div>
          </div>
          <div className="companyimages">
            <img src={compay1} />
          </div>
        </div>
        <div className="companyready">
          <div className="companyreading">
            <div className="companyimgs">
              <img src={compay2} />
            </div>
            <div className="companyies">
              <div className="comall" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                <img src={quote} />
                <div className="companytexts">
                  <h2 >
                  Fərq təkcə bizim gördüyümüz işlərdə deyil <br /> - odur
                     kim olduğumuza və necə olduğumuza bağlıdır <br /> et bunu.
                  </h2>
                </div>
              </div>
              <div className="companytexted" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                <h3>
                Buna görə də ilk müştərimiz daha böyük müştəri əvəzinə bizi seçdi,
                   daha çox <br />
                   qurulmuş firma. Onlar bizim öhdəliyimizi tanıdılar <br />{" "}
                   çeviklik və düzgün həllərin təqdim edilməsi <br />{" "}
                   yalnız etibarlı tərəfdaşdan əldə etdiyiniz əməkdaşlıq.
                </h3>
                <br />
                <br />
                <h3>
                Siz NGraphy-nin biznes modelini belə düşünə bilərsiniz <br />
                biznesdən biznesə, amma əslində insandan insana.
                </h3>
                <br />
                <br />
                <h3>
                Həm komandamız, həm də müştərilərimiz müsbət nəticələri yüksək<br /> qiymətləndirirlər 
                   insan siması ilə çatdırılır, buna görə də müştərilərimiz gəlir{" "}
                  <br />
                  dönə-dönə bizə qayıt. Onlar yeni xidmətlər tələb edirlər və{" "}
                  <br />
                  yeniliklər, fikir və tövsiyələrini bölüşürlər və onlar{" "}
                  <br />
                  böyüməmizi gücləndirir.
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="companypartner">
          <h1>Bizim dəyərlərimiz</h1>
          <div className="companyallbox" data-aos="fade-up"
     data-aos-duration="3000">
            <div className="companybox1">
              <img src={check} />
              <div className="companyboxtext">
                <h2>Şəffaflıq</h2>
                <h4>
                Biz inanırıq ki, etik və açıq münasibət bəsləyir
                   <br /> məqsədlərimizə nail olmaq. Ona görə də açıq danışırıq
                   və <br />
                   etdiyimiz hər şey haqqında vicdanla – <br /> həllər biz
                   <br /> onları çatdırmaq üçün aldığı qiymətə çatdırın.
                </h4>
              </div>
            </div>
            <div className="companybox1">
              <img src={check} />
              <div className="companyboxtext">
                <h2>Peşəkarlıq</h2>
                <h4>
                üçün bilik və təcrübəmizdən istifadə edirik <br /> yüksək çatdırmaq
                   bizim üçün keyfiyyətli həllər <br /> tərəfdaşlar. Bu o deməkdir ki, biz
                   ardıcıl olaraq <br /> bütün tərəfdaşlıqlarımıza çox şey gətirir{" "}
                  <br /> onlardan almağı gözlədiyimiz kimi.
                </h4>
              </div>
            </div>
            <div className="companybox1">
              <img src={check} />
              <div className="companyboxtext">
                <h2>Tərəfdaşlıq</h2>
                <h4>
                Biz bir-birimizə və müştərilərimizə elə yanaşırıq <br /> tərəfdaşlar. O
                   qurmağa çalışırıq <br /> münasibətlərə əsaslanır
                   dürüstlük, <br /> əməkdaşlıq və anlaşma.
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="numberall">
          <div className="companynumber">
            <h1>Nömrələrlə NGRAPHY</h1>
            <div className="allyear" data-aos="fade-up"
     data-aos-duration="1000">
              <div className="companyear">
                <h2>14+</h2>
                <h3>Bazarda İllər</h3>
              </div>
              <div className="companyear">
                <h2>300+</h2>
                <h3>Məmnun Müştərilər</h3>
              </div>
              <div className="companyear">
                <h2>500+</h2>
                <h3>Uğurlu Layihələr</h3>
              </div>
              <div className="companyear1">
                <h2>400+</h2>
                <h3>Bortda olan insanlar</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="finishcompany">
          <div className="companyfinis" data-aos="fade-up"
     data-aos-duration="3000">
            <h1>Bizim missiyamız</h1>
            <h3>
            NGRAPHY-de hər kəsin potensialı var <br />{" "}
            novator. Amma bu potensialı dərk etmək yaxşıdan daha çox şey tələb edir{" "}
              <br /> texnologiya; edə biləcəyiniz insanlarla tərəfdaşlıq tələb edir
               güvən, <br /> sizə güc verən və ilham verən.
            </h3>
            <br />
            <br />
            <h3>
            Bizim kim olduğumuz və bu şirkətin nə üzərində qurulduğu budur. O{" "}
              <br />
              yalnız müştərilərimizlə deyil, həm də hər bir üzvü ilə danışır <br />{" "}
              Bizim komanda.
            </h3>
            <div className="companyallfinis">
              <img src={quote} alt="" />
              <h2>
              Yenilikçini gücləndirmək <br /> hamımızda
              </h2>
            </div>
          </div>
          <div className="companyfinisimg">
            <img src={late} />
          </div>
        </div>
        <div className="finishbasketcoms">
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
      </div>
    </>
  );
}

export default About;
