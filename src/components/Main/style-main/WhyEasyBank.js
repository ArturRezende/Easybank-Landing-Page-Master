import styled from "styled-components";

export const EasyBankComponent = styled.section`
  background-color: #f4f5f7;
  padding: 30px;
  margin-top: -150px;

  .why-easy-bank__title {
    text-align: left;
    max-width: 1200px;
    margin-left: auto;

    h1 {
      color: var(--Dark-Blue);
      margin: 35px auto 0 auto;
      font-weight: 500;
    }

    p {
      color: var(--Grayish-Blue);
      margin: 20px auto 40px 0;
      width: 55%;
    }
  }

  .why-easy-bank__container {
    display: flex;
    width: 85%;
    margin: 0 auto 9% auto;

    .why-easy-bank__card {
      text-align: left;
      margin-bottom: 20px;
      width: 25%;

      h3 {
        color: var(--Dark-Blue);
        font-weight: 300;
        margin: 30px 0;
      }

      p {
        color: var(--Grayish-Blue);
        text-align: left;
        width: 90%;
        margin: 30px 0 20px 0;
        font-size: 15px;
      }
    }
  }

  @media screen and (min-width: 601px) and (max-width: 1024px) {
    margin-top: -40px;

    .why-easy-bank__title {
      width: 100%;
      text-align: center;

      p {
        width: 50%;
        font-size: 13px;
        text-align: center;
        margin: 30px auto;
      }
    }

    .why-easy-bank__container {
      justify-content: space-between;
      flex-wrap: wrap;
      padding-top: 30px;
      width: 100%;
      margin: 0 auto 15% auto;

      .why-easy-bank__card {
        width: 50%;
        text-align: center;

        p {
          width: 85%;
          margin: 0 auto;
          text-align: center;
          font-size: 14px;
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    margin-top: 0;
    padding: 5px;

    .why-easy-bank__title {
      width: 100%;

      h1 {
        margin: 35px auto 0 auto;
        width: 60%;
        text-align: center;
      }

      p {
        width: 80%;
        margin: 20px auto 40px auto;
        font-size: 13px;
        text-align: center;
      }
    }

    .why-easy-bank__container {
      flex-direction: column;
      padding-bottom: 120px;
      margin: 0 auto 20px auto;

      .why-easy-bank__card {
        margin-top: 20px;
        width: 100%;
        text-align: center;

        p {
          text-align: center;
          width: 100%;
          font-size: 14px;
          margin: 0 auto;
        }
      }
    }
  }
`;
