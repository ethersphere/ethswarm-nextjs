import React, { useRef, useEffect } from "react";
import { cx } from "utils";
import { GL } from "./hexagonRenderer";
type CanvasProps = {};

const Canvas: React.FC<CanvasProps> = ({}) => {
  let wrapperRef = useRef(null);
  let canvasRef = useRef(null);
  let threeRef = useRef<GL | null>(null);

  useEffect(() => {
    if (!threeRef.current) {
      threeRef.current = new GL(wrapperRef.current, canvasRef.current);
    }
	return ()=>{
		if(threeRef.current){
			threeRef.current.remove();
			threeRef.current = null;	
		}
	}
  }, []);

  return (
    <div className={cx("flex absolute inset-0 -z-10")} ref={wrapperRef}>
      <canvas className={cx("w-full h-full")} ref={canvasRef}></canvas>
    </div>
  );
};

export default Canvas;
