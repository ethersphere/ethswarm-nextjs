const React = require("react");

function ConnectIcon({
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
    d: "M0 10v20l17.32 10 17.32-10V10L17.32 0 0 10Zm33.03 19.07-15.72 9.07-15.7-9.07V10.93l15.71-9.08 15.72 9.07v18.15Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.25 13.61V26.4l11.07 6.39 11.07-6.39V13.61L17.32 7.22 6.25 13.61Zm20.54 11.86-9.47 5.47-9.47-5.47V14.53l9.47-5.47 9.47 5.47v10.93Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.09 17.4c-.44 0-.8.36-.8.8v3.59c0 .44.36.8.8.8s.8-.36.8-.8V18.2c0-.44-.36-.8-.8-.8ZM20.55 22.6c.44 0 .8-.36.8-.8v-3.59c0-.44-.36-.8-.8-.8s-.8.36-.8.8v3.59c0 .44.36.8.8.8Z"
  }));
}

const ForwardRef = React.forwardRef(ConnectIcon);
module.exports = ForwardRef;