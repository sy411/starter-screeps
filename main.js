const creepSpawner = require('creep.spawner')
const creepManager = require('creep.manager')
const clearMemory = require('clearMemory')

module.exports.loop = function() {
  clearMemory()
  creepSpawner.run()
  creepManager.run()
}
