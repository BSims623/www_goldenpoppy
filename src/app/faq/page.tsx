import { ContactForm } from "@/components/ContactForm";
import { FaqAccordion } from "./_components/FaqAccordion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Check out Golden Poppy Appraisal's most frequently asked appraisal questions. If you don't see your question, send it to us.",
};

export default function FaqPage() {
  return (
    <main className="min-h-mainSize bg-secondary px-4 py-10 text-primary lg:py-20">
      <div className="mx-auto grid w-full max-w-5xl gap-4">
        <h1 className="text-2xl sm:text-3xl">Frequently Asked Questions</h1>
        <FaqAccordion />
        <h2 className="text-xl sm:text-2xl">
          Don&apos;t see your question? Send it to us!
        </h2>
        <ContactForm />
      </div>
    </main>
  );
}
