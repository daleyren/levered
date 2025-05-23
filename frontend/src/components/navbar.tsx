import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface NavBarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function NavBar({ className, ...props }: NavBarProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between h-14 px-8 bg-zinc-1000 text-white",
        className
      )}
      {...props}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-2 ml-5">
        <Image
          src="/levered_logo.png"
          alt="Levered logo"
          width={60}
          height={25}
          className="hover:opacity-80 transition"
          priority
        />
      </Link>

      {/* Right-side links */}
      <div className="flex items-center space-x-6">
        <Link href="/problemset" className="text-sm font-medium hover:text-gray-300">
          Problems
        </Link>
        <Button variant="secondary" className="text-sm h-8">
          <Link href="/accounts/login">Sign In / Register</Link>
        </Button>
      </div>
    </div>
  );
}