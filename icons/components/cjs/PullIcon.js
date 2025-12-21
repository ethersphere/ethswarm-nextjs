const React = require("react");
import { forwardRef } from "react";
const PullIcon = ({
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
  d: "M2 8V20L12.3878 26L22.7823 20V8L12.3878 2L2 8Z",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeMiterlimit: 10,
  strokeLinecap: "round"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12.3887 2V14L22.7832 20",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeMiterlimit: 10,
  strokeLinecap: "round"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6.98633 17.2658L16.8639 11.5107",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeMiterlimit: 10,
  strokeLinecap: "round"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6.98633 9.19727V17.2653L13.9727 21.2993",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeMiterlimit: 10,
  strokeLinecap: "round"
}));
const ForwardRef = forwardRef(PullIcon);
module.exports = ForwardRef;