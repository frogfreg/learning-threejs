import * as THREE from "three";

const scene = new THREE.Scene();

const group = new THREE.Group();
scene.add(group);

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: "#DBF227" })
);
const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: "#042940" })
);
const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: "#042940" })
);

cube1.position.set(0, 0, 1);
cube2.position.set(-2, 0, -1);
cube3.position.set(2, 0, -1);

group.add(cube1);
group.add(cube2);
group.add(cube3);

group.scale.set(0.5, 0.5, 0.5);

const axesHelper = new THREE.AxesHelper(3);

scene.add(axesHelper);

const sizes = { width: 800, height: 600 };

const camera = new THREE.PerspectiveCamera(80, sizes.width / sizes.height);

camera.position.z = 3;
camera.position.y = 1.5;

camera.lookAt(new THREE.Vector3(0, 0, 0));

scene.add(camera);

const canvas = document.querySelector(".webgl");

const renderer = new THREE.WebGLRenderer({ canvas });

renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
