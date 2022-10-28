import * as React from "react";

function PushIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 34.75 40",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M.4 9.8s-.05.05-.08.07c-.04.03-.08.07-.12.11-.03.04-.06.08-.09.13-.03.04-.05.09-.07.13-.02.05-.03.11-.03.16 0 .03-.02.06-.02.1v19.59l16.97 9.8h.01a.782.782 0 0 0 .78.01h.01l16.57-9.57s.05-.05.08-.07c.04-.03.09-.07.12-.11a.55.55 0 0 0 .07-.09c0-.01.02-.02.03-.03 0-.01 0-.03.02-.05a.3.3 0 0 0 .04-.1l.03-.11c0-.04.01-.07.01-.1V10.03L17.37 0 .4 9.8Zm1.21 1.16 14.96-8.63v8.48l-3.24-1.87a.803.803 0 0 0-1.1.3c-.22.38-.09.88.29 1.1l9.94 5.74-15.3 8.91c-.38.22-.52.72-.29 1.1a.8.8 0 0 0 1.1.29l15.29-8.91v11.46c0 .44.36.81.81.81s.81-.36.81-.81v-3.61l7.46 4.31-14.96 8.64-15.77-9.11v-18.2Zm31.53 17.27-8.27-4.77v-7.85l-6.69-3.86V2.33l14.96 8.64v17.26Z"
  }));
}

const ForwardRef = React.forwardRef(PushIcon);
export default ForwardRef;