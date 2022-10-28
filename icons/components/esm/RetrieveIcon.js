import * as React from "react";

function RetrieveIcon({
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
    d: "M0 10v20l.41.23L17.32 40l16.91-9.76.41-.24V10L17.32 0 0 10Zm2.41 19.54 10.35-5.97 4.08 2.35s.07.05.1.06l.32.18 4.56-2.64 10.41 6.01-14.91 8.61-14.91-8.6Zm30.63-1.39-9.61-5.55 5.17-2.98a.8.8 0 0 0 .29-1.1.8.8 0 0 0-1.1-.29l-9.76 5.63V7.92c0-.44-.36-.8-.8-.8s-.8.36-.8.8v15.91l-9.7-5.6a.809.809 0 0 0-1.1.29c-.22.38-.09.87.29 1.1l5.23 3.02-9.54 5.51V10.93l15.71-9.08 15.72 9.07v17.23Z"
  }));
}

const ForwardRef = React.forwardRef(RetrieveIcon);
export default ForwardRef;