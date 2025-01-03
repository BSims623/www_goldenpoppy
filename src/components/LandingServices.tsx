import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";

export default function LandingServices() {
  return (
    <section className="mx-auto grid w-full max-w-5xl gap-4 px-4 py-10 lg:grid-cols-[auto_400px] lg:py-20">
      <ExportedImage
        className="mx-auto hidden rounded lg:order-2 lg:block"
        src="/images/duplex.jpg"
        alt="A photo of Kim Greenwood, the owner of Golden Poppy Appraisal."
        width={400}
        height={400}
      />
      <ExportedImage
        className="mx-auto rounded lg:order-2 lg:hidden"
        src="/images/duplex.jpg"
        alt="A photo of Kim Greenwood, the owner of Golden Poppy Appraisal."
        width={1024}
        height={1024}
      />
      <div className="h-full rounded text-primary lg:order-1">
        <h1 className="mb-4 text-center text-2xl sm:text-3xl">
          Real Estate Appraisal Services
        </h1>
        <p className="mb-3 indent-8">
          Our goal is not only to provide a value, but an honest and reliable
          service as well. Our clients include Estate Trustees, Families,
          Sellers, Buyers, Renters, Realtors, Property Managers, CPAs,
          Fiduciaries, and Attorneys.
        </p>
        <ul className="mx-auto mb-3 flex flex-col items-center text-xl md:grid md:grid-cols-2">
          <li className="w-72 cursor-pointer hover:text-accent">
            <Link href="/services">Estate Settlement</Link>
          </li>
          <li className="w-72 cursor-pointer hover:text-accent">
            <Link href="/services">Date of Death</Link>
          </li>
          <li className="w-72 cursor-pointer hover:text-accent">
            <Link href="/services">Retrospective/Historical</Link>
          </li>
          <li className="w-72 cursor-pointer hover:text-accent">
            <Link href="/services">Selling or Buying</Link>
          </li>
          <li className="w-72 cursor-pointer hover:text-accent">
            <Link href="/services">Bankruptcy</Link>
          </li>
          <li className="w-72 cursor-pointer hover:text-accent">
            <Link href="/services">Conventional and FHA Lending</Link>
          </li>
        </ul>
        <div className="flex justify-center pt-4">
          <Link
            href="/services"
            className="font-bold text-accent hover:text-primary"
          >
            Learn More &gt;
          </Link>
        </div>
      </div>
    </section>
  );
}
