import * as React from "react";

function UploadIcon({
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
    d: "m13.24 10.84-5.49 3.17a.8.8 0 0 0-.29 1.1c.15.26.42.4.7.4.14 0 .27-.03.4-.11l5.49-3.17 2.5-1.44v10.26c0 .44.36.8.8.8s.8-.36.8-.8V10.81l2.46 1.42 5.49 3.17a.8.8 0 0 0 1.1-.29c.22-.38.09-.87-.29-1.1l-5.49-3.17-4.08-2.36-4.08 2.36ZM26.48 23.93a.792.792 0 0 0-1.09.31c-1.62 2.92-4.71 4.74-8.05 4.74s-6.42-1.82-8.05-4.74a.795.795 0 0 0-1.09-.31c-.39.22-.53.7-.31 1.09 1.91 3.43 5.53 5.57 9.45 5.57s7.54-2.13 9.45-5.57c.22-.39.08-.88-.31-1.09Z"
  }));
}

const ForwardRef = React.forwardRef(UploadIcon);
export default ForwardRef;