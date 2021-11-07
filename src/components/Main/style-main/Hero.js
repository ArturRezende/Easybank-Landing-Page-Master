import styled from "styled-components";

//hero - image
import HeroMobile from "../img/bg-intro-mobile.svg";
import HeroDesktop from "../img/bg-intro-desktop.svg";

export const HeroBg = styled.section`
  display: flex;

  .hero__description {
    align-self: center;
    text-align: center;

    h1 {
      display: flex;
      flex-direction: column;
      color: var(--Dark-Blue);
      font-weight: 500;
      font-size: 2rem;
      margin: 0 auto;

      span + span {
        margin-left: -15px;
      }
    }

    p {
      color: var(--Grayish-Blue);
      margin: 40px auto;
      width: 78%;
      text-align: left;
      position: relative;
      right: -17%;
    }

    .request-invite {
      position: relative;
      right: 60px;
    }
  }

  .hero__img {
    background: url(${HeroDesktop}) no-repeat;
    background-size: 120% 105%;
    background-position: 50px -100px;
    width: 100%;
    overflow-x: hidden;

    img {
      width: 90%;
      display: block;
      position: relative;
      right: -160px;
      top: -8px;
    }
  }

  @media screen and (min-width: 601px) and (max-width: 1023px) {
    .hero__description {
      h1 {
        font-size: 1.4rem;
        position: relative;
        right: 8%;
      }
      p {
        width: 70%;
        font-size: 13px;
        right: -3%;
      }
    }

    .hero__img {
      background: url(${HeroDesktop}) no-repeat;
      background-size: 50vh;
      background-position: -10px -30px;

      img {
        width: 100%;
        display: block;
        position: relative;
        right: -60px;
        top: -50px;
      }
    }
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;

    .hero__description {
      order: 2;

      h1 {
        color: var(--Dark-Blue);
        margin-top: 30px;
        width: 100%;
        position: static;
      }

      p {
        margin: 40px 20px;
        font-size: 14px;
        line-height: 1.5;
        position: static;
        width: 90%;
        text-align: center;
      }

      .request-invite {
        margin-bottom: 20%;
        position: static;
      }
    }

    .hero__img {
      background: url(${HeroMobile}) no-repeat;
      background-size: cover;
      order: 1;

      img {
        position: relative;
        right: 0;
        top: -40px;
        margin: 0 auto;
      }
    }
  }
`;
