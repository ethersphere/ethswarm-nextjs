import * as THREE from "three";
export class GLStructure {
  constructor(container, canvas) {
    //   gui = new GUI();
    //   gui.hide()
    this.container = container;
    this.canvas = canvas;
    this.vp = {
      width: canvas.offsetWidth,
      height: canvas.offsetHeight,
      dpr: Math.min(window.devicePixelRatio, 2),
    };
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas,
      stencil: false,
      depth: false,
    });
    this.renderer.setSize(this.vp.width, this.vp.height, false);
    this.renderer.setPixelRatio(this.vp.dpr);

    this.camera = new THREE.PerspectiveCamera(
      45,
      this.vp.width / this.vp.height,
      0.1,
      300
    );
    //   this.camera.position.x = -10
    this.camera.position.z = 10;
    this.camera.lookAt(0, 0, 0);

    // this.camera.position.x = 2.5;
    // this.camera.position.y = -2.5;
    //   this.camera.position.z = -3.5;

    this.camera.lookAt(0, 0, 0);
    //   this.controls = new OrbitControls(this.camera, canvas);
    //   this.camera.position.fromArray(pos);
    //   this.camera.rotation.fromArray(rot);

    //  this.camera.lookAt(0,0,0)
    window.camera = this.camera;
    // this.camera.position.z = 50;

    this.scene = new THREE.Scene();
    this.clock = new THREE.Clock();
    this.assets = {};
    this.viewSize = this.getViewSizeAtDepth();

    this.disposed = false;

    this.tick = this.tick.bind(this);
    this.init = this.init.bind(this);
    this.onResize = this.onResize.bind(this);

    this.uTime = new THREE.Uniform(0);

    let post = {};
    this.post = post;
  }
  addEvents() {
    // window.addEventListener("resize", this.onResize);
  }
  dispose() {
    //
  }
  getViewSizeAtDepth(depth = 0) {
    const fovInRadians = (this.camera.fov * Math.PI) / 180;
    const height = Math.abs(
      (this.camera.position.z - depth) * Math.tan(fovInRadians / 2) * 2
    );
    return { width: height * this.camera.aspect, height };
  }
  init() {}
  // To be replaced
  update(delta) {
    this.uTime.value = this.clock.elapsedTime;
  }
  render() {
    this.renderer.render(this.scene, this.camera);
    //   this.post.composer.render(0.1);
  }
  onResize() {
    this.vp.width = this.canvas.offsetWidth;
    this.vp.height = this.canvas.offsetHeight;
    this.vp.dpr = Math.min(window.devicePixelRatio, 1);

    this.renderer.setSize(this.vp.width, this.vp.height, false);
    this.camera.aspect = this.vp.width / this.vp.height;
    this.camera.updateProjectionMatrix();

    this.viewSize = this.getViewSizeAtDepth();
  }
  tick() {
    if (this.disposed) return;

    let delta = this.clock.getDelta();
    this.update(delta);
    this.render();

    requestAnimationFrame(this.tick);
  }
}
