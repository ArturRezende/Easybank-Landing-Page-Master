(this.webpackJsonpeasybank=this.webpackJsonpeasybank||[]).push([[0],{17:function(n,e,t){},18:function(n,e,t){},22:function(n,e,t){"use strict";t.r(e);var i,a,r,c,s,o=t(1),l=t.n(o),d=t(9),h=t.n(d),p=(t(17),t(7)),x=t(2),m=t(3),b=(t(18),m.a.header(i||(i=Object(x.a)(["\n  background-color: var(--White);\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  padding: 20px 25px;\n  position: fixed;\n  width: 100%;\n  z-index: 999;\n\n  .header__menuControl {\n    background-color: transparent;\n    border: none;\n    display: none;\n  }\n\n  .header__nave {\n    ul {\n      display: flex;\n\n      li + li {\n        margin-left: 20px;\n      }\n\n      li {\n        display: block;\n\n        a {\n          color: var(--Grayish-Blue);\n          padding-bottom: 20px;\n\n          &:hover {\n            color: var(--Dark-Blue);\n            border-bottom: 5px solid;\n            border-image-slice: 1;\n            border-image-source: linear-gradient(\n              to right,\n              var(--Lime-Green),\n              var(--Bright-Cyan)\n            );\n          }\n        }\n      }\n    }\n  }\n\n  .request-invite {\n    display: block;\n  }\n\n  @media screen and (max-width: 768px) {\n    justify-content: space-between;\n\n    .request-invite {\n      display: none;\n    }\n  }\n\n  @media screen and (max-width: 600px) {\n    padding: 20px;\n\n    .header__logo {\n      position: relative;\n      top: 4px;\n    }\n\n    .header__menuControl {\n      display: block;\n      position: relative;\n      top: 3px;\n    }\n\n    .header__nave {\n      position: absolute;\n      top: 65px;\n      left: 0;\n      z-index: 99;\n      width: 100%;\n      background-color: rgba(0, 0, 0, 0.3);\n      display: none;\n      height: 100vh;\n\n      ul {\n        background-color: var(--White);\n        width: 90%;\n        margin: 30px auto 0 auto;\n        padding: 25px;\n        border-radius: 7px;\n        flex-direction: column;\n\n        li + li {\n          margin-top: 20px;\n          margin-left: 0;\n        }\n\n        li {\n          text-align: center;\n\n          a {\n            color: var(--Dark-Blue);\n            padding-bottom: 5px;\n          }\n        }\n      }\n    }\n  }\n\n  @media screen and (min-width: 601px) and (max-width: 1023px) {\n    .header__nave {\n      ul {\n        li {\n          a {\n            padding-bottom: 6px;\n          }\n        }\n      }\n    }\n  }\n"])))),g=t.p+"static/media/logo.4d7cebc5.svg",j=t.p+"static/media/icon-hamburger.b0d311fe.svg",u=t.p+"static/media/icon-close.c2e36e04.svg",_=t(0),f=function(n){var e=Object(o.useState)(!1),t=Object(p.a)(e,2),i=t[0],a=t[1],r=Object(o.useState)(!1),c=Object(p.a)(r,2),s=c[0],l=c[1],d=Object(o.useRef)(null);return Object(_.jsxs)(b,{className:"header",children:[Object(_.jsx)("a",{href:"index.html",className:"header__logo",children:Object(_.jsx)("img",{src:g,alt:"logo-easybank-landing-page-master"})}),Object(_.jsx)("button",{className:"header__menuControl",type:"button",onClick:function(){a(!i),!1===s?(d.current.classList.remove("fadeOut"),d.current.style.display="block",d.current.classList.add("fadeIn"),l(!0)):(d.current.classList.remove("fadeIn"),d.current.classList.add("fadeOut"),setTimeout((function(){d.current.style.display="none"}),1e3),window.onresize=function(){window.innerWidth>601?(d.current.classList.remove("fadeOut"),d.current.style.display="flex"):d.current.style.display="none"},l(!1))},children:Object(_.jsx)("img",{src:i?u:j,alt:"icon-menu-control"})}),Object(_.jsx)("nav",{className:"header__nave",ref:d,children:Object(_.jsxs)("ul",{children:[Object(_.jsx)("li",{children:Object(_.jsx)("a",{href:" #",children:"Home"})}),Object(_.jsx)("li",{children:Object(_.jsx)("a",{href:" #",children:"About"})}),Object(_.jsx)("li",{children:Object(_.jsx)("a",{href:" #",children:"Contact"})}),Object(_.jsx)("li",{children:Object(_.jsx)("a",{href:" #",children:"Blog"})}),Object(_.jsx)("li",{children:Object(_.jsx)("a",{href:" #",children:"Carees"})})]})}),Object(_.jsx)("button",{type:"button",className:"request-invite",children:"Request invite"})]})},O=t.p+"static/media/bg-intro-mobile.c2ed38d0.svg",y=t.p+"static/media/bg-intro-desktop.8be308fd.svg",w=m.a.section(a||(a=Object(x.a)(["\n  display: flex;\n\n  .hero__description {\n    align-self: center;\n    text-align: center;\n\n    h1 {\n      display: flex;\n      flex-direction: column;\n      color: var(--Dark-Blue);\n      font-weight: 500;\n      font-size: 2rem;\n      margin: 0 auto;\n\n      span + span {\n        margin-left: -15px;\n      }\n    }\n\n    p {\n      color: var(--Grayish-Blue);\n      margin: 40px auto;\n      width: 78%;\n      text-align: left;\n      position: relative;\n      right: -17%;\n    }\n\n    .request-invite {\n      position: relative;\n      right: 60px;\n    }\n  }\n\n  .hero__img {\n    background: url(",") no-repeat;\n    background-size: 120% 105%;\n    background-position: 0 -125px;\n    width: 100%;\n    overflow-x: hidden;\n\n    img {\n      width: 90%;\n      display: block;\n      position: relative;\n      right: -185px;\n      top: -20px;\n    }\n  }\n\n  @media screen and (min-width: 601px) and (max-width: 1023px) {\n    .hero__description {\n      h1 {\n        font-size: 1.4rem;\n        position: relative;\n        right: 8%;\n      }\n      p {\n        width: 70%;\n        font-size: 13px;\n        right: -3%;\n      }\n    }\n\n    .hero__img {\n      background: url(",") no-repeat;\n      background-size: 50vh;\n      background-position: -10px -30px;\n\n      img {\n        width: 100%;\n        display: block;\n        position: relative;\n        right: -60px;\n        top: -50px;\n      }\n    }\n  }\n\n  @media screen and (max-width: 600px) {\n    flex-direction: column;\n\n    .hero__description {\n      order: 2;\n\n      h1 {\n        color: var(--Dark-Blue);\n        margin-top: 30px;\n        width: 100%;\n        position: static;\n      }\n\n      p {\n        margin: 40px 20px;\n        font-size: 14px;\n        position: static;\n        width: 90%;\n        text-align: center;\n      }\n\n      .request-invite {\n        margin-bottom: 20%;\n        position: static;\n      }\n    }\n\n    .hero__img {\n      background: url(",") no-repeat;\n      background-size: cover;\n      order: 1;\n\n      img {\n        position: relative;\n        right: 0;\n        top: -55px;\n        margin: 0 auto;\n      }\n    }\n  }\n"])),y,y,O),v=t.p+"static/media/image-mockups.48d35b17.png",k=function(n){return Object(_.jsxs)(w,{className:"hero",children:[Object(_.jsxs)("div",{className:"hero__description",children:[Object(_.jsxs)("h1",{children:[Object(_.jsx)("span",{children:"Next generation"}),Object(_.jsx)("span",{children:"digital banking"})]}),Object(_.jsx)("p",{children:"Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more."}),Object(_.jsx)("button",{type:"button",className:"request-invite",children:"Request Invite"})]}),Object(_.jsx)("div",{className:"hero__img",children:Object(_.jsx)("img",{src:v,alt:"hero-img-easybank"})})]})},N=m.a.section(r||(r=Object(x.a)(["\n  background-color: #f4f5f7;\n  padding: 30px;\n  margin-top: -150px;\n\n  .why-easy-bank__title {\n    text-align: left;\n    max-width: 1200px;\n    margin-left: auto;\n\n    h1 {\n      color: var(--Dark-Blue);\n      margin: 35px auto 0 auto;\n      font-weight: 500;\n    }\n\n    p {\n      color: var(--Grayish-Blue);\n      margin: 20px auto 40px 0;\n      width: 55%;\n    }\n  }\n\n  .why-easy-bank__container {\n    display: flex;\n    width: 85%;\n    margin: 0 auto 9% auto;\n\n    .why-easy-bank__card {\n      text-align: left;\n      margin-bottom: 20px;\n      width: 25%;\n\n      h3 {\n        color: var(--Dark-Blue);\n        font-weight: 300;\n        margin: 30px 0;\n      }\n\n      p {\n        color: var(--Grayish-Blue);\n        text-align: left;\n        width: 90%;\n        margin: 30px 0 20px 0;\n        font-size: 15px;\n      }\n    }\n  }\n\n  @media screen and (min-width: 601px) and (max-width: 1024px) {\n    margin-top: -40px;\n\n    .why-easy-bank__title {\n      width: 100%;\n      text-align: center;\n\n      p {\n        width: 50%;\n        font-size: 13px;\n        text-align: center;\n        margin: 30px auto;\n      }\n    }\n\n    .why-easy-bank__container {\n      justify-content: space-between;\n      flex-wrap: wrap;\n      padding-top: 30px;\n      width: 100%;\n      margin: 0 auto 15% auto;\n\n      .why-easy-bank__card {\n        width: 50%;\n        text-align: center;\n\n        p {\n          width: 85%;\n          margin: 0 auto;\n          text-align: center;\n          font-size: 14px;\n        }\n      }\n    }\n  }\n\n  @media screen and (max-width: 600px) {\n    margin-top: 0;\n    padding: 5px;\n\n    .why-easy-bank__title {\n      width: 100%;\n\n      h1 {\n        margin: 35px auto 0 auto;\n        width: 60%;\n        text-align: center;\n      }\n\n      p {\n        width: 80%;\n        margin: 20px auto 40px auto;\n        font-size: 13px;\n        text-align: center;\n      }\n    }\n\n    .why-easy-bank__container {\n      flex-direction: column;\n      padding-bottom: 120px;\n      margin: 0 auto 20px auto;\n\n      .why-easy-bank__card {\n        margin-top: 20px;\n        width: 100%;\n        text-align: center;\n\n        p {\n          text-align: center;\n          width: 100%;\n          font-size: 14px;\n          margin: 0 auto;\n        }\n      }\n    }\n  }\n"]))),B=t.p+"static/media/icon-online.b0622b15.svg",z=t.p+"static/media/icon-budgeting.ad716997.svg",C=t.p+"static/media/icon-onboarding.d74aed64.svg",R=t.p+"static/media/icon-api.74c8ad17.svg",q=function(n){return Object(_.jsxs)(N,{className:"why-easy-bank",children:[Object(_.jsxs)("div",{className:"why-easy-bank__title",children:[Object(_.jsx)("h1",{children:"Why choose Easybank?"}),Object(_.jsx)("p",{children:"We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before."})]}),Object(_.jsxs)("div",{className:"why-easy-bank__container",children:[Object(_.jsxs)("figure",{className:"why-easy-bank__card",children:[Object(_.jsx)("img",{src:B,alt:"icone-online-easy-bank"}),Object(_.jsxs)("figcaption",{children:[Object(_.jsx)("h3",{children:"Online Banking"}),Object(_.jsx)("p",{children:"Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."})]})]}),Object(_.jsxs)("figure",{className:"why-easy-bank__card",children:[Object(_.jsx)("img",{src:z,alt:"icone-simple-budgeting-easy-bank"}),Object(_.jsxs)("figcaption",{children:[Object(_.jsx)("h3",{children:"Simple Budgeting"}),Object(_.jsx)("p",{children:"See exactly where your money goes each month. Receive notifications when you\u2019re close to hitting to your hitting limits."})]})]}),Object(_.jsxs)("figure",{className:"why-easy-bank__card",children:[Object(_.jsx)("img",{src:C,alt:"icone-simple-on-boarding-easy-bank"}),Object(_.jsxs)("figcaption",{children:[Object(_.jsx)("h3",{children:"Fast Onboarding"}),Object(_.jsx)("p",{children:"We don\u2019t do branches. Open your account in minutes online and start taking control of your finances right away."})]})]}),Object(_.jsxs)("figure",{className:"why-easy-bank__card",children:[Object(_.jsx)("img",{src:R,alt:"icone-open-api-easy-bank"}),Object(_.jsxs)("figcaption",{children:[Object(_.jsx)("h3",{children:"Open API"}),Object(_.jsx)("p",{children:"Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."})]})]})]})]})},A=m.a.article(c||(c=Object(x.a)(["\n  background-color: #fafafa;\n  margin-top: -100px;\n  padding: 20px 0 50px 0;\n  overflow-x: hidden;\n\n  .lates-article__title {\n    color: var(--Dark-Blue);\n    font-weight: 400;\n    text-align: left;\n    margin: 7% 0 2% 7%;\n  }\n\n  .lates-article__container {\n    max-width: 1200px;\n    display: flex;\n    margin: 0 auto 5% auto;\n\n    .lates-article__content {\n      width: 25%;\n      margin-left: 20px;\n      background-color: #ffffff;\n      border-radius: 0 0 5px 5px;\n\n      img {\n        display: block;\n        margin: 0 auto;\n        border-radius: 5px 5px 0 0;\n        width: 100%;\n      }\n\n      .lates-article__description {\n        width: 85%;\n        margin: 0 auto;\n\n        .lates-article__author {\n          color: var(--Grayish-Blue);\n          margin-top: 25px;\n          font-size: 12px;\n        }\n\n        .lates-article__subtitle {\n          color: var(--Dark-Blue);\n          font-weight: 300;\n          font-size: 18px;\n          width: 100%;\n          margin: 12px 0 12px 0;\n        }\n\n        .lates-article__comment {\n          color: var(--Grayish-Blue);\n          font-size: 14px;\n          width: 100%;\n          margin-bottom: 30px;\n        }\n      }\n    }\n  }\n\n  @media screen and (min-width: 601px) and (max-width: 1024px) {\n    article {\n      margin-bottom: 7%;\n    }\n\n    .lates-article__title {\n      text-align: left;\n      position: relative;\n      right: -50px;\n      margin: 5% 0 50px 0;\n    }\n\n    .lates-article__container {\n      justify-content: space-between;\n      flex-wrap: wrap;\n      margin: 0 auto;\n\n      .lates-article__content {\n        width: 42%;\n        margin: 0 auto 30px auto;\n\n        img {\n          width: 100%;\n        }\n\n        .lates-article__description {\n          .lates-article__subtitle {\n            width: 85%;\n            font-size: 18px;\n          }\n\n          .lates-article__comment {\n            width: 100%;\n            font-size: 13px;\n          }\n        }\n      }\n    }\n  }\n\n  @media screen and (max-width: 600px) {\n    article {\n      margin-bottom: 14%;\n    }\n\n    .lates-article__title {\n      margin: 40px auto 30px auto;\n      text-align: center;\n      font-size: 2rem;\n      width: 85%;\n    }\n\n    .lates-article__container {\n      flex-direction: column;\n      width: 85%;\n      margin: 0 auto;\n\n      .lates-article__content {\n        margin-left: 0;\n        width: 100%;\n\n        img {\n          width: 100%;\n        }\n\n        .lates-article__description {\n          width: 80%;\n\n          .lates-article__subtitle {\n            width: 95%;\n            font-size: 14px;\n          }\n\n          .lates-article__comment {\n            width: 260px;\n            font-size: 12px;\n          }\n        }\n      }\n    }\n  }\n"]))),W=t.p+"static/media/image-currency.f89e0f41.jpg",D=t.p+"static/media/image-restaurant.1951b576.jpg",L=t.p+"static/media/image-plane.03db115d.jpg",S=t.p+"static/media/image-confetti.67921b11.jpg",T=function(n){return Object(_.jsxs)(A,{className:"lates-article",children:[Object(_.jsx)("h1",{className:"lates-article__title",children:"Latest Articles"}),Object(_.jsxs)("div",{className:"lates-article__container",children:[Object(_.jsxs)("article",{className:"lates-article__content",children:[Object(_.jsx)("img",{src:W,alt:"article_image_currency"}),Object(_.jsxs)("div",{className:"lates-article__description",children:[Object(_.jsx)("p",{className:"lates-article__author",children:"By Claire Robinson"}),Object(_.jsx)("h2",{className:"lates-article__subtitle",children:"Receive money in any currency with no fees"}),Object(_.jsx)("p",{className:"lates-article__comment",children:"The world is getting smaller and we\u2019re becoming more mobile. So why should you be forced to only receive money in a single \u2026"})]})]}),Object(_.jsxs)("article",{className:"lates-article__content",children:[Object(_.jsx)("img",{src:D,alt:"article_image_restaurant"}),Object(_.jsxs)("div",{className:"lates-article__description",children:[Object(_.jsx)("p",{className:"lates-article__author",children:"By Wilson Hutton"}),Object(_.jsx)("h2",{className:"lates-article__subtitle",children:"Treat yourself without worrying about money"}),Object(_.jsx)("p",{className:"lates-article__comment",children:"Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you \u2026"})]})]}),Object(_.jsxs)("article",{className:"lates-article__content",children:[Object(_.jsx)("img",{src:L,alt:"article_image_plane"}),Object(_.jsxs)("div",{className:"lates-article__description",children:[Object(_.jsx)("p",{className:"lates-article__author",children:"By Wilson Hutton"}),Object(_.jsx)("h2",{className:"lates-article__subtitle",children:"Take your Easybank card wherever you go"}),Object(_.jsx)("p",{className:"lates-article__comment",children:"We want you to enjoy your travels. This is why we don\u2019t charge any fees on purchases while you\u2019re abroad. We\u2019ll even show you \u2026"})]})]}),Object(_.jsxs)("article",{className:"lates-article__content",children:[Object(_.jsx)("img",{src:S,alt:"article_image_plane"}),Object(_.jsxs)("div",{className:"lates-article__description",children:[Object(_.jsx)("p",{className:"lates-article__author",children:"By Claire Robinson"}),Object(_.jsx)("h2",{className:"lates-article__subtitle",children:"Our invite-only Beta accounts are now live!"}),Object(_.jsx)("p",{className:"lates-article__comment",children:"After a lot of hard work by the whole team, we\u2019re excited to launch our closed beta. It\u2019s easy to request an invite through the site ..."})]})]})]})]})},G=function(n){return Object(_.jsxs)("main",{children:[Object(_.jsx)(k,{}),Object(_.jsx)(q,{}),Object(_.jsx)(T,{})]})},I=m.a.footer(s||(s=Object(x.a)(["\n  background-color: var(--Dark-Blue);\n  width: 100%;\n\n  .footer__container {\n    display: flex;\n    padding: 3% 0;\n    max-width: 1100px;\n    margin: 0 auto;\n\n    .footer__network {\n      .footer__logo {\n        display: block;\n        margin-bottom: 35%;\n      }\n\n      .footer__social-networks {\n        ul {\n          display: flex;\n\n          li + li {\n            margin-left: 15px;\n          }\n        }\n      }\n    }\n\n    .footer__menu {\n      display: flex;\n      margin-left: 8%;\n\n      ul {\n        margin-left: 40px;\n\n        li {\n          margin-bottom: 20px;\n          a {\n            color: var(--White);\n\n            &:hover {\n              color: var(--Lime-Green);\n            }\n          }\n        }\n      }\n      .footer__menu--box {\n        margin-right: 80px;\n      }\n    }\n\n    .footer__AllRight {\n      text-align: center;\n      margin-left: auto;\n\n      .request-invite {\n        margin-bottom: 13%;\n      }\n\n      p {\n        color: var(--Grayish-Blue);\n      }\n    }\n  }\n\n  .attribution {\n    text-align: center;\n    padding: 3% 0 6% 0;\n\n    span {\n      color: var(--White);\n    }\n\n    a {\n      color: var(--Bright-Cyan);\n    }\n  }\n\n  @media screen and (min-width: 601px) and (max-width: 1024px) {\n    .footer__container {\n      margin: 0 30px;\n      padding: 6% 0;\n      justify-content: space-evenly;\n\n      .footer__network {\n        .footer__logo {\n          margin-bottom: 25%;\n        }\n      }\n\n      .footer__menu {\n        display: block;\n        margin: -20px 0 0 40px;\n        text-align: center;\n\n        ul {\n          li {\n            margin-bottom: 0;\n          }\n        }\n\n        .footer__menu--box {\n          li {\n            padding-top: 20px;\n          }\n        }\n      }\n\n      .footer__AllRight {\n        margin-left: 0;\n\n        .request-invite {\n          margin-bottom: 9%;\n        }\n\n        p {\n          font-size: 16px;\n          width: 100%;\n        }\n      }\n    }\n\n    .attribution {\n      padding: 3% 0 9% 0;\n\n      span {\n        margin-left: 5px;\n      }\n    }\n  }\n\n  @media screen and (max-width: 600px) {\n    .footer__container {\n      flex-direction: column;\n      align-items: center;\n\n      .footer__network {\n        .footer__logo {\n          padding: 50px 0 30px 0;\n          margin-bottom: 0;\n        }\n      }\n\n      .footer__menu {\n        display: block;\n        margin: 30px 0;\n        text-align: center;\n\n        .footer__menu--box {\n          margin: 0 auto;\n\n          li {\n            margin-top: 20px;\n          }\n        }\n      }\n\n      .footer__AllRight {\n        margin: 20px 0 0 0;\n\n        .request-invite {\n          margin-bottom: 0;\n        }\n\n        p {\n          margin: 30px 0;\n        }\n      }\n    }\n\n    .attribution {\n      width: 80%;\n      margin: 0 auto;\n      padding: 3% 0 12% 0;\n\n      a {\n        margin-left: 5px;\n      }\n    }\n  }\n"]))),F=t.p+"static/media/logo-footer.0dbddf83.svg",E=t.p+"static/media/icon-facebook.1e9b3338.svg",P=t.p+"static/media/icon-youtube.7d6960fb.svg",H=t.p+"static/media/icon-twitter.01a8907d.svg",M=t.p+"static/media/icon-pinterest.45264b1d.svg",J=t.p+"static/media/icon-instagram.54d3962e.svg",U=function(n){return Object(_.jsxs)(I,{className:"footer",children:[Object(_.jsxs)("div",{className:"footer__container",children:[Object(_.jsxs)("div",{className:"footer__network",children:[Object(_.jsx)("a",{href:"index.html",className:"footer__logo",children:Object(_.jsx)("img",{src:F,alt:"logo-easybank-landing-page-master"})}),Object(_.jsx)("nav",{className:"footer__social-networks",children:Object(_.jsxs)("ul",{children:[Object(_.jsx)("li",{children:Object(_.jsx)("a",{href:" #",children:Object(_.jsx)("img",{src:E,alt:"link-easybank-facebook"})})}),Object(_.jsx)("li",{children:Object(_.jsx)("a",{href:" #",children:Object(_.jsx)("img",{src:P,alt:"link-easybank-youtube"})})}),Object(_.jsx)("li",{children:Object(_.jsx)("a",{href:" #",children:Object(_.jsx)("img",{src:H,alt:"link-easybank-twitter"})})}),Object(_.jsx)("li",{children:Object(_.jsx)("a",{href:" #",children:Object(_.jsx)("img",{src:M,alt:"link-easybank-pinterest"})})}),Object(_.jsx)("li",{children:Object(_.jsx)("a",{href:" #",children:Object(_.jsx)("img",{src:J,alt:"link-easybank-instagram"})})})]})})]}),Object(_.jsxs)("nav",{className:"footer__menu",children:[Object(_.jsxs)("ul",{className:"footer__menu--box",children:[Object(_.jsx)("li",{children:Object(_.jsx)("a",{href:" #",children:"About Us"})}),Object(_.jsx)("li",{children:Object(_.jsx)("a",{href:" #",children:"Contact"})}),Object(_.jsx)("li",{children:Object(_.jsx)("a",{href:" #",children:"Blog"})})]}),Object(_.jsxs)("ul",{className:"footer__menu--box",children:[Object(_.jsx)("li",{children:Object(_.jsx)("a",{href:" #",children:"Careers"})}),Object(_.jsx)("li",{children:Object(_.jsx)("a",{href:" #",children:"Support"})}),Object(_.jsx)("li",{children:Object(_.jsx)("a",{href:" #",children:"Privacy Policy"})})]})]}),Object(_.jsxs)("div",{className:"footer__AllRight",children:[Object(_.jsx)("button",{type:"button",className:"request-invite",children:"Request Invite"}),Object(_.jsx)("p",{children:" \xa9 Easybank. All Rights Reserved"})]})]}),Object(_.jsxs)("div",{className:"attribution",children:[Object(_.jsx)("span",{children:"Challenge by"}),Object(_.jsxs)("a",{href:"https://www.frontendmentor.io?ref=challenge",target:"_blank",rel:"noreferrer",children:["  ","Frontend Mentor"]}),Object(_.jsx)("span",{children:". Coded by "}),Object(_.jsx)("a",{href:"https://www.frontendmentor.io/profile/ArturdaSilvaRezende",rel:"noreferrer",children:"Artur da Silva Rezende"}),Object(_.jsx)("span",{children:"."})]})]})};function Y(){return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(f,{}),Object(_.jsx)(G,{}),Object(_.jsx)(U,{})]})}var K=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,23)).then((function(e){var t=e.getCLS,i=e.getFID,a=e.getFCP,r=e.getLCP,c=e.getTTFB;t(n),i(n),a(n),r(n),c(n)}))};h.a.render(Object(_.jsx)(l.a.StrictMode,{children:Object(_.jsx)(Y,{})}),document.getElementById("root")),K()}},[[22,1,2]]]);
//# sourceMappingURL=main.6f5ec8ad.chunk.js.map