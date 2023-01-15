import { PerspectiveCamera } from 'three';

function createCamera() {
  const camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  // new THREE.
  camera.position.set(20, 30, 10.5);

  return camera;
}

export { createCamera };
