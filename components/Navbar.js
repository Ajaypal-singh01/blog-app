// components/Navbar.js
"use client";

import Link from "next/link";

import { cn } from "@/lib/utils"; // Import utility function
import { Button } from "./ui/button";

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ModeToggle } from "./theme-btn";



export default function Navbar() {
    
    return (
        <header
            className={cn(
                "fixed top-0 w-full backdrop-blur bg-background/50 shadow-md z-50"
            )}
        >
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold">
                    SinghBlog
                </Link>

                {/* Right Side Navigation and Theme Toggle */}
                <div className="flex items-center space-x-4 ">
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-6 items-center ">
                        <Link className=" hover:scale-110 transition-transform duration-300" href="/">Home</Link>
                        <Link className=" hover:scale-110 transition-transform duration-300" href="/blogs">Blog</Link>
                        <Link className=" hover:scale-110 transition-transform duration-300" href="/about">About</Link>
                        <Link className=" hover:scale-110 transition-transform duration-300" href="/contact">Contact</Link>
                        <div className="flex items-center gap-x-1">
                            <Button  variant="outline">Login</Button>
                            <Button  variant="outline">SignUp</Button>
                            <ModeToggle/>
                        </div>

                    </nav>

                    


                </div>

                {/* Mobile Navigation */}
                <div className="flex items-center md:hidden">
                <Sheet>
                <span className="mx-2"><ModeToggle /></span>
                    <SheetTrigger asChild>
                        <Button variant="outline" className="md:hidden ">
                            ☰
                        </Button>
                    </SheetTrigger>
                    
                    
                    <SheetContent side="right">
                        <SheetHeader>
                            <SheetTitle>Menu  </SheetTitle>
                        </SheetHeader>

                        <div className="flex flex-col mt-4 space-y-3">
                            <NavLink href="/">Home</NavLink>
                            <NavLink href="/blog">Blog</NavLink>
                            <NavLink href="/about">About</NavLink>
                            <NavLink href="/contact">Contact</NavLink>
                            
                        </div>

                        <SheetFooter className="mt-5">
                            <Button variant="outline" className="w-full mb-2">
                                Login
                            </Button>
                            <Button variant="outline" className="w-full">
                                SignUp
                            </Button>
                           
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
                </div>

            </div>
        </header>
    );
}

// Reusable NavLink Component
function NavLink({ href, children, ...props }) {
    return (
        <Link href={href} {...props} className="hover:underline">
            {children}
        </Link>
    );
}
