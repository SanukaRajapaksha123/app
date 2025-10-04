import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: 24 }}>
      <h1>ESC/POS XPrinter 801C Demo</h1>
      <Link href="/print" style={{ display: "inline-block", marginTop: 12, textDecoration: "underline" }}>
        Go to Print Page →
      </Link>
    </main>
  );
}
