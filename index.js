#!/usr/bin/env node
const path = require('path')
const { marked } = require('marked')
const fs = require('fs')
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const { getPackageName } = require('./lib/name')
const { readMarkdownFileSync, writeHtmlFileSync } = require('./lib/file')

//const { argv } = require('process');

const { argv } = yargs(hideBin(process.argv))
    .option('name', {
      describe: 'show the CLI'
    })
    .option('file', {
      describe: 'path of markdown'
    })
    .option('out', {
      describe: 'html file',
      default: 'article.html'
    });

    if (argv.name) {
      const name = getPackageName();
      process.exit(0);
    }


    // read a markdown file
    const markdownStr = readMarkdownFileSync(path.resolve(__dirname, argv.file));
    const html = marked(markdownStr);
    console.log(markdownStr);

    //Write into html file
    writeHtmlFileSync(path.resolve(__dirname, argv.out), html);

//name option
/* const nameOption = process.argv.includes('--name');

if (nameOption) {
 console.log(package.name);
} else {
  console.log('no option');
} */

/* if (argv.file) {
  console.log(argv.file);
} else if (argv.name) {
  console.log(package.name)
} else {
  console.log('no option');
} */
