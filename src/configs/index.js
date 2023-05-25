require("dotenv").config()



/* ----------------------------- Import configs ----------------------------- */
const { DbConfig } = require("./db.config");

/* ----------- Global variable to use in whole express environment ---------- */
global.appConfigs = {
        /* ---------------------------- Environment Type ---------------------------- */
        NODE_ENV: process.env.NODE_ENV,

        /* ------------------------------- App Configs ------------------------------ */
        APP_HOST: process.env.APP_HOST || "localhost",
        APP_PORT: process.env.APP_PORT || 3000,
        APP_PROTOCOL: process.env.APP_PROTOCOL,
        APP_URL: `${process.env.APP_PROTOCOL}://${process.env.APP_HOST}:${process.env.APP_PORT}`,

        /* -------------------------------- security -------------------------------- */
        JWT_SECRET: process.env.JWT_SECRET,

        /* --------------------------------- Bcrypt --------------------------------- */
        BCRYPT_SALT: process.env.BCRYPT_SALT,
        /* ---------------------------------- DB's ---------------------------------- */
        DB: DbConfig.db_env(process.env.NODE_ENV),

        /* ---------------------------------- TEST ---------------------------------- */
        /* ----------------------------- Test app config ---------------------------- */
        TEST_APP_PORT: process.env.TEST_APP_PORT
}