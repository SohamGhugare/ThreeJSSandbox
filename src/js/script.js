import * as THREE from 'three';

// renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// scene
const scene = new THREE.scene();

// camera: perspective
const camera = new THREE.PerspectiveCamera(
    75,
    windwo.innerWidth / window.innerHeight,
    0.1,
    1000
)

