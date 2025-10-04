import Link from 'next/link';

export default function NotFound() {
  return (
    <main style={{ padding: 24, textAlign: 'center' }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link href="/" style={{ display: "inline-block", marginTop: 12, textDecoration: "underline" }}>
        ← Go back home
      </Link>
    </main>
  );
}
