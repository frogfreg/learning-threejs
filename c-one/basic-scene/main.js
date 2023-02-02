import * as THREE from "three";
import "./styles.css";

import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const cursor = {
    x: 0,
    y: 0,
};

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
};

window.addEventListener("mousemove", (event) => {
    cursor.x = event.clientX / sizes.width - 0.5;
    cursor.y = event.clientY / sizes.height - 0.5;
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

camera.position.z = 3;

scene.add(camera);

const canvas = document.querySelector(".webgl");

const renderer = new THREE.WebGLRenderer({ canvas });

const controls = new OrbitControls(camera, canvas);

controls.enableDamping = true;

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

renderer.setPixelRatio(window.devicePixelRatio);

window.addEventListener("resize", () => {

    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    camera.aspect = sizes.width / sizes.height;

    camera.updateProjectionMatrix();

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(window.devicePixelRatio);
});

window.addEventListener("dblclick", () => {
    if (!document.fullscreenElement) {
        canvas.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
});

function tick() {
    renderer.render(scene, camera);
    controls.update();

    requestAnimationFrame(tick);
}

tick();
