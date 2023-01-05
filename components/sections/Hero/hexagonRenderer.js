import { GLStructure } from "./GLStructure";
import * as THREE from "three";
import { snoise } from "./glsl.js";
import lerpy from "lerpy";

export class GL extends GLStructure {
  constructor(container, canvas) {
    super(container, canvas);
    this.uAspect = new THREE.Uniform(new THREE.Vector2());
    this.uHexagonPulse = new THREE.Uniform(new THREE.Vector2(0.5, 0.5));
    this.mouse = new THREE.Vector2(0.5, 0.5);
    this.uLine = new THREE.Uniform(new THREE.Vector4());
    this.timeSincePulse = 0;
    this.repeated = false;
    this.init();
  }
  onResize() {
    super.onResize();

    let viewport = this.vp;
    const aspect = this.uAspect;
    if (viewport.width > viewport.height) {
      aspect.value.set(1, viewport.height / viewport.width);
    } else {
      aspect.value.set(viewport.width / viewport.height, 1);
    }
    // this.post.composer.setSize(this.vp.width, this.vp.height);
  }
  render() {
    // this.renderer.render(this.scene, this.camera);
    this.renderer.render(this.scene, this.camera);
    // this.post.composer.render(0.1);
  }
  onMouseMove = (ev) => {
    let pointer = this.mouse;
    pointer.x = ev.clientX / this.vp.width;
    pointer.y = -((ev.clientY + window.scrollY) / this.vp.height) + 1;
  };
  update(delta) {
    super.update(delta);

    this.timeSincePulse += delta;
    let repeatAt = Math.PI * 1.0;

    if (!this.repeated && this.timeSincePulse > repeatAt) {
      this.uHexagonPulse.value.copy(this.mouse);
      this.repeated = true;
      // this.timeSincePulse += -repeatAt;
    }
    let offset = 0.3;
    if (this.timeSincePulse - offset > repeatAt * 2) {
      this.uHexagonPulse.value.copy(this.mouse);
      this.timeSincePulse += -repeatAt * 2;
      this.repeated = false;
    }
    // if(this.clock.elapsedTime)

    let linev4 = this.uLine.value;
    linev4.x += lerpy(linev4.x, this.mouse.x, 0.3, 0.000001);
    linev4.y += lerpy(linev4.y, this.mouse.y, 0.3, 0.000001);
    linev4.z += lerpy(linev4.z, linev4.x, 0.2, 0.000001);
    linev4.w += lerpy(linev4.w, linev4.y, 0.2, 0.000001);
  }
  init() {
    let planeGeo = new THREE.PlaneBufferGeometry();
    let planeMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: this.uTime,
        uAspect: this.uAspect,
        uLine: this.uLine,
        uHexagonPulse: this.uHexagonPulse,
      },
      vertexShader: `
				varying vec2 vUv;
				
				void main() {
					vec3 transformed = position * 2.;

					vUv = uv;
					
					gl_Position =   vec4(transformed, 1.);
				}
			`,
      fragmentShader: `
				precision highp float;
				#define AA 16
				varying vec2 vUv;
				${snoise}
				uniform float uTime;
     uniform vec2 uAspect;
     uniform vec4 uLine;
    uniform vec2 uHexagonPulse;
				vec4 hexagon( vec2 p ) 

{
	vec2 q = vec2( p.x*2.0*0.5773503, p.y + p.x*0.5773503 );
	
	vec2 pi = floor(q);
	vec2 pf = fract(q);

	float v = mod(pi.x + pi.y, 3.0);

	float ca = step(1.0,v);
	float cb = step(2.0,v);
	vec2  ma = step(pf.xy,pf.yx);
	
    // distance to borders
	float e = dot( ma, 1.0-pf.yx + ca*(pf.x+pf.y-1.0) + cb*(pf.yx-2.0*pf.xy) );

	// distance to center	
	p = vec2( q.x + floor(0.5+p.y/1.5), 4.0*p.y/3.0 )*0.5 + 0.5;
	float f = length( (fract(p) - 0.5)*vec2(1.0,0.85) );		
	
	return vec4( pi + ca - cb*ma, e, f );
}
float line_segment(in vec2 p, in vec2 a, in vec2 b) {
	vec2 ba = b - a;
	vec2 pa = p - a;
	float h = clamp(dot(pa, ba) / dot(ba, ba), 0., 1.);
	return length(pa - h * ba);
}
				void main() {
					vec2 uv= vUv * uAspect;
					float count = 200.;
					float noiseFreq = 1.;
					float speed=  0.2;
					vec3 color = vec3(0.);
					color = vec3(uv.x);

					float dots = 0.;
						vec2 off = vec2(0.);
						vec2 pos =(uv + off * 0.001); 
						vec4 rawHexagon = hexagon((uv + off * 0.001)*count);
						// float dots = length(uv-(rawHexagon.xy/count))*count;

						vec4 rawHexagon1 = hexagon((uv + off * 0.001)* 10.);
						vec3 size = snoiseVec3(vec3(pos * noiseFreq, uTime * speed));

						size += snoiseVec3(vec3( rawHexagon1.xy * noiseFreq, uTime * speed));

						float center = 0.5;
						float space = 0.8;
						// size.x = abs(size.x);
						float bigHexBorder = smoothstep(0.05, 0.5, rawHexagon1.z);
						size = 1.-smoothstep(center-space/2., center, size) * smoothstep(center+space/2.,center,  size);
          float line = line_segment(uv, uLine.xy* uAspect, uLine.zw* uAspect) - 0.02; 
          line = smoothstep(0.01, 0., line) * 0.5;


						vec4 mouseHexagon = hexagon((uv - uHexagonPulse.xy * uAspect + off * 0.001)* 1.);
          float circle = smoothstep( 0.35, 0.,  
              abs(
                  sin(
                     mouseHexagon.z * 8.
                        // distance(
                        //     vec2(vUv ) * uAspect,uLine.xy * uAspect
                        // ) * 4. 
                  + uTime ) 
              - 0.2)
          ) * step(0.80, mouseHexagon.z);
						dots += step(0.4 + 0.6 * size.x, rawHexagon.z + line ) * bigHexBorder;
						dots += step(0.4  + 0.4 * smoothstep(0.9, 0.8, mouseHexagon.z) , rawHexagon.z ) * circle * 1.;

					
					color = vec3(dots);
					gl_FragColor = vec4(color,1.0);
				}
			`,
    });
    let planeMesh = new THREE.Mesh(planeGeo, planeMat);

    this.scene.add(planeMesh);

    this.addEvents();
  }
  addEvents() {
    this.onResize();
    window.addEventListener("resize", this.onResize);
    window.addEventListener("mousemove", this.onMouseMove);
    this.tick();
  }
  remove() {
    window.removeEventListener("resize", this.onResize);
    window.removeEventListener("mousemove", this.onMouseMove);
    this.disposed = true;
  }
}
