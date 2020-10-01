var toJsonSchema = require('jsdoc-to-json-schema');
 
console.log('hello');

(async () => {

  try {

    // OPTION 1: generate a JSON schema for product.js and save it to disk
    await toJsonSchema('micro-apps/shared/ma-flex-layout/src/components/flex-layout/flex-layout.model.js', 'schema.json');

  } catch (e) {
    console.log(`BUILD FAILED: ${e}`);
    throw e;
  }

})().catch((e) => { 
  return process.exit(1); 
});