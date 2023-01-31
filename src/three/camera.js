import { PerspectiveCamera } from 'three';

function createCamera() {
  const camera = new PerspectiveCamera( 110, window.innerWidth / window.innerHeight, 0.1, 100 );
  // new THREE.
  camera.position.set(20, 20, 0);

  return camera;
}

export { createCamera };
