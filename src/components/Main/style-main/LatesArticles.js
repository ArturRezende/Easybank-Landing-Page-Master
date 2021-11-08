import styled from "styled-components";

export const LatesArticle = styled.article`
  background-color: #fafafa;
  margin-top: -100px;
  padding: 20px 0 50px 0;
  overflow-x: hidden;

  .lates-article__title {
    color: var(--Dark-Blue);
    font-weight: 400;
    text-align: left;
    margin: 7% 0 2% 7%;
  }

  .lates-article__container {
    max-width: 1200px;
    display: flex;
    margin: 0 auto 5% auto;

    .lates-article__content {
      width: 25%;
      margin-left: 20px;
      background-color: #ffffff;
      border-radius: 0 0 5px 5px;

      img {
        display: block;
        margin: 0 auto;
        border-radius: 5px 5px 0 0;
        width: 100%;
      }

      .lates-article__description {
        width: 85%;
        margin: 0 auto;

        .lates-article__author {
          color: var(--Grayish-Blue);
          margin-top: 25px;
          font-size: 12px;
        }

        .lates-article__subtitle {
          color: var(--Dark-Blue);
          font-weight: 300;
          font-size: 18px;
          width: 100%;
          margin: 12px 0 12px 0;
        }

        .lates-article__comment {
          color: var(--Grayish-Blue);
          font-size: 14px;
          width: 100%;
          margin-bottom: 30px;
        }
      }
    }
  }

  @media screen and (min-width: 601px) and (max-width: 1024px) {
    article {
      margin-bottom: 7%;
    }

    .lates-article__title {
      text-align: left;
      position: relative;
      right: -50px;
      margin: 5% 0 50px 0;
    }

    .lates-article__container {
      justify-content: space-between;
      flex-wrap: wrap;
      margin: 0 auto;

      .lates-article__content {
        width: 42%;
        margin: 0 auto 30px auto;

        img {
          width: 100%;
        }

        .lates-article__description {
          .lates-article__subtitle {
            width: 85%;
            font-size: 18px;
          }

          .lates-article__comment {
            width: 100%;
            font-size: 13px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    article {
      margin-bottom: 14%;
    }

    .lates-article__title {
      margin: 40px auto 30px auto;
      text-align: center;
      font-size: 2rem;
      width: 85%;
    }

    .lates-article__container {
      flex-direction: column;
      width: 85%;
      margin: 0 auto;

      .lates-article__content {
        margin-left: 0;
        width: 100%;

        img {
          width: 100%;
        }

        .lates-article__description {
          width: 80%;

          .lates-article__subtitle {
            width: 95%;
            font-size: 14px;
          }

          .lates-article__comment {
            width: 260px;
            font-size: 12px;
          }
        }
      }
    }
  }
`;
