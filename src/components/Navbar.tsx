"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";

export function MyNav() {
    return (
        <div className="relative backdrop-blur md:w-full w-2/3 m-auto  flex items-center md:justify-center z-[1000]">
            <Navbar className="top-2" />
            <p className="backdrop-blur">
                
            </p>
        </div>
    );
}

function Navbar({ className }: { className?: string }) {
    // const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-[500] ", className)}
        >
            <Menu >
                <MenuItem   item="Home">
                    {/* <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/web-dev">Web Development</HoveredLink>
                        <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                        <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                        <HoveredLink href="/branding">Branding</HoveredLink>
                    </div> */}
                </MenuItem>
                <MenuItem  item="Events">
                    <div className="text-sm grid grid-cols-2 gap-10 p-4">
                        {/* <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            /> */}

                    </div>
                </MenuItem>
                <MenuItem  item="Gallery">
                    {/* <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/hobby">Hobby</HoveredLink>

                    </div> */}
                </MenuItem>
                <MenuItem item="Contact">
                
                </MenuItem>
            </Menu>
        </div>
    );
}
