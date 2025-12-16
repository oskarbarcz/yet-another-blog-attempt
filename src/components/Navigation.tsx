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
      <Navbar
        fluid
        className="mx-auto max-w-7xl bg-transparent px-4 sm:px-6 lg:px-8"
      >
        <NavbarBrand
          className="font-family-slab text-brand-600 dark:text-brand-400 text-xl font-bold"
          href="/"
        >
          oskar's blog
        </NavbarBrand>

        <div className="flex items-center gap-3 md:order-3">
          <DarkThemeToggle />
          <NavbarToggle />
        </div>

        <NavbarCollapse className="md:order-2 md:ml-auto">
          <NavbarLink href="/">Strona główna</NavbarLink>
          <NavbarLink href="/articles">Publikacje</NavbarLink>
          <NavbarLink href="/events">Wydarzenia</NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </div>
  );
}
