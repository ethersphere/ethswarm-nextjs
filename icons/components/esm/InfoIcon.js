import * as React from "react";
function InfoIcon({
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
    d: "M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z",
    stroke: "#F6F7F9",
    strokeWidth: 1.4,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 5.6C8.44182 5.6 8.8 5.24183 8.8 4.8C8.8 4.35817 8.44182 4 8 4C7.55817 4 7.2 4.35817 7.2 4.8C7.2 5.24183 7.55817 5.6 8 5.6Z",
    fill: "#F6F7F9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 11.5992V7.19922",
    stroke: "#F6F7F9",
    strokeWidth: 1.4,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
const ForwardRef = React.forwardRef(InfoIcon);
export default ForwardRef;