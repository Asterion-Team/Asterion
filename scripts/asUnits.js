//НЕ ПОНИМАЕШЬ. НЕ ТРОШЬ БЛЯТЬ - R.O.T.
//не крычы на ​​мяне :( - AnDashik
//Core units
const attraction = extend(UnitType, "attraction", {});
attraction.constructor = () => extend(UnitEntity, {});

const magnetism = extend(UnitType, "magnetism", {});
magnetism.constructor = () => extend(UnitEntity, {});

const gravity = extend(UnitType, "gravity", {});
gravity.constructor = () => extend(UnitEntity, {});

//Orion (Hunter) units
const varan = extend(UnitType, "varan", {});
varan.constructor = () => extend(MechUnit, {});

const piranha = extend(UnitType, "piranha", {});
piranha.constructor = () => extend(MechUnit, {});

const vulture = extend(UnitType, "vulture", {});
vulture.constructor = () => extend(MechUnit, {});

const scorpion = extend(UnitType, "scorpion", {});
scorpion.constructor = () => extend(MechUnit, {});

const raptor = extend(UnitType, "raptor", {});
raptor.constructor = () => extend(MechUnit, {});

const glava = extend(UnitType, "glava", {});
glava.constructor = () => extend(MechUnit, {});

const zodiac = extend(UnitType, "zodiac", {});
zodiac.constructor = () => extend(MechUnit, {});

// Extinct units
const mist = extend(UnitType, "mist", {});
mist.constructor = () => extend(TankUnit, {});

const twilight = extend(UnitType, "twilight", {});
twilight.constructor = () => extend(TankUnit, {});

const clearance = extend(UnitType, "clearance", {});
clearance.constructor = () => extend(TankUnit, {});

const sunrise = extend(UnitType, "sunrise", {});
sunrise.constructor = () => extend(TankUnit, {});

const dawn = extend(UnitType, "dawn", {});
dawn.constructor = () => extend(TankUnit, {});

//Pyro units
const spark = extend(UnitType, "spark-u", {});
spark.constructor = () => extend(MechUnit, {});

const explosion = extend(UnitType, "explosion", {});
explosion.constructor = () => extend(LegsUnit, {});

const fault = extend(UnitType, "fault", {});
fault.constructor = () => extend(LegsUnit, {});

const rumble = extend(UnitType, "rumble", {});
rumble.constructor = () => extend(LegsUnit, {});

const baby = extend(UnitType, "baby", {});
baby.constructor = () => extend(LegsUnit, {});

const explosionV1 = extend(UnitType, "explosion-v1", {});
explosionV1.constructor = () => extend(LegsUnit, {});

const fire = extend(UnitType, "fire", {});
fire.constructor = () => extend(UnitEntity, {});

//Techo units
const instant = extend(UnitType, "instant", {});
instant.constructor = () => extend(ElevationMoveUnit, {});

const blink = extend(UnitType, "blink", {});
blink.constructor = () => extend(ElevationMoveUnit, {});

const moment = extend(UnitType, "moment", {});
moment.constructor = () => extend(ElevationMoveUnit, {});

const kron = extend(UnitType, "kron", {});
kron.constructor = () => extend(UnitEntity, {});

const period = extend(UnitType, "period", {});
period.constructor = () => extend(UnitEntity, {});

const sentry = extend(UnitType, "sentry", {});
sentry.constructor = () => extend(UnitEntity, {});
