"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { title: "Courses", path: "/courses" },
  { title: "Saved", path: "/courses/saved" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="mb-4">
      {NAV_ITEMS.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          className={`mx-2 ${pathname === item.path ? "font-bold" : ""}`}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
