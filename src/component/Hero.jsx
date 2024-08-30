import React from "react";
import Avatar from '../assets/images/avatar2.jpeg';

function Hero()
{
    return (
        <>
        <header class="section__container header__container" id="home">
      <img src={Avatar} alt="header" class="avatar" />
      <h1>M Rofiq Fadilah<br /><span>Web Developer</span></h1>
      <p>
        I enjoy applying problem-solving techniques to technology products, which led me to pursue a career as a full-stack developer.
      </p>
      <div class="header__btns">
        <button class="btn">Get in Touch</button>
        <a href="https://www.linkedin.com/in/m-rofiq-fadilah-314bb42a6">Let's Connect</a>
      </div>
    </header>
        </>
    )
}

export default Hero;