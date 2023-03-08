import * as React from "react";
function WriteIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 42 48",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("g", {
    fill: "#000",
    clipPath: "url(#write)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 12v24l20.76 12 20.76-12V12L20.76 0 0 12Zm20.76 33.84L1.92 34.92v-6.48l18.84 10.92L39.6 28.44v6.48L20.76 45.84ZM39.6 26.16 20.76 37.08 1.92 26.16V13.08L20.76 2.16 39.6 13.08v13.08Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m20.76 24.96-7.44-4.44-6.84 3.84c-.48.24-1.08.12-1.32-.36s-.12-1.08.36-1.32l7.8-4.44 7.44 4.44 14.04-8.16c.48-.24 1.08-.12 1.32.36s.12 1.08-.36 1.32l-15 8.76Z"
  })), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "write"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    d: "M0 0h41.52v48H0z"
  }))));
}
const ForwardRef = React.forwardRef(WriteIcon);
export default ForwardRef;