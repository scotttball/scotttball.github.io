import {
  faFacebookF,
  faGithub,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import profilePic from './scottpic.png';

interface AppProps {}

function App({}: AppProps) {
  return (
    <div className="flex flex-col h-screen">
      <main className="flex flex-col items-center justify-center flex-1">
        <div className="profile-img">
          <img src={profilePic} alt="Scott's Profile Picture" />
        </div>
        <h1 className="title">Scott Ball</h1>
        <p className="description">Software Developer</p>
        <div className="space-x-4 icon-group">
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
        </div>
      </main>

      <footer className="py-2">
        <p>
          Scott Ball © <span id="year">{new Date().getFullYear()}</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
