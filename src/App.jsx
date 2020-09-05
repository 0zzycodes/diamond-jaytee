import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Portfolio from "./sections/portfolio/portfolio";
import Services from "./sections/services/services";
import InstagramPosts from "./components/instagram/instagram";
import Contact from "./sections/contact/contact";
import Feedback from "./sections/feedback/feedback";

import "./App.scss";
import Shop from "./pages/shop/shop";

const App = ({ match }) => {
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
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <div>
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
              <section id="contact">
                <Contact />
              </section>
              <section id="testimonials">
                <Feedback />
              </section>
            </div>
          )}
        />
        <Route exact path="/shop" component={Shop} />
      </Switch>
      {match.isExact && <Footer />}
    </div>
  );
};

export default withRouter(App);
