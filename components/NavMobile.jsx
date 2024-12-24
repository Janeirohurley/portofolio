"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci"
import { links } from "./Links";
import Link from "next/link";
const NavMobile = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            Janeiro <span className="text-accent">.</span>
                        </h1>
                    </Link>
                </div>
                <nav className="flex flex-col gap-8 justify-center items-center">{
                    links.map((link, index) => {
                        return <Link href={link.path} key={index} className={`${pathname === link.path && "text-accent border-b-2 border-accent"} capitalize font-medium w-max hover:text-accent transition-all`}>
                            {link.name}
                        </Link>
                    })

                }</nav>
            </SheetContent>
        </Sheet>
    )
}
export default NavMobile