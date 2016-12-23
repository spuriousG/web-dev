var jSend = require("../util/jsend");

var pkg = require('../package.json');

module.exports = {

    setup : function (server) {
        server.get('/ping', function (req, resp, next) {
            jSend.success(resp,
                {
                    'alive' : true,
                    'description' : pkg.description,
                    'version' : pkg.version,
                    'env' : process.env.NODE_ENV
                });
        });


        server.get('/ping/env', function (req, resp, next) {
            jSend.success(resp, {
                'env' : process.env.NODE_ENV
            });
        });

        // TODO: modify function to send a new Loggly log using req's properties
        // server.post('/ping/log', function (req, resp, next) {
        //     var exampleId, appId = req.params.appid;

        //     try {
        //         var data = _.isObject(req.body) ? req.body : JSON.parse(req.body);
        //         exampleId = data.exampleId;
        //     }
        //     catch (ex) {
        //         return jSend.error(resp, ex);
        //     }

        //     ExampleController.executeExample(exampleId, appId, function (error, info) {
        //         if (error) {
        //             jSend.error(resp, error);
        //         }
        //         else {
        //             jSend.success(resp, info);
        //         }
        //     });
        // });

    }
};
