const rewiremock = require('./helper/rewiremock');

rewiremock(() => require('./dependency')).with(42);
rewiremock.enable();

console.log(require('./dependency'), 'should be equal to', 42);

rewiremock.disable();