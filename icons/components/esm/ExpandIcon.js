import * as React from "react";

function ExpandIcon({
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
    d: "M34.64 30V10L17.32 0 0 10v20l17.32 10 17.32-10ZM1.61 10.93l15.71-9.08 15.72 9.07v18.15l-15.72 9.07-15.71-9.07V10.93Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M26.9 25.99a.8.8 0 0 0 .29-1.1.8.8 0 0 0-1.1-.29l-7.95 4.59V10.81l7.95 4.59a.8.8 0 0 0 1.1-.29c.22-.38.09-.87-.29-1.1l-9.58-5.53-9.58 5.53a.8.8 0 0 0-.29 1.1.8.8 0 0 0 1.1.29l7.99-4.62v18.44L8.55 24.6a.811.811 0 0 0-1.1.29c-.22.38-.09.87.29 1.1l9.58 5.53 9.58-5.53Z"
  }));
}

const ForwardRef = React.forwardRef(ExpandIcon);
export default ForwardRef;