/**
 * genopti.config.js
 * Contains the configuration for the Optimizely Generator
 */

require("dotenv").config();

// Create a .env file and add environment variables in this config. For example 'process.env.AUTH_TOKEN'

module.exports = {
  optimizely: {
    projects: [],
  },

  // Input configuation
  prompts: {
    config: {
      childFolders: [],
      developers: [],
      homepageUrl: "https://www.optimizely.com/",
      testIdExample: "Opti-1",
      testNameExample: "My First Optimizely Test",
    },
    files: {
      html: {
        showInPrompts: true,
        checkedByDefault: true,
      },
      shared: {
        showInPrompts: true,
        checkedByDefault: true,
      },
      control: {
        showInPrompts: true,
        checkedByDefault: true,
      },
      variation: {
        showInPrompts: true,
        checkedByDefault: true,
      },
      js: {
        showInPrompts: true,
        checkedByDefault: true,
      },
      css: {
        showInPrompts: false,
        checkedByDefault: true,
      },
      readme: {
        showInPrompts: true,
        checkedByDefault: true,
        fileExtension: "md",
        singleFile: true,
      },
      scss: {
        showInPrompts: true,
        checkedByDefault: false,
      },
      tampermonkey: {
        showInPrompts: false,
        checkedByDefault: false,
        fileExtension: "js",
      },
      cypress: {
        showInPrompts: false,
        checkedByDefault: false,
        singleFile: true,
        fileExtension: "js",
      },
    },
  },

  // Output configuation
  output: {
    destination: "_tests",
    localhost: "",
  },

  // Custom Templates
  templates: {
    customDirectory: "_templates",
  },
};
