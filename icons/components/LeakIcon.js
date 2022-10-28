const React = require("react");

function LeakIcon({
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
    d: "M0 10v20l17.32 10 17.32-10V10L17.32 0 0 10Zm33.03 19.07-15.71 9.07-15.71-9.07V10.93l15.71-9.08 15.71 9.07v18.15Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.63 7.53c-.22.38-.09.87.29 1.1l10.05 5.8v11.14l-10.05 5.8a.8.8 0 0 0-.29 1.1c.15.26.42.4.7.4.14 0 .27-.03.4-.11l10.85-6.27V13.5L17.73 7.23a.811.811 0 0 0-1.1.29Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.92 24.4a.8.8 0 0 0-.29 1.1c.15.26.42.4.7.4.14 0 .27-.03.4-.11l4.81-2.78v-6.02l-4.81-2.78a.811.811 0 0 0-1.1.29c-.22.38-.09.87.29 1.1l4.01 2.31v4.16l-4.01 2.31Z"
  }));
}

const ForwardRef = React.forwardRef(LeakIcon);
module.exports = ForwardRef;