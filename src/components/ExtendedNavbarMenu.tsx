import Link from "next/link";
import { usePathname } from "next/navigation";
import { josefinSans } from "@/app/fonts";

interface ExtendedNavbarMenuProps {
  setIsOpen: (isOpen: boolean) => void;
}

export default function ExtendedNavbarMenu({
  setIsOpen,
}: ExtendedNavbarMenuProps) {
  const pathname = usePathname();

  return (
    <ul
      className={`${josefinSans.className} fixed left-0 top-20 z-10 flex w-full w-screen flex-col bg-primary lg:hidden`}
    >
      <Link href="/">
        <li
          className={`${pathname === "/" && "text-accent"} hover:bg-primaryHover --primary-hover p-4 hover:text-accent`}
          onClick={() => setIsOpen(false)}
        >
          Home
        </li>
      </Link>
      <Link href="/about">
        <li
          className={`${pathname === "/about" && "text-accent"} hover:bg-primaryHover --primary-hover p-4 hover:text-accent`}
          onClick={() => setIsOpen(false)}
        >
          About
        </li>
      </Link>
      <Link href="/services">
        <li
          className={`${pathname === "/services" && "text-accent"} hover:bg-primaryHover --primary-hover p-4 hover:text-accent`}
          onClick={() => setIsOpen(false)}
        >
          Services
        </li>
      </Link>
      <Link href="/free-quote">
        <li
          className={`${pathname === "/free-quote" && "text-accent"} hover:bg-primaryHover --primary-hover p-4 hover:text-accent`}
          onClick={() => setIsOpen(false)}
        >
          Free Quote
        </li>
      </Link>
      <Link href="/contact">
        <li
          className={`${pathname === "/contact" && "text-accent"} hover:bg-primaryHover --primary-hover p-4 hover:text-accent`}
          onClick={() => setIsOpen(false)}
        >
          Contact
        </li>
      </Link>
      <Link href="/faq">
        <li
          className={`${pathname === "/faq" && "text-accent"} hover:bg-primaryHover --primary-hover p-4 hover:text-accent`}
          onClick={() => setIsOpen(false)}
        >
          FAQ
        </li>
      </Link>
    </ul>
  );
}
