import LandingAboutGP from "@/components/LandingAboutGP";
import LandingServices from "@/components/LandingServices";
import { Metadata } from "next";
import ExportedImage from "next-image-export-optimizer";

export const metadata: Metadata = {
  title: "Home | Golden Poppy Appraisal",
  description:
    "Golden Poppy Appraisal provides comprehensive residential appraisals for 1-4-unit properties. Serving the Sacramento area and the surrounding areas such as, West Sacramento, Antelope, Carmichael, Fair Oaks, Folsom, Granite Bay, Roseville, Rocklin, Lincoln, Loomis, Auburn, Plumas Lake, Davis, Woodland, Rancho Murietta, Wilton, Stockton, Lodi, Elk Grove, and Galt. We provide appraisals for the following: Estate Settlement, Date of Death, Retrospective/Historical, Selling or Buying, Bankruptcy, and Conventional and FHA Lending",
};

export default function Home() {
  return (
    <main className="bg-secondary px-4 md:p-0">
      <div className="relative flex items-center justify-center pt-10 md:h-mainSize md:p-0">
        <ExportedImage
          className="hidden object-cover md:block"
          src="/images/landing_image_2.png"
          alt="Landing image."
          fill
          priority
        />
        <ExportedImage
          className="object-cover md:hidden"
          src="/images/landing_image_2.png"
          alt="Landing image."
          width={1024}
          height={1024}
          priority
        />
      </div>
      <LandingAboutGP />
      <LandingServices />
    </main>
  );
}
