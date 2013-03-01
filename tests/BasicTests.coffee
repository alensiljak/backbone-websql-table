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

    test "save and load Item", () ->
        onLoad = (model, response, options) ->
            console.log "item loaded"
            ok(model.id, "item does not have id.")

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
            success: -> onSave
            error: ->
                console.log "error on save"
        }

        item = new ModelItem({
            #id: "testItem"
            Name: "first item",
            Number: 1
            })
        item.save(null, options)

    test "two models", () ->
        # check whether there is db locking by per-model store
        item = new ModelItem()
        item.save()

        item2 = new ModelItem()
        item2.save()

        # todo: also try 2 different models
        #ok(true, "unfinished")
        expect 0