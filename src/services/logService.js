// import Raven from "raven-js";

function init() {
  console.log("Log service initialized");
  // Raven.config("https://b2abbd1501594dd5b2a602b92f1dfa94@sentry.io/1453216", {
  //   release: "1-0-0",
  //   enviroment: "development-test"
  // }).install();
}

function log(error) {
  console.log(error);
  // Raven.captureException(error);
}

export default {
  init,
  log
};
