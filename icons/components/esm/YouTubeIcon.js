import * as React from "react";

function YouTubeIcon({
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
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M23.8 7.2s-.2-1.7-1-2.4c-.9-1-1.9-1-2.4-1-3.4-.2-8.4-.2-8.4-.2s-5 0-8.4.2c-.5.1-1.5.1-2.4 1-.7.7-1 2.4-1 2.4S0 9.1 0 11.1v1.8c0 1.9.2 3.9.2 3.9s.2 1.7 1 2.4c.9 1 2.1.9 2.6 1 1.9.2 8.2.2 8.2.2s5 0 8.4-.3c.5-.1 1.5-.1 2.4-1 .7-.7 1-2.4 1-2.4s.2-1.9.2-3.9V11c0-1.9-.2-3.8-.2-3.8ZM9.5 15.1V8.4l6.5 3.4-6.5 3.3Z",
    fill: "currentColor"
  }));
}

const ForwardRef = React.forwardRef(YouTubeIcon);
export default ForwardRef;