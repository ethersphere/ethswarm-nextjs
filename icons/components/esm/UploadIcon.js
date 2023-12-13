import * as React from "react";
function UploadIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    viewBox: "0 0 25 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: svgRef,
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
    d: "M12.4004 14.6543V7.99414",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeMiterlimit: 10,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.075 8.66992L6.61426 10.6617",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeMiterlimit: 10,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.7076 8.66902L12.3914 7.32617L10.0752 8.66902",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeMiterlimit: 10,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.1588 10.6617L14.707 8.66992",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeMiterlimit: 10,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.90234 16.915C7.97482 18.8527 10.0387 20.1595 12.4089 20.1595C14.7792 20.1595 16.843 18.8527 17.9155 16.915",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeMiterlimit: 10,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
const ForwardRef = React.forwardRef(UploadIcon);
export default ForwardRef;