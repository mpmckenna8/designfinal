Experimental cartography using photographs as textures using MapboxGL.js and
more or less copying Mapmeld's way cooler Van Gogh Map
https://github.com/mapmeld/van-gogh-map

Completed for a Design 101 portrait project at CCSF this map uses a spritesheet
to generate textures and uses the flyTo() function to hop to a few important
spots from my subjects life.  The photographs from which the textures were taken
are taken from one of my subjects social media profiles.


Some issues:

Stylesheets have changed a bunch since any of the other examples of fextures in
your custom map.

Size of the spritesheet that you're able to utilize seems to max out at 1000 or
something.

Things are still a little jenky, should try to see if I could smooth things out
a little and use smarter transitions than setInterval.


