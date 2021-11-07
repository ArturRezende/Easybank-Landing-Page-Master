import styled from "styled-components";
import "../style-global.css";

export const ComponentHeader = styled.header`
  background-color: var(--White);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 25px;
  position: fixed;
  width: 100%;
  z-index: 999;

  .header__menuControl {
    background-color: transparent;
    border: none;
    display: none;
  }

  .header__nave {
    ul {
      display: flex;

      li + li {
        margin-left: 20px;
      }

      li {
        display: block;

        a {
          color: var(--Grayish-Blue);
          padding-bottom: 20px;

          &:hover {
            color: var(--Dark-Blue);
            border-bottom: 5px solid;
            border-image-slice: 1;
            border-image-source: linear-gradient(
              to right,
              var(--Lime-Green),
              var(--Bright-Cyan)
            );
          }
        }
      }
    }
  }

  .request-invite {
    display: block;
  }

  @media screen and (max-width: 768px) {
    justify-content: space-between;

    .request-invite {
      display: none;
    }
  }

  @media screen and (max-width: 600px) {
    padding: 20px;

    .header__logo {
      position: relative;
      top: 4px;
    }

    .header__menuControl {
      display: block;
      position: relative;
      top: 3px;
    }

    .header__nave {
      position: absolute;
      top: 65px;
      left: 0;
      z-index: 99;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.3);
      display: none;
      height: 100vh;

      ul {
        background-color: var(--White);
        width: 90%;
        margin: 30px auto 0 auto;
        padding: 25px;
        border-radius: 7px;
        flex-direction: column;

        li + li {
          margin-top: 20px;
          margin-left: 0;
        }

        li {
          text-align: center;

          a {
            color: var(--Dark-Blue);
            padding-bottom: 5px;
          }
        }
      }
    }
  }

  @media screen and (min-width: 601px) and (max-width: 1023px) {
    .header__nave {
      ul {
        li {
          a {
            padding-bottom: 6px;
          }
        }
      }
    }
  }
`;
