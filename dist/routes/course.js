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
Object.defineProperty(exports, "__esModule", { value: true });
const course_1 = require("../services/course");
exports.default = (fastify) => __awaiter(void 0, void 0, void 0, function* () {
    fastify.post('/course', (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        const data = request.body;
        reply.code(200).send(yield (0, course_1.createCourseServices)(fastify, data));
    }));
    fastify.get('/courses', (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        reply.code(200).send(yield (0, course_1.getAllCoursesServices)(fastify));
    }));
    fastify.get('/courses/:id', (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        const id = request.params.id;
        reply.code(200).send(yield (0, course_1.courseByIdServices)(fastify, id));
    }));
    fastify.put('/courses/:id', (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        const id = request.params.id;
        const data = request.body;
        reply.code(200).send(yield (0, course_1.updateCourseServices)(fastify, id, data));
    }));
    fastify.delete('/courses/:id', (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        const id = request.params.id;
        reply.code(200).send(yield (0, course_1.deleteCourseServices)(fastify, id));
    }));
});
