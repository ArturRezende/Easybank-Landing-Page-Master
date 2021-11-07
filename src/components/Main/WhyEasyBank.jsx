import React from "react";
import { EasyBankComponent } from "./style-main/WhyEasyBank";

//images
import IconOline from "./img/icon-online.svg";
import IconBudgeting from "./img/icon-budgeting.svg";
import IconOnBoarding from "./img/icon-onboarding.svg";
import IconApi from "./img/icon-api.svg";

const WhyEasyBank = (props) => {
  return (
    <EasyBankComponent className="why-easy-bank">
      {/* easy bank title */}
      <div className="why-easy-bank__title">
        <h1>Why choose Easybank?</h1>
        <p>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>

      {/* card */}
      <div className="why-easy-bank__container">
        {/* Online Banking */}
        <figure className="why-easy-bank__card">
          <img src={IconOline} alt="icone-online-easy-bank" />
          <figcaption>
            <h3>Online Banking</h3>
            <p>
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </p>
          </figcaption>
        </figure>

        {/* Simple Budgeting */}
        <figure className="why-easy-bank__card">
          <img src={IconBudgeting} alt="icone-simple-budgeting-easy-bank" />
          <figcaption>
            <h3>Simple Budgeting</h3>
            <p>
              See exactly where your money goes each month. Receive
              notifications when you’re close to hitting to your hitting limits.
            </p>
          </figcaption>
        </figure>

        {/* Fast Onboarding */}
        <figure className="why-easy-bank__card">
          <img src={IconOnBoarding} alt="icone-simple-on-boarding-easy-bank" />
          <figcaption>
            <h3>Fast Onboarding</h3>
            <p>
              We don’t do branches. Open your account in minutes online and
              start taking control of your finances right away.
            </p>
          </figcaption>
        </figure>

        {/* Open API */}
        <figure className="why-easy-bank__card">
          <img src={IconApi} alt="icone-open-api-easy-bank" />
          <figcaption>
            <h3>Open API</h3>
            <p>
              Manage your savings, investments, pension, and much more from one
              account. Tracking your money has never been easier.
            </p>
          </figcaption>
        </figure>
      </div>
    </EasyBankComponent>
  );
};

export default WhyEasyBank;
