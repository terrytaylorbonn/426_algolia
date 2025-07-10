// pages/index.tsx #426 GPT26 SITE!!!!
import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <meta name="algolia-site-verification" content="FF14F5E36F82A306" />
      </Head>
      <Layout>
        <h1>Welcome to My Docs</h1>
        <p>This is a test site with Algolia DocSearch.</p>
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