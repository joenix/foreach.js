// Use Deepeach
import deepeach from 'deepeach';

// Set Copy from Deepeach
function copy(source) {
  return deepeach(source, (i) => i, true);
}

// Set Conclusion
function conclusion(key, json, callback) {
  // get return
  let result = callback(json[key], key);

  // set newest
  if (result !== undefined) {
    json[key] = result;
  }

  // return
  return result;
}

/**
 * foreach.js is an omnipotent loop function for object
 * @param source { object | array }
 * @param callback { function }
 * @param config { object }
 * @property clone { boolean: false }
 * @property deep { boolean: false } - only support object
 * @property stop { any: false }
 * @property step { number: 1 }
 * @property long { number: 0 }
 * ======== ======== ========
 */
function foreach(source, callback, { clone = false, deep = false, stop = false, step = 1, long = 0 } = {}) {
  // set json if clone or not
  let json = clone === true ? copy(source) : source;

  // deep
  if (deep === true) {
    // Loop
    return deepeach(json, callback);
  }

  // Special for Array
  if (json.length !== undefined) {
    // keep step of long
    for (let index = 0; index < json.length; index++) {
      if (index % step !== long) {
        continue;
      }

      // stop
      if (conclusion(index, json, callback) === stop) {
        break;
      }
    }

    // return
    return json;
  }

  // loop by for-in
  for (let key in json) {
    // keep step of long
    if (key - 0 > -1 && key % step !== long) {
      continue;
    }

    // stop
    if (conclusion(key, json, callback) === stop) {
      break;
    }
  }

  // return
  return json;
}

// export
export default foreach;
