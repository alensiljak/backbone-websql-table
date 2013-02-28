# Basic tests.

define ['ModelItem', 'require'], (ModelItem, require) ->
    #item = new ModelItem()
    #console.log item
    #console.log qunit, QUnit
    QUnit.module "insider"

    test "test in define", ->
        ok(true, "we are in module")

    QUnit.module "ModelItem"

    QUnit.test "hola muchachos", ->
        ok 1 == 1, "Loading coffeescript modules"

    QUnit.test "hello require", () ->
        ok 0 == 0, "Passed?!"

    test "instantiate model", () ->
        item = new ModelItem()

        ok(item, "Item created.")

    test "creates table on init", () ->
        item = new ModelItem()

        ok(item, "Item created.")

