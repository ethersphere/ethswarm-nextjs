import React from "react";
import { forwardRef } from "react";
const RewardIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 42 48",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("g", {
  fill: "#000",
  clipPath: "url(#reward)"
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 12v24l20.76 12 20.76-12V12L20.76 0 0 12Zm20.76 33.84L1.92 34.92v-6.48l18.84 10.92L39.6 28.44v6.48L20.76 45.84ZM39.6 26.16 20.76 37.08 1.92 26.16V13.08L20.76 2.16 39.6 13.08v13.08Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M27.12 29.52c-.12 0-.36 0-.48-.12l-5.88-3.12-5.88 3.12c-.36.12-.72.12-1.08-.12-.36-.24-.48-.6-.36-.96l1.08-6.6-4.8-4.68a.933.933 0 0 1-.24-.96c.12-.36.48-.6.84-.72l6.6-.96 3-6c.36-.72 1.44-.72 1.8 0l3 6 6.6.96c.36 0 .72.36.84.72s0 .72-.24.96l-4.8 4.68 1.08 6.6c.12.36-.12.72-.36.96-.24.12-.48.24-.72.24ZM12.6 17.04l3.72 3.6c.24.24.36.6.24.84l-.84 5.16 4.56-2.4c.24-.12.6-.12.96 0l4.56 2.4-.84-5.04c0-.36 0-.6.24-.84l3.72-3.6-5.16-.72c-.36 0-.6-.24-.72-.6l-2.28-4.68-2.28 4.68c-.12.24-.48.48-.72.6l-5.16.6Z"
})), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
  id: "reward"
}, /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M0 0h41.52v48H0z"
}))));
const ForwardRef = forwardRef(RewardIcon);
export default ForwardRef;