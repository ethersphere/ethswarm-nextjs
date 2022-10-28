const React = require("react");

function LockIcon({
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
    d: "M13.82 17.23c0 1.67 1.17 3.06 2.74 3.41-.02.06-.04.12-.04.19v7.86c0 .44.36.8.8.8s.8-.36.8-.8v-7.86c0-.07-.02-.12-.04-.19 1.56-.35 2.74-1.75 2.74-3.41 0-1.93-1.57-3.5-3.5-3.5s-3.5 1.57-3.5 3.5Zm5.4 0a1.9 1.9 0 1 1-3.8 0 1.9 1.9 0 1 1 3.8 0Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 10v20l17.32 10 17.32-10V10L17.32 0 0 10Zm33.03 19.07-15.72 9.07-15.7-9.07V10.93l15.71-9.08 15.72 9.07v18.15Z"
  }));
}

const ForwardRef = React.forwardRef(LockIcon);
module.exports = ForwardRef;