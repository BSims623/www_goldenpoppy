import AboutDesktop from "./_components/AboutDesktop";
import AboutOwnerDesktop from "./_components/AboutOwnerDesktop";
import AboutOwnerTablet from "./_components/AboutOwnerTablet";
import About from "./_components/About";
import AboutOwner from "./_components/AboutOwner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Golden Poppy Appraisal provides comprehensive residential appraisals for 1-4-unit properties. Serving the Sacramento area and the surrounding areas such as, West Sacramento, Antelope, Carmichael, Fair Oaks, Folsom, Granite Bay, Roseville, Rocklin, Lincoln, Loomis, Auburn, Plumas Lake, Davis, Woodland, Rancho Murietta, Wilton, Stockton, Lodi, Elk Grove, and Galt. We provide appraisals for the following: Estate Settlement, Date of Death, Retrospective/Historical, Selling or Buying, Bankruptcy, and Conventional and FHA Lending",
};

export default function AboutPage() {
  return (
    <main className="min-h-mainSize bg-secondary px-4 py-10 text-primary lg:py-20">
      <AboutOwnerDesktop />
      <AboutOwnerTablet />
      <AboutOwner />
      <About />
      <AboutDesktop />
    </main>
  );
}
