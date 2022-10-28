const React = require("react");

function RedditIcon({
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
    d: "M24 11.8c0-1.6-1.3-2.9-2.9-2.9-.7 0-1.3.2-1.8.6-1.8-1.1-4-1.8-6.4-1.9l1.2-3.9 3.4.8a2.4 2.4 0 1 0 2.4-2.6c-.9 0-1.7.5-2.1 1.3l-4-.9c-.3-.1-.7.1-.8.4l-1.5 4.9c-2.5.1-5 .7-6.8 1.9-.5-.4-1.1-.6-1.8-.6A2.9 2.9 0 0 0 0 11.8c0 1 .5 1.9 1.2 2.4v.7c0 2 1.2 3.8 3.3 5.2 2 1.3 4.7 2 7.5 2s5.5-.7 7.5-2c2.1-1.4 3.3-3.2 3.3-5.2v-.6c.7-.6 1.2-1.5 1.2-2.5Zm-4-8.6c.6 0 1.1.5 1.1 1.1 0 .6-.5 1.1-1.1 1.1-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1ZM6.8 13.6c0-.9.8-1.6 1.6-1.6.9 0 1.6.8 1.6 1.6s-.7 1.6-1.6 1.6c-.8 0-1.6-.7-1.6-1.6Zm9.2 4.7c-.8.8-2.1 1.2-3.9 1.2-1.8 0-3.1-.4-3.9-1.2-.3-.3-.3-.7 0-.9.3-.3.7-.3.9 0 .6.6 1.6.9 3 .9s2.4-.3 3-.9c.3-.3.7-.3.9 0 .2.3.2.7 0 .9Zm-.4-3.1c-.9 0-1.7-.7-1.7-1.6 0-.9.8-1.6 1.7-1.6.9 0 1.6.8 1.6 1.6s-.7 1.6-1.6 1.6Z",
    fill: "currentColor"
  }));
}

const ForwardRef = React.forwardRef(RedditIcon);
module.exports = ForwardRef;