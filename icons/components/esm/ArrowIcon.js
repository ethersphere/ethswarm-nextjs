import * as React from "react";

function ArrowIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M5.69764 14L4 12.3024L8.80236 7.5L4 2.69764L5.69764 1L11.3488 6.65118C11.8182 7.12061 11.8182 7.87939 11.3488 8.34882L5.69764 14Z",
    fill: "currentColor"
  }));
}

const ForwardRef = React.forwardRef(ArrowIcon);
export default ForwardRef;