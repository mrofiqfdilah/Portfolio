import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Ekskul from "../assets/images/Ekskul.png";
import Mlb from "../assets/images/Mlb.png";
import Ppdb from "../assets/images/Ppdb.png";
import Foodcare from "../assets/images/download.jpg";
import Spotify from "../assets/images/spotify.png";
import Wella from "../assets/images/wella.jpg";

function Project() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const projects = [
    { src: Ekskul, title: "SIEkskul : Information System", type: "Website" },
    { src: Ppdb, title: "Registration vocational school students", type: "Website" },
    { src: Mlb, title: "GM Energy Landing Page", type: "Website" },
    { src: Foodcare, title: "Foodcare : With Food We Care", type: "Website" },
    { src: Spotify, title: "Instagram Clone ", type: "Website" },
    { src: Wella, title: "Wella&co : Hotel Booking", type: "Website" },
  ];

  const handleImageLoad = () => {
    setLoadedImages((prevLoadedImages) => prevLoadedImages + 1);
  };

  // Jika semua gambar sudah dimuat, set isLoading menjadi false
  useEffect(() => {
    if (loadedImages === projects.length) {
      setIsLoading(false);
    }
  }, [loadedImages, projects.length]);

  return (
    <>
      <SkeletonTheme
        baseColor="#e0e0e0"
        highlightColor="linear-gradient(90deg, #e0e0e0, #f0f0f0, #e0e0e0)"
      >
        <section className="section__container project__container" id="project">
          <h2>PROJECTS</h2>
          <div
            className="project__grid"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1200"
          >
            {projects.map((project, index) => (
              <div
                className="project__card"
                key={index}
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1200"
              >
                {/* Gambar dimuat di latar belakang untuk memastikan isLoading bisa berubah */}
                <img
                  src={project.src}
                  alt="project"
                  onLoad={handleImageLoad}
                  style={{ display: "none" }} // Gambar disembunyikan saat loading
                />

                {isLoading ? (
                  <Skeleton height={200} width={320} style={{ borderRadius: "10px" }} />
                ) : (
                  <img src={project.src} alt="project" /> // Gambar yang akan tampil
                )}
                <div className="project__card__details">
                  <div>
                    <p>{isLoading ? <Skeleton width={120} /> : project.type}</p>
                    <h4>{isLoading ? <Skeleton width={"80%"} /> : project.title}</h4>
                  </div>
                  {!isLoading && (
                    <a href="#">
                      <i className="ri-arrow-right-up-line"></i>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </SkeletonTheme>
    </>
  );
}

export default Project;
