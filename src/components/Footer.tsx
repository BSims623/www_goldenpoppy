import { josefinSans, cormorant } from "@/app/fonts";
import { House, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className={`items center ${josefinSans.className} flex flex-col py-4`}
    >
      <div className={`mx-auto text-2xl ${cormorant.className}`}>
        Kimberlee Greenwood
      </div>
      <div className={`mx-auto text-xl ${cormorant.className}`}>Owner</div>
      <div className={`mx-auto text-xl ${cormorant.className}`}>
        Certified Residential Appraiser
      </div>
      <ul className="mx-auto flex flex-col gap-3 pt-2 sm:flex-row">
        <li className="">
          <Link
            href="mailto:Kim@GoldenPoppyAppraisal.com"
            className="flex items-center gap-1 hover:text-accent"
          >
            <Mail />
            Kim@GoldenPoppyAppraisal.com
          </Link>
        </li>
        <li className="">
          <Link
            href="tel:+1-916-398-7330"
            className="flex items-center gap-1 hover:text-accent"
          >
            <Phone />
            916-398-7330
          </Link>
        </li>
        <li className="">
          <Link
            href="https://www.google.com/maps/place/Sacramento,+CA/@38.5616433,-121.626548,11z/data=!3m1!4b1!4m6!3m5!1s0x809ac672b28397f9:0x921f6aaa74197fdb!8m2!3d38.5781342!4d-121.4944209!16zL20vMDdiY24?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
            className="flex items-center gap-1 hover:text-accent"
            target="_blank"
          >
            <House />
            Sacramento, CA
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/kimberlee-greenwood-b2a215258/"
            className="flex items-center gap-1 hover:text-accent"
            target="_blank"
          >
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
          </Link>
        </li>
      </ul>
    </footer>
  );
}
