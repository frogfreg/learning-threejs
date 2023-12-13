import * as THREE from "three";

const canvas = document.querySelector(".webgl");
const scene = new THREE.Scene();

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "green" })
);
const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "red" })
);
const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "blue" })
);

cube2.position.set(-1, 0, 0);
cube3.position.set(1, 0, 0);

const group = new THREE.Group();

group.add(cube1);
group.add(cube2);
group.add(cube3);

scene.add(group);

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

renderer.render(scene, camera);
