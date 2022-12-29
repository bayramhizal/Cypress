const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:"https://www.google.com",
    //we can store project information on cypres config.js
    //Cloud working  id is down
     projectId: "41v1tw",
     //do not save test video, for saving should write true
     "video":false,
     //how man times should it run though false 
     //"retries":2
     
  },
 
});
