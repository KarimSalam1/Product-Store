<<<<<<< HEAD
// Cron job to hit endpoint every 14 sec to keep backend alive always
const cron = require("cron");
const https = require("https");

const backendUrl = "https://product-store-g0hb.onrender.com"; // Your Render backend URL
const job = new cron.CronJob("*/14 * * * *", function () {
  // This function will be executed every 14 minutes.
  console.log("Restarting server");

  // Perform an HTTPS GET request to hit any backend api.
  https
    .get(backendUrl, (res) => {
      if (res.statusCode === 200) {
        console.log("Server restarted");
      } else {
        console.error(
          `Failed to restart server with status code: ${res.statusCode}`
        );
      }
    })
    .on("error", (err) => {
      console.error("Error during Restart:", err.message);
    });
});

// Export the cron job.
module.exports = {
  job,
};
=======
// Cron job to hit endpoint every 14 sec to keep backend alive always
const cron = require("cron");
const https = require("https");

const backendUrl = "https://product-store-g0hb.onrender.com"; // Your Render backend URL
const job = new cron.CronJob("*/14 * * * *", function () {
  // This function will be executed every 14 minutes.
  console.log("Restarting server");

  // Perform an HTTPS GET request to hit any backend api.
  https
    .get(backendUrl, (res) => {
      if (res.statusCode === 200) {
        console.log("Server restarted");
      } else {
        console.error(
          `Failed to restart server with status code: ${res.statusCode}`
        );
      }
    })
    .on("error", (err) => {
      console.error("Error during Restart:", err.message);
    });
});

// Export the cron job.
module.exports = {
  job,
};
>>>>>>> 324ef520a24d9046edf24d6961bcdb8eb121dbca
