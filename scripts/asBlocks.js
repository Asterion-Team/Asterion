// Логистика. Logistic
// Взят пример из sapphirum
//пример: const "имя объекта" = extend("Класс", "инициалы объекта json", {});

const whitoriteDuct = extend(Duct, "whitorite-duct", {});

const whitoriteDuctBridge = extend(DuctBridge, "whitorite-duct-bridge", {});

const whitoriteJunction = extend(Junction, "whitorite-junction", {});

const whitoriteRouter = extend(Router, "whitorite-router", {});

const whitoriteSorter = extend(Sorter, "whitorite-sorter", {});

const whitoriteInvertedSorter = extend(Sorter, "whitorite-inverted-sorter", {});

const whitoriteGateway = extend(OverflowGate, "whitorite-gateway", {});

const whitoriteInvertedGateway = extend(OverflowGate, "whitorite-inverted-gateway", {});

const magnetiteConveyor = extend(StackConveyor,"magnetite-conveyor", {});

const whitoriteUnloader = extend(Unloader, "whitorite-unloader", {});

// Liquid 

const irmeniteConduit = extend(Conduit, "irmenite-conduit", {});

const irmeniteBridge = extend(DirectionLiquidBridge, "irmenite-bridge", {});

const irmeniteRouter = extend(LiquidRouter, "irmenite-router", {});

const irmeniteJunction = extend(LiquidJunction, "irmenite-junction", {});

const irmenitePump = extend(Pump, "irmenite-pump", {});

const irmeniteTank = extend(LiquidRouter, "irmenite-tank", {});


// Walls, Стены (НУ А ХУЛЕ)

const whitoriteWall = extend(Wall, "whitorite-wall", {});

const whitoriteWallLarge = extend(Wall, "whitorite-wall-large", {});

const irmeniteWall = extend(Wall, "irmenite-wall", {});

const irmeniteWallLarge = extend(Wall, "irmenite-wall-large", {});

const magnetiteWall = extend(Wall, "magnetite-wall", {});

const magnetiteWallLarge = extend(Wall, "magnetite-wall-large", {});

const silicateWall = extend(Wall, "silicate-wall", {
    setStats() {
        this.super$setStats();
        this.stats.add(Stat.repairTime, 100 / 2 * 250 / 60, StatUnit.seconds);
    }
});
silicateWall.buildType = () => extend(Wall.WallBuild, silicateWall, {
        time: 0,
        updateTile(){
        this.super$updateTile();
            this.time += 1;
            if (this.damaged() && this.time >= 250 && this.canConsume()) {
                this.time = 0;
                this.heal(this.maxHealth * 0.02);
                Fx.healBlockFull.at(this.x, this.y, this.block.size, Color.valueOf("ef9ef5"), this.block);
            }
        }
})

const silicateWallLarge = extend(Wall, "silicate-wall-large", {
    setStats() {
        this.super$setStats();
        this.stats.add(Stat.repairTime, 100 / 2 * 250 / 60, StatUnit.seconds);
    }
});
silicateWallLarge.buildType = () => extend(Wall.WallBuild, silicateWallLarge, {
        time: 0,
    updateTile(){
        this.super$updateTile();
        this.time += 1;
        if (this.damaged() && this.time >= 250 && this.canConsume()) {
        this.time = 0;
        this.heal(this.maxHealth * 0.02);
        Fx.healBlockFull.at(this.x, this.y, this.block.size, Color.valueOf("ef9ef5"), this.block);
    }
  }
});


//Crafting
const irmeniteOven = extend(GenericCrafter, "irmenite-oven", {});

const ashotitePress = extend(AttributeCrafter, "ashotite-press", {});

const blacktiteSmelter = extend(GenericCrafter, "blacktite-smelter", {});

const zionitiumPress = extend(GenericCrafter, "zionitium-press", {});


//Production

const impulseDrill = extend(BurstDrill, "impulse-drill", {});

const rotaryDrill = extend(Drill, "rotary-drill", {});

const methaneExtractor = extend(AttributeCrafter, "methane-extractor", {});

const zionMixer = extend(GenericCrafter, "zion-synthesizer", {});

const magnetiteDeepDrill = extend(AttributeCrafter, "magnetite-deep-drill", {});


//Energetic

const whitoriteBeamNode = extend(BeamNode, "whitorite-beam-node", {});

const ventBurner = extend(ThermalGenerator, "vent-burner", {});

const burnGenerator = extend(ConsumeGenerator, "burn-generator", {});