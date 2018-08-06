const creepSpawner = {
  run() {
    if (Object.keys(Game.creeps).length < 8) {
      console.log("we have less than eight creeps");

      Game.spawns["Spawn1"].spawnCreep([WORK, CARRY, MOVE], "Upgrader1", {
        memory: { role: "upgrader" }
      });

      Game.spawns["Spawn1"].spawnCreep([WORK, CARRY, MOVE], "Harvester1", {
        memory: { role: "harvester" }
      });

      Game.spawns["Spawn1"].spawnCreep([WORK, CARRY, MOVE], "Harvester2", {
        memory: { role: "harvester" }
      });

      Game.spawns["Spawn1"].spawnCreep([WORK, CARRY, MOVE], "Upgrader2", {
        memory: { role: "upgrader" }
      });
    }
  }
};

module.exports = creepSpawner;
