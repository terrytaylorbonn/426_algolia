// pages/docs/authentication.tsx
import Layout from '../../components/Layout';

export default function AuthenticationPage() {
  return (
    <Layout>
      <article>
        <h1>Authentication</h1>
        <p>This section describes how to authenticate with the API using various methods.</p>
        
        <h2>API Key Authentication</h2>
        <p>The simplest way to authenticate is using an API key. Include your API key in the Authorization header:</p>
        <pre><code>Authorization: Bearer YOUR_API_KEY</code></pre>
        
        <h2>OAuth 2.0</h2>
        <p>For more secure applications, we recommend using OAuth 2.0 authentication flow.</p>
        
        <h3>Getting Started with OAuth</h3>
        <ol>
          <li>Register your application in the developer portal</li>
          <li>Obtain your client ID and client secret</li>
          <li>Implement the OAuth flow in your application</li>
        </ol>
        
        <h2>JWT Tokens</h2>
        <p>JSON Web Tokens (JWT) provide a stateless authentication mechanism. Tokens are issued after successful authentication and must be included in subsequent requests.</p>
        
        <h3>Token Validation</h3>
        <p>All tokens have an expiration time. Make sure to handle token refresh in your application to maintain seamless user experience.</p>
      </article>
    </Layout>
  );
}
