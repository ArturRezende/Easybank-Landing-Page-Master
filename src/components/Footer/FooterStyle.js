import styled from "styled-components";

export const FooterComponent = styled.footer`
  background-color: var(--Dark-Blue);
  width: 100%;

  .footer__container {
    display: flex;
    padding: 3% 0;
    max-width: 1100px;
    margin: 0 auto;

    .footer__network {
      .footer__logo {
        display: block;
        margin-bottom: 35%;
      }

      .footer__social-networks {
        ul {
          display: flex;

          li + li {
            margin-left: 15px;
          }
        }
      }
    }

    .footer__menu {
      display: flex;
      margin-left: 8%;

      ul {
        margin-left: 40px;

        li {
          margin-bottom: 20px;
          a {
            color: var(--White);

            &:hover {
              color: var(--Lime-Green);
            }
          }
        }
      }
      .footer__menu--box {
        margin-right: 80px;
      }
    }

    .footer__AllRight {
      text-align: center;
      margin-left: auto;

      .request-invite {
        margin-bottom: 13%;
      }

      p {
        color: var(--Grayish-Blue);
      }
    }
  }

  .attribution {
    text-align: center;
    padding: 3% 0 6% 0;

    span {
      color: var(--White);
    }

    a {
      color: var(--Bright-Cyan);
    }
  }

  @media screen and (min-width: 601px) and (max-width: 1024px) {
    .footer__container {
      margin: 0 30px;
      padding: 6% 0;
      justify-content: space-evenly;

      .footer__network {
        .footer__logo {
          margin-bottom: 25%;
        }
      }

      .footer__menu {
        display: block;
        margin: -20px 0 0 40px;
        text-align: center;

        ul {
          li {
            margin-bottom: 0;
          }
        }

        .footer__menu--box {
          li {
            padding-top: 20px;
          }
        }
      }

      .footer__AllRight {
        margin-left: 0;

        .request-invite {
          margin-bottom: 9%;
        }

        p {
          font-size: 16px;
          width: 100%;
        }
      }
    }

    .attribution {
      padding: 3% 0 9% 0;

      span {
        margin-left: 5px;
      }
    }
  }

  @media screen and (max-width: 600px) {
    .footer__container {
      flex-direction: column;
      align-items: center;

      .footer__network {
        .footer__logo {
          padding: 50px 0 30px 0;
          margin-bottom: 0;
        }
      }

      .footer__menu {
        display: block;
        margin: 30px 0;
        text-align: center;

        .footer__menu--box {
          margin: 0 auto;

          li {
            margin-top: 20px;
          }
        }
      }

      .footer__AllRight {
        margin: 20px 0 0 0;

        .request-invite {
          margin-bottom: 0;
        }

        p {
          margin: 30px 0;
        }
      }
    }

    .attribution {
      width: 80%;
      margin: 0 auto;
      padding: 3% 0 12% 0;

      a {
        margin-left: 5px;
      }
    }
  }
`;
