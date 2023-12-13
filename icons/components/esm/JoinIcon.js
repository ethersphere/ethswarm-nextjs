import * as React from "react";
function JoinIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    viewBox: "0 0 25 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M12.3555 7.99414V20.0888",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeMiterlimit: 10,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.30859 14.041H18.4032",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeMiterlimit: 10,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 7.99324V19.9977L12.4003 26L22.7916 19.9977V7.99324L12.4003 2L2 7.99324Z",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeMiterlimit: 10,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
const ForwardRef = React.forwardRef(JoinIcon);
export default ForwardRef;