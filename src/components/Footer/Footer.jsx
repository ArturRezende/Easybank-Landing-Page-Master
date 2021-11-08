import React from "react";
import { FooterComponent } from "./FooterStyle";

//images
import Logo from "./img/logo-footer.svg";
import IconFacebook from "./img/icon-facebook.svg";
import IconYoutube from "./img/icon-youtube.svg";
import IconTwitter from "./img/icon-twitter.svg";
import IconPinterest from "./img/icon-pinterest.svg";
import IconInstagram from "./img/icon-instagram.svg";

const Footer = (props) => {
  return (
    <FooterComponent className="footer">
      <div className="footer__container">
        {/* logo - social networks */}
        <div className="footer__network">
          <a href="index.html" className="footer__logo">
            <img src={Logo} alt="logo-easybank-landing-page-master" />
          </a>

          <nav className="footer__social-networks">
            <ul>
              <li>
                <a href=" #">
                  <img src={IconFacebook} alt="link-easybank-facebook" />
                </a>
              </li>
              <li>
                <a href=" #">
                  <img src={IconYoutube} alt="link-easybank-youtube" />
                </a>
              </li>
              <li>
                <a href=" #">
                  <img src={IconTwitter} alt="link-easybank-twitter" />
                </a>
              </li>
              <li>
                <a href=" #">
                  <img src={IconPinterest} alt="link-easybank-pinterest" />
                </a>
              </li>
              <li>
                <a href=" #">
                  <img src={IconInstagram} alt="link-easybank-instagram" />
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* navigation menu */}
        <nav className="footer__menu">
          <ul className="footer__menu--box">
            <li>
              <a href=" #">About Us</a>
            </li>
            <li>
              <a href=" #">Contact</a>
            </li>
            <li>
              <a href=" #">Blog</a>
            </li>
          </ul>

          <ul className="footer__menu--box">
            <li>
              <a href=" #">Careers</a>
            </li>
            <li>
              <a href=" #">Support</a>
            </li>
            <li>
              <a href=" #">Privacy Policy</a>
            </li>
          </ul>
        </nav>

        {/* All Rights Reserved */}
        <div className="footer__AllRight">
          <button type="button" className="request-invite">
            Request Invite
          </button>
          <p> © Easybank. All Rights Reserved</p>
        </div>
      </div>

      <div className="attribution">
        <span>Challenge by</span>
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          {"  "}Frontend Mentor
        </a>
        <span>. Coded by </span>
        <a
          href="https://www.frontendmentor.io/profile/ArturdaSilvaRezende"
          rel="noreferrer"
        >
          Artur da Silva Rezende
        </a>
        <span>.</span>
      </div>
    </FooterComponent>
  );
};

export default Footer;
