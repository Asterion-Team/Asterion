const factionResemblance = extend(Wall, "faction-resemblance", {
    setStats() {
        this.super$setStats();
        this.stats.remove(Stat.health);
        this.stats.remove(Stat.size);
    }
});
const factionOrion = extend(Wall, "faction-orion", {
    setStats() {
        this.super$setStats();
        this.stats.remove(Stat.health);
        this.stats.remove(Stat.size);
    }
});
const factionPyro = extend(Wall, "faction-pyro", {
    setStats() {
        this.super$setStats();
        this.stats.remove(Stat.health);
        this.stats.remove(Stat.size);
    }
});
const factionExtingushed = extend(Wall, "faction-extinguished", {
    setStats() {
        this.super$setStats();
        this.stats.remove(Stat.health);
        this.stats.remove(Stat.size);
    }
});
const factionTechno = extend(Wall, "faction-techno", {
    setStats() {
        this.super$setStats();
        this.stats.remove(Stat.health);
        this.stats.remove(Stat.size);
    }
});