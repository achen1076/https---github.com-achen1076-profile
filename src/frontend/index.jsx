import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Slides from "./component/slides.tsx";
import ExperiencesSection from "./component/experiencesSection.tsx";
import WorkExperiencesSection from "./component/workExperiencesSection.tsx";
import CoursesSection from "./component/courses.tsx";
import SkillsSection from "./component/skillsSection.tsx";

var root = document.querySelector(":root");

window.addEventListener("DOMContentLoaded", function () {
  resizeWindow(this.window.innerWidth, this.window.innerHeight);
});

export function resizeWindow(width, height) {
  let wh = (width + height) / 2;
  if (wh < 700) {
    if (width < height) {
      wh = width;
    } else {
      wh = height;
    }
    root.style.setProperty(
      "--path",
      `path('m 0 100 q 50-30 100-30 t ${wh / 80} 20 ${wh / 80} 0 90-30 150 30')`
    );
    root.style.setProperty(
      "--path-hover",
      `path('m 5 50 q 45-0 45-0 t ${wh / 75} 0 ${wh / 75} 0 45-0 45 0')`
    );
  } else {
    root.style.setProperty(
      "--path",
      `path('m 0 0 q 50-30 100-30 t ${wh / 10} 20 ${wh / 6} 0 100-30 150 30')`
    );
    root.style.setProperty(
      "--path-hover",
      `path('m 5 0 q 45-0 90-0 t ${wh / 9} 0 ${wh / 7} 0 90-0 90 0')`
    );
  }
}

export class IndexAboutMe extends Component {
  constructor() {
    super();
    this.state = {
      WindowWidth: window.innerWidth,
      WindowHeight: window.innerHeight,
    };
    this.handleResize = this.handleResize.bind(this);
  }
  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }
  componentWillUnmount() {
    window.addEventListener("resize", null);
  }
  handleResize(WindowWidth, event) {
    this.setState({
      WindowWidth: window.innerWidth,
      WindowHeight: window.innerHeight,
    });
    resizeWindow(window.innerWidth, window.innerHeight);
  }

  render() {
    return (
      <section className="section__index-about" id="indexAboutSection">
        <div className="container__index-about-body" id="about">
          <div className="container__index-text-field--fixed">
            <h1 className="header__about-me--white">Who am I?</h1>
            <p className="text__about-me--white">
              Hi, my name is Andrew Chen. I study Computer Science at Michigan
              State University. Currently I am set to graduate in 2024/25. The
              summer of 2021, right after highschool graduation I decided to
              pursue my first ever coding project. I took my passion for the
              stock market and my drive to learn some coding and created a stock
              screening API. Having never coded before, it was a challenge at
              the time. Never did I expect that to have lead me to my passion of
              software, full stack web development, and product management.
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
        <ExperiencesSection />
        <Slides />
        <WorkExperiencesSection />
        <CoursesSection />
        <SkillsSection />
        <div className="container__index-about-body" id="certifications">
          <div className="container__index-text-field--fixed">
            <h1 className="header__about-me--green">
              Certifications (coming soon)
            </h1>
            <p className="text__about-me--green">
              Currently working on AWS Cloud Practicioner Certification
            </p>
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
              This website is created by Andrew Chen on Visual Studio Code.
              Built with React, HTML, JavaScript and CSS completely by hand.
            </p>
          </div>
        </div>
      </section>
    );
  }
}
