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
        }

    }
});

/*
test("hello test", function() {
    ok( 1 == "1", "Passed!" )
});
*/

require(['../src/backbone-websql-table', 'ModelItem', 'qunit'], 
    function(Adapter, ModelItem, qunit){
    // console.log("required");

    test("hello require", function(){
        ok(0 == "0", "Passed!");
    });

/*
    test("can instantiate", function(){
        var adapter = new Adapter();
        ok(adapter, "adapter instantiated.");
    });
*/
    test("instantiate model", function(){
        var item = new ModelItem();

        ok(item, "Item created.");
    });
    test("creates table on init", function(){
        var item = new ModelItem();

        ok(item, "Item created.");
    });


})


