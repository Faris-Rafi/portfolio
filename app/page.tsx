import { Button } from "@/components/ui/button";
import { Download, Menu } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="flex justify-center pt-5 w-full">
        <nav className="w-[90%] max-w-[1280px] px-9 py-5 bg-accent/40 rounded-lg border-accent border backdrop-blur-lg mt-6">
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className="text-white text-2xl font-bold w-full max-w-3xs"
            >
              M<span className="text-primary">FR</span>
            </Link>
            <div className="w-full max-w-3xs justify-end flex md:hidden">
              <Menu />
            </div>
            <div className="gap-8 hidden md:flex">
              <Link href="/" className="text-white text-lg">
                Home
              </Link>
              <Link
                href="/"
                className="text-gray-400 hover:text-white duration-200  text-lg"
              >
                Projects
              </Link>
              <Link
                href="/"
                className="text-gray-400 hover:text-white duration-200 text-lg"
              >
                About
              </Link>
              <Link
                href="/"
                className="text-gray-400 hover:text-white duration-200 text-lg"
              >
                Contact
              </Link>
            </div>
            <div className="w-full max-w-3xs justify-end hidden md:flex">
              <Button variant="outline">
                Resume <Download />
              </Button>
            </div>
          </div>
        </nav>
      </header>
      <section className="flex justify-center items-center min-h-80 w-full pt-5">
        <div className="max-w-[1280px] px-9 py-5 mt-6">
          <div className="w-full ">
            <h1 className="text-[3.75rem] font-bold text-center bg-gradient-to-r from-foreground to-primary inline-block bg-clip-text text-transparent">
              Muhammad Faris Rafi
            </h1>
          </div>
        </div>
      </section>
    </main>
  );
}
