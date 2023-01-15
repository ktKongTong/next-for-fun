import { loadBirds } from './three/birds/birds.js';
import { createCamera } from './three/camera.js';
import { createLights } from './three/lights.js';
import { createScene } from './three/scene.js';

import { createControls } from './three/systems/controls.js';
import { createRenderer } from './three/systems/renderer.js';
import { Resizer } from './three/systems/Resizer.js';
import { Loop } from './three/systems/Loop.js';

let camera: any;
let controls:any;
let renderer:any
let scene:any;
let loop:any;

class World {
  constructor(container:any) {
    camera = createCamera();
    renderer = createRenderer();
    console.log(container)
    console.log(renderer);
    scene = createScene();
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);
    controls = createControls(camera, renderer.domElement);

    const { ambientLight, mainLight } = createLights();

    loop.updatables.push(controls);
    scene.add(ambientLight, mainLight);

    const resizer = new Resizer(container, camera, renderer);
  }

  async init() {
    const { parrot, flamingo, stork } = await loadBirds();

    // move the target to the center of the front bird
    controls.target.copy(parrot.position);

    scene.add(parrot, flamingo, stork);
  }

  render() {
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}


export { World }