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
            border-bottom: 10px solid;
            border-image-slice: 1;
            border-width: 5px;
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

  @media screen and (max-width: 600px) {
    padding: 25px;

    .header__menuControl {
      display: block;
    }

    .header__nave {
      position: absolute;
      top: 70px;
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

        li + li {
          margin-top: 20px;
        }

        li {
          text-align: center;

          a {
            color: var(--Dark-Blue);
          }
        }
      }
    }
  }
`;
