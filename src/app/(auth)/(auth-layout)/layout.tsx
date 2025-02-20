"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Login", href: "/login" },
  { name: "Password", href: "/password" },
];
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    const pathName = usePathname();
  return (
    <div>
      <nav>
        {navItems.map((item) => {
           const isActive = pathName.startsWith(item.href)
          return (
            <Link key={item.name} href={item.href} className={isActive ? "text-pink-500 font-bold m-4" : "text-blue-500 font-medium m-4"} >
              {item.name}
            </Link>
          );
        })}
      </nav>
      {children}
    </div>
  );
}
