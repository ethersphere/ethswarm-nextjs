const React = require("react");

function PullIcon({
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
    d: "M0 10v20l17.32 10 17.32-10V10L17.32 0 0 10Zm1.61 19.07V10.93l14.91-8.61v17.23l-7.91 4.56V12.97c0-.44-.36-.8-.8-.8s-.8.36-.8.8v12.98l.39.22s.03.02.05.03l10.8 6.24a.8.8 0 0 0 1.1-.29c.22-.38.09-.87-.29-1.1l-9.62-5.56 7.92-4.56 14.9 8.6-14.91 8.61-15.74-9.07Zm31.43-.93L18.95 20 28 14.79c.38-.22.52-.71.3-1.1a.812.812 0 0 0-1.1-.3l-9.07 5.22V2.32l14.91 8.61v17.21Z"
  }));
}

const ForwardRef = React.forwardRef(PullIcon);
module.exports = ForwardRef;