"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { navigationConfig } from "@/lib/constants/navigation";
import { ScrollArea } from "../ui/scroll-area";
import { NavItem } from "@/types/nav";
import { useState } from "react";
import Link from "next/link";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="pr-0">
        <Link href="/" className="flex items-center">
          <span className="font-bold">swimlane</span>
        </Link>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col space-y-3">
            {navigationConfig.map((item) => (
              <MobileNavSection key={item.title} item={item} />
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

function MobileNavSection({ item }: { item: NavItem }) {
  const [isOpen, setIsOpen] = useState(false);

  if (item.items) {
    return (
      <div className="flex flex-col space-y-2">
        <Button
          variant="ghost"
          className="justify-start px-0"
          onClick={() => setIsOpen(!isOpen)}
        >
          {item.title}
        </Button>
        {isOpen && (
          <div className="ml-4 flex flex-col space-y-2">
            {item.items.map((section) => (
              <div key={section.title} className="flex flex-col space-y-2">
                <span className="font-medium">{section.title}</span>
                {section.items?.map((subItem) => (
                  <Link
                    key={subItem.title}
                    href={subItem.href ?? "#"}
                    className="text-muted-foreground hover:text-primary"
                  >
                    {subItem.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      href={item.href ?? "#"}
      className="text-foreground hover:text-primary"
    >
      {item.title}
    </Link>
  );
}
