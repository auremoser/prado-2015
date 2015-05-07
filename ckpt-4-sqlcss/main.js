window.onload = function() {
    var vizjson_url = 'https://team.cartodb.com/u/aureliamoser/api/v2/viz/f2735936-f268-11e4-8858-0e853d047bba/viz.json'; // <-- Paste viz.json URL between quotes

       // ADD JQUERY TEMPLATE OPTIONS
        var options = {
            sql: $("#sql").text(), // here you can set sql to run on your tables
            cartocss: $("#choropleth").text() // here you can set css to style your choropleth
        }
        // CLEAR SQL OF SPACES/RETURNS
        options.sql = options.sql.replace(/(\r\n|\n|\r)/gm,'').trim();

        var sublayers = [];

       // instantiate map object from Leaflet
       var mapObj = new L.Map(map, {
           center: [41.3833, 2.1833], // Barcelona, Spain
           zoom: 13 // zoom projection to adjust starting point zoom
       });


       // add basemap tiles
       L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png', {
           attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
       }).addTo(mapObj);

       // add data tile layers here (if you have multiple layers, you can manipulate them in js here)
       cartodb.createLayer(mapObj,vizjson_url)
           .addTo(mapObj)
           .done(function(layer) {
               console.log("Map successfully created.");
               sublayers[0] = layer.getSubLayer(0);
               sublayers[1] = layer.getSubLayer(1);
               sublayers[2] = layer.getSubLayer(2);
               sublayers[0].set(options); // altering the SQL and CartoCSS; see above
               sublayers[1].hide(); // hiding the station line data
               sublayers[2].hide(); // hiding the station point data
           })
           .error(function(err) {
               console.log("Map not created: " + err);
           });
    }