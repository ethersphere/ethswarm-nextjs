const React = require("react");
function PermissionlessIcon({
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
    d: "M12.394 13.9521C13.3333 13.9521 14.0947 13.1907 14.0947 12.2515C14.0947 11.3122 13.3333 10.5508 12.394 10.5508C11.4548 10.5508 10.6934 11.3122 10.6934 12.2515C10.6934 13.1907 11.4548 13.9521 12.394 13.9521Z",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeMiterlimit: 10,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.3945 14.5166V19.4622",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeMiterlimit: 10,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 8V20L12.3946 26L22.7823 20V8L12.3946 2L2 8Z",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeMiterlimit: 10,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
const ForwardRef = React.forwardRef(PermissionlessIcon);
module.exports = ForwardRef;