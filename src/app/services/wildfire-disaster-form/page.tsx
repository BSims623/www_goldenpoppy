import { WildfireDisasterForm } from "./_components/WildfireDisasterForm";

export default function WildfireDisaster() {
  return (
    <main className="flex min-h-mainSize flex-col items-center bg-secondary px-4 py-10 text-primary lg:py-20">
      <h1 className="mb-4 pt-10 text-4xl">
        Wildfire Disaster Appraisal Questionnaire
      </h1>
      <WildfireDisasterForm />
    </main>
  );
}
