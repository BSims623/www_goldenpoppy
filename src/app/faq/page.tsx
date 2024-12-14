import { ContactForm } from "@/components/ContactForm";
import { FaqAccordion } from "./_components/FaqAccordion";

export default function FaqPage() {
  return (
    <main className="min-h-mainSize bg-secondary px-4 py-10 text-primary lg:py-20">
      <div className="mx-auto grid w-full max-w-5xl gap-4">
        <h1 className="text-2xl font-bold">Frequently Asked Questions</h1>
        <FaqAccordion />
        <h2 className="text-xl font-bold">
          Don&apos;t see your question? Send it to us!
        </h2>
        <ContactForm />
      </div>
    </main>
  );
}
