const React = require("react");

function RouteIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 34.64 40",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M0 10v20l17.32 10 17.32-10V10L17.32 0 0 10Zm33.03 19.07-15.71 9.07-15.71-9.07V10.93l14.91-8.61v17.13L7 24.94a.8.8 0 0 0-.29 1.1.8.8 0 0 0 1.1.29l9.51-5.49 9.51 5.49a.8.8 0 0 0 1.1-.29c.22-.38.09-.87-.29-1.1l-9.52-5.49V2.32l14.91 8.61v18.14Z"
  }));
}

const ForwardRef = React.forwardRef(RouteIcon);
module.exports = ForwardRef;