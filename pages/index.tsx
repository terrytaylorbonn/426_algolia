// pages/index.tsx #426 GPT26 SITE!!!!
import Head from 'next/head';
import Layout from '../components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <meta name="algolia-site-verification" content="FF14F5E36F82A306" />
        <title>API Documentation - Your Platform</title>
        <meta name="description" content="Comprehensive API documentation for authentication, error handling, Sprocket Quantumizer, and Flarnet synchronization." />
      </Head>
      <Layout>
        <article>
          <h1>Welcome to Our API Documentation</h1>
          <p>
            This comprehensive documentation site provides everything you need to integrate with our platform. 
            From basic authentication to advanced quantum synchronization protocols, we've got you covered.
          </p>
          
          <h2>Quick Start Guide</h2>
          <p>Get up and running in minutes with our step-by-step guides:</p>
          
          <div className="grid gap-4 mt-6 mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold">🔐 <Link href="/docs/authentication" className="text-blue-600 hover:underline">Authentication</Link></h3>
              <p className="text-sm text-gray-600">Secure your API calls with our authentication methods</p>
            </div>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-semibold">⚠️ <Link href="/docs/errors" className="text-red-600 hover:underline">Error Handling</Link></h3>
              <p className="text-sm text-gray-600">Handle errors gracefully with proper error codes</p>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h3 className="font-semibold">⚙️ <Link href="/docs/sprockets" className="text-purple-600 hover:underline">Sprocket Quantumizer</Link></h3>
              <p className="text-sm text-gray-600">Advanced quantum flux inversion technology</p>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-semibold">🌐 <Link href="/docs/flarnets" className="text-green-600 hover:underline">Flarnet Synchronization</Link></h3>
              <p className="text-sm text-gray-600">Interdimensional mesh network protocols</p>
            </div>
          </div>
          
          <h2>What You'll Find Here</h2>
          <ul>
            <li><strong>API Reference:</strong> Complete endpoint documentation with examples</li>
            <li><strong>Authentication Guides:</strong> Multiple auth methods including OAuth and JWT</li>
            <li><strong>Error Handling:</strong> Comprehensive error codes and troubleshooting</li>
            <li><strong>Advanced Features:</strong> Quantum computing and interdimensional protocols</li>
            <li><strong>Best Practices:</strong> Tips for optimal integration and performance</li>
          </ul>
          
          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3>Need Help?</h3>
            <p>Can't find what you're looking for? Use the search bar above to quickly find relevant documentation, code examples, and troubleshooting guides.</p>
          </div>
        </article>
      </Layout>
    </>
  );
}


// import Layout from '../components/Layout';

// export default function Home() {
//   return (
//     <Layout>
//       <h1>Welcome to My Docs</h1>
//       <p>This is a test site with Algolia DocSearch.</p>
//     </Layout>
//   );
// }