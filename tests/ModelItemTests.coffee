
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

