import AboutDesktop from "./_components/AboutDesktop";
import AboutOwnerDesktop from "./_components/AboutOwnerDesktop";
import AboutOwnerTablet from "./_components/AboutOwnerTablet";
import About from "./_components/About";
import AboutOwner from "./_components/AboutOwner";

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
