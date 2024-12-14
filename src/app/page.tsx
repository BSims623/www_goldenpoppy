import { Metadata } from "next";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home | Golden Poppy Appraisal",
  description:
    "Golden Poppy Appraisal provides comprehensive residential appraisals for 1 - 4-unit properties throughout the Greater Sacramento Area. We understand that every home is unique, requiring the expertise of a local appraiser who knows Sacramento County and its surrounding areas intimately.",
};

export default function Home() {
  return (
    <main className="">
      <div className="relative h-mainSize">
        <ExportedImage
          className="object-cover"
          src="/images/landing_image_2.png"
          alt="Landing image."
          fill={true}
          priority
        />
      </div>
      <section className="flex items-center justify-center bg-secondary px-4 py-10 lg:py-20">
        <div className="grid w-full max-w-5xl gap-4 lg:grid-cols-[400px_auto]">
          <ExportedImage
            className="mx-auto rounded"
            src="/images/tmp_headshot.jpg"
            alt="A photo of Kim Greenwood, the owner of Golden Poppy Appraisal."
            width={400}
            height={400}
          />
          <div className="h-full rounded text-primary">
            <h1 className="mb-4 text-center text-2xl sm:text-3xl">
              About Golden Poppy Appraisal
            </h1>
            <p className="mb-3 indent-8">
              Golden Poppy Appraisal provides comprehensive residential
              appraisals for 1&ndash;4-unit properties throughout the Greater
              Sacramento Area. We understand that every home is unique,
              requiring the expertise of a local appraiser who knows Sacramento
              County and its surrounding areas intimately.
            </p>
            <p className="mb-3 indent-8">
              Our commitment to quality appraisals is rooted in our use of
              today&apos;s technology and the latest market data, which allows
              us to deliver customized valuations that reflect the real-time
              dynamics of each neighborhood. We don&apos;t rush our services;
              instead, we take the time to gather precise property data,
              thoroughly analyze each market area, and evaluate each home with
              the care it deserves. From Land Park, East Sacramento, and
              downtown to neighborhoods in West Sacramento, Carmichael, Fair
              Oaks, Folsom, Roseville, Rocklin, Elk Grove, and Galt, we
              recognize that each community has its own distinct qualities and
              market characteristics.
            </p>
            <p className="mb-3 indent-8">
              Beyond providing reliable valuations, our goal is to deliver a
              high standard of service that meets the diverse needs of our
              clients. Golden Poppy Appraisal serves a wide range of clients,
              including estate trustees, families, sellers, buyers, renters,
              realtors, property managers, CPAs, fiduciaries, and attorneys. We
              strive to provide more than just a property value—we&apos;re here
              to offer peace of mind and trusted expertise for all your
              residential appraisal needs.
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
        </div>
      </section>
    </main>
  );
}
