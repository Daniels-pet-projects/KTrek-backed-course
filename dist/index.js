"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const fastify_1 = __importDefault(require("fastify"));
const autoload_1 = __importDefault(require("@fastify/autoload"));
const path_1 = require("path");
const logger_1 = require("./configs/logger");
const package_json_1 = require("../package.json");
const APP_PORT = process.env.APP_PORT;
const APP_HOST = process.env.APP_HOST;
const fastify = (0, fastify_1.default)({
    logger: logger_1.loggerConfig['development']
});
fastify.register(autoload_1.default, {
    dir: (0, path_1.join)(__dirname, 'plugins'),
    dirNameRoutePrefix: false
});
fastify.register(autoload_1.default, {
    dir: (0, path_1.join)(__dirname, 'routes'),
    options: { prefix: '/api/v1' }
});
fastify.setErrorHandler((error, request, reply) => {
    fastify.log.error(error);
    reply.status(500).send({ error: 'Internal Server Error' });
});
fastify.get('/', (request, reply) => {
    reply.status(200).send({ message: `Welcome to ${package_json_1.name} API` });
});
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (require.main === module) {
                yield fastify.listen({
                    port: Number(APP_PORT),
                    host: String(APP_HOST)
                });
            }
        }
        catch (error) {
            fastify.log.error(error);
            process.exit(1);
        }
    });
}
start();
