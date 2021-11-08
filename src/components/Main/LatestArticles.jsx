import React from "react";
import { LatesArticle } from "./style-main/LatesArticles";

//images
import ImageCurrency from "./img/image-currency.jpg";
import ImageRestaurant from "./img/image-restaurant.jpg";
import ImagePlane from "./img/image-plane.jpg";
import ImageConfetti from "./img/image-confetti.jpg";

const LatestArticles = (prosp) => {
  return (
    <LatesArticle className="lates-article">
      {/* title */}
      <h1 className="lates-article__title">Latest Articles</h1>

      <div className="lates-article__container">
        {/* article - Claire Robinson */}
        <article className="lates-article__content">
          <img src={ImageCurrency} alt="article_image_currency" />
          <div className="lates-article__description">
            <p className="lates-article__author">By Claire Robinson</p>
            <h2 className="lates-article__subtitle">
              Receive money in any currency with no fees
            </h2>
            <p className="lates-article__comment">
              The world is getting smaller and we’re becoming more mobile. So
              why should you be forced to only receive money in a single …
            </p>
          </div>
        </article>

        {/* article - Wilson Hutton */}
        <article className="lates-article__content">
          <img src={ImageRestaurant} alt="article_image_restaurant" />
          <div className="lates-article__description">
            <p className="lates-article__author">By Wilson Hutton</p>
            <h2 className="lates-article__subtitle">
              Treat yourself without worrying about money
            </h2>
            <p className="lates-article__comment">
              Our simple budgeting feature allows you to separate out your
              spending and set realistic limits each month. That means you …
            </p>
          </div>
        </article>

        {/* article - Wilson Hutton */}
        <article className="lates-article__content">
          <img src={ImagePlane} alt="article_image_plane" />
          <div className="lates-article__description">
            <p className="lates-article__author">By Wilson Hutton</p>
            <h2 className="lates-article__subtitle">
              Take your Easybank card wherever you go
            </h2>
            <p className="lates-article__comment">
              We want you to enjoy your travels. This is why we don’t charge any
              fees on purchases while you’re abroad. We’ll even show you …
            </p>
          </div>
        </article>

        {/* article - Claire Robinson */}
        <article className="lates-article__content">
          <img src={ImageConfetti} alt="article_image_plane" />
          <div className="lates-article__description">
            <p className="lates-article__author">By Claire Robinson</p>
            <h2 className="lates-article__subtitle">
              Our invite-only Beta accounts are now live!
            </h2>
            <p className="lates-article__comment">
              After a lot of hard work by the whole team, we’re excited to
              launch our closed beta. It’s easy to request an invite through the
              site ...
            </p>
          </div>
        </article>
      </div>
    </LatesArticle>
  );
};

export default LatestArticles;
