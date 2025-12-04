import React from "react";
import { forwardRef } from "react";
const TwitterIcon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React.createElement("svg", Object.assign({
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React.createElement("path", {
  d: "M2.18182 0C0.976364 0 0 0.976364 0 2.18182V21.8182C0 23.0236 0.976364 24 2.18182 24H21.8182C23.0236 24 24 23.0236 24 21.8182V2.18182C24 0.976364 23.0236 0 21.8182 0H2.18182ZM5.07102 5.45455H10.1016L13.0376 9.65199L16.6705 5.45455H18.2536L13.7493 10.6705L19.2592 18.5455H14.2287L10.9709 13.8878L6.94815 18.5455H5.33949L10.255 12.8672L5.07102 5.45455ZM7.50426 6.74574L14.8722 17.2479H16.8239L9.45384 6.74574H7.50426Z",
  fill: "currentColor"
}));
const ForwardRef = forwardRef(TwitterIcon);
export default ForwardRef;