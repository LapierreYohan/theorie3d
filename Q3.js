import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(0x404040);
document.body.appendChild( renderer.domElement );

const stoneTexture = new THREE.TextureLoader().load( 'assets/textures/stone.png');
stoneTexture.wrapS = THREE.RepeatWrapping;
stoneTexture.wrapT = THREE.RepeatWrapping;
stoneTexture.repeat.set(2,1);

const earthTexture = new THREE.TextureLoader().load( 'assets/textures/earth.png');
earthTexture.wrapS = THREE.RepeatWrapping;
earthTexture.wrapT = THREE.RepeatWrapping;
earthTexture.repeat.set(2,1);

const pillarTexture = new THREE.TextureLoader().load('assets/textures/pillar.png');
pillarTexture.wrapS = THREE.RepeatWrapping;
pillarTexture.wrapT = THREE.RepeatWrapping;
pillarTexture.repeat.set(1,1);

const cubeGeometry = new THREE.BoxGeometry( 10, 1, 10);
const pillierGeometry = new THREE.BoxGeometry( 1, 10, 1);
const sphereGeometry = new THREE.SphereGeometry( 2.5, 16, 16);

const stoneMaterial = new THREE.MeshStandardMaterial( { map: stoneTexture,  metalness: 0, roughness: 8} );
const pillarMaterial = new THREE.MeshStandardMaterial( { map: pillarTexture,  metalness: 0, roughness:0.4} );
const redMaterial = new THREE.MeshStandardMaterial( { map: earthTexture,  metalness: 0, roughness: 0.7 } );

pillarMaterial.castShadow = true;
stoneMaterial.castShadow = true;
redMaterial.castShadow = true;

const ambientLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 0.6);
scene.add(ambientLight);

const sol = new THREE.Mesh( cubeGeometry, stoneMaterial );
sol.rotation.x = 0;
scene.add( sol );

const piD1 = new THREE.Mesh( pillierGeometry, pillarMaterial );
piD1.position.x = 4;
piD1.position.y = 5.5;
piD1.position.z = 4;
piD1.rotation.x = 0;
scene.add( piD1 );

const piD2 = new THREE.Mesh( pillierGeometry, pillarMaterial );
piD2.position.x = 0;
piD2.position.y = 5.5;
piD2.position.z = 4;
piD2.rotation.x = 0;
scene.add( piD2 );

const piD3 = new THREE.Mesh( pillierGeometry, pillarMaterial );
piD3.position.x = -4;
piD3.position.y = 5.5;
piD3.position.z = 4;
piD3.rotation.x = 0;
scene.add( piD3 );

const piG1 = new THREE.Mesh( pillierGeometry, pillarMaterial );
piG1.position.x = 4;
piG1.position.y = 5.5;
piG1.position.z = -4;
piG1.rotation.x = 0;
scene.add( piG1 );

const piG2 = new THREE.Mesh( pillierGeometry, pillarMaterial );
piG2.position.x = 0;
piG2.position.y = 5.5;
piG2.position.z = -4;
piG2.rotation.x = 0;
scene.add( piG2 );

const piG3 = new THREE.Mesh( pillierGeometry, pillarMaterial );
piG3.position.x = -4;
piG3.position.y = 5.5;
piG3.position.z = -4;
piG3.rotation.x = 0;
scene.add( piG3 );

const toit = new THREE.Mesh( cubeGeometry, stoneMaterial );
toit.position.y = 11;
scene.add( toit );

const sphere = new THREE.Mesh( sphereGeometry, redMaterial );
sphere.position.y = 3;
scene.add( sphere );

const pointLight = new THREE.PointLight({color: 0xe4692e, intensity: 1});
pointLight.power = 800;
pointLight.position.y += 2;
sphere.add(pointLight);

camera.position.y = 8;
camera.position.z = 15;
camera.rotation.x = -0.2;

let materialMetal = 0.0;
let invert = false;

function animate() 
{
	requestAnimationFrame( animate );
    
	scene.rotation.y += 0.01;
	if (!invert) {
		materialMetal += 0.001;
	} else {
		materialMetal -= 0.001;
	}
	
	stoneMaterial.metalness = materialMetal;

	if (materialMetal >= 0.65)
	{
		invert = true;
	} else if (materialMetal <= 0.0)
	{
		invert = false;
	}

	pointLight.position.y = Math.sin(Date.now() * 0.0006) * 5;

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