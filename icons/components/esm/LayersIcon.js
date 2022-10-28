import * as React from "react";

function LayersIcon({
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
    d: "M34.64 30V10L17.32 0 0 10v20l17.32 10 17.32-10ZM1.61 11.87l15.74 9.32 15.69-9.32v7.56l-15.69 9.32-15.74-9.32v-7.56Zm30.64-1.4-14.91 8.85-14.95-8.85 14.93-8.62 14.93 8.62ZM1.61 21.3l15.74 9.32 15.69-9.32v7.77l-15.71 9.07-15.72-9.07V21.3Z"
  }));
}

const ForwardRef = React.forwardRef(LayersIcon);
export default ForwardRef;