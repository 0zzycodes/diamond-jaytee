import React from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import "./App.scss";
import Portfolio from "./sections/portfolio/portfolio";
import Services from "./sections/services/services";
import InstagramPosts from "./components/instagram/instagram";

const App = () => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      document.querySelector(".navbar").classList.remove("fancy");
      document.querySelector(".navbar").classList.add("white-bg");
    } else {
      document.querySelector(".navbar").classList.add("fancy");
      document.querySelector(".navbar").classList.remove("white-bg");
    }
  });
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollpos = window.pageYOffset;
    if (prevScrollpos > currentScrollpos) {
      document.querySelector(".navbar").style.top = "0";
    } else {
      document.querySelector(".navbar").style.top = "-100px";
    }

    prevScrollpos = currentScrollpos;
  };
  return (
    <div className="app" id="/">
      <Header />
      <section id="portfolio" className="work">
        <Portfolio />
      </section>
      <section className="services">
        <Services />
      </section>
      <section className="instagram" id="instagram">
        <div className="heading">
          <h2>INSTAGRAM FEED</h2>
        </div>
        <InstagramPosts />
      </section>
      <Footer />
    </div>
  );
};

export default App;
