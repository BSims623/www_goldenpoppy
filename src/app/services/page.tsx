import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="min-h-mainSize bg-secondary px-4 py-10 text-primary lg:py-20">
      <div className="mx-auto w-full max-w-5xl">
        <h1 className="text-3xl">Our Services</h1>
        <p className="my-3 indent-8">
          Golden Poppy Appraisal provides comprehensive residential appraisals
          for 1&ndash;4-unit properties throughout the Greater Sacramento Area.
          We understand that every home is unique, requiring the expertise of a
          local appraiser who knows Sacramento County and its surrounding areas
          intimately.
        </p>
        <ExportedImage
          src="/images/sacramento_county_map.png"
          alt="A photo of a map of the Greater Sacramento area."
          width={1024}
          height={1024}
        />
        <Link
          href="/free-quote"
          className="font-bold text-accent hover:text-primary"
        >
          <div className="flex justify-center pt-4">Get A Free Quote &gt;</div>
        </Link>
      </div>
    </main>
  );
}
