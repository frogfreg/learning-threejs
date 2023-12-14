import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
// import gsap from "gsap";

const cursor = {
  x: 0,
  y: 0,
};

const sizes = {
  width: 800,
  height: 600,
};

const canvas = document.querySelector(".webgl");
const scene = new THREE.Scene();

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "red" })
);
// const cube2 = new THREE.Mesh(
//   new THREE.BoxGeometry(1, 1, 1),
//   new THREE.MeshBasicMaterial({ color: "red" })
// );
// const cube3 = new THREE.Mesh(
//   new THREE.BoxGeometry(1, 1, 1),
//   new THREE.MeshBasicMaterial({ color: "blue" })
// );

// cube2.position.set(-1, 0, 0);
// cube3.position.set(1, 0, 0);

// const group = new THREE.Group();

scene.add(cube1);

// group.position.set(0, 2, -3);

const camera = new THREE.PerspectiveCamera(60, sizes.width / sizes.height);
// const aspectRatio = sizes.width / sizes.height;
// const camera = new THREE.OrthographicCamera(
//   -1 * aspectRatio,
//   1 * aspectRatio,
//   1,
//   -1
// );

camera.position.z = 3;

scene.add(camera);

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

const axesHelper = new THREE.AxesHelper();

scene.add(axesHelper);

window.addEventListener("mousemove", (event) => {
  cursor.x = event.clientX / sizes.width - 0.5;
  cursor.y = event.clientY / sizes.height - 0.5;
  camera.lookAt(cube1.position);
});

const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(sizes.width, sizes.height);

// const clock = new THREE.Clock();

// gsap.to(cube1.position, { duration: 2, delay: 1, x: 2 });
// gsap.to(cube1.position, { duration: 2, delay: 3, x: 0 });

const tick = () => {
  // const elapsedTime = clock.getElapsedTime();

  // camera.position.x = -1 * cursor.x;
  // camera.position.y = cursor.y;

  //   console.log(elapsedTime);
  // cube1.rotation.y = 0.1 * elapsedTime;

  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();
