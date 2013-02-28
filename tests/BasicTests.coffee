# Basic tests.

define ['ModelItem'], (ModelItem) ->

    QUnit.test "hello require", () ->
        ok 0 == 0, "Passed?!"

    QUnit.module "ModelItem", {
        setup: () ->
            # setup
        teardown: () ->
            # cleanup
    }

    QUnit.test "instantiate model", () ->
        item = new ModelItem()

        ok(item, "Item created.")

    QUnit.test "creates table on init", () ->
        item = new ModelItem()

        ok(item, "check if tables created created.")

