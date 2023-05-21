import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

var currSlide = 1;

export function nextSlide() {
  const a = "slide" + currSlide;
  const c = "dot" + currSlide;

  if (currSlide >= 6) {
    currSlide = 0;
    var b = "slide" + (currSlide + 1);
    var d = "dot" + (currSlide + 1);
  } else {
    var b = "slide" + (currSlide + 1);
    var d = "dot" + (currSlide + 1);
  }
  document.getElementById(a).style.display = "none";
  document.getElementById(b).style.display = "block";
  document.getElementById(c).style.backgroundColor = "black";
  document.getElementById(d).style.backgroundColor = "#717171";
  currSlide += 1;
}

export function lastSlide() {
  const a = "slide" + currSlide;
  const c = "dot" + currSlide;

  if (currSlide <= 1) {
    currSlide = 7;
    var b = "slide" + (currSlide - 1);
    var d = "dot" + (currSlide - 1);
  } else {
    var b = "slide" + (currSlide - 1);
    var d = "dot" + (currSlide - 1);
  }
  document.getElementById(a).style.display = "none";
  document.getElementById(b).style.display = "block";
  document.getElementById(c).style.backgroundColor = "black";
  document.getElementById(d).style.backgroundColor = "#717171";
  currSlide -= 1;
}

export function changeSlide(n) {
  const a = "slide" + currSlide;
  const b = "slide" + n;
  const c = "dot" + currSlide;
  const d = "dot" + n;

  document.getElementById(a).style.display = "none";
  document.getElementById(b).style.display = "block";
  document.getElementById(c).style.backgroundColor = "black";
  document.getElementById(d).style.backgroundColor = "#717171";

  currSlide = n;
}

function timedSwitch() {}

