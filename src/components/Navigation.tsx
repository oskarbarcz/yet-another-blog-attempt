import {
  Navbar,
  NavbarBrand,
  NavbarToggle,
  NavbarCollapse,
  NavbarLink,
  DarkThemeToggle,
} from "flowbite-react";

export default function Navigation() {
  return (
    <div className="sticky top-0 z-50 border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-800">
      <Navbar fluid className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-transparent">
        <NavbarBrand href="/">
          <span className="text-xl font-bold">
            Tech <span className="text-brand-600 dark:text-brand-400">Blog</span>
          </span>
        </NavbarBrand>

        <div className="flex items-center gap-3 md:order-3">
          <DarkThemeToggle />
          <NavbarToggle />
        </div>

        <NavbarCollapse className="md:order-2 md:ml-auto">
          <NavbarLink href="/">
            Home
          </NavbarLink>
          <NavbarLink href="/updates">
            Updates
          </NavbarLink>
          <NavbarLink href="/articles">
            Publications
          </NavbarLink>
          <NavbarLink href="/about">
            About
          </NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </div>
  );
}
