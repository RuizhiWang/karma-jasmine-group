# karma-jasmine-group
Karma adapter for Jasmine plugin to run JavaScript unit tests by groups and priorities.

# Installation
The easiest way is to keep <code>karma-jasmine-group</code> as a devDependency in your <code>package.json</code>.
```javascript
  {
    "devDependencies": {
        "jasmine-core": "^2.2.0",
        "karma": "^0.12.31",
        "karma-jasmine": "^0.3.5",
        "karma-jasmine-group": "^1.0.4"
    }
  }
```
You can simple do it by running following command inside of your project directory:
```
    npm install karma-jasmine-group --save-dev
```

# Configuration
1. Add <code>'karma-jasmine-group'</code> to the <code>frameworks</code> key in your Karma configuration, before <code>'jasmine'</code>;
2. Add a new key <code>groupsConfig</code> with a list of groups in your Karma configuration.  
 **Please Note**: the test groups will be run in same order as you provided in the list. 
```javascript
module.exports = function(config) {
  config.set({
    frameworks: ['karma-jasmine-group', 'jasmine'],
    groupsConfig: ['group1', 'group2', 'group3']
  });
}
```

# Dependencies and Usage
To use this plug-in you will need to define groups in your tests, for details and installation, please see [jasmine-group](https://github.com/RuizhiWang/jasmine-group).

<code>jasmine-group</code> plug-in will provide support using 'gdescribe' to set a group in your test case

example:
```javascript
    gdescribe('group1', 'TestSuit description', function() {
        it('TestCase description', function() {
            ......
        });
    });
```



# Contributors
Ruizhi Wang: crystalplan999@gmail.com  
Felice Geracitano: felice.geracitano@gmail.com

# License
MIT license, please see <code>LICENSE</code> file for details.
