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

    QUnit.test "set db name", ->
        options = {
            databaseName: "TestDatabase"
        }
        item = new ModelItem({
            Name: "item with custom db name"
            }, options)
        expect(0)
        # manually test the table name for now

    asyncTest "custom Db name", ->
        options = {
            databaseName: "TestDatabase"
            success: ->
                start()
                return undefined
        }
        item = new ModelItem({
            #id: "testItem"
            Name: "first item",
            Number: 1
        })
        item.save(null, options)

        # manual test. There should be a db with given name.
        expect 0

    asyncTest "save and load Item", () ->
        onLoad = (model, response, options) ->
            console.log "item loaded"
            ok(model.id, "Item should have an id set.")
            ok model.get('Name') == "first item", "Item's Name should be the one set on Save."
            # continue test
            start()

        onSave = (model, response, options) ->
            console.log "model saved"
            id = model.id

            # reset item
            item = new ModelItem({id: id}, options)
            loadOptions = {
                success: onLoad
            }
            item.fetch(loadOptions)

        options = {
            databaseName: "TestDatabase"
            success: onSave
            error: (model, tx, options) ->
                console.log "error on save"
        }

        # Async test
        #stop()

        item = new ModelItem({
            #id: "testItem"
            Name: "first item",
            Number: 1
            })
        item.save(null, options)

    test "two models", () ->
        # check whether there is db locking by per-model store
        item = new ModelItem()
        #item.save()

        item2 = new ModelItem()
        #item2.save()

        # todo: also try 2 different models
        #ok(true, "unfinished")
        expect 0