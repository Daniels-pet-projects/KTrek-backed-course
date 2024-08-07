export const coursesParamsIdRequestSchema = {
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

export const coursesBodyRequestSchema = {
  body: {
    type: 'object',
    properties: {
      author_id: {
        type: 'string'
      },
      title: {
        type: 'string'
      },
      description: {
        type: 'string'
      },
      created_at: {
        type: 'number'
      },
      updated_at: {
        type: 'number'
      }
    },
    required: ['*']
  },
  tags: ['courses']
};
