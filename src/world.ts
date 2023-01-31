// @ts-ignore
import { loadBirds } from './three/birds/birds.js';
// @ts-ignore
import { createCamera } from './three/camera.js';
// @ts-ignore
import { createLights } from './three/lights.js';
// @ts-ignore
import { createScene } from './three/scene.js';
// @ts-ignore
import { createControls } from './three/systems/controls.js';
// @ts-ignore
import { createRenderer } from './three/systems/renderer.js';
// @ts-ignore
import { Resizer } from './three/systems/Resizer.js';
// @ts-ignore
import { Loop } from './three/systems/Loop.js';
import { SkeletonHelper } from 'three/src/helpers/SkeletonHelper.js';

let camera: any;
let controls:any;
let renderer:any
let scene:any;
let loop:any;

class World {
  constructor(container:any) {
    camera = createCamera();
    renderer = createRenderer();
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
    let SkinnedMesh = parrot;
    console.log(SkinnedMesh)
    let skeletonHelper = new SkeletonHelper(SkinnedMesh);
    console.log(skeletonHelper)
    scene.add(skeletonHelper);
    scene.add(parrot);
    scene.add(flamingo);

    // move the target to the center of the front bird
    controls.target.copy(parrot.position);

    // scene.add(parrot, flamingo, stork);

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