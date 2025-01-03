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
        <h1 className="text-3xl">Services</h1>
        <p className="py-3 indent-8">
          Golden Poppy Appraisal provides comprehensive residential appraisals
          for 1&ndash;4-unit properties throughout the Greater Sacramento Area.
          We understand that every home is unique, requiring the expertise of a
          local appraiser who knows Sacramento County and its surrounding areas
          intimately.
        </p>
        <h2 className="mb-2 text-xl sm:text-2xl">Our Process</h2>
        <p className="mb-3 indent-8">
          The Golden Poppy appraisal process begins with a meticulous{" "}
          <span className="font-bold text-accent">inspection</span>, where we
          evaluate the property&apos;s key features and overall condition. This
          includes details like the number of bedrooms and bathrooms, location,
          and any features or flaws that could impact its value. Our inspections
          include precise measurements and sketches to confirm square footage,
          layout, and any visible elements that influence value.
        </p>
        <p className="mb-3">
          After inspection, we apply{" "}
          <span className="font-bold text-accent">
            three main valuation approaches
          </span>
          :
        </p>
        <ol className="mb-3 list-decimal ps-6">
          <li>
            <span className="font-bold text-accent">Sales Comparison</span> -
            Most commonly used in residential appraisal, this approach involves
            researching the area to compare your property with recently sold
            properties that share similar features. With extensive local
            expertise, we make adjustments based on attributes such as square
            footage, additional bathrooms, finishes, and other characteristics
            that influence property values.
          </li>
          <li>
            <span className="font-bold text-accent">Cost Approach</span> - We
            consider what it would cost to replace the property&apos;s structure
            at today&apos;s rates, minus depreciation, to reflect the rebuilding
            cost.
          </li>
          <li>
            <span className="font-bold text-accent">Income Approach</span> - For
            income-producing properties, we analyze potential earnings,
            estimating value based on expected income over time.
          </li>
        </ol>
        <h2 className="mb-2 text-xl sm:text-2xl">Reaching the Right Value</h2>
        <p className="mb-3 indent-8">
          Once these analyses are complete, we perform a{" "}
          <span className="font-bold text-accent">reconciliation</span> to
          determine an informed opinion of value for the property. This
          appraised value, while a solid foundation, becomes a critical element
          in the real estate process, supporting buyers, sellers, and lenders in
          making sound financial decisions.
        </p>
        <p className="mb-3 indent-8">
          Golden Poppy Appraisal is committed to accuracy, transparency, and
          integrity. Our team provides thorough valuations, so you can navigate
          your real estate journey with confidence, knowing your investment is
          backed by a trusted appraisal.
        </p>
        <h2 className="mb-2 text-xl sm:text-2xl">Our Services</h2>
        <ul className="mb-3 grid grid-cols-2 sm:grid-cols-3">
          <li>Estate Settlement</li>
          <li>Date of Death</li>
          <li>Retrospective/Historical</li>
          <li>Selling or Buying</li>
          <li>Bankruptcy</li>
          <li>Conventional and FHA Lending</li>
        </ul>
        <h2 className="mb-2 text-xl sm:text-2xl">Our Service Area Includes:</h2>
        <ul className="mb-3 grid grid-cols-2 sm:grid-cols-3">
          <li>Sacramento</li>
          <li>Antelope</li>
          <li>Carmichael</li>
          <li>Fair Oaks</li>
          <li>Folsom</li>
          <li>Granite Bay</li>
          <li>Roseville</li>
          <li>Rocklin</li>
          <li>Lincoln</li>
          <li>Loomis</li>
          <li>Auburn</li>
          <li>Plumas Lake</li>
          <li>Davis</li>
          <li>Woodland</li>
          <li>Elk Grove</li>
          <li>Rancho Murietta</li>
          <li>Wilton</li>
          <li>Galt</li>
          <li>Stockton</li>
          <li>Lodi</li>
        </ul>
        <Link
          href="/free-quote"
          className="font-bold text-accent hover:text-primary"
        >
          <div className="flex justify-center pt-4">Get A Free Quote &gt;</div>
        </Link>
      </section>
      <section className="mx-auto w-full max-w-3xl">
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
