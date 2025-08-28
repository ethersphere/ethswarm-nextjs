import * as React from "react";
import { forwardRef } from "react";
const PriceIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  width: 23,
  height: 26,
  viewBox: "0 0 23 26",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M1.35938 7.20806V18.7921L11.3796 24.5842L21.3998 18.7921V7.20806L11.3796 1.41602L1.35938 7.20806ZM11.3796 23.5416L2.2861 18.2709V15.1432L11.3796 20.4139L20.4731 15.1432V18.2709L11.3796 23.5416ZM20.4731 14.0427L11.3796 19.3134L2.2861 14.0427V7.72934L11.3796 2.45858L20.4731 7.72934V14.0427Z",
  fill: "#F6F7F9",
  stroke: "currentColor",
  strokeWidth: 0.6,
  strokeLinejoin: "round"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.55 13L8.45 11.3182L5.6 12.7727C5.4 12.8636 5.15 12.8182 5.05 12.6364C4.95 12.4545 5 12.2273 5.2 12.1364L8.45 10.4545L11.55 12.1364L17.4 9.04545C17.6 8.95455 17.85 9 17.95 9.18182C18.05 9.36364 18 9.59091 17.8 9.68182L11.55 13Z",
  fill: "#F6F7F9",
  stroke: "currentColor",
  strokeWidth: 0.8
}));
const ForwardRef = forwardRef(PriceIcon);
export default ForwardRef;