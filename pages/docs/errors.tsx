// pages/docs/errors.tsx
import Layout from '../../components/Layout';

export default function ErrorsPage() {
  return (
    <Layout>
      <article>
        <h1>Error Handling</h1>
        <p>This guide covers error handling strategies and common error codes you may encounter when using our API.</p>
        
        <h2>HTTP Status Codes</h2>
        <p>Our API uses standard HTTP status codes to indicate success or failure of requests.</p>
        
        <h3>2xx Success Codes</h3>
        <ul>
          <li><strong>200 OK</strong> - Request successful</li>
          <li><strong>201 Created</strong> - Resource created successfully</li>
          <li><strong>204 No Content</strong> - Request successful, no content returned</li>
        </ul>
        
        <h3>4xx Client Error Codes</h3>
        <ul>
          <li><strong>400 Bad Request</strong> - Invalid request format</li>
          <li><strong>401 Unauthorized</strong> - Authentication required</li>
          <li><strong>403 Forbidden</strong> - Access denied</li>
          <li><strong>404 Not Found</strong> - Resource not found</li>
          <li><strong>429 Too Many Requests</strong> - Rate limit exceeded</li>
        </ul>
        
        <h3>5xx Server Error Codes</h3>
        <ul>
          <li><strong>500 Internal Server Error</strong> - Server error occurred</li>
          <li><strong>503 Service Unavailable</strong> - Service temporarily unavailable</li>
        </ul>
        
        <h2>Error Response Format</h2>
        <p>All error responses follow a consistent JSON format:</p>
        <pre><code>{`{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid email format",
    "details": ["Email must be a valid email address"]
  }
}`}</code></pre>
        
        <h2>Best Practices</h2>
        <ul>
          <li>Always check the HTTP status code before processing the response</li>
          <li>Implement proper retry logic for temporary failures</li>
          <li>Log errors for debugging and monitoring</li>
          <li>Provide meaningful error messages to users</li>
        </ul>
      </article>
    </Layout>
  );
}
