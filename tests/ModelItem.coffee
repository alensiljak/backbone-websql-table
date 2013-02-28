# Model item for testing.
###
    Model must have properties that define its location in storage.
###
define ['backbone', '../src/backbone-websql-table'], (Backbone, BackboneWebsqlTable) ->
    class ModelItem extends Backbone.Model
        # required
        dbName: "WebsqlStore"
        tableName: "ModelItem"

        # standard model properties, for test only.
        Name: ""
        PhoneNumber: 0

        initialize: ->
            @store = @initializeDataStore()

        createDefaultDbOptions: ->
            options = {

            }
            return options

        initializeDataStore: ->
            # initialize store required by Backbone webSql
            tableName = "Item"
            options = @createDefaultDbOptions()
            options.success = ->
                console.log "initSuccessCallback"
            options.error = ->
                console.log "initErrorCallback"

            #store = new Backbone.WebSQLStore(db, tableName, initSuccessCallback, initErrorCallback)
            store = new BackboneWebsqlTable(@, options)
            return store

    return ModelItem