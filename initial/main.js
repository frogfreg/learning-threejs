import * as THREE from "three";
import gsap from "gsap";

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

const sizes = {
  width: 800,
  height: 600,
};

const camera = new THREE.PerspectiveCamera(60, sizes.width / sizes.height);

camera.position.z = 3;

scene.add(camera);

const axesHelper = new THREE.AxesHelper();

scene.add(axesHelper);

const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(sizes.width, sizes.height);

// const clock = new THREE.Clock();

gsap.to(cube1.position, { duration: 2, delay: 1, x: 2 });
gsap.to(cube1.position, { duration: 2, delay: 3, x: 0 });


const tick = () => {
  //   const elapsedTime = clock.getElapsedTime();
  //   console.log(elapsedTime);
  //   cube1.rotation.y = 0.1 * elapsedTime;
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();
