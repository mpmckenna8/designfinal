$(document).ready(function(){

mapboxgl.accessToken = "pk.eyJ1IjoibXBtY2tlbm5hOCIsImEiOiJfYWx3RlJZIn0.v-vrWv_t1ytntvWpeePhgQ";

var map = new mapboxgl.Map({
    container: 'map',
    center: [ 41.73033005046653,  -73.218994140625 ],
    style: {
  "version": 8,
  "sprite": "sprite",
  "glyphs": "https://mapbox.s3.amazonaws.com/gl-glyphs-256/{fontstack}/{range}.pbf",
  "sources": {
    "mapbox": {
      "type": "vector",
      "url": "mapbox://mapbox.mapbox-terrain-v1,mapbox.mapbox-streets-v6-dev",
    }
  },
  "layers": [
    {
      "id": "background",
      "type": "background",
      "paint": {
        "background-color": "#bdbdbd"
      }
    },
  {
    "id": "water",
    "type": "fill",
    "source": "mapbox",
     "source-layer": "water",

    "layout": {
      "visibility": "visible"
    },
    "paint": {
      "fill-pattern": "wata"
    },
    "metadata": {
    }
  },

{
"id": "snow",
"type": "fill",
"source": "mapbox",
"source-layer": "landcover",
"filter": [
  "==",
  "class",
  "snow"
],
"layout": {
  "visibility": "visible"
},
"paint": {
  "fill-pattern": "redsie",
//"fill-color":"orange",
  "fill-opacity": 1
},
"metadata": {
  "mapbox:group": "144423"
}
},
{
"id": "landcover_crop",
"type": "fill",
"source": "mapbox",
"source-layer": "landcover",
"filter": [
  "==",
  "class",
  "crop"
],
"layout": {
  "visibility": "visible"
},
"paint": {
  "fill-pattern": "wood",
  "fill-opacity": 1
},
"metadata": {
  "mapbox:group": "1444850978189.4492"
}
},
{
"id": "sand",
"type": "fill",
"source": "mapbox",
"source-layer": "landcover",
"filter": [
  "==",
  "class",
  "sand"
],
"layout": {
  "visibility": "visible"
},
"paint": {
  "fill-pattern": "redsie",
  "fill-opacity": 1
},
"metadata": {
  "mapbox:group": "1444850978189.4492"
}
},

{
"id": "residential",
"type": "fill",
"source": "mapbox",
"source-layer": "landcover",
"filter": [
  "==",
  "class",
  "residential"
],
"layout": {
  "visibility": "visible"
},
"paint": {
  "fill-pattern": "landsie",
  "fill-opacity": 1
},
"metadata": {
}
},

{
"id": "grasser",
"type": "fill",
"source": "mapbox",
"source-layer": "building",

"layout": {
  "visibility": "visible"
},
"paint": {
  "fill-pattern": "landsie",
  "fill-opacity": 1
},
"metadata": {
}
},
{
"id": "wooder",
"type": "fill",
"source": "mapbox",
"source-layer": "landcover",
"filter": [
  "==",
  "class",
  "wood"
],
"layout": {
  "visibility": "visible"
},
"paint": {
  "fill-pattern": "wood",
  "fill-opacity": 1
},
"metadata": {
}
},
{
"id": "scrub",
"type": "fill",
"source": "mapbox",
"source-layer": "landcover",
"filter": [
  "==",
  "class",
  "scrub"
],
"layout": {
  "visibility": "visible"
},
"paint": {
  "fill-pattern": "landsie",
  "fill-opacity": 1
},
"metadata": {
}
},

{
   "id": "admin_country",
   "type": "line",
   "source": "mapbox",
   "source-layer": "admin",
   "filter": [
     "all",
     [
       "==",
       "$type",
       "LineString"
     ],
     [
       "all",
       [
         "<=",
         "admin_level",
         4
       ],
       [
         "==",
         "maritime",
         0
       ]
     ]
   ],
   "layout": {
     "line-cap": "round",
     "line-join": "round"
   },
   "paint": {
     "line-color": "black",
     "line-width": {
       "base": 4.3,
       "stops": [
         [
           3,
           0.5
         ],
         [
           22,
           15
         ]
       ]
     }
   }
 },
  /*


*/
  ]
},
    hash: true
});

/*
map.panTo([42.7736,-71.9749],{
//  center: [ 41.73033005046653,  -93.218994140625 ],
  duration:2000
  //zoom:10,
  //speed:.1
})

*/
var counter = 0;
var going = [-93.218994140625,41.73033005046653];
var heyo = [going, [
          -71.0663,
          42.3124
        ],
        [ -122.4529480934143,
          37.72520971693059
        ]
      ];

  function hopper(){
        console.log(heyo)
        console.log('blap')

        if(counter+1 < heyo.length){
        later(heyo[counter+1]);
        counter++;
      }
      else{
        var lati = Math.random() * 360 - 180;
        console.log(lati);
        var longi = Math.random() * 180 - 90;
        later([lati,longi])
        window.clearInterval();
      }

}

  later(heyo[0]);

window.setInterval(hopper, 15000 );



//later(going);

function later(going){
  //console.log('onto later')
    map.flyTo({
     // These options control the ending camera position: centered at
     // the target, at zoom level 9, and north up.
     center: going,
     zoom: 16,
     bearing: 0,

     // These options control the flight curve, making it move
     // slowly and zoom out almost completely before starting
     // to pan.
     speed: 1.1, // make the flying slow
     curve: 1, // change the speed at which it zooms out

     // This can be any easing function: it takes a number between
     // 0 and 1 and returns another number between 0 and 1.
     easing: function (t) {
         return t;
     }
 });


 }

});
