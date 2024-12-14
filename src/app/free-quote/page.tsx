import { Metadata } from "next";
import { FreeQuoteForm } from "./_components/FreeQuoteForm";

export const metadata: Metadata = {
  title: "Free Quote",
  description:
    "Get an free quote for an appraisal in the Greater Sacramento Area.",
};

export default function FreeQuotePage() {
  return (
    <main className="min-h-mainSize bg-secondary px-4 py-10 text-primary lg:py-20">
      <section className="mx-auto w-full max-w-5xl">
        <h1 className="mb-4 text-4xl">
          Fill out the form below for a free quote.
        </h1>
        <FreeQuoteForm />
      </section>
    </main>
  );
}
