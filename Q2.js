import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const cubeGeometry = new THREE.BoxGeometry( 10, 1, 10);
const pillierGeometry = new THREE.BoxGeometry( 1, 10, 1);
const sphereGeometry = new THREE.SphereGeometry( 2.5, 16, 16);

const greenMaterial = new THREE.MeshBasicMaterial( { color: 0x00FF00, wireframe: true } );
const redMaterial = new THREE.MeshBasicMaterial( { color: 0xFF0000, wireframe: true } );

const sol = new THREE.Mesh( cubeGeometry, greenMaterial );
sol.rotation.x = 0;
scene.add( sol );

const piD1 = new THREE.Mesh( pillierGeometry, greenMaterial );
piD1.position.x = 4;
piD1.position.y = 5.5;
piD1.position.z = 4;
piD1.rotation.x = 0;
scene.add( piD1 );

const piD2 = new THREE.Mesh( pillierGeometry, greenMaterial );
piD2.position.x = 0;
piD2.position.y = 5.5;
piD2.position.z = 4;
piD2.rotation.x = 0;
scene.add( piD2 );

const piD3 = new THREE.Mesh( pillierGeometry, greenMaterial );
piD3.position.x = -4;
piD3.position.y = 5.5;
piD3.position.z = 4;
piD3.rotation.x = 0;
scene.add( piD3 );

const piG1 = new THREE.Mesh( pillierGeometry, greenMaterial );
piG1.position.x = 4;
piG1.position.y = 5.5;
piG1.position.z = -4;
piG1.rotation.x = 0;
scene.add( piG1 );

const piG2 = new THREE.Mesh( pillierGeometry, greenMaterial );
piG2.position.x = 0;
piG2.position.y = 5.5;
piG2.position.z = -4;
piG2.rotation.x = 0;
scene.add( piG2 );

const piG3 = new THREE.Mesh( pillierGeometry, greenMaterial );
piG3.position.x = -4;
piG3.position.y = 5.5;
piG3.position.z = -4;
piG3.rotation.x = 0;
scene.add( piG3 );

const toit = new THREE.Mesh( cubeGeometry, greenMaterial );
toit.position.y = 11;
scene.add( toit );

const sphere = new THREE.Mesh( sphereGeometry, redMaterial );
sphere.position.y = 3;
scene.add( sphere );

camera.position.y = 8;
camera.position.z = 15;
camera.rotation.x = -0.2;

function animate() 
{
	requestAnimationFrame( animate );

    scene.rotation.y += 0.01;

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