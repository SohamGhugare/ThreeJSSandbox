import * as THREE from 'three';

// renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// scene
const scene = new THREE.Scene();

// camera: perspective
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

// axes helper
const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);

camera.position.set(0, 2, 5);

// linking scene and camera
renderer.render(scene, camera);

