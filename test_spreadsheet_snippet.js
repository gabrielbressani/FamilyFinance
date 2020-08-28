/**
 * A simple exists assertion check. Expects a value to exist. Errors if DNE.
 * @param {any} value A value that is expected to exist.
 */
function expectToExist(value) {
  if (value) {
    console.log('TEST: Exists');
  } else {
    throw new Error('TEST: DNE');
  }
}

function RUN_ALL_TESTS() {
	expectToExist(true);;
}
