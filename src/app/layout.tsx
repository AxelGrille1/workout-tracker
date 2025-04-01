import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div>
          <nav>
            <Link href="/">Home</Link> | <Link href="/workouts">Workouts</Link> | <Link href="/profile">Profile</Link>
          </nav>
        </div>
      </body>
    </html>
  );
}