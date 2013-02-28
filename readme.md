Backbone WebSQL Table adapter

Intended for use with PhoneGap, Backbone, and WebSQL.
This adapter plugs into Backbone so that collections and models synchronize with WebSQL storage. This is offered by PhoneGap as the default storage method, provided by Android WebView.

The approach taken is to store each model's value into a separate column so that all benefits of relational storage are available, like filtering per attribute and fetching related entities.

