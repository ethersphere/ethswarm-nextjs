import * as React from "react";

function UnlimitedIcon({
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
    d: "m29 31.4-11.68 6.74-12.28-7.09a.809.809 0 0 0-1.1.29c-.22.38-.09.87.29 1.1L17.32 40l12.48-7.2a.8.8 0 0 0 .29-1.1.8.8 0 0 0-1.1-.29ZM.8 30.34c.14 0 .27-.05.39-.11h.01l31.83-18.38v16.3L22.55 22.1a.811.811 0 0 0-1.1.29c-.22.38-.09.87.29 1.1l11.69 6.75h.01c.12.06.25.11.39.11.44 0 .8-.36.8-.8V10.46c0-.44-.36-.8-.8-.8-.14 0-.27.05-.39.11h-.01L1.61 28.15v-16.3l10.71 6.18c.38.22.88.09 1.1-.29.22-.38.09-.87-.29-1.1L1.2 9.77h-.01a.878.878 0 0 0-.39-.11c-.44 0-.8.36-.8.8v19.08c0 .44.36.8.8.8ZM4.48 8.34c.15.26.42.4.7.4.14 0 .27-.03.4-.11l11.74-6.78L29 8.59c.38.22.88.09 1.1-.29.22-.38.09-.87-.29-1.1L17.32 0 4.78 7.24a.8.8 0 0 0-.29 1.1Z"
  }));
}

const ForwardRef = React.forwardRef(UnlimitedIcon);
export default ForwardRef;