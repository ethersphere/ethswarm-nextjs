const React = require("react");
function FaultIcon({
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
    d: "M2 8.00225V19.9977L12.3913 26L22.7826 19.9977V8.00225L12.3913 2L2 8.00225Z",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeMiterlimit: 10,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.4102 15.4732V8.00195",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeMiterlimit: 10,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.3907 19.8088C12.7192 19.8088 12.9855 19.5425 12.9855 19.214C12.9855 18.8854 12.7192 18.6191 12.3907 18.6191C12.0622 18.6191 11.7959 18.8854 11.7959 19.214C11.7959 19.5425 12.0622 19.8088 12.3907 19.8088Z",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeMiterlimit: 10,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
const ForwardRef = React.forwardRef(FaultIcon);
module.exports = ForwardRef;