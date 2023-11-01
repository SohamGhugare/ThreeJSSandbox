import * as THREE from 'three';
import * as dat from 'dat.gui'
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

const orbit = new OrbitControls(camera, renderer.domElement);

// axes helper
const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);

camera.position.set(0, 2, 5);
orbit.update();

// box
const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({color: 0x00FF00});
const box = new THREE.Mesh(boxGeometry, boxMaterial);
scene.add(box);

const gridHelper = new THREE.GridHelper();
scene.add(gridHelper);

// dat.gui
const gui = new dat.GUI();

const options = {
    boxColor: '#00ff00',
    speed: 1
};

gui.addColor(options, 'boxColor').onChange(function(e){
    box.material.color.set(e);
});

gui.add(options, 'speed', 1, 10);


function animate(time) {
    // setting the rotation
    box.rotation.set(time/1000*options.speed, time/1000*options.speed, 0);

    // linking scene and camera
    renderer.render(scene, camera);   
}

renderer.setAnimationLoop(animate);


