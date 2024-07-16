import React, { useState } from "react";

export default function ExperiencesSection() {
  const [TimelineTitle, setTimelineTitle] = useState("Overview");
  const [TimelineText, setTimelineText] = useState(
    "Extensive knowledge and experiences in Python, C++, HTML, JavaScript, CSS, React, and business development through personal projects and other experiences. Actively looking for more opportunities to expand my skills and improve myself and others."
  );

  const changeTimelineExperiences = (slideNum: number) => {
    let timelineText = document.getElementById("timelineText");

    if (timelineText) {
      switch (slideNum) {
        case 0:
          setTimelineText(
            "Extensive knowledge and experiences in Python, C++, full stack development, and business development through personal projects and other experiences. Actively looking for more opportunities to expand my skills and improve myself and others."
          );
          setTimelineTitle("Overview");
          break;
        case 1:
          setTimelineText(
            "As an Enterprise Architect Intern at Comerica Bank, I apply my skills and knowledge to design, develop, and maintain the bank's applications and systems. I collaborated with senior architects, developers, and other coworkers to deliver solutions that meet the bank's business needs and standards. I also contribute to the documentation, testing, and debugging of the projects, ensuring their quality and performance. Built many apps to help simplify and automate processes across the bank. Also taught and walked two co-workers through app development from start to finish."
          );
          setTimelineTitle("Comerica Bank - Enterprise Architect");
          break;
        case 2:
          setTimelineText(
            "Currently a DevOps Engineer Intern at Comerica Bank. Working with teams to migrate applications to AWS 2.0 and ensuring automation via Jenkins Pipelines. Working with many different tools on this pipeline including Terraform as an IaC tool and many other tools."
          );
          setTimelineTitle("Comerica Bank - DevOps Engineer");
          break;
        case 3:
          setTimelineText(
            "Online marketing and technology support with devices. Helped fix technology and rewire systems, marketing products and advertising. Fixed and debuged different hardware and software problems on many different technologies"
          );
          setTimelineTitle("Ztron");
          break;
        case 4:
          setTimelineText(
            "Founder of a start up beverage company. Financed for our first production run through investor talks and a pilot run. Funded over 120k through investors and ourselves. Experienced the steps it takes to manage a full business and the responsibilities of filing taxes and financing our spendings and bankroll. Worked with large companies and spoke with other CEOs to learn and develop our product."
          );
          setTimelineTitle("Swift Drinks");
          break;
        case 5:
          setTimelineText(
            "Throughout my earlier years, I would freelance and tutor and teach people how to code. I have taught topics from basic python to full stack web development to people. My specialties included python, algorithms, data structures, and web development. I used these as opportunities to lead a client through a project to help them better understand or learn a skill."
          );
          setTimelineTitle("Freelancing");
          break;
        case 7:
          setTimelineText(
            "Assigned project manager due to expertise and experience shown throughout class and work. Managed a small team of 5, assigning tasks, due dates and maintaining updated progress on each individual task weekly through schedules meetings. Maintained and managed all deiverable submissions while aiding with tasks. Interviewed and analyzed customer requirements for project, creating high level diagrams and rapid prototypes. Created a Software Requirement Specification document."
          );
          setTimelineTitle("Project Manager for Software Engineering");

          break;
      }
      timelineText.style.animation = "fade-in 2s";
    }
  };
  return (
    <div className="container__index-about-body" id="experiences">
      <div
        className="container__index-text-field--fixed"
        id="timelineTextContainer"
      >
        <h1 className="header__about-me--white">Experiences</h1>
        <h2 className="subheader__experiences" id="experiencesSubheader">
          {TimelineTitle}
        </h2>
        <p className="text__about-me--white" id="timelineText">
          {TimelineText}
        </p>
      </div>

      <div className="container__timeline">
        <div
          onClick={() => changeTimelineExperiences(0)}
          className="btn link__timeline"
        >
          Overview
        </div>
        <br />
        <div
          onClick={() => changeTimelineExperiences(1)}
          className="btn link__timeline"
        >
          Comerica Bank - <br /> Enterprise Architect
        </div>
        <br />
        <div
          onClick={() => changeTimelineExperiences(2)}
          className="btn link__timeline"
        >
          Comerica Bank - <br /> DevOps Engineer
        </div>
        <br />
        <div
          onClick={() => changeTimelineExperiences(3)}
          className="btn link__timeline"
        >
          Ztron
        </div>
        <br />
        <div
          onClick={() => changeTimelineExperiences(4)}
          className="btn link__timeline"
        >
          Swift Drinks
        </div>
        <br />
        <div
          onClick={() => changeTimelineExperiences(5)}
          className="btn link__timeline"
        >
          Freelancing
        </div>
        <br />
        <div
          onClick={() => changeTimelineExperiences(7)}
          className="btn link__timeline"
        >
          Project Manager
        </div>
      </div>
    </div>
  );
}
