import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-lg">
          What is a residential appraisal?
        </AccordionTrigger>
        <AccordionContent className="text-lg">
          Simply put, a residential appraisal is the process of developing a
          highly educated opinion of value (usually market value) for real
          property. An appraisal is typically used in real estate transactions
          to ensure that the purchase price aligns with the property's market
          value. There are many reasons you may need an appraisal, such as
          purchases, refinances, estate valuation, and divorce. Additionally,
          several factors determine the value of your property.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-lg">
          When do I need an appraisal?
        </AccordionTrigger>
        <AccordionContent className="text-lg">
          There are many circumstances in which you may need an appraisal. Most
          lenders require an appraisal when you purchase or refinance a home.
          You may also need or want an appraisal before you list your home for
          sale. Other reasons include divorce, bankruptcy, and estate planning.
          See a complete list on our services page.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-lg">
          How long does an appraisal take?
        </AccordionTrigger>
        <AccordionContent className="text-lg">
          The first step in the appraisal process is to determine the scope of
          the assignment. If a site visit is required, we typically schedule it
          1-2 weeks in advance. After the site visit, reports are usually
          completed within a week. This process can vary depending on the
          assignments and the complexity of the property.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="text-lg">
          What will the appraiser be looking at when they visit my home?
        </AccordionTrigger>
        <AccordionContent className="text-lg">
          During the site visit, the appraiser will note many features of the
          home. They will measure the home to determine living space square
          footage and how that compares to county records. The appraiser will
          observe various construction features to determine the building
          quality and overall condition of the home. They will also take note of
          any specific features or improvements on the property. Typically, the
          appraiser will go into all the rooms of the home, as well as any
          additional structures, and take photos for the report.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger className="text-lg">
          What is the difference between an appraisal and a home inspection?
        </AccordionTrigger>
        <AccordionContent className="text-lg">
          The appraisal determines the market value of the home, while a home
          inspection assesses the home's functionality and features. An
          appraiser observes the home in its current condition during a site
          visit, whereas a home inspector tests the home to determine if its
          features function properly.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger className="text-lg">
          How should I prepare for my appraisal?
        </AccordionTrigger>
        <AccordionContent className="text-lg">
          Ensure all areas of the home and any additional structures are
          accessible. While personal property doesn't affect the value of a
          home, an uncluttered space allows the appraiser to more accurately
          assess the home's features and condition. In cases of an FHA or VA
          loan, the appraiser will check various appliances and systems to
          verify they are in working order. FHA and VA loans also require access
          to attics and crawl spaces.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7">
        <AccordionTrigger className="text-lg">What is a comp?</AccordionTrigger>
        <AccordionContent className="text-lg">
          The term ‘comp’ refers to a comparable property. In the appraisal
          process, the appraiser identifies similar properties that have sold to
          be comparable to the subject property. The sale prices of these
          comparable properties are then adjusted for differences in features.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-8">
        <AccordionTrigger className="text-lg">
          What is a ROV (Review of Value)?
        </AccordionTrigger>
        <AccordionContent className="text-lg">
          A Review of Value (ROV) is a process where a property’s appraisal is
          reviewed for accuracy and compliance with applicable standards. This
          is often requested by lenders or clients who want to verify the
          findings of the initial appraisal. The ROV involves a second appraiser
          analyzing the original appraisal report to ensure that the conclusions
          regarding the property's value are well-supported and justified.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-9">
        <AccordionTrigger className="text-lg">
          How long is an appraisal good for?
        </AccordionTrigger>
        <AccordionContent className="text-lg">
          The appraisal provides an accurate value for a property as of a
          specific date. If the market is rapidly changing, the appraised value
          may only be ‘good’ for a short period, typically 30-90 days, depending
          on current market fluctuations.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-10">
        <AccordionTrigger className="text-lg">
          Is personal property valued in an appraisal?
        </AccordionTrigger>
        <AccordionContent className="text-lg">
          Appraisers are trained to see beyond personal property items.
          Generally, if an item can be removed from the home, it is considered
          personal property. Common personal property items include hot tubs,
          above-ground pools, and pre-manufactured sheds.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-11">
        <AccordionTrigger className="text-lg">
          What are my improvements worth?
        </AccordionTrigger>
        <AccordionContent className="text-lg">
          The value of improvements depends on the real estate market's reaction
          to individual features. For example, a pool may be much more valuable
          to the market in Southern California than it is in Alaska.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-12">
        <AccordionTrigger className="text-lg">
          What is the difference between an appraisal and a real estate agent's
          comparative market analysis (CMA)?
        </AccordionTrigger>
        <AccordionContent className="text-lg">
          A real estate agent’s comparative market analysis (CMA) is a useful
          tool for grasping a ballpark figure when deciding on a list price for
          a home. In contrast, an appraisal is prepared by an unbiased third
          party and provides specific comparable properties that are adjusted to
          show the most probable price the subject property would sell for
          (market value). The appraiser is a licensed certified professional
          whose sole job is to determine values accurately and impartially.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-13">
        <AccordionTrigger className="text-lg">
          Can I challenge the appraised value?
        </AccordionTrigger>
        <AccordionContent className="text-lg">
          Yes, if you believe the appraised value is inaccurate, you can discuss
          your concerns with the lender. You may also provide additional
          information or comparable sales that support your position. However,
          keep in mind that appraisals are based on objective data and
          professional judgment.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-14">
        <AccordionTrigger className="text-lg">
          How can I schedule an appraisal with Golden Poppy Appraisal?
        </AccordionTrigger>
        <AccordionContent className="text-lg">
          To schedule an appraisal or for any inquiries, please contact us
          directly through our website or give us a call. Our team is ready to
          assist you with your residential appraisal needs.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
