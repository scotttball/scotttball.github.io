import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./404.css"
// Much
// Many
// So
// Such
// Very

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <main id="content" className="fourOhfour">
      <ul className="fadeUl">
        <li id="first" className="fadeInAnimated">
          much sad
        </li>
        <li id="second" className="fadeInAnimated">
          why this happen
        </li>
        <li id="third" className="fadeInAnimated">
          plz no
        </li>
      </ul>
      <img
        id="doge"
        alt="doge"
        src="http://www.stickpng.com/assets/images/5845e608fb0b0755fa99d7e7.png"
      />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </main>
  </Layout>
)

export default NotFoundPage
