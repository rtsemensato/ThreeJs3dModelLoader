import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js";

import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/GLTFLoader.js";
import {OrbitControls} from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 15000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
const controls = new OrbitControls( camera, renderer.domElement );

const light = new THREE.DirectionalLight(0xffffff, 3);
light.position.set(-1, 2, 4);
scene.add(light);

camera.position.set( 1000, -650, 8000 );
controls.update();

renderer.setClearColor("#e5e5e5");
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

// const geometry = new THREE.BoxGeometry();

// const material1 = new THREE.MeshPhongMaterial({ color: 0x44aa88 });
// const material2 = new THREE.MeshPhongMaterial({ color: 0xaa4444 });
// const material3 = new THREE.MeshPhongMaterial({ color: 0xaa44aa });
// const material4 = new THREE.MeshPhongMaterial({ color: 0x44aacc });

// const cube1 = new THREE.Mesh(geometry, material1);
// const cube2 = new THREE.Mesh(geometry, material2);
// const cube3 = new THREE.Mesh(geometry, material3);
// const cube4 = new THREE.Mesh(geometry, material4);

// scene.add(cube1);
// scene.add(cube2);
// scene.add(cube3);
// scene.add(cube4);

// cube1.position.x = -2;

// cube2.position.x = 0;

// cube3.position.x = 2;

// cube4.position.z = -4;
// cube4.position.y = 3;

const loader = new GLTFLoader();
loader.load("./3dmodels/baphomet/scene.gltf", (gltf) => {
    gltf.scene.traverse((c) => {
        c.castShadow = true;
    });
    scene.add(gltf.scene);
});

window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();
});

var voltar = false;

function animate() {
    requestAnimationFrame(animate);

    // cube1.rotation.y += 0.01;

    // cube2.rotation.x -= 0.01;
    // cube2.rotation.y -= 0.01;

    // cube3.rotation.x += 0.01;
    // cube3.rotation.y += 0.01;
    // cube3.rotation.z -= 0.02;

    // cube4.rotation.y += 0.03;

    // voltar ? (cube4.position.z -= 0.01) : (cube4.position.z += 0.01);

    // if (cube4.position.z > 4) {
    //     voltar = !voltar;
    // }

    controls.update();

    renderer.render(scene, camera);
}
animate();
