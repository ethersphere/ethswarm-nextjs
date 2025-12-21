const React = require("react");
import { forwardRef } from "react";
const DataIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  viewBox: "0 0 25 28",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M2 7.99324V19.9977L12.4003 26L22.7916 19.9977V7.99324L12.4003 2L2 7.99324Z",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeMiterlimit: 10,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 7.99414L12.4093 14.1586L22.7916 7.99414",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeMiterlimit: 10,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 13.9238L12.4093 20.0883L22.7916 13.9238",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeMiterlimit: 10,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
const ForwardRef = forwardRef(DataIcon);
module.exports = ForwardRef;