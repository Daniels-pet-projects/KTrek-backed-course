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
exports.createCourseServices = createCourseServices;
exports.getAllCoursesServices = getAllCoursesServices;
exports.courseByIdServices = courseByIdServices;
exports.updateCourseServices = updateCourseServices;
exports.deleteCourseServices = deleteCourseServices;
const course_1 = require("../repositories/course");
function createCourseServices(fastify, data) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield (0, course_1.createCourseRepositories)(fastify, data);
    });
}
function getAllCoursesServices(fastify) {
    return __awaiter(this, void 0, void 0, function* () {
        let courses;
        const cacheData = yield fastify.redis.get('all-courses');
        if (cacheData) {
            courses = JSON.parse(cacheData);
        }
        else {
            courses = yield (0, course_1.getAllCoursesRepositories)(fastify);
            fastify.redis.set('all-courses', JSON.stringify(courses), 'EX', 60);
        }
        return courses;
    });
}
function courseByIdServices(fastify, id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield (0, course_1.courseByIdRepositories)(fastify, id);
    });
}
function updateCourseServices(fastify, id, data) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield (0, course_1.updateCourseRepositories)(fastify, id, data);
    });
}
function deleteCourseServices(fastify, id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield (0, course_1.deleteCourseRepositories)(fastify, id);
    });
}
exports.default = {
    createCourseServices,
    getAllCoursesServices,
    courseByIdServices,
    updateCourseServices,
    deleteCourseServices
};
