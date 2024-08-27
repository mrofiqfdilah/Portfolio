import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Ekskul from "../assets/images/Ekskul.png";
import Mlb from "../assets/images/Mlb.png";
import Ppdb from "../assets/images/Ppdb.png";
import Foodcare from "../assets/images/download.jpg";

function Project() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi
      once: true,     // Animasi hanya terjadi sekali saat pertama kali muncul
    });
  }, []);

  return (
    <>
      <section className="section__container project__container" id="project" data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="2000" >
        <h2>PROJECTS</h2>
        <div className="project__grid" data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1200" >
          <div className="project__card" >
            <img src={Ekskul} alt="project" />
            <div className="project__card__details">
              <div>
                <p>Website</p>
                <h4>SIEkskul : Information System</h4>
              </div>
              <a href="#"><i className="ri-arrow-right-up-line"></i></a>
            </div>
          </div>

          <div className="project__card"  data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1200" >
            <img src={Ppdb} alt="project" />
            <div className="project__card__details">
              <div>
                <p>Website</p>
                <h4>Registration vocational school students</h4>
              </div>
              <a href="#"><i className="ri-arrow-right-up-line"></i></a>
            </div>
          </div>

          <div className="project__card" data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1200" >
            <img src={Mlb} alt="project" />
            <div className="project__card__details">
              <div>
                <p>Website</p>
                <h4>GM Energy Landing Page</h4>
              </div>
              <a href="#"><i className="ri-arrow-right-up-line"></i></a>
            </div>
          </div>

          <div className="project__card" data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1200" >
            <img src={Foodcare} alt="project" />
            <div className="project__card__details">
              <div>
                <p>Website</p>
                <h4>Foodcare : With Food We Care</h4>
              </div>
              <a href="#"><i className="ri-arrow-right-up-line"></i></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Project;
