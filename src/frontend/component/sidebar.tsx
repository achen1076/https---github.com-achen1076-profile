import React from "react";

export default function SideMenu() {
  return (
    <div className="container__sidebar-menu">
      <a href="#home" className="link__sidebar">
        <div className="container__sidebar-items">
          <a href="#home" className="link__sidebar">
            Home
          </a>
        </div>
      </a>
      <a href="#about" className="link__sidebar">
        <div className="container__sidebar-items">
          <a href="#about" className="link__sidebar">
            About Me
          </a>
        </div>
      </a>
      <a href="#experiences" className="link__sidebar">
        <div className="container__sidebar-items">
          <a href="#experiences" className="link__sidebar">
            Experiences
          </a>
        </div>
      </a>
      <a href="#projects" className="link__sidebar">
        <div className="container__sidebar-items">
          <a href="#projects" className="link__sidebar">
            Projects
          </a>
        </div>
      </a>
      <a href="#courses" className="link__sidebar">
        <div className="container__sidebar-items">
          <a href="#courses" className="link__sidebar">
            Courses
          </a>
        </div>
      </a>
      <a href="#skills" className="link__sidebar">
        <div className="container__sidebar-items">
          <a href="#skills" className="link__sidebar">
            Skills
          </a>
        </div>
      </a>
      <a href="#certifications" className="link__sidebar">
        <div className="container__sidebar-items">
          <a href="#certifications" className="link__sidebar">
            Certifications
          </a>
        </div>
      </a>
      <a href="#connect" className="link__sidebar">
        <div className="container__sidebar-items">
          <a href="#connect" className="link__sidebar">
            Connect
          </a>
        </div>
      </a>
    </div>
  );
}
