const React = require("react");

function PlusIcon({
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
    d: "M16.45 10.46v8.81H7.64c-.44 0-.8.36-.8.8s.36.8.8.8h8.81v8.81c0 .44.36.8.8.8s.8-.36.8-.8v-8.81h8.81c.44 0 .8-.36.8-.8s-.36-.8-.8-.8h-8.81v-8.81c0-.44-.36-.8-.8-.8s-.8.36-.8.8Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 10v20l17.32 10 17.32-10V10L17.32 0 0 10Zm33.03 19.07-15.71 9.07-15.71-9.07V10.93l15.71-9.08 15.71 9.07v18.15Z"
  }));
}

const ForwardRef = React.forwardRef(PlusIcon);
module.exports = ForwardRef;