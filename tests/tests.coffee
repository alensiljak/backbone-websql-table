###

Tests

###

require.config {
    paths:{
        'underscore': '../lib/underscore'
        'backbone': '../lib/backbone'
        'qunit': '../lib/qunit-1.11.0'
    }
    shim: {
        'backbone': {
            deps: ["underscore"]
            exports: "Backbone"
        }
        'qunit': {
            deps: []
            exports: "Qunit"
        } 
        'underscore': {
            # deps
            exports: "_"
        }
    }
    # Used to bust cache. Not needed for Chrome as it resets breakpoints.
    # urlArgs: "bust=" +  (new Date()).getTime()
}

# Defer Qunit so RequireJS can work its magic and resolve all modules.
# QUnit.config.autostart = false;

require ['BasicTests'], (BasicTests) ->
    # console.log("required");

    # QUnit.start();




