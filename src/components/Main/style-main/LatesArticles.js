import styled from "styled-components";

export const LatesArticle = styled.article`
  .lates-article__title {
    color: var(--Dark-Blue);
    font-weight: 400;
    text-align: left;
    margin: 7% 0 4% 8%;
  }

  .lates-article__container {
    width: 1200px;
    display: flex;
    margin: 0 auto;

    .lates-article__content {
      width: 25%;
      margin-left: 20px;

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
      margin: 9% 0 50px 0;
    }

    .lates-article__container {
      justify-content: space-between;
      flex-wrap: wrap;
      width: 100%;

      .lates-article__content {
        width: 50%;
        margin-left: 0;

        img {
          width: 80%;
        }

        .lates-article__description {
          .lates-article__subtitle {
            width: 80%;
            font-size: 18px;
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
      margin: 20% 0 50px 0;
      text-align: center;
    }

    .lates-article__container {
      flex-direction: column;
      width: 100%;
      .lates-article__content {
        margin-left: 0;
        width: 100%;

        img {
          width: 85%;
        }

        .lates-article__description {
          width: 65%;

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
