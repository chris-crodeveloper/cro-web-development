# CRO Web Development

This is a boilerplate environment for creating local CRO tests.
It uses the NPM package 'generator-cro' to build out templates and webpack to compile tool ready CRO files.

Features

- Quick template generation
- Easily import and reuse code
- Create custom templates
- Configure minification for your needs

## Installation

Install Create CRO App Globally
`npm install -g create-cro-app`

Initialize CRO App - answer questions
`create-cro-app`

Install Yoeman v5 globall
`npm i -g yo@5.0.0`

Install project dependencies
`npm i`

## Setup

Update cro.config.js
1. Update Prompts
    - childFolders - folder names to help organise tests. For example, Homepage, PDP, Checkout. 
    - developers: Names of the developers
    - homepageUrl: A URL to show as a default for tests
    - testIdExample: Example of a test ID, test IDs are used as folder names.
    - testNameExample: Added as meta data for each test
2. Output
    - destination: Output destination for tests
    - localhost: Local host for local server
3. Templates
    - customDirectory: Default to _templates - contains custom templates
    - defaultCustomTemplate: tempalte folder to be used as default
4. Files - only required if using generator-cro
    The files object contains types of files you wish to create for each test through the generator-cro. Add new files to the object for them to appear in the prompts.

If you're using Optimizely follow this guide to setup the Optimizely config // https...

## Running the server and the watcher
1. To run the server and the watcher run:
   `npm run cro`

## Running the CRO Generator
1. Add templates to the template custom directory
2. Run `yo cro`
3. Follow prompts - see video here of demo


Documentation
1. Setting up config file - line by line and video
2. cro-generator - setup and running
3. Templates
4. Local Server
5. Gulp Watcher
6. Utils - npm package 
7. Custom Utils
