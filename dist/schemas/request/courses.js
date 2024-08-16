"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coursesBodyRequestSchema = exports.coursesParamsIdRequestSchema = void 0;
exports.coursesParamsIdRequestSchema = {
    params: {
        type: 'object',
        properties: {
            id: {
                type: 'string'
            }
        },
        required: ['id']
    },
    tags: ['courses']
};
exports.coursesBodyRequestSchema = {
    body: {
        type: 'object',
        properties: {
            title: {
                type: 'string'
            },
            description: {
                type: 'string'
            }
        },
        required: ['*']
    },
    tags: ['courses']
};
