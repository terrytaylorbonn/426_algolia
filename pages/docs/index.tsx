import Layout from '../../components/Layout';
import Link from 'next/link';

export default function DocsIndex() {
  return (
    <Layout>
      <h1>Documentation</h1>
      <ul>
        <li><Link href="/docs/authentication">Authentication</Link></li>
        <li><Link href="/docs/errors">Errors</Link></li>
        <li><Link href="/docs/sprockets">Sprockets</Link></li>
        <li><Link href="/docs/flarnets">Flarnets</Link></li>
      </ul>
    </Layout>
  );
}
