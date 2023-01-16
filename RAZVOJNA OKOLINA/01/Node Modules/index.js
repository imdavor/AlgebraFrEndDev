import { v4 as uuidv4 } from "./node_modules/uuid/dist/esm-browser/index.js";
import random from './node_modules/alphanumeric/src/index.js';

const uuid = uuidv4();
console.log(uuid);


let id = random(10);
console.log(id);