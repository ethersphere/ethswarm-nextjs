import React from "react";
import { forwardRef } from "react";
const BzzarIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("g", {
  fill: "#DB7200",
  clipPath: "url(#a)"
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 14.313v6.457L5.596 24l5.597-3.23v-6.457l-5.597-3.228L0 14.313ZM18.403 11.084l-5.596 3.229v6.457l5.596 3.229L24 20.769v-6.457l-5.597-3.228ZM17.591 6.463l-2.796-1.62-.003-3.228L12 0 6.406 3.229v6.457L12 12.915l5.592-3.229V6.463ZM17.592 6.463l2.796-1.62V1.613L17.596 0l-2.803 1.615 2.803 1.61-.004 3.238Z"
})), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
  id: "a"
}, /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M0 0h24v24H0z"
}))));
const ForwardRef = forwardRef(BzzarIcon);
export default ForwardRef;