/**
 * genopti.config.js
 * Contains the configuration for the Optimizely Generator
 * This generator can be used in conjunction with the npm package 'cro-web-development' (ADD URL HERE).
 */

// Add import for cro-web-development here - if it exists overwrite the below
module.exports = {
  optimizely: {
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
      childFolders: [],
      developers: [],
      homepageUrl: "https://www.optimizely.com/",
      testIdExample: "OPTI-1",
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
