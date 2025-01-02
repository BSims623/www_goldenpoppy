import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Failure | Contact",
  description:
    "Something went wrong. Please try calling us, emailing us directly at Kim@GoldenPoppyAppraisal.com or try again later.",
};

export default function Failure() {
  return (
    <main className="flex min-h-mainSize flex-col items-center justify-center gap-2 bg-secondary text-primary">
      <div className="text-2xl">Something went wrong...</div>
      <div className="px-4 text-xl">
        Contact us via phone at{" "}
        <Link
          href="tel:+1-916-398-7330"
          className="font-bold text-accent hover:text-primary"
        >
          916-398-7330
        </Link>{" "}
        or email us directly at{" "}
        <Link
          href="mailto:Kim@GoldenPoppyAppraisal.com"
          className="font-bold text-accent hover:text-primary"
        >
          Kim@GoldenPoppyAppraisal.com
        </Link>
        .
      </div>
      <Link
        href="/"
        className="text-xl font-bold text-accent hover:text-primary"
      >
        Return Home &gt;
      </Link>
    </main>
  );
}
