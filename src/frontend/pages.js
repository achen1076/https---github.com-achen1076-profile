import React, { useState } from "react";
import "./style.css";
import { IndexBarContainer, IndexAboutMe } from "./index";
import IndexTitleContainer from "./component/indexTitle.tsx";
import SideMenu from "./component/sidebar.tsx";

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
