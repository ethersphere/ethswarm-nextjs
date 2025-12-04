const React = require("react");
import { forwardRef } from "react";
const CowSwapIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 400 400",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("rect", {
  width: 400,
  height: 400,
  fill: "#012f7a",
  rx: 200
}), /*#__PURE__*/React.createElement("path", {
  fill: "#65d9ff",
  fillRule: "evenodd",
  d: "M166.774 304a30.67 30.67 0 0 1-29.237-21.395l-20.779-65.494h-12.774a30.671 30.671 0 0 1-29.237-21.395L62.4 156.8h46.31L84.284 120h231.432l-24.425 36.8H337.6l-12.346 38.916c-4.041 12.74-15.87 21.395-29.237 21.395h-12.775l-20.778 65.494A30.67 30.67 0 0 1 233.227 304zm-15.698-104.778c0 9.88 7.378 17.889 16.478 17.889 9.101 0 16.479-8.009 16.479-17.889s-7.378-17.889-16.479-17.889c-9.1 0-16.478 8.009-16.478 17.889zm97.849 0c0 9.88-7.378 17.889-16.478 17.889-9.101 0-16.479-8.009-16.479-17.889s7.378-17.889 16.479-17.889c9.1 0 16.478 8.009 16.478 17.889z",
  clipRule: "evenodd"
}));
const ForwardRef = forwardRef(CowSwapIcon);
module.exports = ForwardRef;