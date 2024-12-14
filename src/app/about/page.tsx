import AboutDesktop from "./_components/AboutDesktop";
import AboutOwnerDesktop from "./_components/AboutOwnerDesktop";
import AboutOwnerTablet from "./_components/AboutOwnerTablet";
import About from "./_components/About";
import AboutOwner from "./_components/AboutOwner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "The Golden Poppy appraisal process begins with a meticulous inspection, where we evaluate the property's key features and overall condition. This includes details like the number of bedrooms and bathrooms, location, and any features or flaws that could impact its value. Our inspections include precise measurements and sketches to confirm square footage, layout, and any visible elements that influence value.",
};

export default function AboutPage() {
  return (
    <main className="min-h-mainSize bg-secondary px-4 py-10 text-primary lg:py-20">
      <About />
      <AboutDesktop />
      <AboutOwnerDesktop />
      <AboutOwnerTablet />
      <AboutOwner />
    </main>
  );
}
