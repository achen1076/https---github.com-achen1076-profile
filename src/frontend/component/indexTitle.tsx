import React from "react";

export default function IndexTitleContainer() {
  return (
    <div className="     " id="home">
      <div className="container__intro">
        <h1 className="header__name">Hi. I'm Andrew Chen</h1>
        <h3 className="sub-header__intro">
          Currently finishing up my Computer Science BS at Michigan State
          University. I am passionate about software and full stack delevopment
          and everything business.
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
  );
}
