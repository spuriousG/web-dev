/*global module:true, require:true */

var winston = require('winston');
require('winston-loggly'); // expose winston.transports.Loggly as Loggly

var Constants = require('../config/constants');
var Loggers = winston.loggers;
var Settings = require('../config/settings');

/**
 * Find or create a logger with the requested name
 * @param component
 * @returns {*}
 */
module.exports = {
    getLogger : function (component) {
        component = component || Constants.defaultLoggerTag;

        console.log("Settings: " + JSON.stringify(Settings));

        // Create a new logger if one doesn't exist
        if (!Loggers.has(component)) {
            Loggers.add(component, {
              Loggly: {
                  token: Settings.logglyToken, // TODO: handle Error when missing token
                  subdomain: Constants.subdomain
              }
            })
        }
        return Loggers.get(component);
    }
};
