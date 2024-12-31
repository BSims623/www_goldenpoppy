import { ContactForm } from "@/components/ContactForm";
import { Metadata } from "next";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description: "Get an appraisal.",
};

export default function ServicesPage() {
  return (
    <main className="grid min-h-mainSize gap-4 bg-secondary px-4 py-10 text-primary lg:py-20">
      <section className="mx-auto w-full max-w-5xl">
        <h1 className="text-3xl">Our Services</h1>
        <p className="py-3 indent-8">
          Golden Poppy Appraisal provides comprehensive residential appraisals
          for 1&ndash;4-unit properties throughout the Greater Sacramento Area.
          We understand that every home is unique, requiring the expertise of a
          local appraiser who knows Sacramento County and its surrounding areas
          intimately.
        </p>
        <Link
          href="/free-quote"
          className="font-bold text-accent hover:text-primary"
        >
          <div className="flex justify-center">Get A Free Quote &gt;</div>
        </Link>
      </section>
      <section className="mx-auto w-full max-w-5xl">
        <ExportedImage
          className="rounded"
          src="/images/coverage_map_gpa.png"
          alt="A photo of a map of the Greater Sacramento area."
          width={1024}
          height={1024}
        />
      </section>
      <section className="mx-auto w-full max-w-5xl">
        <h2 className="mb-3 text-xl font-bold">
          Not sure if we cover your area? Send us your address in the form
          below, or visit our{" "}
          <Link
            href="/contact"
            className="whitespace-nowrap font-bold text-accent hover:text-primary"
          >
            Contact Page
          </Link>
          .
        </h2>
        <ContactForm />
      </section>
    </main>
  );
}
