import React from "react";
import Carousel from "nuka-carousel";
import "./feedback.scss";
const Feedback = () => {
  return (
    <div className="feedbacks">
      <div className="heading">
        <h1>TESTIMONIALS</h1>
        <span>CLIENT FEEDBACKS</span>
      </div>
      <div className="slider">
        <Carousel
          renderCenterLeftControls={({ previousSlide }) => (
            <span onClick={previousSlide}></span>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <span onClick={nextSlide}></span>
          )}
          slidesToShow={1}
          autoplay={true}
          initialSlideWidth={400}
          pauseOnHover={true}
        >
          <div className="feedback">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
              inventore, et ipsam voluptas reprehenderit non recusandae velit
              adipisci, sint laudantium, a doloremque consectetur impedit quod
              aspernatur deserunt eveniet sunt? Necessitatibus.
            </p>
            <h2>~John Doe~</h2>
          </div>
          <div className="feedback">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
              inventore, et ipsam voluptas reprehenderit non recusandae velit
              adipisci, sint laudantium, a doloremque consectetur impedit quod
              aspernatur deserunt eveniet sunt? Necessitatibus.
            </p>
            <h2>~John Doe~</h2>
          </div>
          <div className="feedback">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
              inventore, et ipsam voluptas reprehenderit non recusandae velit
              adipisci, sint laudantium, a doloremque consectetur impedit quod
              aspernatur deserunt eveniet sunt? Necessitatibus.
            </p>
            <h2>~John Doe~</h2>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Feedback;
