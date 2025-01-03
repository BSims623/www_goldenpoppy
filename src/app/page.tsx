import LandingAboutGP from "@/components/LandingAboutGP";
import LandingServices from "@/components/LandingServices";
import { Metadata } from "next";
import ExportedImage from "next-image-export-optimizer";

export const metadata: Metadata = {
  title: "Home | Golden Poppy Appraisal",
  description:
    "Golden Poppy Appraisal provides comprehensive residential appraisals for 1 - 4-unit properties throughout the Greater Sacramento Area. We understand that every home is unique, requiring the expertise of a local appraiser who knows Sacramento County and its surrounding areas intimately.",
};

export default function Home() {
  return (
    <main className="bg-secondary">
      <div className="relative h-mainSize">
        <ExportedImage
          className="object-cover"
          src="/images/landing_image_2.png"
          alt="Landing image."
          fill={true}
          priority
        />
      </div>
      <LandingAboutGP />
      <LandingServices />
    </main>
  );
}
