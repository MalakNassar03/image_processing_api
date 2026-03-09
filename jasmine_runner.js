require('ts-node').register();
const Jasmine = require('jasmine');
const { SpecReporter } = require('jasmine-spec-reporter');

const runner = new Jasmine();
runner.loadConfigFile('./spec/support/jasmine.json');
runner.clearReporters();
runner.addReporter(
    new SpecReporter({ spec: { displayPending: true } })
);
runner.execute();