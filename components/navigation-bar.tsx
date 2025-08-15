import { Download, Menu } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

type NavbarItem = {
  name: string;
  link: string;
  isActive: boolean;
};

export default function NavigationBar() {
  const navbarItems: NavbarItem[] = [
    {
      name: "About",
      link: "#about-section",
      isActive: false,
    },
    {
      name: "Projects",
      link: "#projects-section",
      isActive: false,
    },
    {
      name: "Contact",
      link: "#contact-section",
      isActive: false,
    },
  ];

  return (
    <header className="flex justify-center pt-5 w-full">
      <nav className="w-[90%] max-w-7xl px-9 py-5 bg-accent/40 rounded-lg border-accent border backdrop-blur-sm mt-6">
        <div className="flex justify-between items-center">
          <p className="text-white text-2xl font-bold w-full max-w-3xs">
            M<span className="text-primary">FR</span>
          </p>
          <div className="w-full max-w-3xs justify-end flex md:hidden">
            <Menu />
          </div>
          <div className="gap-8 hidden md:flex">
            {navbarItems.map((item, i: number) => (
              <Link
                key={i}
                href={item.link}
                className={`${
                  item.isActive
                    ? "text-primary"
                    : "text-gray-400 hover:text-primary duration-200"
                } text-lg`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="w-full max-w-3xs justify-end hidden md:flex">
            <Button
              variant="outline"
              className="hover:border-primary transition-all duration-300 hover:shadow-[var(--shadow-glow)]"
            >
              Resume <Download />
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
