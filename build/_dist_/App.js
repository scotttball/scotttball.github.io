import { faFacebookF, faGithub, faLinkedinIn } from '/web_modules/@fortawesome/free-brands-svg-icons.js';
import { faEnvelope } from '/web_modules/@fortawesome/free-solid-svg-icons.js';
import { FontAwesomeIcon } from '/web_modules/@fortawesome/react-fontawesome.js';
import React from '/web_modules/react.js';
import profilePic from './scottpic.png.proxy.js';

function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col h-screen"
  }, /*#__PURE__*/React.createElement("main", {
    className: "flex flex-col items-center justify-center flex-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "profile-img"
  }, /*#__PURE__*/React.createElement("img", {
    src: profilePic,
    alt: "Scott's Profile Picture"
  })), /*#__PURE__*/React.createElement("h1", {
    className: "title"
  }, "Scott Ball"), /*#__PURE__*/React.createElement("p", {
    className: "description"
  }, "Software Developer"), /*#__PURE__*/React.createElement("div", {
    className: "space-x-4 icon-group"
  }, /*#__PURE__*/React.createElement("a", {
    className: "icon-link",
    target: "_blank",
    rel: "noopener noreferrer",
    href: "mailto:scotttball@gmail.com"
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faEnvelope,
    size: "2x",
    className: "icon"
  })), /*#__PURE__*/React.createElement("a", {
    className: "icon-link",
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://www.linkedin.com/in/ballscott/"
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faLinkedinIn,
    size: "2x",
    className: "icon"
  })), /*#__PURE__*/React.createElement("a", {
    className: "icon-link",
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://github.com/scotttball"
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faGithub,
    size: "2x",
    className: "icon"
  })), /*#__PURE__*/React.createElement("a", {
    className: "icon-link",
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://www.facebook.com/scotttball"
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faFacebookF,
    size: "2x",
    className: "icon"
  })))), /*#__PURE__*/React.createElement("footer", {
    className: "py-2"
  }, /*#__PURE__*/React.createElement("p", null, "Scott Ball \xA9 ", /*#__PURE__*/React.createElement("span", {
    id: "year"
  }, new Date().getFullYear()))));
}

export default App;