"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseConfigPostgresql = void 0;
require("dotenv/config");
exports.databaseConfigPostgresql = {
    databaseURL: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?schema=public`
};