export function IndexTitleContainer() {
  return (
    <React.Fragment>
      <div className="container__index-intro" id="home">
        <div className="container__intro">
          <h1 class="header__name">Hi. I'm Andrew Chen</h1>
          <h3 class="sub-header__intro">
            Currently finishing up my Computer Science and Finance BS at
            Michigan State University. I am passionate about software and full
            stack delevopment and everything business.
          </h3>
        </div>
        <div className="container__profile-image">
          <img src="media_public/andrew_profile.png" alt="" />
        </div>
        <div className="container__quote">
          <p className="text__quote">
            <i>"dont dwell on the past, learn from it and move on"</i>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export class SideMenu extends Component {
  render() {
    return (
      <div className="container__sidebar-menu">
        <div className="container__sidebar-items">
          <a href="#home" className="link__sidebar">
            Home
          </a>
        </div>
        <div className="container__sidebar-items">
          <a href="#about" className="link__sidebar">
            About Me
          </a>
        </div>
        <div className="container__sidebar-items">
          <a href="#experiences" className="link__sidebar">
            Experiences
          </a>
        </div>
        <div className="container__sidebar-items">
          <a href="#projects" className="link__sidebar">
            Projects
          </a>
        </div>
        <div className="container__sidebar-items">
          <a href="#skills" className="link__sidebar">
            Skills
          </a>
        </div>
        <div className="container__sidebar-items">
          <a href="#connect" className="link__sidebar">
            Connect
          </a>
        </div>
      </div>
    );
  }
}

export class IndexAboutMe extends Component {
  render() {
    const changeTimeline = (slideNum) => {
      let oldTimelineText = document.getElementById("timelineText");
      let oldTimelineTitle = document.getElementById("experiencesSubheader");
      let timelineTextContainer = document.getElementById(
        "timelineTextContainer"
      );

      oldTimelineText.remove();
      oldTimelineTitle.remove();

      var newTimelineText = document.createElement("p");
      newTimelineText.className = "text__about-me--white";
      newTimelineText.id = "timelineText";

      var newTimelineTitle = document.createElement("h2");
      newTimelineTitle.className = "subheader__experiences";
      newTimelineTitle.id = "experiencesSubheader";

      if (slideNum == 0) {
        newTimelineText.innerHTML =
          "Extensive knowledge and experiences in Python, C++, HTML, JavaScript, CSS, React, and business development through personal projects and other experiences. Actively looking for more opportunities to expand my skills and improve myself and others.";
        newTimelineText.style.animation = "fade-in 2s";

        newTimelineTitle.innerHTML = "Overview";
      }
      if (slideNum == 1) {
        newTimelineText.innerHTML =
          "Currently working for Comerica Banks as a Technology/Software Development intern. Working with a team using Microsoft PowerApps development to improve tech standards lookup tool and code automation using Terraform.";
        newTimelineText.style.animation = "fade-in 2s";

        newTimelineTitle.innerHTML = "Comerica Bank";
      }
      if (slideNum == 2) {
        newTimelineText.innerHTML =
          "Online marketing and technology support with devices. Helped fix technology and rewire systems, marketing products and advertising store.";
        newTimelineText.style.animation = "fade-in 2s";

        newTimelineTitle.innerHTML = "Ztron";
      }

      if (slideNum == 3) {
        newTimelineText.innerHTML =
          "Founder of a start up beverage company. Currenlty in the process of financing for our first production run through investor talks and a pilot run. Funded over 120k through investors and ourselves. Experienced the steps it takes to manage a full business and the responsibilities of filing taxes and financing our spendings and bankroll. Worked with large companies and spoke with other CEOs to learn and develop our product.";
        newTimelineText.style.animation = "fade-in 2s";

        newTimelineTitle.innerHTML = "Swift";
      }

      if (slideNum == 4) {
        newTimelineText.innerHTML =
          "Tutoring throughout college in both computer science and business related topics. This includes courses of that include object oriented software development, algorithmic engineering, data structures, and other related or introductory courses. I choose to help tutor and aid other students not only to brush up on some languages that I may not use as often anymore, but to experience working with others through a task and debugging code. ";
        newTimelineText.style.animation = "fade-in 2s";

        newTimelineTitle.innerHTML = "Tutoring";
      }

      timelineTextContainer.appendChild(newTimelineTitle);
      timelineTextContainer.appendChild(newTimelineText);
    };

    return (
      <section className="section__index-about" id="indexAboutSection">
        <div className="container__index-about-body" id="about">
          <div className="container__index-text-field--fixed">
            <h1 className="header__about-me--white">Who am I?</h1>

            <p className="text__about-me--white">
              Hi, my name is Andrew Chen. I study Computer Science and Finance
              at Michigan State University. Currently I am set to graduate in
              2025 with a dual degree. The summer of 2021, right after
              highschool graduation I decided to pursue my first ever coding
              project. I took my passion for the stock market and my drive to
              learn some coding and created a stock screening API. Having never
              coded before, it was a challenge at the time. Never did I expect
              that to have lead me to my passion of software, full stack web
              development, and product management.
            </p>
          </div>
        </div>
        <div className="container__index-about-body">
          <div className="container__index-text-field--fixed">
            <h1 className="header__about-me--green">More about me</h1>
            <p className="text__about-me--green">
              In my free time, I enjoy working on whatever projects I can wrap
              my hands around. Late summer of 2022, I created my first fully
              capable website using HTML and CSS for the front end and
              JavaScript, Python and Google Firebase for the backend. I toyed
              with many different ideas of what I could turn this shell of a
              website into. From online porfolios to a sports betting algorithm,
              it has been through many different iterations. However, now it
              remains just a shell of a website with some of its features intact
              as I continue to pursue other projects and opportunities. I am an
              extremely hard worker who will put in all my effort to solve
              anything. Whether that requires the help of others or learning on
              my own, I am willing and able to work both indiviually and as a
              team.
            </p>
          </div>
        </div>
        <div className="container__index-about-body" id="experiences">
          <div
            className="container__index-text-field--fixed"
            id="timelineTextContainer"
          >
            <h1 className="header__about-me--white">Experiences</h1>
            <h2 className="subheader__experiences" id="experiencesSubheader">
              Overview
            </h2>
            <p className="text__about-me--white" id="timelineText">
              Extensive knowledge and experiences in Python, C++, HTML,
              JavaScript, CSS, React, and business development through personal
              projects and other experiences. Actively looking for more
              opportunities to expand my skills and improve myself and others.
            </p>
          </div>

          <div className="container__timeline">
            <div
              onClick={() => changeTimeline(0)}
              className="btn link__timeline"
            >
              Overview
            </div>
            <br />
            <br />
            <div
              onClick={() => changeTimeline(1)}
              className="btn link__timeline"
            >
              Comerica Bank
            </div>
            <br />
            <br />
            <div
              onClick={() => changeTimeline(2)}
              className="btn link__timeline"
            >
              Ztron
            </div>
            <br />
            <br />
            <div
              onClick={() => changeTimeline(3)}
              className="btn link__timeline"
            >
              Swift
            </div>
            <br />
            <br />
            <div
              onClick={() => changeTimeline(4)}
              className="btn link__timeline"
            >
              Tutoring
            </div>
          </div>
        </div>
        <div className="container__index-about-body" id="projects">
          <div className="container__index-text-field--fixed">
            <h1 className="header__about-me--green">Projects</h1>
            <p className="text__about-me--green">
              Here are some of the projects I have worked on over the past
              couple years
            </p>
            <section className="index-bar-container">
              <div
                class="slideshow-container"
                onMouseOver={timedSwitch}
                onLoad={() => changeSlide(1)}
              >
                <div id="slide1" class="mySlides slide1 fade">
                  <img className="slide-img" src={"./media_public/1.png"} />
                  <div class="text"></div>
                </div>
                <div id="slide2" class="mySlides slide2 fade">
                  <img className="slide-img" src={"./media_public/2.png"} />
                  <div class="text"></div>
                </div>
                <div id="slide3" class="mySlides slide3 fade">
                  <img className="slide-img" src={"./media_public/3.png"} />
                  <div class="text"></div>
                </div>
                <div id="slide4" class="mySlides slide3 fade">
                  <img className="slide-img" src={"./media_public/4.png"} />
                  <div class="text"></div>
                </div>
                <div id="slide5" class="mySlides slide3 fade">
                  <img className="slide-img" src={"./media_public/5.png"} />
                  <div class="text"></div>
                </div>
                <div id="slide6" class="mySlides slide3 fade">
                  <img className="slide-img" src={"./media_public/6.png"} />
                  <div class="text"></div>
                </div>
                <a class="prev" onClick={lastSlide}>
                  &#10094;
                </a>
                <a class="next" onClick={nextSlide}>
                  &#10095;
                </a>
              </div>
              <br />
              <div class="dots">
                <span
                  id="dot1"
                  class="dot dot1"
                  onClick={() => changeSlide(1)}
                ></span>
                <span
                  id="dot2"
                  class="dot"
                  onClick={() => changeSlide(2)}
                ></span>
                <span
                  id="dot3"
                  class="dot"
                  onClick={() => changeSlide(3)}
                ></span>
                <span
                  id="dot4"
                  class="dot"
                  onClick={() => changeSlide(4)}
                ></span>
                <span
                  id="dot5"
                  class="dot"
                  onClick={() => changeSlide(5)}
                ></span>
                <span
                  id="dot6"
                  class="dot"
                  onClick={() => changeSlide(6)}
                ></span>
              </div>
            </section>
          </div>
        </div>
        <div className="container__index-about-body" id="skills">
          <div className="container__index-text-field--fixed">
            <h1 className="header__about-me--white ">Skills</h1>
            <div className="container__skills">
              <div className="subcontainer__skills">
                <p className="subheader__skills">Coding</p>
                <div className="grid__skills-rating">
                  <dl className="description-list__coding-skills-list">
                    <dt className="description-term__coding-skill-item">
                      Python
                    </dt>
                    <dd className="description-definition__coding-skill-rating">
                      <span class="fa fa-star black-star"></span>
                      <span class="fa fa-star black-star"></span>
                      <span class="fa fa-star black-star"></span>
                      <span class="fa fa-star black-star"></span>
                      <span class="fa fa-star black-star"></span>
                    </dd>
                  </dl>
                  <dl className="description-list__coding-skills-list">
                    <dt className="description-term__coding-skill-item">C++</dt>
                    <dd className="description-definition__coding-skill-rating">
                      <span class="fa fa-star black-star"></span>
                      <span class="fa fa-star black-star"></span>
                      <span class="fa fa-star black-star"></span>
                      <span class="fa fa-star black-star"></span>
                      <span class="fa fa-star gray-star"></span>
                    </dd>
                  </dl>
                  <dl className="description-list__coding-skills-list">
                    <dt className="description-term__coding-skill-item">
                      React
                    </dt>
                    <dd className="description-definition__coding-skill-rating">
                      <span class="fa fa-star black-star"></span>
                      <span class="fa fa-star black-star"></span>
                      <span class="fa fa-star gray-star"></span>
                      <span class="fa fa-star gray-star"></span>
                      <span class="fa fa-star gray-star"></span>
                    </dd>
                  </dl>
                  <dl className="description-list__coding-skills-list">
                    <dt className="description-term__coding-skill-item">
                      HTML
                    </dt>
                    <dd className="description-definition__coding-skill-rating">
                      <span class="fa fa-star black-star"></span>
                      <span class="fa fa-star black-star"></span>
                      <span class="fa fa-star black-star"></span>
                      <span class="fa fa-star black-star"></span>
                      <span class="fa fa-star black-star"></span>
                    </dd>
                  </dl>
                  <dl className="description-list__coding-skills-list">
                    <dt className="description-term__coding-skill-item">CSS</dt>
                    <dd className="description-definition__coding-skill-rating">
                      <span class="fa fa-star black-star"></span>
                      <span class="fa fa-star black-star"></span>
                      <span class="fa fa-star black-star"></span>
                      <span class="fa fa-star black-star"></span>
                      <span class="fa fa-star black-star"></span>
                    </dd>
                  </dl>
                  <dl className="description-list__coding-skills-list">
                    <dt className="description-term__coding-skill-item">
                      JavaScript
                    </dt>
                    <dd className="description-definition__coding-skill-rating">
                      <span class="fa fa-star black-star"></span>
                      <span class="fa fa-star black-star"></span>
                      <span class="fa fa-star black-star"></span>
                      <span class="fa fa-star gray-star"></span>
                      <span class="fa fa-star gray-star"></span>
                    </dd>
                  </dl>
                </div>
              </div>
              <div className="subcontainer__skills">
                <p className="subheader__skills">Others</p>
                <div className="grid__skills-rating">
                  <dl className="description-list__coding-skills-list">
                    <dt className="description-term__coding-skill-item">
                      UI/UX
                    </dt>
                    <dd className="description-definition__coding-skill-rating">
                      <span class="fa fa-star black-star"></span>
                      <span class="fa fa-star black-star"></span>
                      <span class="fa fa-star black-star"></span>
                      <span class="fa fa-star black-star"></span>
                      <span class="fa fa-star gray-star"></span>
                    </dd>
                  </dl>

                  <dl className="description-list__coding-skills-list">
                    <dt className="description-term__coding-skill-item">
                      Google Firebase
                    </dt>
                    <dd className="description-definition__coding-skill-rating">
                      <span class="fa fa-star black-star"></span>
                      <span class="fa fa-star black-star"></span>
                      <span class="fa fa-star gray-star"></span>
                      <span class="fa fa-star gray-star"></span>
                      <span class="fa fa-star gray-star"></span>
                    </dd>
                  </dl>
                  <dl className="description-list__coding-skills-list">
                    <dt className="description-term__coding-skill-item">
                      Microsoft Excel
                    </dt>
                    <dd className="description-definition__coding-skill-rating">
                      <span class="fa fa-star black-star"></span>
                      <span class="fa fa-star black-star"></span>
                      <span class="fa fa-star gray-star"></span>
                      <span class="fa fa-star gray-star"></span>
                      <span class="fa fa-star gray-star"></span>
                    </dd>
                  </dl>
                  <dl className="description-list__coding-skills-list">
                    <dt className="description-term__coding-skill-item">
                      Terraform
                    </dt>
                    <dd className="description-definition__coding-skill-rating">
                      <span class="fa fa-star black-star"></span>
                      <span class="fa fa-star gray-star"></span>
                      <span class="fa fa-star gray-star"></span>
                      <span class="fa fa-star gray-star"></span>
                      <span class="fa fa-star gray-star"></span>
                    </dd>
                  </dl>
                  <dl className="description-list__coding-skills-list">
                    <dt className="description-term__coding-skill-item">
                      Microsoft PowerApps
                    </dt>
                    <dd className="description-definition__coding-skill-rating">
                      <span class="fa fa-star black-star"></span>
                      <span class="fa fa-star gray-star"></span>
                      <span class="fa fa-star gray-star"></span>
                      <span class="fa fa-star gray-star"></span>
                      <span class="fa fa-star gray-star"></span>
                    </dd>
                  </dl>
                  <dl className="description-list__coding-skills-list">
                    <dt className="description-term__coding-skill-item">
                      Business Management
                    </dt>
                    <dd className="description-definition__coding-skill-rating">
                      <span class="fa fa-star black-star"></span>
                      <span class="fa fa-star black-star"></span>
                      <span class="fa fa-star black-star"></span>
                      <span class="fa fa-star gray-star"></span>
                      <span class="fa fa-star gray-star"></span>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <p className="text__skill-footer">
              *Relative to someone with similar amount of experience and age
            </p>
          </div>
        </div>
        <div className="container__index-about-body">
          <div className="container__index-text-field--fixed">
            <h1 className="header__about-me--green">coming soon</h1>
            <p className="text__about-me--green">...</p>
          </div>
        </div>
        <div className="container__index-about-body" id="connect">
          <div className="container__index-text-field--fixed">
            <p className="text__about-me--white">Connect with me!</p>
            <ul className="list__connect">
              <li className="list-item__connect">
                <a
                  href="https://www.linkedin.com/in/andrew-chen-641444208/"
                  target="_blank"
                >
                  <img src="/icons/linkedin.png" width="80vw" height="70vw" />
                </a>
              </li>
              <li className="list-item__connect">
                <a href="mailto: achen1076@gmail.com">
                  <img
                    src="/icons/gmail_icon.png"
                    width="80vw"
                    height="70vw"
                    margin-top="100px"
                  />
                </a>
              </li>
            </ul>
            <p className="text__footer">
              This website was created by Andrew Chen on Visual Studio Code.
              Built with React, HTML, JavaScript and CSS completely by hand.
            </p>
          </div>
        </div>
      </section>
    );
  }
}
