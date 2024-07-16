import React, { useState } from "react";

export default function CoursesSection() {
  const [TimelineTitle, setTimelineTitle] = useState("Course Overview");
  const [TimelineText, setTimelineText] = useState(
    "All courses are attented at Michigan State University. Some courses may be courses I am currently attending. This section will include a brief overview of each course, what I learned and accomplished in each course and my proficiency in each course. Any further course information can be found at"
  );
  const changeTimelineCourses = (slideNum: number) => {
    switch (slideNum) {
      case 0:
        setTimelineText(
          "All courses are attented at Michigan State University. Some courses may be courses I am currently attending. This section will include a brief overview of each course, what I learned and accomplished in each course and my proficiency in each course. Any further course information can be found at"
        );
        setTimelineTitle("Course Overview");
        break;
      case 1:
        setTimelineText(
          "Assembly language programming and interfacing to high level languages, boolean algebra and digital logics, and combinational and sequential circuits. Learned how to program and debug C and Assembly. Also learned the interface between the hardware and software of modern computing systems. Worked with circuits and logic gates to create systems. Became very proficient in both programing and debugging C and Assembly, mildly proficient with the circuits and logic gate."
        );
        setTimelineTitle("Computer Organization and Architecture (CSE 320)");
        break;
      case 2:
        setTimelineText(
          "Gained a strong theoretical and conceptual understanding of common data structures and algorithms, as well as how to apply them within larger programming projects. Learned many different topics with algorithms and data structures including many ADTs and data structures, asymptotic and algorithm analysts, recursion and graph algorithms. Very proficient on all algorithms and their complexity, also got pretty good at dynamic programming. Learned many greedy, graph, and general algorithms. Ten total projects on algorithms and data structure, averaging near 100% on all projects. "
        );
        setTimelineTitle("Algorithms and Data Structures (CSE 331)");
        break;
      case 3:
        setTimelineText(
          "Taught in C++, we developed object oriented software and projects as a team and as individuals. Got to work with a team on large projects and learn to set up sprint meetings in order to strengthen collaboration skills. Created data models on projects and learned to apply them to solutions of programming problems. Became very proficient and learning the C++ very quickly. Created two class projects in C++ including the Angry Sparty physics oriented game and a keyframe movie maker that allowed users to create a stop motion movie."
        );
        setTimelineTitle("Object oriented Software Design (CSE 335)");
        break;
      case 4:
        setTimelineText(
          "Applied current technologies used to develop software on a project. Learned both the theoretical and practical aspects of software engineering. Went through project planning, requirements engineering, design strategies, software architectures, model driven developments, testing and prototyping. Appointed project manager for group and lead team to design, develop, test and prototype deliverable."
        );
        setTimelineTitle("Software Engineering (CSE 435)");
        break;
      case 5:
        setTimelineText(
          "Learned many advanced algorithms with a focus on optimization of the time and space complexity of the designed solution. Worked on many projects and assignments with strict time and space complexities requiring highly optimized solutions using advanced algorithms to solve. Focusing on algorithm analysis, design, implementation, and optimization for a broad range of problem categories including techniques to recognize and cope with c problems. I became very proficient with algorithms, optimizing time and space complexities, while also gaining more insight and practice with dynamic programming."
        );
        setTimelineTitle("Algorithm Engineering (CSE 431)");
        break;
      case 6:
        setTimelineText(
          "Learned to create web applications and deployment of web applications. Created front end web design using CSS, HTML, Jinja and JavaScript, while also learning to create backend and databases using Python Flask and SQL Databases. Working with docker containers and other web related applications. Created frontend and backend personal resume pages. Very proficient in all web development languages and softwares. "
        );
        setTimelineTitle(
          "Web Application Architecture and Development (CSE 477)"
        );
        break;
      case 7:
        setTimelineText(
          "Propositional and first order logic. Equivalence and methods of proof. Basics of counting. Set operations, relations, functions. Grammars and finite state automata. Discrete probability. Applications to computer science and engineering. Excelled in the course and on each individual assignment."
        );
        setTimelineTitle("Discrete Structures in Computer Science (CSE 260)");
        break;
      case 8:
        setTimelineText(
          "Probability models and random variables. Estimation, confidence intervals, tests of hypotheses, simple linear regression. Used Pandas, statistics, numpy and many other python libraries in order to calculate a multitude of different statistical models and calculations. "
        );
        setTimelineTitle(
          "Probability and Statistics for Engineering (STT 351)"
        );
        break;
    }
  };
  return (
    <div className="container__index-about-body" id="courses">
      <div
        className="container__index-text-field--fixed"
        id="timelineTextContainerCourses"
      >
        <h1 className="header__about-me--green">Courses</h1>
        <h2 className="subheader__courses" id="coursesSubheader">
          {TimelineTitle}
        </h2>
        <p className="text__about-me--green" id="timelineTextCourses">
          {TimelineText}
          <p className="text__about-me--green">
            <a
              href="https://reg.msu.edu/courses/search.aspx"
              target="_blank"
              className="course__link--overview"
            >
              https://reg.msu.edu/courses/search.aspx
            </a>
          </p>
        </p>
      </div>
      <div className="container__timeline">
        <div
          onClick={() => changeTimelineCourses(0)}
          className="btn link__timeline--green link__timeline--header"
        >
          <p className="text__about-me--green-large">Courses Overview</p>
        </div>
        <div
          onClick={() => changeTimelineCourses(1)}
          className="btn link__timeline--green"
        >
          <p className="text__about-me--green-smaller-left">
            Computer Organization and Architecture
          </p>
        </div>
        <div
          onClick={() => changeTimelineCourses(2)}
          className="btn link__timeline--green"
        >
          <p className="text__about-me--green-smaller-left">
            Algorithms and Data Structures
          </p>
        </div>
        <div
          onClick={() => changeTimelineCourses(3)}
          className="btn link__timeline--green"
        >
          <p className="text__about-me--green-smaller-left">
            Object-oriented Software Design
          </p>
        </div>
        <div
          onClick={() => changeTimelineCourses(4)}
          className="btn link__timeline--green"
        >
          <p className="text__about-me--green-smaller-left">
            Software Engineering
          </p>
        </div>
        <div
          onClick={() => changeTimelineCourses(5)}
          className="btn link__timeline--green"
        >
          <p className="text__about-me--green-smaller-left">
            Algorithm Engineering
          </p>
        </div>
        <div
          onClick={() => changeTimelineCourses(6)}
          className="btn link__timeline--green"
        >
          <p className="text__about-me--green-smaller-left">
            Web Application Architecture and Development
          </p>
        </div>
        <div
          onClick={() => changeTimelineCourses(7)}
          className="btn link__timeline--green"
        >
          <p className="text__about-me--green-smaller-left">
            Discrete Structures in Computer Science
          </p>
        </div>
        <div
          onClick={() => changeTimelineCourses(8)}
          className="btn link__timeline--green"
        >
          <p className="text__about-me--green-smaller-left">
            Probability and Statistics for Engineering
          </p>
        </div>
      </div>
    </div>
  );
}
