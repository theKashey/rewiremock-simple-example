const rewiremock = require('rewiremock/node');

rewiremock.overrideEntryPoint(module);
module.exports = rewiremock;