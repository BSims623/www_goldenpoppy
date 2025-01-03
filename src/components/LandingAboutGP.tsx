import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";

export default function LandingAboutGP() {
  return (
    <section className="mx-auto grid w-full max-w-5xl gap-4 px-4 pt-10 lg:grid-cols-[400px_auto] lg:pt-20">
      <div className="relative hidden h-full w-full lg:block">
        <ExportedImage
          className="rounded object-cover"
          src="/images/interior_kitchen.jpg"
          alt="A photo of Kim Greenwood, the owner of Golden Poppy Appraisal."
          fill
        />
      </div>
      <ExportedImage
        className="rounded lg:hidden"
        src="/images/interior_kitchen.jpg"
        alt="A photo of Kim Greenwood, the owner of Golden Poppy Appraisal."
        width={1024}
        height={1024}
      />
      <div className="h-full rounded text-primary">
        <h1 className="mb-4 text-center text-2xl sm:text-3xl">
          About Golden Poppy Appraisal
        </h1>
        <p className="mb-2 indent-8">
          Golden Poppy Appraisal uses the latest technology and market data to
          provide comprehensive residential appraisals for 1-4-unit properties.
          Serving the Sacramento area and the surrounding areas such as, West
          Sacramento, Carmichael, Fair Oaks, Folsom, Roseville, Rocklin, Elk
          Grove, and Galt. Golden Poppy Appraisal promises to focus on the
          quality of the analytics. With careful and impartial analysis, we
          strive to present a comprehensive real time appraisal of each
          property. By using the most up to date information we can provide a
          most up to date analysis and valuation of your current property. At
          Golden Poppy Appraisal we know that every property is unique, and
          requires the expertise of a local appraiser who is un bias and
          intimately familiar with Sacramento County and its surrounding
          regions.
        </p>
        <p className="mb-2">
          Focusing on quality over quantity, Golden Poppy Appraisal ensures that
          each appraisal is done using careful analytics of real-time dynamics
          of each neighborhood, and that each home is evaluated and appraised
          with the impartial and meticulous care it deserves. At Golden Poppy we
          strive to give a comprehensive analysis of the location, condition,
          and amenities that will help support our property valuation.
        </p>
        <p className="mb-2">
          Beyond providing reliable valuations, our goal is to deliver a high
          standard of service that meets and or exceeds the varied needs of our
          clients. Golden Poppy Appraisal serves a wide range of clients,
          including estate trustees, families, sellers, buyers, renters,
          realtors, property managers, CPAs, fiduciaries, and attorneys. We
          strive to provide more than just a property value-we&#39;re here to
          offer peace of mind and trusted expertise for all your residential
          appraisal needs.
        </p>
        <div className="flex justify-center">
          <Link
            href="/about"
            className="font-bold text-accent hover:text-primary"
          >
            Learn More &gt;
          </Link>
        </div>
      </div>
    </section>
  );
}
