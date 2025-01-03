import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";

export default function AboutOwnerDesktop() {
  return (
    <section className="mx-auto hidden w-full max-w-5xl lg:block">
      <h1 className="mb-2 text-3xl">Kimberlee Greenwood</h1>
      <h2 className="mb-4 text-2xl">
        <span className="text-accent">Certified Residential Appraiser</span>,
        Golden Poppy Appraisal
      </h2>
      <div className="grid grid-cols-[auto_400px] gap-2">
        <div>
          <p className="mb-3 indent-8">
            Kimberlee Greenwood is the owner and sole Certified Residential
            Appraiser at Golden Poppy Appraisal, specializing in residential
            appraisals for 1&ndash;4-unit properties throughout the Greater
            Sacramento Area. With a Bachelor&apos;s degree in Communications
            from California State University, Sacramento, Kimberlee leverages
            her strong communication skills alongside her expertise in real
            estate appraisal to provide accurate, reliable, and comprehensive
            property valuations. Having lived in Sacramento for nearly 20 years,
            Kimberlee has developed an extensive understanding of the local
            market dynamics and unique neighborhood characteristics, from
            Roseville to East Sacramento and Elk Grove. She is committed to
            utilizing cutting-edge technology and up-to-date market data to
            deliver customized valuations that meet the diverse needs of her
            clients.
          </p>
          <p className="mb-3">
            Prior to establishing Golden Poppy Appraisal, Kimberlee spent 15
            years in the hospitality industry, where she honed her
            organizational and interpersonal skills as an event planner at
            California State University, Sacramento. This experience has
            equipped her with a keen eye for detail and an ability to work
            collaboratively with clients and stakeholders.
          </p>
        </div>
        <ExportedImage
          className="mx-auto rounded"
          src="/images/kim_greenwood_headshot.jpeg"
          alt="A photo of the Kimberlee Greenwood, owner of Golden Poppy Appraisal."
          width={400}
          height={400}
        />
      </div>
      <p className="mb-3">
        Kimberlee&apos;s journey into the world of residential appraisal began
        with exposure to the field through her aunt and uncle, which ignited her
        passion for real estate valuation. As a certified appraiser, she
        understands the importance of providing an unbiased opinion of value and
        strives to empower her clients to make informed real estate decisions.
        Her training under two seasoned Certified Residential Appraisers with
        over 20 years of experience in the greater Sacramento area has further
        enriched her knowledge and skills.
      </p>
      <p className="mb-3">
        When she&apos;s not engaged in appraisals or managing her business,
        Kimberlee enjoys spending quality time with her family, exploring the
        great outdoors, or cheering for the Las Vegas Raiders.
      </p>
      <Link
        href="https://www.linkedin.com/in/kimberlee-greenwood-b2a215258/"
        className="font-bold text-accent hover:text-primary"
        target="_blank"
      >
        <div className="flex justify-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="h-6 w-6"
            fill="currentColor"
          >
            {/*<!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->*/}
            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
          </svg>
          LinkedIn
        </div>
      </Link>
    </section>
  );
}
