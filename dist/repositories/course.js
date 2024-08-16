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
exports.createCourseRepositories = createCourseRepositories;
exports.getAllCoursesRepositories = getAllCoursesRepositories;
exports.courseByIdRepositories = courseByIdRepositories;
exports.updateCourseRepositories = updateCourseRepositories;
exports.deleteCourseRepositories = deleteCourseRepositories;
function createCourseRepositories(fastify, data // Omit<courses, 'id'>
) {
    return __awaiter(this, void 0, void 0, function* () {
        const course = yield fastify.prisma.courses.create({ data });
        return course;
    });
}
function getAllCoursesRepositories(fastify) {
    return __awaiter(this, void 0, void 0, function* () {
        const courses = yield fastify.prisma.courses.findMany();
        return courses;
    });
}
function courseByIdRepositories(fastify, id) {
    return __awaiter(this, void 0, void 0, function* () {
        const course = yield fastify.prisma.courses.findUnique({
            where: {
                id
            }
        });
        return course;
    });
}
function updateCourseRepositories(fastify, id, data) {
    return __awaiter(this, void 0, void 0, function* () {
        const updatedCourse = yield fastify.prisma.courses.update({
            where: { id },
            data
        });
        return updatedCourse;
    });
}
function deleteCourseRepositories(fastify, id) {
    return __awaiter(this, void 0, void 0, function* () {
        const course = yield fastify.prisma.courses.deleteMany({ where: { id } });
        return course;
    });
}
exports.default = {
    createCourseRepositories,
    getAllCoursesRepositories,
    courseByIdRepositories,
    updateCourseRepositories,
    deleteCourseRepositories
};
