import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

import { MMDLoader } from 'three/examples/jsm/loaders/MMDLoader.js';
import { setupModel } from './setupModel.js';
import Stats from 'three/examples/jsm/libs/stats.module'
import { AxesHelper } from "three";

// import { * } draco from 'three/examples/jsm/libs/draco/'
async function loadBirds() {
  const loader = new GLTFLoader();
  // const dracoLoader = new DRACOLoader();
  // dracoLoader.setDecoderPath( '/lib/draco/' );//设置解压库文件路径
  // dracoLoader.setDecoderPath( '/examples/jsm/libs/draco/' );
  // loader.setDRACOLoader( dracoLoader );

  const [parrotData] = await Promise.all([
    // loader.loadAsync('/static/zl/zl.pmx'),
    loader.loadAsync('/static/models/room.gltf'),
  ]);
console.log(parrotData)

  const parrot = setupModel(parrotData);
  parrot.position.set(0, -2.5, -10);
  const flamingo = new AxesHelper(parrotData)
  // const flamingo = setupModel(parrotData);
  // flamingo.position.set(7.5, 0, -10);

  const stork = setupModel(parrotData);
  stork.position.set(0, 0, 2.5);

  return {
    parrot,
    flamingo,
    stork,
  };
}

export { loadBirds };
