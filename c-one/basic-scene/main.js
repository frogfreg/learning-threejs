import * as THREE from "three";
import "./styles.css";

const scene = new THREE.Scene();

const cube = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: "#FF4858" })
);

scene.add(cube);

const axesHelper = new THREE.AxesHelper(3);

scene.add(axesHelper);

const sizes = {
    width: 800,
    height: 600,
};

// const camera = new THREE.PerspectiveCamera(80, sizes.width / sizes.height);
const camera = new THREE.OrthographicCamera(-1, 1, -1, 1, 0.1, 100);

camera.position.z = 3;

scene.add(camera);

const canvas = document.querySelector(".webgl");

const renderer = new THREE.WebGLRenderer({ canvas });

renderer.setSize(sizes.width, sizes.height);

// Animations

const clock = new THREE.Clock();

function tick() {
    const elapsedTime = clock.getElapsedTime();

    renderer.render(scene, camera);

    cube.rotation.y = Math.PI * elapsedTime;

    camera.lookAt(cube.position);

    requestAnimationFrame(tick);
}

tick();
