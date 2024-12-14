import Link from "next/link";

export default function Success() {
  return (
    <main className="flex min-h-mainSize flex-col items-center justify-center gap-2 bg-secondary text-primary">
      <div className="text-2xl">Message sent successfully!</div>
      <Link href="/" className="text-xl font-bold hover:text-accent">
        Return Home &gt;
      </Link>
    </main>
  );
}
