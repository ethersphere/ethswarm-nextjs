import * as React from "react";
function BuildersIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    viewBox: "0 0 26 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M2.57227 8V20L12.9668 26L23.3546 20V8L12.9668 2L2.57227 8Z",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeMiterlimit: 10,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.57227 15.4287L12.9668 21.4355L23.3546 15.4287",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeMiterlimit: 10,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.9678 15.4347C15.6165 15.4347 17.7637 13.6499 17.7637 11.4483C17.7637 9.24668 15.6165 7.46191 12.9678 7.46191C10.3191 7.46191 8.17188 9.24668 8.17188 11.4483C8.17188 13.6499 10.3191 15.4347 12.9678 15.4347Z",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeMiterlimit: 10,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.77539 13.49C9.59852 12.2723 11.1631 11.4492 12.9659 11.4492C14.7686 11.4492 16.2924 12.2519 17.1223 13.4424",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeMiterlimit: 10,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
const ForwardRef = React.forwardRef(BuildersIcon);
export default ForwardRef;