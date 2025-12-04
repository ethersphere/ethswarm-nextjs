import React from "react";
import { forwardRef } from "react";
const LeakIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  viewBox: "0 0 26 28",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M2.7832 8V20L13.1778 26L23.5723 20V8L13.1778 2L2.7832 8Z",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeMiterlimit: 10,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13.1777 21.5918L19.756 17.7959V10.2041L13.1777 6.40137",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeMiterlimit: 10,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13.1777 17.205L15.9532 15.5996V12.3955L13.1777 10.7969",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeMiterlimit: 10,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
const ForwardRef = forwardRef(LeakIcon);
export default ForwardRef;