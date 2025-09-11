const React = require("react");
import { forwardRef } from "react";
const PrivacyIcon = ({
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
  d: "M12.3899 13.9594C13.3306 13.9594 14.0932 13.1968 14.0932 12.2561C14.0932 11.3153 13.3306 10.5527 12.3899 10.5527C11.4491 10.5527 10.6865 11.3153 10.6865 12.2561C10.6865 13.1968 11.4491 13.9594 12.3899 13.9594Z",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeMiterlimit: 10,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12.3916 14.5186V19.4664",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeMiterlimit: 10,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 8.00225V19.9977L12.3913 26L22.7826 19.9977V8.00225L12.3913 2L2 8.00225Z",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeMiterlimit: 10,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
const ForwardRef = forwardRef(PrivacyIcon);
module.exports = ForwardRef;