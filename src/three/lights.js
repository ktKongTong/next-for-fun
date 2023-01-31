import { DirectionalLight, HemisphereLight } from 'three';

function createLights() {
  const ambientLight = new HemisphereLight(
    'white',
    '#2C995C',
    3,
  );
  const mainLight = new DirectionalLight('white', 2);
  mainLight.position.set(100, 100, 100);

  return { ambientLight, mainLight };
}

export { createLights };
