'use strict';
const createScript = require('./CreateScript');

module.exports.createScriptHandler = async () => {
  try {
    await createScript();
  } catch (e) {

  }
};
