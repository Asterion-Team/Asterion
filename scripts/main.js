require("asAttributes");
require("asUnits");
require("asBlocks");
// require("asTurrets");
require("asFactions")

let yourLastTick = Vars.tree.loadMusic("yourLastTick");
let ascendancy = Vars.tree.loadMusic("ascendancy");
let fearInTheAir = Vars.tree.loadMusic("fearInTheAir");
let importantTerritory = Vars.tree.loadMusic("importantTerritory");
let oldBossArray = Vars.control.sound.bossMusic


Events.on(ClientLoadEvent, e => {
	Vars.control.sound.darkMusic.add(yourLastTick);
	Vars.control.sound.darkMusic.add(importantTerritory);
	Vars.control.sound.ambientMusic.add(fearInTheAir);
	// Vars.control.sound.bossMusic.add(ascendancy); this will be on some important sectors.
});

/* 
Events.on(WorldLoadEvent, e => {
	// Vars.control.sound.bossMusic = Seq.with(ascendancy, ascendancy);
});
*/