import { UserButton, auth } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar: React.FC = () => {
  const { userId } = auth();

  return (
    <header className="bg-[#6C47FF]">
      <nav className="container mx-auto flex items-center justify-between p-5">
        <div className="text-white">
          <Link href="/" className="text-xl font-bold">
            Next.JS Auth
          </Link>
        </div>
        <div className="space-x-4">
          {userId ? (
            <div className="flex items-center space-x-4">
              <Link href="/dashboard" className="text-white">
                Dashboard
              </Link>
              <UserButton />
            </div>
          ) : (
            <div className="space-x-8">
              <Link
                href="/"
                className="text-white"
                // className={`text-white ${
                // //   pathname === "/" ? "text-orange-500" : ""
                // }`}
              >
                Home
              </Link>
              <Link href="/about" className="text-white">
                About
              </Link>
              <Link
                href="/auth/sign-in"
                className="bg-rose-500 hover:bg-rose-600 px-4 py-2 rounded text-white"
              >
                Sign In
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
