import * as React from "react";
import { forwardRef } from "react";
const PublicIcon = ({
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
  d: "M2.57227 8V20L12.9668 26L23.3614 20V8L12.9668 2L2.57227 8Z",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeMiterlimit: 10,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16.0679 9.91211L12.9659 11.7352L9.87062 9.91211L6.77539 11.7352V15.9597L9.87062 17.7488L12.9659 19.538L16.0679 17.7488L19.1631 15.9597V11.7352L16.0679 9.91211Z",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeMiterlimit: 10,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
const ForwardRef = forwardRef(PublicIcon);
export default ForwardRef;