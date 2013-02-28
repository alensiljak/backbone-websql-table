# Written as a Require.js module.

define [], () ->
    class WebSqlTableStore
        tableName: null

        constructor: (@db, @model, initSuccessCallback, initErrorCallback) ->
            success = (tx,res) ->
                if initSuccessCallback then initSuccessCallback()
            
            error = (tx,error) ->
                window.console.error("Error while create table",error)
                if initErrorCallback then initErrorCallback()
            
            @createTable(@model)

        createTable: (model) ->
            if not model then console.error "Model not passed for store initialization!"
            
            console.debug "creating table"
            @tableName = typeof(model)
            # todo: create fields for every model attribute.
            for attribute in model
                console.log attribute
            @_executeSql("CREATE TABLE IF NOT EXISTS `" + tableName + "` (`id` unique, `value`);",null,success, error)

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