import React from "react";

export default function WorkExperiencesSection() {
  return (
    <div className="container__index-about-body">
      <div className="container__index-text-field--fixed">
        <h1 className="header__about-me--white">Work Projects </h1>
        <p className="text__about-me--white">
          Here are some of the projects I have worked on over the past couple
          months for work. (no images or code can be shown for internal privacy
          reasons)
        </p>
        <div className="work-project__container">
          <img
            className="work-project__image"
            src="./media_public/1_work.png"
          />
          <img
            className="work-project__image"
            src="./media_public/2_work.png"
          />
          <img
            className="work-project__image"
            src="./media_public/3_work.png"
          />
          <img
            className="work-project__image"
            src="./media_public/4_work.png"
          />
          <img
            className="work-project__image"
            src="./media_public/5_work.png"
          />
        </div>
      </div>
    </div>
  );
}
