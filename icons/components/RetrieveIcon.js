const React = require("react");
function RetrieveIcon({
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
    d: "M22.7823 20V8L12.3878 2L2 8V20L12.3878 26L22.7823 20Z",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeMiterlimit: 10,
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.332 6.40137V16.4966",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeMiterlimit: 10,
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.46875 13.3193L12.3531 17.2921L19.2307 13.3193",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeMiterlimit: 10,
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22.7824 20.0002L15.2246 15.6328",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeMiterlimit: 10,
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 20.0003L9.51701 15.6533",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeMiterlimit: 10,
    strokeLinecap: "round"
  }));
}
const ForwardRef = React.forwardRef(RetrieveIcon);
module.exports = ForwardRef;