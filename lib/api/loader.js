var Rfr = require('rfr');
var Fs = require('fs-extra');
var _ = require('underscore');
var Path = require('path');
var Logger = Rfr('lib/logger.js');

var folders = Fs.readdirSync(Path.join(__dirname, '../../modules'));
//TODO: Implement this as function calls for unit testing
_.forEach(folders, function (e) {

    var name = e;
    var version = 'unknown';
    try {
        var moduleJson = Rfr('modules/' + e + '/module.json');
        name = moduleJson.name || e;
        version = moduleJson.version || '???';
        Logger.info('Loading module ' + name + ' (v' + version + ')');
        Rfr('modules/' + e + '/' + (moduleJson.main || 'main.js'));
    } catch (error) {
        Logger.error('Error loading module (' + name + ', v' + version + ')', error);
    }
});