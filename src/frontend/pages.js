import React, { useState } from "react";
import "./style.css";
import {
  IndexTitleContainer,
  IndexBarContainer,
  IndexAboutMe,
  SideMenu,
} from "./component/index";

export function IndexPage() {
  return (
    <React.Fragment>
      <header class="main-header">
        <SideMenu />
        <section id="indexTitle">
          <IndexTitleContainer />
        </section>
      </header>
      <section className="section__parallax">
        <IndexAboutMe />
      </section>
    </React.Fragment>
  );
}
