import ExportedImage from "next-image-export-optimizer";

export default function About() {
  return (
    <section className="mx-auto w-full max-w-5xl lg:hidden">
      <ExportedImage
        className="rounded"
        src="/images/sacramento_bridge_2.jpeg"
        alt="A photo of the Sacramento Golden Bridge at night."
        width={1024}
        height={372}
      />
      <h1 className="my-4 text-2xl font-bold">About Golden Poppy Appraisal</h1>
      <p className="mb-3 indent-8">
        At Golden Poppy Appraisal, we recognize that purchasing a home is one of
        the largest investments you&apos;ll ever make. Whether it&apos;s a
        primary residence, vacation home, or investment property, real estate
        transactions are complex, requiring multiple professionals to ensure a
        seamless experience. Among realtors, lenders, and title companies,
        it&apos;s easy to overlook a vital player: the appraiser.
      </p>
      <p className="mb-3 indent-8">
        Our role as appraisers is to deliver a clear-eyed, unbiased opinion of
        your property&apos;s true value, helping to ensure it aligns with the
        amount being paid. This objective perspective is essential for
        protecting buyers, sellers, and lenders alike, enabling informed
        decisions that impact one of life&apos;s most significant investments.
      </p>
      <ExportedImage
        className="rounded"
        src="/images/fab_40s.avif"
        alt="A photo of the Sacramento Golden Bridge at night."
        width={1024}
        height={372}
      />
      <h2 className="my-4 text-xl font-bold">Our Process</h2>
      <p className="mb-3 indent-8">
        The Golden Poppy appraisal process begins with a meticulous{" "}
        <span className="font-bold text-accent">inspection</span>, where we
        evaluate the property&apos;s key features and overall condition. This
        includes details like the number of bedrooms and bathrooms, location,
        and any features or flaws that could impact its value. Our inspections
        include precise measurements and sketches to confirm square footage,
        layout, and any visible elements that influence value.
      </p>
      <p className="mb-3">
        After inspection, we apply{" "}
        <span className="font-bold text-accent">
          three main valuation approaches
        </span>
        :
      </p>
      <ol className="mb-3 list-decimal ps-6">
        <li>
          <span className="font-bold text-accent">Sales Comparison</span> - Most
          commonly used in residential appraisal, this approach involves
          researching the area to compare your property with recently sold
          properties that share similar features. With extensive local
          expertise, we make adjustments based on attributes such as square
          footage, additional bathrooms, finishes, and other characteristics
          that influence property values.
        </li>
        <li>
          <span className="font-bold text-accent">Cost Approach</span> - We
          consider what it would cost to replace the property&apos;s structure
          at today&apos;s rates, minus depreciation, to reflect the rebuilding
          cost.
        </li>
        <li>
          <span className="font-bold text-accent">Income Approach</span> - For
          income-producing properties, we analyze potential earnings, estimating
          value based on expected income over time.
        </li>
      </ol>
      <ExportedImage
        className="rounded"
        src="/images/fall_in_sacramento.jpg"
        alt="A photo of the Sacramento Golden Bridge at night."
        width={1024}
        height={372}
      />
      <h2 className="my-4 text-xl font-bold">Reaching the Right Value</h2>
      <p className="mb-3 indent-8">
        Once these analyses are complete, we perform a{" "}
        <span className="font-bold text-accent">reconciliation</span> to
        determine an informed opinion of value for the property. This appraised
        value, while a solid foundation, becomes a critical element in the real
        estate process, supporting buyers, sellers, and lenders in making sound
        financial decisions.
      </p>
      <p className="mb-3 indent-8">
        Golden Poppy Appraisal is committed to accuracy, transparency, and
        integrity. Our team provides thorough valuations, so you can navigate
        your real estate journey with confidence, knowing your investment is
        backed by a trusted appraisal.
      </p>
    </section>
  );
}