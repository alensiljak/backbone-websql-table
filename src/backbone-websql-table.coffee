# Written as a Require.js module.

define ['underscore'], (_) ->
    class WebSqlTableStore
        constructor: (@model, options) ->
            # create table if required
            defaultOptions = @getDefaultOptions()
            _.extend(options, defaultOptions)
            options.tableName = model.constructor.name

            @openDatabase(options)

            @createTable(options)

        getDefaultOptions: ->
            options = {
                success: ->
                    console.log "success"
                error: ->
                    console.log "error"
                databaseName: "BackboneWebSqlDb"
                tableName: "DefaultTable"
                dbVersion: "1.0"
                dbSize: 1000000
            }

        createTable: (options) ->
            if not @model then console.error "Model not passed for store initialization!"
            console.debug "creating table"

            # todo: create fields for every model attribute.
            fields = []
            for key of @model.attributes
                if key != "id" 
                    fields.push key
                #console.log key
            #console.log fields

            # todo: generate string
            fieldsString = ""
            for field in fields
                fieldsString += ",'" + field + "'"
            console.debug fieldsString

            success = (tx,res) ->
                if options.success then options.success()
            
            error = (tx,error) ->
                window.console.error("Error while create table",error)
                if options.error then options.error()

            @_executeSql("CREATE TABLE IF NOT EXISTS `" + options.tableName + "` (`id` unique, `value`);", \
                null, success, error)

        openDatabase: (options) ->
            if not @db 
                @db = window.openDatabase(options.databaseName, options.dbVersion, options.databaseName, options.dbSize);
            return @db

        _executeSql: (SQL, params, successCallback, errorCallback) ->
            success = (tx,result) ->
                #if WebSQLStore.debug {window.console.log(SQL, params, " - finished");}
                if successCallback then successCallback(tx,result)
            
            error = (tx,error) ->
                #if WebSQLStore.debug 
                #    window.console.error(SQL, params, " - error: " + error)
                if errorCallback then errorCallback(tx,error)
            
            @db.transaction( (tx) ->
                tx.executeSql(SQL, params, success, error)
            )

    return WebSqlTableStore