import { ContactForm } from "@/components/ContactForm";
import { Metadata } from "next";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Golden Poppy Appraisal provides comprehensive residential appraisals for 1-4-unit properties. Serving the Sacramento area and the surrounding areas such as, West Sacramento, Antelope, Carmichael, Fair Oaks, Folsom, Granite Bay, Roseville, Rocklin, Lincoln, Loomis, Auburn, Plumas Lake, Davis, Woodland, Rancho Murietta, Wilton, Stockton, Lodi, Elk Grove, and Galt. We provide appraisals for the following: Estate Settlement, Date of Death, Retrospective/Historical, Selling or Buying, Bankruptcy, and Conventional and FHA Lending",
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
        <ul className="mx-auto mb-3 flex flex-col items-center text-xl md:grid md:grid-cols-2 lg:grid-cols-3">
          <li className="w-72">Pre Listing Appraisals</li>
          <li className="w-72">Private Sale</li>
          <li className="w-72">Estate Settlement</li>
          <li className="w-72">Date of Death</li>
          <li className="w-72">Retrospective/Historical</li>
          <li className="w-72">Bankruptcy</li>
          <li className="w-72">Conventional and FHA Lending</li>
          <li className="w-72">Bail Bonds</li>
          <li className="w-72">Residential Measurement</li>
          <li className="w-72">Clean Energy Residential</li>
          <li className="w-72">Natural Disaster</li>
          <li className="w-72 cursor-pointer hover:text-accent">
            <Link href="/services/wildfire-disaster-form">
              Wildfire Disaster
            </Link>
          </li>
        </ul>
        <h2 className="mb-2 text-xl sm:text-2xl">Our Service Area Includes:</h2>
        <ul className="mx-auto mb-3 flex flex-col items-center text-xl md:grid md:grid-cols-2 lg:grid-cols-3">
          <li className="w-72">Sacramento</li>
          <li className="w-72">Antelope</li>
          <li className="w-72">Carmichael</li>
          <li className="w-72">Fair Oaks</li>
          <li className="w-72">Folsom</li>
          <li className="w-72">Granite Bay</li>
          <li className="w-72">Roseville</li>
          <li className="w-72">Rocklin</li>
          <li className="w-72">Lincoln</li>
          <li className="w-72">Loomis</li>
          <li className="w-72">Auburn</li>
          <li className="w-72">Plumas Lake</li>
          <li className="w-72">Davis</li>
          <li className="w-72">Woodland</li>
          <li className="w-72">Elk Grove</li>
          <li className="w-72">Rancho Murietta</li>
          <li className="w-72">Wilton</li>
          <li className="w-72">Galt</li>
          <li className="w-72">Stockton</li>
          <li className="w-72">Lodi</li>
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
