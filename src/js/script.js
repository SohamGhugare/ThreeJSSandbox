import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'

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

// box
const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({color: 0x00FF00});
const box = new THREE.Mesh(boxGeometry, boxMaterial);
scene.add(box);

function animate(time) {
    // setting the rotation
    box.rotation.set(time/1000, time/1000, 0);

    // linking scene and camera
    renderer.render(scene, camera);   
}

renderer.setAnimationLoop(animate);


