import { Mail, Phone, House } from "lucide-react";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { cormorant } from "@/app/fonts";

export default function ContactPage() {
  return (
    <main className="flex min-h-mainSize flex-col items-center justify-center bg-secondary px-4 py-10 text-primary lg:py-20">
      <section className="grid w-full max-w-4xl grid-cols-1 gap-4 md:grid-cols-2">
        <ExportedImage
          className="mx-auto rounded"
          src="/images/kim_greenwood_headshot.jpeg"
          alt="A photo of Kim Greenwood, the owner of Golden Poppy Appraisal."
          width={400}
          height={400}
        />
        <div className="flex h-full flex-col justify-between rounded text-primary">
          <div>
            <h1 className={`text-center text-3xl ${cormorant.className}`}>
              Kimberlee Greenwood
            </h1>
            <h2 className={`my-2 text-center text-2xl ${cormorant.className}`}>
              Owner
            </h2>
          </div>
          <ul className="mx-auto flex flex-col gap-4">
            <a
              href="mailto:Kim@GoldenPoppyAppraisal.com"
              className="hover:text-accent"
            >
              <li className="flex items-center gap-2">
                <Mail />
                Kim@GoldenPoppyAppraisal.com
              </li>
            </a>
            <Link href="tel:+1-916-398-7330" className="hover:text-accent">
              <li className="flex items-center gap-2">
                <Phone />
                916-398-7330
              </li>
            </Link>
            <Link
              href="https://www.google.com/maps/place/Sacramento,+CA/@38.5616433,-121.626548,11z/data=!3m1!4b1!4m6!3m5!1s0x809ac672b28397f9:0x921f6aaa74197fdb!8m2!3d38.5781342!4d-121.4944209!16zL20vMDdiY24?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
              className="hover:text-accent"
              target="_blank"
            >
              <li className="flex items-center gap-2">
                <House />
                Sacramento, CA
              </li>
            </Link>
            <Link
              href="https://www.linkedin.com/in/kimberlee-greenwood-b2a215258/"
              className="hover:text-accent"
              target="_blank"
            >
              <li className="flex items-center gap-2">
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
              </li>
            </Link>
          </ul>
          <div className="flex justify-center">
            <Link
              href="/free-quote"
              className="pt-4 font-bold text-accent hover:text-primary"
            >
              Get A Free Quote &gt;
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full max-w-4xl pt-10 lg:pt-20">
        <h2 className="mb-3 text-xl font-bold">
          Please reach out with any question or to get a free quote.
        </h2>
        <ContactForm />
      </section>
    </main>
  );
}
