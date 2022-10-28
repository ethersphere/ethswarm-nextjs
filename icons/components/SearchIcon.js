const React = require("react");

function SearchIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "m14 14-3.8-3.8M6.8 11.6a4.8 4.8 0 1 0 0-9.6 4.8 4.8 0 0 0 0 9.6Z",
    stroke: "currentColor"
  }));
}

const ForwardRef = React.forwardRef(SearchIcon);
module.exports = ForwardRef;