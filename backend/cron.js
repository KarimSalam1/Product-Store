import cron from "cron";
import https from "https";

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

export default job;
