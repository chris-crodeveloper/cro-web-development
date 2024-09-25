#!/usr/bin/env node

const { Command } = require('commander');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const program = new Command();

program
  .version('1.0.0')
  .description('Create a new CRO development environment')
  .parse(process.argv);


const questions = [
    {
      type: 'input',
      name: 'projectName',
      message: 'Enter the project name:',
      default: 'CRO Project',
    }
  ];

inquirer.prompt(questions).then((answers) => {
  try {

  const projectPath = path.join(process.cwd(), answers.projectName);
  const destinationDir = answers.projectName;
  const sourceDir = path.join(__dirname, '../src');

  // Copy template files to project directory based on user answers
  // You might use a templating engine here to customize the files

  // Copy dirs
  function copyDirectory(src, dest) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    } else {
      console.log(`Project ${projectPath} already exists`);
    }
  
    const items = fs.readdirSync(src);
  
    items.forEach(item => {
      const srcPath = path.join(src, item);
      const destPath = path.join(dest, item);
  
      const stats = fs.statSync(srcPath);
  
      if (stats.isDirectory()) {
        copyDirectory(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    });
  }

  copyDirectory(sourceDir, destinationDir);
  
  console.log(`Project created at ${projectPath}`);
      
} catch (error) {
  console.log(error)
}
});
