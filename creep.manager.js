const roleHarvester = require('role.harvester')
const roleUpgrader = require('role.upgrader')
const roleBuilder = require('role.builder')

const creepSpawner = {
  run() {
    for (const name in Game.creeps) {
      const creep = Game.creeps[name]
      if (creep.memory.role == 'harvester') {
        roleHarvester.run(creep)
      }
      if (creep.memory.role == 'upgrader') {
        roleUpgrader.run(creep)
      }

      if (creep.memory.role == 'builder') {
        roleBuilder.run(creep)
      }
    }
  },
}

module.exports = creepSpawner
