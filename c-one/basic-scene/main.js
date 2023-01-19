import * as THREE from "three";
import "./styles.css";

import { OrbitControls } from "three/addons/controls/OrbitControls";

const cursor = {
    x: 0,
    y: 0,
};

const sizes = {
    width: 800,
    height: 600,
};

window.addEventListener("mousemove", (event) => {
    cursor.x = event.clientX / sizes.width - 0.5;
    cursor.y = event.clientY / sizes.height - 0.5;

    console.log(cursor);
});

const scene = new THREE.Scene();

const cube = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: "#FF4858" })
);

scene.add(cube);

const axesHelper = new THREE.AxesHelper(3);

scene.add(axesHelper);

const camera = new THREE.PerspectiveCamera(80, sizes.width / sizes.height);
// const camera = new THREE.OrthographicCamera(-1, 1, -1, 1, 0.1, 100);

camera.position.z = 3;

scene.add(camera);

const canvas = document.querySelector(".webgl");

const renderer = new THREE.WebGLRenderer({ canvas });

const controls = new OrbitControls(camera, canvas);

controls.enableDamping = true;

renderer.setSize(sizes.width, sizes.height);

// Animations

// const clock = new THREE.Clock();

function tick() {
    // const elapsedTime = clock.getElapsedTime();

    renderer.render(scene, camera);

    // cube.rotation.y = Math.PI * elapsedTime;1

    // camera.position.x = Math.sin(cursor.x * 2 * Math.PI) * 3;
    // camera.position.z = Math.cos(cursor.x * 2 * Math.PI) * 3;

    // camera.lookAt(cube.position);

    controls.update();

    requestAnimationFrame(tick);
}

tick();
