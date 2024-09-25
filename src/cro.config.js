/**
 * cro.config.js
 * Contains the configuration for the Optimizely Generator
 */

require("dotenv").config();

// Create a .env file and add environment variables in this config. For example 'process.env.AUTH_TOKEN'

module.exports = {
  optimizely: {
    testNameFormat:
      "[<%= testId %>][<%= testName %>]",
    projects: [
      {
        project_name: "Production",
        auth_token: "",
        project_id: 0,
        audiences: {},
        default: true,
      },
      {
        project_name: "Staging",
        auth_token: "",
        project_id: 0,
        audiences: {},
      },
    ],
  },

  // Output configuation
  output: {
    destination: "_tests",
    localhost: "http://localhost:3000",
  },

  // Custom Templates
  templates: {
    customDirectory: "_templates",
    defaultCustomTemplate: "tampermonkey-wait",
  },

  // Input configuation
  prompts: {
    config: {
      childFolders: ["checkout", "pdp", "homepage"],
      developers: ["chris", "pushkal", "josh"],
      homepageUrl: "https://www.optimizely.com/",
      testIdExample: "CRO-123",
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
      variables: {
        showInPrompts: true,
        checkedByDefault: true,
        singleFile: true,
        fileExtension: "md",
      },
      scss: {
        showInPrompts: true,
        checkedByDefault: false,
      },
      tampermonkey: {
        showInPrompts: true,
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
  }
};
