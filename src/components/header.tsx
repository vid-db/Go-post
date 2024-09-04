"use client"; // This marks the component as a Client Component

import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathname = usePathname();

    const navLinks = [
        {
            "href": "/",
            "label": "Home"
        },
        {
            "href": "/posts",
            "label": "Posts"
        },
        {
            "href": "/createPost",
            "label": "Create Post"
        },

    ]

    return (
        <div className="flex justify-between items-center py-6 px-7 border-b-2 shadow-sm bg-zinc-[70]">
            <Link href='/' >
                <Image
                    src="/DB.jpg"
                    alt="QR Code"
                    width={50}
                    height={50}
                    className="w-[50px] h-[50px] rounded-3xl" />
            </Link>
            <nav className="flex space-x-4">
                <ul className="flex flex-row gap-x-5 text-lg ">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link href={link.href}
                                className={`${link.href === pathname ? 'text-zinc-900' : 'text-zinc-400'}`}>{link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                {
                    pathname === '/createPost' ?
                        <button className="bg-gray-300 px-3 py-1 rounded-md">
                            <LogoutLink>
                                Logout
                            </LogoutLink>
                        </button> : null
                }
            </nav>

        </div>
    );
}
export default Header;
