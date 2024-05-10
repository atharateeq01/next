import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1> Hello world</h1>
      <Link href="/list">List page</Link>
    </main>
  );
}
