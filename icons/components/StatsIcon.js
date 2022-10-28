const React = require("react");

function StatsIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "m1 10 4.8-4.8 3.6 3.6L14.2 4",
    stroke: "currentColor"
  }));
}

const ForwardRef = React.forwardRef(StatsIcon);
module.exports = ForwardRef;