
module.exports = exec

var npm = require("../npm.js")
  , path = require("path")
  , log = require("./utils/log.js")
  , exec_ = require("./utils/exec.js")

exec.usage = "npm exec -- <cmd>"
