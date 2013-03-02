# Written as a Require.js module.

define ['underscore'], (_) ->
    class Guid
        constructor: ->

        # function for generating "random" id of objects in DB
        S4: ->
           return (((1+Math.random())*0x10000)|0).toString(16).substring(1);

        #function guid() {
        #   return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
        #}
        # Generate a pseudo-GUID by concatenating random hexadecimals
        #  matching GUID version 4 and the standard variant.
        VERSION_VALUE = 0x4; # Bits to set
        VERSION_CLEAR = 0x0; # Bits to clear
        VARIANT_VALUE = 0x8; # Bits to set for Standard variant (10x)
        VARIANT_CLEAR = 0x3; # Bits to clear
        guid: ->
            data3_version = @S4()
            data3_version = (parseInt( data3_version.charAt( 0 ), 16 ) & VERSION_CLEAR | VERSION_VALUE).toString( 16 ) \
                + data3_version.substr( 1, 3 );
            data4_variant = @S4()
            data4_variant = data4_variant.substr( 0, 2 ) \
                + (parseInt( data4_variant.charAt( 2 ), 16 ) & VARIANT_CLEAR | VARIANT_VALUE).toString( 16 ) \
                + data4_variant.substr( 3, 1 );
            newGuid =  @S4() + @S4() + '-' + @S4() + '-' + data3_version + '-' + data4_variant + '-' + @S4() + @S4() + @S4()
            return newGuid

    class WebSqlTableStore
        tableName: ""

        #
        # static methods
        #

        @sync = (method, model, options) ->
            #console.log "sync:", method, model, options
            #console.log "sync"
            if not model.store 
                store = new WebSqlTableStore(model, options)
                #stores.push store
                #model.store = store
            #store = WebSqlTableStore.getStoreForModel(model, options)

            switch method
                when "read"
                    console.log "sync: read"

                    findSuccess = (tx, res) ->
                        console.log "find success", res.rows.length
                        len = res.rows.length;
                        if len > 0
                            #result = JSON.parse(res.rows.item(0).value)
                            result = res.rows.item(0)
                        
                        options.success(result);

                    findError = ->
                        console.error "find error"

                    if model.attributes and model.attributes[model.idAttribute]
                        #store.find model, options.success, options.error
                        store.find model, findSuccess, findError
                    else
                        store.findAll model, options.success, options.error
                when "create"
                    console.log "sync: create"
                    store.create model, options.success, options.error
                when "update"
                    console.log "sync: update"
                    store.update model, options
                when "delete"
                    console.log "sync: delete"
                    store.delete model, options.success, options.error

        #
        # class methods
        #

        constructor: (@model, options) ->
            @model.store = @

            # create table if required
            defaultOptions = @getDefaultOptions()
            _.defaults(options, defaultOptions)

            # Set table name from model's type
            @tableName = model.constructor.name
            options.tableName = @tableName

            @db = @openDatabase(options)

            @createTable(@model, options)

        createTable: (model, options) ->
            if not model then console.error "Model not passed for store initialization!"
            #console.debug "create table"

            fields = @getFieldsFrom(model)
            # remove id field as we have to specify it as unique.
            _(fields).reject( (el) ->
                return el == "id" 
            )
            fieldsString = @getFieldsString fields

            success = (tx, resultSet) ->
                # check 'arguments' to see all arguments passed into the function.
                console.log "table create success"
                #if options.success then options.success()
            
            error = (tx, error) ->
                window.console.error("Error while create table", error)
                #if options.error then options.error()

            sql = "CREATE TABLE IF NOT EXISTS '" + options.tableName + "' ('id' unique, " + fieldsString + ");"
            @_executeSql(sql, null, success, error)

        create: (model, success, error) ->
            # when you want use your id as identifier, use apiid attribute
            if not model.attributes[model.idAttribute]
                # Reference model.attributes.apiid for backward compatibility.
                obj = {};
                if model.attributes.apiid 
                    id = model.attributes.apiid 
                else 
                    guid = new Guid()
                    id = guid.guid()
                obj[model.idAttribute] = id
                model.set(obj);

            fields = @getFieldsFrom(model)
            fieldsString = @getFieldsString(fields)
            #valuesString = @getModelValuesString(model)
            values = @getModelAttributes(model)
            fieldsPlaceholder = @getFieldsPlaceholder(fields)
            sql = "INSERT INTO '" + model.store.tableName + "' (" + fieldsString + ") VALUES (" + fieldsPlaceholder + ");"
            #@_executeSql sql, [model.attributes[model.idAttribute], JSON.stringify(model.toJSON())], success, error
            @_executeSql sql, values, success, error

        delete: (model, success, error) ->
            # window.console.log("sql destroy");
            id = model.attributes[model.idAttribute] or model.attributes.id
            sql = "DELETE FROM '" + @tableName + "' WHERE (id=?);"
            @_executeSql sql,[model.attributes[model.idAttribute]], success, error

        getDefaultOptions: ->
            options = {
                success: ->
                    console.log "default options, success"
                error: ->
                    console.log "default options, error"
                databaseName: "BackboneWebSqlDb"
                tableName: "DefaultTable"
                dbVersion: "1.0"
                dbSize: 1000000
            }

        getFieldsFrom: (model) ->
            if not model then throw { name: "InvalidArgumentException", message: "Model not passed to getFieldsFrom." }
            # create fields for every model attribute.
            fields = []
            for key of model.attributes
                #if key != "id" 
                fields.push key
                #console.log key
            #console.log fields
            return fields

        getFieldsString: (fields) ->
            # generate string
            fieldsString = ""
            for field, index in fields
                if index == 0
                    fieldsString += "'" + field + "'"
                else
                    fieldsString += ",'" + field + "'"
            #console.debug fieldsString

            return fieldsString

        getFieldsPlaceholder: (fields) ->
            # return "?, ?" string for Insert statement.
            result = ""
            for key, index in fields
                if index == 0
                    result += "?"
                else
                    #if key != 'id'
                    result += ",?"
            return result

        getModelAttributes: (model) ->
            values = []
            for key of model.attributes
                #if key != "id" 
                values.push model.get(key)

            return values

        # not used
        getModelValuesString: (model) ->
            values = @getModelAttributes(model)

            # generate string
            valuesString = ""
            for value in values
                valuesString += ",'" + value + "'"

            return valuesString

        find: (model, success, error) ->
            #window.console.log("sql find");
            id = model.attributes[model.idAttribute] || model.attributes.id
            sql = "SELECT * FROM '" + this.tableName + "' WHERE (id=?);"

            @_executeSql sql, [id], success, error

        findAll: (model, success,error) ->
            # window.console.log("sql findAll");
            sql = "SELECT * FROM '" + this.tableName + "';"
            @_executeSql sql, null, success, error

        openDatabase: (options) ->
            if not @db 
                @databaseName = options.databaseName
                @db = window.openDatabase(@databaseName, options.dbVersion, @databaseName, options.dbSize);
            return @db

        _executeSql: (sql, params, success, error) ->
            success = success or (tx,result) ->
                #if WebSQLStore.debug {window.console.log(SQL, params, " - finished");}
                #if successCallback then successCallback(tx,result)
                console.log "executeSql success"
            
            error = error or (tx, error) ->
                #if WebSQLStore.debug 
                #    window.console.error(SQL, params, " - error: " + error)
                console.error error
                #if errorCallback then errorCallback(tx,error)
            
            txSuccess = ->
                # console.log "tx success"
            txError = ->
                # console.log "tx error"

            @db.transaction (tx) =>
                console.debug "running on", @databaseName, @tableName, ":", sql, "with params", params

                tx.executeSql(sql, params, success, error)
            , txError, txSuccess

        update: (model, options) ->
            console.error "not implemented"

            id = model.attributes[model.idAttribute] or model.attributes.id
            sql = "UPDATE '" + @tableName + "' SET `value`=? WHERE(`id`=?);"
            @_executeSql sql,[JSON.stringify(model.toJSON()), model.attributes[model.idAttribute]], success, error
    
    return WebSqlTableStore