/*global module:true, require:true */

var winston = require('winston');
require('winston-loggly'); // expose winston.transports.Loggly as Loggly

var Constants = require('../config/constants');
var Loggers = winston.loggers;

/**
 * Find or create a logger with the requested name
 * @param component
 * @returns {*}
 */
module.exports = {
    getLogger : function (component) {
        component = component || Constants.defaultLoggerTag;

        // Create a new logger if one doesn't exist
        if (!Loggers.has(component)) {
            Loggers.add(component, {
              Loggly: {
                  token: "2d910b7b-42cc-4f9b-96b7-90e140d3ccff",
                  subdomain: "irliao"
              }
            })
        }
        return Loggers.get(component);
    }
};
