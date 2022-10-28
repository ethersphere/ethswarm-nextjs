import * as React from "react";

function HeartIcon({
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
    d: "M17.32 0 0 10v20l17.32 10 17.32-10V10L17.32 0Zm15.72 29.07-15.72 9.07-15.71-9.07V10.93l15.71-9.08 15.72 9.07v18.15Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.26 14.72v10.59l11.07 6.39 11.07-6.39V14.72l-5.94-3.49-5.13 3.02-5.14-3.02-5.94 3.49Zm16.21-1.63 4.33 2.55v8.75l-9.47 5.47-9.47-5.47v-8.75l4.33-2.55 5.14 3.02 5.13-3.02Z"
  }));
}

const ForwardRef = React.forwardRef(HeartIcon);
export default ForwardRef;