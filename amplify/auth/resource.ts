// Import necessary modules from AWS Amplify's backend package
import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

// Define your data schema (structure) using Amplify's easy-to-use syntax
const schema = a.schema({
  // Create a data model named "Note"
  Note: a
    .model({
      // "name" field to store text (string)
      name: a.string(),
      // "description" field to store additional text information
      description: a.string(),
      // "image" field to store URL or link to an image
      image: a.string(),
    })
    // Set permissions: Only the owner (creator) of the data can access or modify it
    .authorization((allow) => [allow.owner()]),
});

// Export the TypeScript type of the schema so your frontend can use it to understand data structure
export type Schema = ClientSchema<typeof schema>;

// Define your data storage settings and authorization method
export const data = defineData({
  schema, // Use the schema defined above
  authorizationModes: {
    // Use AWS Cognito User Pool for user authentication (requires users to sign in)
    defaultAuthorizationMode: 'userPool',
  },
});