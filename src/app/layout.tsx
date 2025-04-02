import Link from 'next/link';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        
          <nav className='p-4'>
            <Link href="/">Home</Link>
             | <Link href="/workouts">Workouts</Link> 
             | <Link href="/profile">Profile</Link>

          </nav>
          <main className="p-4">{children}</main>
      </body>
    </html>
  );
}

