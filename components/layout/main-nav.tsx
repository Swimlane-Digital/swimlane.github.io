import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { navigationConfig } from "@/lib/constants/navigation";
import { MobileNav } from "./mobile-nav";

export function MainNav() {
  return (
    <div className="flex h-20 items-center justify-between px-4 md:px-8">
      <Link href="/" className="flex items-center space-x-2">
        <span className="text-2xl font-bold text-blue-500">swimlane</span>
      </Link>

      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          {navigationConfig.map((item) => (
            <NavigationMenuItem key={item.title}>
              {item.items ? (
                <>
                  <NavigationMenuTrigger className="h-10 px-4">
                    {item.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[800px] gap-3 p-4 md:grid-cols-3">
                      {item.items.map((section) => (
                        <li key={section.title} className="row-span-3">
                          <NavigationMenuLink asChild>
                            <div className="flex flex-col space-y-3">
                              <span className="text-sm font-medium leading-none">
                                {section.title}
                              </span>
                              <ul className="space-y-2">
                                {section.items?.map((subItem) => (
                                  <li key={subItem.title}>
                                    <Link
                                      href={subItem.href ?? "#"}
                                      className="text-sm text-muted-foreground hover:text-primary"
                                    >
                                      {subItem.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </>
              ) : (
                <Link
                  href={item.href ?? "#"}
                  className={cn(navigationMenuTriggerStyle(), "h-10 px-4")}
                >
                  {item.title}
                </Link>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <Button className="bg-blue-500 hover:bg-blue-600">CONTACT US</Button>

      <MobileNav />
    </div>
  );
}
