#! /usr/bin/env node


const mdLink = require("./md-links.js");

const program = require("commander");

const cli = (name, options, command) => {
  if (options.validate || options.stats) {
    if (options.validate) {
      mdLink.mdLinks.validateLinks(name, { validate: true });
    }
    if (options.stats) {
      mdLink.mdLinks.statusLinks(name);
    }
    return;
  } else {
    mdLink.mdLinks.irDirectorio(name);
  }
};

program
  .version("0.1.0")
  .arguments("<path>")
  .option("-v, --validate")
  .option("-s, --stats")
  .action(cli);
program.parse(process.argv);
