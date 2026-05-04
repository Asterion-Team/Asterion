require("asAttributes");
require("asUnits");
require("asBlocks");
require("asTurrets");

let yourlasttick = Vars.tree.loadMusic("yourlasttick");
let ascendancy = Vars.tree.loadMusic("ascendancy");
let fearintheair = Vars.tree.loadMusic("fearintheair");
let importantTerritory = Vars.tree.loadMusic("importantTerritory");


Events.on(ClientLoadEvent, e => {
	Vars.control.sound.darkMusic.add(yourlasttick);
	Vars.control.sound.ambientMusic.add(fearintheair);
	Vars.control.sound.ambientMusic.add(importantTerritory);
	// Vars.control.sound.bossMusic.add(ascendancy); this will be on some important sectors.
});