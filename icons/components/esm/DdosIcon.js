import * as React from "react";

function DdosIcon({
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
    d: "M8.19 34.73 17.33 40l17.32-10V10L17.32 0 0 10v20l8.18 4.72Zm9.13-32.92 15.75 9.1V29.1l-15.75 9.1-7.18-4.15 7.58-4.37c.37-.22.5-.7.29-1.07a.794.794 0 0 0-1.07-.29l-8.36 4.83-6.69-3.86 15.9-9.18c.37-.22.5-.7.29-1.07s-.69-.5-1.07-.29l-15.44 8.9v-7.07l16.14-9.32c.37-.22.5-.7.29-1.07a.794.794 0 0 0-1.07-.29L1.57 18.77V10.9l15.75-9.09Z"
  }));
}

const ForwardRef = React.forwardRef(DdosIcon);
export default ForwardRef;