"use client";
import React from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

const MenuBarra = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Inicio", href: "/" },
    { name: "Auxiliatura", href: "/auxiliatura" },
    { name: "Documentación", href: "/Documentacion" },
    { name: "Donaciones", href: "/donaciones" }
  ];

  return (
    <Navbar className="dark z-10" onMenuOpenChange={setIsMenuOpen}>
    <NavbarContent>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarBrand>
      <Link color="warning" href="/">
        UHELP
        </Link>
      </NavbarBrand>
    </NavbarContent>

    <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <NavbarItem>
        <Link color="foreground" href="/">
        Inicio
        </Link>
      </NavbarItem>
      <NavbarItem isActive>
        <Link href="/auxiliatura" aria-current="page">
        Auxiliatura
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="/Documentacion">
        Documentación
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="/donaciones">
        Donaciones
        </Link>
      </NavbarItem>
    </NavbarContent>
    <NavbarContent justify="end">
    </NavbarContent>
    <NavbarMenu>
      {menuItems.map((item, index) => (
        <NavbarMenuItem key={`${item.name}-${index}`}>
          <Link
            color={
              index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
            }
            className="w-full"
            href={`${item.href}`}
            size="lg"
          >
            {item.name}
          </Link>
        </NavbarMenuItem>
      ))}
    </NavbarMenu>
  </Navbar>
  )
}

export default MenuBarra;
