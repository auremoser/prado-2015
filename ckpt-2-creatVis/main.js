window.onload = function() {
    var vizjson_url = 'https://team.cartodb.com/u/aureliamoser/api/v2/viz/f2735936-f268-11e4-8858-0e853d047bba/viz.json'; // <-- Paste viz.json URL between quotes

    cartodb.createVis(map, vizjson_url) // <-- Change map_id to match your id in html
        .done(function(vis, layers) {
            // do stuff
            console.log("Map successfully created");
        })
        .error(function(err) {
            // report error
            console.log("An error occurred: " + err);
        });
}