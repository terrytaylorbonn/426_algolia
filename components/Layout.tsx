import Navbar from './Navbar';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto p-6">
        {children}
      </main>
    </>
  );
}


// export default function Layout({ children }: { children: React.ReactNode }) {
//   return (
//     <div>
//       <Navbar />
//       <main style={{ maxWidth: '768px', margin: '2rem auto', padding: '1rem' }}>
//         {children}
//       </main>
//     </div>
//   );
// }