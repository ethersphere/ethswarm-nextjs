import * as React from "react";

function CompassIcon({
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
    d: "m17.32 7.6-6.1 12.29.09.19c0 .24.12.45.29.6l5.72 11.75 5.72-11.75c.17-.15.29-.36.29-.6l.09-.19-6.1-12.29Zm4 11.67h-8l4-8.06 4 8.06Zm-7.84 1.61h7.67l-3.83 7.88-3.83-7.88Z"
  }));
}

const ForwardRef = React.forwardRef(CompassIcon);
export default ForwardRef;