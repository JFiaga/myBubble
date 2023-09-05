"use client";
import { sidebarLinks } from "@/constant";
import { logout } from "@/public/assets";
import { SignOutButton, SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function LeftSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <section className=" custom-scrollbar leftsidebar">
      <div className=" flex w-full flex-1 flex-col space-y-6 px-6">
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;
          return (
            <Link
              href={link.route}
              key={link.label}
              className={`leftsidebar_link ${isActive && "bg-primary-500"}`}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              />
              <p className="text-light-1 max-lg:hidden hover:text-primary-500 transition-all duration-300">
                {link.label}
              </p>
            </Link>
          );
        })}
      </div>
      <div className="mt-10 px-5">
        <SignedIn>
          <SignOutButton signOutCallback={()=> router.push('/sign-in')}>
            <div className=" flex cursor-pointer space-x-4 p-4">
              <Image src={logout} alt="logout" width={24} height={24} />
            </div>

            <p>Logout</p>
          </SignOutButton>
        </SignedIn>
      </div>
    </section>
  );
}
