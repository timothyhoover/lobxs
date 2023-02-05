export const CONTACT_FORM = {
  type: 'object',
  properties: {
    username: {
      type: 'string',
      minLength: 1,
      errorMessage: { minLength: 'username field is required' }
    },
    password: {
      type: 'string',
      minLength: 1,
      errorMessage: { minLength: 'password field is required' }
    }
  },
  required: ['username', 'password'],
  additionalProperties: false
}
