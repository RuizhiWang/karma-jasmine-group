var fs = require('fs');
var path = require('path');

var createPattern = function(path) {
    return {
        pattern: path, included: true, served: true, watched: false
    };
};

var groupFramework = function(files, groupsConfig) {
    var template = 'var groupsConfig = [];';
    if (groupsConfig && groupsConfig.length > 0) {
        template = "var groupsConfig = ['";
        template += groupsConfig.join("','");
        template += "'];";
    }
    var modulePath = path.resolve(require.resolve('jasmine-test-group'));
    var configFilegPath = modulePath.replace('jasmine-test-group.js', 'group-config.js');
    var executionFilegPath = modulePath.replace('jasmine-test-group.js', 'execute-tests.js');
    fs.writeFile(configFilegPath, template, function (err) {
        if (err) {
            console.warn('[Error] Failed to override group-config.js: ', err);
        }
    });
    files.unshift(createPattern(modulePath));
    files.unshift(createPattern(configFilegPath));
    files.push(createPattern(executionFilegPath));
};

groupFramework.$inject = ['config.files', 'config.groupsConfig'];

module.exports = {
    'framework:jasmine-test-group': ['factory', groupFramework]
};