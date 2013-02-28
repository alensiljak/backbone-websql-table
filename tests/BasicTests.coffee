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
        item = new ModelItem({
            Name: "first item",
            Number: 1
            })

        ok(item, "Item instantiated.")

    test "set db name", ->
        options = {
            databaseName: "TestDatabase"
        }
        item = new ModelItem({
            Name: "item with custom db name"
            }, options)
        expect(0)
        # manually test the table name for now

    QUnit.test "save and load Item", () ->
        item = new ModelItem({
            #id: "testItem"
            Name: "first item",
            Number: 1
            })
        item.save()

        fetchResult = item.fetch()

        ok(false, "check if tables created created.")

