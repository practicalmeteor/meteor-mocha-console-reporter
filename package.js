Package.describe({
  name: 'practicalmeteor:mocha-console-runner',
  version: '0.2.4',
  summary: 'A mocha console reporter for running your package tests from the command line with spacejam.',
  git: 'https://github.com/practicalmeteor/meteor-mocha-console-runner.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md',
  testOnly: true
});

Package.onUse(function(api) {
  api.versionsFrom("1.3");
  api.use(['coffeescript', "practicalmeteor:mocha@=2.4.5_6", 'practicalmeteor:loglevel@1.2.0_2', 'ecmascript']);
  api.mainModule('ConsoleReporter.coffee', 'client');
  api.imply("practicalmeteor:mocha@=2.4.5_6");
});

Package.onTest(function(api) {

});
