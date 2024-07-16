import React, { useState } from "react";

export default function Slides() {
  var currSlide = 1;

  function nextSlide() {
    const a = "slide" + currSlide;
    const c = "dot" + currSlide;

    if (currSlide >= 7) {
      currSlide = 0;
      var b = "slide" + (currSlide + 1);
      var d = "dot" + (currSlide + 1);
    } else {
      var b = "slide" + (currSlide + 1);
      var d = "dot" + (currSlide + 1);
    }

    const elementA = document.getElementById(a);
    const elementB = document.getElementById(b);
    const elementC = document.getElementById(c);
    const elementD = document.getElementById(d);

    if (elementA && elementB && elementC && elementD) {
      elementA.style.display = "none";
      elementB.style.display = "block";
      elementC.style.backgroundColor = "black";
      elementD.style.backgroundColor = "#717171";
      currSlide += 1;
    }
  }

  function lastSlide() {
    const a = "slide" + currSlide;
    const c = "dot" + currSlide;

    if (currSlide <= 1) {
      currSlide = 8;
      var b = "slide" + (currSlide - 1);
      var d = "dot" + (currSlide - 1);
    } else {
      var b = "slide" + (currSlide - 1);
      var d = "dot" + (currSlide - 1);
    }

    const elementA = document.getElementById(a);
    const elementB = document.getElementById(b);
    const elementC = document.getElementById(c);
    const elementD = document.getElementById(d);

    if (elementA && elementB && elementC && elementD) {
      elementA.style.display = "none";
      elementB.style.display = "block";
      elementC.style.backgroundColor = "black";
      elementD.style.backgroundColor = "#717171";
      currSlide -= 1;
    }
  }

  function changeSlide(n: number) {
    const a = "slide" + currSlide;
    const b = "slide" + n;
    const c = "dot" + currSlide;
    const d = "dot" + n;

    const elementA = document.getElementById(a);
    const elementB = document.getElementById(b);
    const elementC = document.getElementById(c);
    const elementD = document.getElementById(d);

    if (elementA && elementB && elementC && elementD) {
      elementA.style.display = "none";
      elementB.style.display = "block";
      elementC.style.backgroundColor = "black";
      elementD.style.backgroundColor = "#717171";
      currSlide = n;
    }
  }
  return (
    <div className="container__index-about-body" id="projects">
      <div className="container__index-text-field--fixed">
        <h1 className="header__about-me--green">Personal And Class Projects</h1>
        <p className="text__about-me--green">
          Here are some of the projects I have worked on over the past couple
          years. (click on the slides for more info)
        </p>
        <section className="index-bar-container">
          <div className="slideshow-container" onLoad={() => changeSlide(1)}>
            <div id="slide1" className="mySlides slide1 fade">
              <a href="https://bajamas.org" target="_blank">
                <img className="slide-img" src={"./media_public/1.png"} />
              </a>
              <a href="https://github.com/achen1076/da" target="_blank">
                <div className="text__slide">github</div>
              </a>
            </div>
            <div id="slide2" className="mySlides slide2 fade">
              <a href="https://github.com/achen1076/portfolio" target="_blank">
                <img className="slide-img" src={"./media_public/2.png"} />
              </a>
              <div className="text__slide"></div>
            </div>
            <div id="slide3" className="mySlides slide3 fade">
              <a
                href="https://gitlab.msu.edu/common-grackle/project1/-/tree/master"
                target="_blank"
              >
                <img className="slide-img" src={"./media_public/3.png"} />
              </a>
              <div className="text__slide"></div>
            </div>
            <div id="slide4" className="mySlides slide3 fade">
              <img className="slide-img" src={"./media_public/4.png"} />
              <div className="text__slide"></div>
            </div>
            <div id="slide5" className="mySlides slide3 fade">
              <img className="slide-img" src={"./media_public/5.png"} />
              <div className="text__slide"></div>
            </div>
            <div id="slide6" className="mySlides slide3 fade">
              <img className="slide-img" src={"./media_public/6.png"} />
              <div className="text__slide"></div>
            </div>
            <div id="slide7" className="mySlides slide3 fade">
              <img className="slide-img" src={"./media_public/7.png"} />
              <div className="text__slide"></div>
            </div>
            <a className="prev" onClick={lastSlide}>
              &#10094;
            </a>
            <a className="next" onClick={nextSlide}>
              &#10095;
            </a>
          </div>
          <br />
          <div className="dots">
            <span
              id="dot1"
              className="dot dot1"
              onClick={() => changeSlide(1)}
            ></span>
            <span
              id="dot2"
              className="dot"
              onClick={() => changeSlide(2)}
            ></span>
            <span
              id="dot3"
              className="dot"
              onClick={() => changeSlide(3)}
            ></span>
            <span
              id="dot4"
              className="dot"
              onClick={() => changeSlide(4)}
            ></span>
            <span
              id="dot5"
              className="dot"
              onClick={() => changeSlide(5)}
            ></span>
            <span
              id="dot6"
              className="dot"
              onClick={() => changeSlide(6)}
            ></span>
            <span
              id="dot7"
              className="dot"
              onClick={() => changeSlide(7)}
            ></span>
          </div>
        </section>
      </div>
    </div>
  );
}
