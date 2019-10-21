import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedinIn,
  faFacebookF,
  faGithub,
  faKeybase,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <main id="content">
      <div className="profile-img">
        <Image />
      </div>
      <h1 id="title">Scott Ball</h1>
      <p id="description">Software Developer</p>
      <div id="icons">
        <a
          className="icon-link"
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:scotttball@gmail.com"
        >
          <FontAwesomeIcon icon={faEnvelope} size="2x" className="icon" />
        </a>
        <a
          className="icon-link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/ballscott/"
        >
          <FontAwesomeIcon icon={faLinkedinIn} size="2x" className="icon" />
        </a>
        <a
          className="icon-link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/scotttball"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" className="icon" />
        </a>
        <a
          className="icon-link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/scotttball"
        >
          <FontAwesomeIcon icon={faFacebookF} size="2x" className="icon" />
        </a>
        <a
          className="icon-link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://keybase.io/scotttball"
        >
          <FontAwesomeIcon icon={faKeybase} size="2x" className="icon" />
        </a>
      </div>
    </main>
  </Layout>
)

export default IndexPage
