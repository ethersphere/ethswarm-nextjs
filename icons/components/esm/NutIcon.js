import * as React from "react";

function NutIcon({
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
    d: "M0 10v20l17.32 10 17.32-10V10L17.32 0 0 10Zm17.32 28.15L1.61 29.07v-5.41l15.71 9.07 15.71-9.07v5.41l-15.71 9.07Zm15.71-16.34-15.71 9.07-15.71-9.07V10.93l15.71-9.08 15.71 9.07V21.8Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.89 15.94c0 1.29.41 2.5 1.13 3.55.02.04.04.07.07.1 1.47 2.08 4.16 3.48 7.23 3.48s5.75-1.4 7.22-3.48c.03-.04.06-.07.08-.11.71-1.05 1.13-2.26 1.13-3.55 0-3.93-3.78-7.13-8.43-7.13S8.89 12 8.89 15.93Zm8.43 5.53c-2.3 0-4.34-.93-5.58-2.36 1.27-1.47 3.35-2.37 5.58-2.37s4.31.9 5.58 2.37c-1.24 1.42-3.27 2.36-5.58 2.36Zm6.82-5.53c0 .62-.13 1.21-.36 1.76-1.59-1.6-3.95-2.57-6.46-2.57s-4.87.97-6.46 2.57c-.23-.55-.36-1.15-.36-1.76 0-3.05 3.06-5.53 6.82-5.53s6.82 2.48 6.82 5.53Z"
  }));
}

const ForwardRef = React.forwardRef(NutIcon);
export default ForwardRef;