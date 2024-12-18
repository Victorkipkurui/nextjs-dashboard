'use client'
import { FaHome } from "react-icons/fa";
import { HiDocumentDuplicate } from "react-icons/hi";
import { FaUserGroup } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from 'clsx';

const links = [
  { name: 'Home', href: '/dashboard', icon: FaHome },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: HiDocumentDuplicate,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: FaUserGroup },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx("flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-orange-600 md:flex-none md:justify-start md:p-2 md:px-3",{'bg-sky-100 text-orange-600': pathname === link.href})}
          >
            <div className="w-6">
            <LinkIcon/>
            </div>
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}