const React = require("react");

function CredibleIcon({
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
    d: "M26.86 23.32H7.64c-.44 0-.8.36-.8.8s.36.8.8.8h19.22c.44 0 .8-.36.8-.8s-.36-.8-.8-.8ZM6.84 16.34c0 .44.36.8.8.8h19.22c.44 0 .8-.36.8-.8s-.36-.8-.8-.8H7.64c-.44 0-.8.36-.8.8Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 10v20l17.32 10 17.32-10V10L17.32 0 0 10Zm33.03 19.07-15.71 9.07-15.71-9.07V10.93l15.71-9.08 15.71 9.07v18.15Z"
  }));
}

const ForwardRef = React.forwardRef(CredibleIcon);
module.exports = ForwardRef;