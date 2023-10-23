import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(0x404040);
document.body.appendChild( renderer.domElement );

// A blue rough sphere 
const geometry = new THREE.SphereGeometry(1);
const pbrMaterial = new THREE.MeshStandardMaterial({color: 0x0000FF, metalness:0.6, roughness:0.5});
const mySphere = new THREE.Mesh(geometry, pbrMaterial);

// Adding lights
const pointLight = new THREE.PointLight({color:0xFFFFFF, intensity:1.0});
pointLight.translateZ(2.0);
mySphere.add(pointLight);
const ambientLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);

scene.add(mySphere, ambientLight);
camera.position.z = 5;

function animate() 
{
	requestAnimationFrame( animate );
	mySphere.rotation.y += 0.01;
	renderer.render( scene, camera );
}

if ( WebGL.isWebGLAvailable() ) 
{
	// Initiate function or other initializations here
	animate();
} else 
{
	const warning = WebGL.getWebGLErrorMessage();
	document.getElementById( 'container' ).appendChild( warning );
}