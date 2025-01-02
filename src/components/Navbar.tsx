"use client";

import { cormorant, josefinSans } from "@/app/fonts";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ExtendedNavbarMenu from "./ExtendedNavbarMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  function handleClick(): void {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="fixed top-0 z-10 flex h-28 w-full items-center justify-end justify-between bg-primary pe-4 ps-8 md:ps-16 lg:pe-10">
      <Link href="/">
        <div className="flex items-center gap-4">
          <ExportedImage
            className="hidden object-cover sm:block"
            src="/images/orange_poppy_logo.png"
            alt="Orange poppy logo."
            width={100}
            height={10}
          />
          <ExportedImage
            className="object-cover sm:hidden"
            src="/images/orange_poppy_logo.png"
            alt="Orange poppy logo."
            width={60}
            height={10}
          />
          <div
            className={`text-xl font-light sm:text-4xl ${cormorant.className} whitespace-nowrap`}
          >
            Golden Poppy Appraisal
          </div>
        </div>
      </Link>
      <ul
        className={`hidden gap-2 text-lg font-semibold lg:gap-4 ${josefinSans.className} lg:flex`}
      >
        <li
          className={`${pathname === "/" && "text-accent"} hover:text-accent`}
        >
          <Link href="/">Home</Link>
        </li>
        <li
          className={`${pathname === "/about" && "text-accent"} hover:text-accent`}
        >
          <Link href="/about">About</Link>
        </li>
        <li
          className={`${pathname === "/services" && "text-accent"} hover:text-accent`}
        >
          <Link href="/services">Services</Link>
        </li>
        <li
          className={`${pathname === "/free-quote" && "text-accent"} hover:text-accent`}
        >
          <Link href="/free-quote">Free Quote</Link>
        </li>
        <li
          className={`${pathname === "/contact" && "text-accent"} hover:text-accent`}
        >
          <Link href="/contact">Contact</Link>
        </li>
        <li
          className={`${pathname === "/faq" && "text-accent"} hover:text-accent`}
        >
          <Link href="/faq">FAQ</Link>
        </li>
      </ul>
      {isOpen ? (
        <svg
          className="w-8 cursor-pointer lg:hidden"
          onClick={() => handleClick()}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path
            fill="currentColor"
            d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
          />
        </svg>
      ) : (
        <svg
          className="w-8 cursor-pointer lg:hidden"
          onClick={() => handleClick()}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
          />
        </svg>
      )}
      {isOpen && <ExtendedNavbarMenu setIsOpen={setIsOpen} />}
    </nav>
  );
}
