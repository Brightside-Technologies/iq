const ENV_PATH = process.env.NODE_ENV === "production" ? "./.env.production" : "./.env.development";

require("dotenv").config({path: ENV_PATH});

module.exports = {};
