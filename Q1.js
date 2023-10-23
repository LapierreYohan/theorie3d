import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';

// Setting renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( 600, 500 );
document.body.appendChild( renderer.domElement );

// Setting camera
const camera = new THREE.OrthographicCamera(-20,20,20,-20,1,1000);
camera.position.set(0,0,50);
camera.lookAt(0,0,0);

const scene =  new THREE.Scene();

// Creating material
const material = new THREE.LineBasicMaterial({color: 0xFFFFFF});

// Creating geometry
const points = [];
points.push( new THREE.Vector3(-10, -15, 0));
points.push( new THREE.Vector3(0, 20, 0));
points.push( new THREE.Vector3(10, -15, 0));
points.push( new THREE.Vector3(-15, 10, 0 ));
points.push( new THREE.Vector3(15, 10, 0 ));
points.push( new THREE.Vector3(-10, -15, 0));

const geometry = new THREE.BufferGeometry().setFromPoints(points);

// Displaying 
const line = new THREE.Line(geometry, material);
scene.add(line);
renderer.render(scene, camera);