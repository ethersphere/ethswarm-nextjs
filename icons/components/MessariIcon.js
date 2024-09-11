const React = require("react");
function MessariIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 32 32",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M0 0v32l8.758-8.76V8.76L0 0ZM16 15.982l-4.379-4.361v20.377l8.758-8.723V11.62l-4.38 4.361ZM23.242 8.745V32L32 23.254V0l-8.758 8.745Z"
  }));
}
const ForwardRef = React.forwardRef(MessariIcon);
module.exports = ForwardRef;