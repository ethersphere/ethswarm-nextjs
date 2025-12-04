import React from "react";
import { forwardRef } from "react";
const ExploreIcon = ({
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
  d: "M2 7.99324V19.9977L12.3913 26L22.7826 19.9977V7.99324L12.3913 2L2 7.99324Z",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeMiterlimit: 10,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15.6721 14.041H9.12012",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeMiterlimit: 10,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.12012 13.9232L12.3916 20.6645L15.6721 13.9232L12.3916 7.32617L9.12012 13.9232Z",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeMiterlimit: 10,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
const ForwardRef = forwardRef(ExploreIcon);
export default ForwardRef;