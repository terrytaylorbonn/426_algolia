// Manual script to upload content to Algolia
// Run: node scripts/upload-to-algolia.js

const algoliasearch = require('algoliasearch');

// Initialize Algolia client
const client = algoliasearch('6B0P0R08FS', 'YOUR_ADMIN_API_KEY'); // Replace with your admin API key
const index = client.initIndex('nextjs-docs-v2');

// Sample data to index
const records = [
  {
    objectID: 'home',
    title: 'API Documentation - Your Platform',
    content: 'Comprehensive API documentation for authentication, error handling, Sprocket Quantumizer, and Flarnet synchronization.',
    url: 'https://four26-algolia.onrender.com/',
    type: 'page'
  },
  {
    objectID: 'docs-auth',
    title: 'Authentication',
    content: 'API Key Authentication, OAuth 2.0, JWT Tokens, Getting Started with OAuth, Token Validation',
    url: 'https://four26-algolia.onrender.com/docs/authentication',
    type: 'documentation'
  },
  {
    objectID: 'docs-errors',
    title: 'Error Handling',
    content: 'HTTP Status Codes, 2xx Success Codes, 4xx Client Error Codes, 5xx Server Error Codes, Error Response Format',
    url: 'https://four26-algolia.onrender.com/docs/errors',
    type: 'documentation'
  },
  {
    objectID: 'docs-sprockets',
    title: 'Sprocket Quantumizer',
    content: 'quantum flux inversion calibrated phase vectors triple-spin anchors graviton buffering quantum field matrix',
    url: 'https://four26-algolia.onrender.com/docs/sprockets',
    type: 'documentation'
  },
  {
    objectID: 'docs-flarnets',
    title: 'Flarnet Synchronization',
    content: 'recursive harmonics interdimensional mesh network Dr. Zarnok Helix Drive experiments dimensional stability',
    url: 'https://four26-algolia.onrender.com/docs/flarnets',
    type: 'documentation'
  }
];

// Upload records
index.saveObjects(records)
  .then(({ objectIDs }) => {
    console.log('✅ Successfully uploaded records:', objectIDs);
  })
  .catch(err => {
    console.error('❌ Error uploading records:', err);
  });
