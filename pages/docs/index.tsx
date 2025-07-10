import Layout from '../../components/Layout';
import Link from 'next/link';

export default function DocsIndex() {
  return (
    <Layout>
      <article>
        <h1>Documentation</h1>
        <p>Welcome to our comprehensive API documentation. Here you'll find everything you need to get started with our platform and integrate it into your applications.</p>
        
        <h2>Getting Started</h2>
        <p>New to our platform? Start with these essential guides:</p>
        
        <div className="grid gap-6 mt-6">
          <div className="border rounded-lg p-6">
            <h3><Link href="/docs/authentication" className="text-blue-600 hover:underline">Authentication</Link></h3>
            <p>Learn how to authenticate your applications using API keys, OAuth 2.0, and JWT tokens. Essential for secure API access.</p>
          </div>
          
          <div className="border rounded-lg p-6">
            <h3><Link href="/docs/errors" className="text-blue-600 hover:underline">Error Handling</Link></h3>
            <p>Understand our error response format, HTTP status codes, and best practices for handling API errors gracefully.</p>
          </div>
          
          <div className="border rounded-lg p-6">
            <h3><Link href="/docs/sprockets" className="text-blue-600 hover:underline">Sprocket Quantumizer</Link></h3>
            <p>Master the advanced Sprocket Quantumizer system for backward-compatible flux inversion and quantum-level precision operations.</p>
          </div>
          
          <div className="border rounded-lg p-6">
            <h3><Link href="/docs/flarnets" className="text-blue-600 hover:underline">Flarnet Synchronization</Link></h3>
            <p>Explore interdimensional mesh networks and recursive harmonics for next-generation communication protocols.</p>
          </div>
        </div>
        
        <h2>API Reference</h2>
        <p>Complete reference documentation for all API endpoints, parameters, and response formats.</p>
        
        <h2>SDKs and Libraries</h2>
        <p>Official SDKs and community-maintained libraries for popular programming languages and frameworks.</p>
        
        <h2>Examples and Tutorials</h2>
        <p>Step-by-step tutorials and code examples to help you implement common use cases and integration patterns.</p>
      </article>
    </Layout>
  );
}
