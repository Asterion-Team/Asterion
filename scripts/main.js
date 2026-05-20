require("asAttributes");
require("asUnits");
require("asBlocks");
require("asTurrets");
require("asFactions")

let yourlasttick = Vars.tree.loadMusic("yourLastTick");
let ascendancy = Vars.tree.loadMusic("ascendancy");
let fearintheair = Vars.tree.loadMusic("fearInTheAir");
let importantTerritory = Vars.tree.loadMusic("importantTerritory");
let oldBossArray = Vars.control.sound.bossMusic


Events.on(ClientLoadEvent, e => {
	Vars.control.sound.darkMusic.add(yourlasttick);
	Vars.control.sound.ambientMusic.add(fearintheair);
	Vars.control.sound.ambientMusic.add(importantTerritory);
	// Vars.control.sound.bossMusic.add(ascendancy); this will be on some important sectors.
<<<<<<< Updated upstream
});
=======
});

/* 
Events.on(WorldLoadEvent, e => {
	// Vars.control.sound.bossMusic = Seq.with(ascendancy, ascendancy);
});
*/
>>>>>>> Stashed changes
