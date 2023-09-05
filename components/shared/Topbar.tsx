import logout from "@/public/assets/logout.svg";
import logo from "@/public/assets/logo.png";
import { OrganizationSwitcher, SignOutButton, SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const Topbar = () => {
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center space-x-4">
        <Image src={logo} alt="logo" width={28} height={28} />

        <p className="text-headinge-bold text-light-1 max-xs:hidden">
          myBubble
        </p>
      </Link>

      <div className="flex items-center space-x-1">
        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton>
              <div className=" flex cursor-pointer">
                <Image src={logout} alt="logout" width={24} height={24} />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
        <OrganizationSwitcher
          appearance={{
            elements: {
              organizationSwitcherTrigger: "py-2 px-4",
            },
          }}
        />
      </div>
    </nav>
  );
};

export default Topbar;
