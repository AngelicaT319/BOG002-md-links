#! /usr/bin/env node
"use strict";

const mdLink = require("./md-links.js");

const program = require("commander");

const cli = (name, options, command) => {
  if (options.validate || options.stats) {
    if (options.validate) {
      mdLink.validateLinks(name, { validate: true });
    }
    if (options.stats) {
      mdLink.statusLinks(name);
    }
    return;
  } else {
    mdLink.irDirectorio(name);
  }
};

program
  .version("0.1.0")
  .arguments("<path>")
  .option("-v, --validate")
  .option("-s, --stats")
  .action(cli);
program.parse(process.argv);
