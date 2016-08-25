#!/usr/bin/env node
var ghpages = require("gh-pages");
var path = require("path");

console.log(process.argv)

if (process.argv.length < 3) {
  console.log("Source dir isn't defined");
}

ghpages.publish(path.join(__dirname, proccess.arg[2]));
