/**
 * genopti.config.js
 * Contains the configuration for the Optimizely Generator
 */

require("dotenv").config();

// Create a .env file and add environment variables in this config. For example 'process.env.AUTH_TOKEN'

module.exports = {
  optimizely: {
    testNameFormat:
      "[<%= testId %>][<%= optimizely.testType %>][<%= testName %>]",
    projects: [
      {
        project_name: "Staging",
        auth_token: "2:xlB74GWqa8eGa2NMn65huT_4AMNfEBtKX9ip0MdoQkJ55VkGQ3tg",
        project_id: 23213161702,
        audiences: {
          "optiqa=true": 25218550917,
        },
        default: true,
      },
      {
        project_name: "Prod",
        auth_token: "2:xlB74GWqa8eGa2NMn65huT_4AMNfEBtKX9ip0MdoQkJ55VkGQ3tg",
        project_id: 23213161702,
        audiences: {
          "optiqa=true": 25218550917,
        },
      },
    ],
  },

  // Input configuation
  prompts: {
    config: {
      childFolders: ["care", "xsus", "retentions"],
      developers: ["chris", "pushkal", "josh"],
      homepageUrl: "https://www.optimizely.com/",
      testIdExample: "Chris",
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
};
