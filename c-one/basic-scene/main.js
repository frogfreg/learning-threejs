import * as THREE from "three";

import gsap from "gsap";

const scene = new THREE.Scene();

const cube = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: "#FF4858" })
);

scene.add(cube);

const axesHelper = new THREE.AxesHelper(3);

scene.add(axesHelper);

const sizes = { width: 800, height: 600 };

const camera = new THREE.PerspectiveCamera(80, sizes.width / sizes.height);

camera.position.z = 3;

scene.add(camera);

const canvas = document.querySelector(".webgl");

const renderer = new THREE.WebGLRenderer({ canvas });

renderer.setSize(sizes.width, sizes.height);

// Animations

// const clock = new THREE.Clock();

gsap.to(cube.position, { x: 2, duration: 1, delay: 1 });
gsap.to(cube.position, { x: 0, duration: 1, delay: 2 });

function tick() {
    renderer.render(scene, camera);

    // cube.rotation.y = 2 * Math.PI * elapsedTime;
    // cube.position.y = Math.sin(elapsedTime);
    // cube.position.x = Math.cos(elapsedTime);

    // cube.position.x = elapsedTime * 0.5;
    camera.lookAt(cube.position);

    requestAnimationFrame(tick);
}

tick();
