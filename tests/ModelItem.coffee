# Model item for testing.
###
    Model must have properties that define its location in storage.
###
define ['backbone', '../src/backbone-websql-table'], (Backbone, BackboneWebsqlTable) ->
    class ModelItem extends Backbone.Model
        defaults: {
            Name: ""
            Number: 0
            PhoneNumber: 0
        }

        initialize: (attributes, options) ->
            @sync = BackboneWebsqlTable.sync

            #@store = @initializeDataStore(options)

        createDefaultDbOptions: ->
            options = {
                databaseName: "WebsqlStore"
                tableName: "ModelItem"
            }
            return options

        initializeDataStore: (options) ->
            # initialize store required by Backbone webSql
            defaultOptions = @createDefaultDbOptions()
            _.defaults(options, defaultOptions)

            options.success = ->
                console.log "initSuccessCallback"
            options.error = ->
                console.log "initErrorCallback"

            #store = new Backbone.WebSQLStore(db, tableName, initSuccessCallback, initErrorCallback)
            store = new BackboneWebsqlTable(@, options)
            return store

    return ModelItem