const React = require("react");

function TwitterIcon({
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
    d: "M24 4.6a9 9 0 0 1-2.8.8c1-.6 1.8-1.6 2.2-2.7-1 .6-2 1-3.1 1.2-.9-1-2.2-1.6-3.6-1.6a4.9 4.9 0 0 0-4.9 4.9c0 .4 0 .8.1 1.1-4.2-.2-7.8-2.2-10.2-5.2-.5.8-.7 1.6-.7 2.5 0 1.7.9 3.2 2.2 4.1-.8 0-1.6-.2-2.2-.6v.1c0 2.4 1.7 4.4 3.9 4.8-.4.1-.8.2-1.3.2-.3 0-.6 0-.9-.1.6 2 2.4 3.4 4.6 3.4a10 10 0 0 1-6.1 2.1c-.4 0-.8 0-1.2-.1a14 14 0 0 0 7.5 2.2c9.1 0 14-7.5 14-14v-.6c1-.7 1.8-1.6 2.5-2.5Z",
    fill: "currentColor"
  }));
}

const ForwardRef = React.forwardRef(TwitterIcon);
module.exports = ForwardRef;