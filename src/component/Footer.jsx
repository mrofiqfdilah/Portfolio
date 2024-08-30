import React from "react";

function Footer()
{
    return (
        <>
         <footer>
      <div class="section__container footer__container" id="contact">
        <h2>Contact</h2>
        <p>
        Created by M Rofiq Fadilah with ❤️
        </p>
        <div class="mail__to">
          <a href="#">
            <span><i class="ri-mail-line"></i></span>
            mrofiqfadil@gmail.com
          </a>
        </div>
        <ul class="footer__socials">
          <li>
            <a href="#"><i class="ri-twitter-x-fill"></i></a>
          </li>
          <li>
            <a href="https://www.instagram.com/mrofiqfdilah"><i class="ri-instagram-fill"></i></a>
          </li>
          <li>
            <a href="https://github.com/mrofiqfdilah"><i class="ri-github-fill"></i></a>
          </li>
        </ul>
      </div>
    </footer>
        </>
    )
}

export default Footer;