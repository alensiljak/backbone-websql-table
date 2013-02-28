/*

Tests

*/

require.config({
    paths:{
        'underscore': '../lib/underscore',
        'backbone': '../lib/backbone',
        'qunit': '../lib/qunit-1.11.0'
    },
    shim: {
        'backbone': {
            deps: ["underscore"],
            exports: "Backbone"
        },
        'qunit': {
            deps: [],
            exports: "Qunit"
        } 
    }
});

// Defer Qunit so RequireJS can work its magic and resolve all modules.
// QUnit.config.autostart = false;

require(['BasicTests'], function(BasicTests){
    // console.log("required");

    // QUnit.start();

})


