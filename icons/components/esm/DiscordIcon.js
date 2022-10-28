import * as React from "react";

function DiscordIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#a)",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9.33 10.07a1.34 1.34 0 0 0 0 2.66 1.28 1.28 0 0 0 1.22-1.33 1.27 1.27 0 0 0-1.22-1.33Zm4.38 0a1.34 1.34 0 1 0 1.22 1.33 1.28 1.28 0 0 0-1.22-1.33Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.54 0H3.46A2.47 2.47 0 0 0 1 2.47V18.7a2.47 2.47 0 0 0 2.46 2.47h13.6l-.63-2.22 1.54 1.43 1.45 1.34L22 24V2.47A2.47 2.47 0 0 0 19.54 0Zm-4.63 15.67-.8-.97c.88-.2 1.65-.71 2.18-1.43-.43.29-.9.53-1.38.71a8.4 8.4 0 0 1-4.85.5c-.6-.11-1.19-.29-1.76-.51a6.85 6.85 0 0 1-1.37-.71c.52.7 1.26 1.2 2.1 1.42l-.8 1a4.35 4.35 0 0 1-3.66-1.83c.04-2.43.63-4.83 1.73-7A5.93 5.93 0 0 1 9.67 5.6l.12.15A8.1 8.1 0 0 0 6.63 7.3s.26-.15.7-.35a9.01 9.01 0 0 1 2.93-.78A9.78 9.78 0 0 1 16.3 7.3a7.99 7.99 0 0 0-2.99-1.53l.17-.19c1.23.06 2.4.5 3.37 1.26a16.07 16.07 0 0 1 1.73 7 4.39 4.39 0 0 1-3.67 1.82Z"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));
}

const ForwardRef = React.forwardRef(DiscordIcon);
export default ForwardRef;