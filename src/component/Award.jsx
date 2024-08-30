import React, { useEffect } from "react"; // Pastikan useEffect diimpor
import Disdik from "../assets/images/Logodisdik24.png";
import Wuri from "../assets/images/tutwuri.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Upr from "../assets/images/upr.png";
import Stimik from "../assets/images/stmik.png";

function Award() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,    
    });
  }, []);

  return (
    <>
      <section className="section__container experience__container" id="experience" >
        <h2>ACHIEVEMENT</h2>
        <ul className="experience__list">
          <li data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="600">
            <div className="experience__header" >
              <div>
                <img src={Wuri} alt="Wuri Handayani Logo" />
                <h4>Medallion Of Excelence in Student Skills Competition (LKS) National Level in Web Technologies Field </h4>
              </div>
              <p>25 Agustus 2024</p>
            </div>
            <p>
              Creating API and frontend app for 4 hours accompanied by creating 2d game using javascript for 3 hours and conducting advanced javascript testing for 2 hours.
            </p>
          </li>
          <li data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="600" >

            <div className="experience__header">
              <div>
                <img src={Disdik} alt="Disdik Logo" />
                <h4>1st Place Student Skills Competition (LKS) Central Kalimantan Province in Web Technologies Field</h4>
              </div>
              <p>22 April 2024</p>
            </div>
            <p>
              Create API and frontend app for 6 hours accompanied by creating a 2d game website using javascript canvas for 5 hours.
            </p>
          </li>
          <li data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="600" >
            <div className="experience__header">
              <div>
                <img src={Disdik} alt="Disdik Logo" />
                <h4>1st Place Student Skills Competition (LKS) East Kotawaringin Regency in Web Technologies Field</h4>
              </div>
              <p>18 April 2024</p>
            </div>
            <p>
              Create a website using laravel (blade) for 6 hours and conducting advanced javascript testing for 1 hours.
            </p>
          </li>
          <li data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="600">
            <div className="experience__header">
              <div>
                <img src={Upr} alt="Upr Logo" />
                <h4>1st Place in Informatics Engineering Software Development Festival By University of Palangkaraya</h4>
              </div>
              <p>19 Desember 2023</p>
            </div>
            <p>
              Develop applications that have an impact on the surrounding community, especially children, with an application development period of one week.
            </p>
          </li>
          <li data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="600" >
            <div className="experience__header">
              <div>
                <img src={Wuri} alt="Wuri Handayani Logo" />
                <h4>National Finalist Indonesian Student Innovation and Entrepreneur (FIKSI) in Digital Technology Field</h4>
              </div>
              <p>28 September 2023</p>
            </div>
            <p>
              Developing a technology business that supports the achievement of Sustainable Development Goals (SDG)
            </p>
          </li>
          <li data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="600">
            <div className="experience__header">
              <div>
                <img src={Disdik} alt="Disdik Logo" />
                <h4>2nd Place Student Skills Competition (LKS) Central Kalimantan Province in Web Technologies Field</h4>
              </div>
              <p>22 September 2023</p>
            </div>
            <p>
              Create API and frontend app for 6 hours accompanied by creating a 2d game website using javascript canvas for 5 hours.
            </p>
          </li>
          <li data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="600">
            <div className="experience__header">
              <div>
                <img src={Stimik} alt="Stimik Logo" />
                <h4>3rd Place in Software Desktop App Development Competition at STIMIK Palangkaraya University</h4>
              </div>
              <p>15 Mei 2023</p>
            </div>
            <p>
              Create library application software with some specific points like pdf printing, authentication and some other features.
            </p>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Award;
