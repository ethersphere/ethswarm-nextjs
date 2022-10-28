import * as React from "react";

function BoxArrowIcon({
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
    d: "M32.48 20c0-.1-.02-.19-.06-.28 0-.02-.02-.04-.03-.06a.855.855 0 0 0-.15-.22c-.05-.05-.1-.09-.16-.13l-12.82-7.39c-.39-.22-.88-.09-1.1.29s-.09.88.3 1.1l10.22 5.9H8.2c-.44 0-.8.36-.8.8s.36.8.8.8h20.48l-10.22 5.9c-.38.22-.52.71-.3 1.1.15.26.42.4.7.4.14 0 .27-.03.4-.11l12.82-7.39c.14-.08.25-.21.32-.36 0-.02.02-.04.03-.06.03-.09.06-.18.06-.28Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M34.53 10.87c.22-.38.09-.87-.29-1.1L17.32 0 0 10v20l17.32 10 16.92-9.77a.8.8 0 0 0 .29-1.1.8.8 0 0 0-1.1-.29l-16.12 9.3-15.7-9.07V10.93l15.71-9.08 16.12 9.3c.38.22.88.09 1.1-.29Z"
  }));
}

const ForwardRef = React.forwardRef(BoxArrowIcon);
export default ForwardRef;