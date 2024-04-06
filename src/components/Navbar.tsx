import { useState } from "react";
import { Menu } from "lucide-react";
import MobileMenu from "@/components/MobileMenu";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { navLinks } from "@/constants";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <nav className="w-full sticky top-0 bg-black z-50">
            <MaxWidthWrapper className="bg-black">
                <div className="w-full flex items-center justify-between py-8">
                    <a href="/">
                        <h1 className="text-2xl sm:text-3xl tracking-normal font-black text-white font-serif">
                            Stack Master
                        </h1>
                    </a>
                    <div className="hidden lg:block flex-1 pl-10">
                        <ul className="flex items-end text-white">
                            {navLinks.map((nav, index) => (
                                <li
                                    key={nav.label}
                                    className={`p-2 ${
                                        navLinks.length - 1 == index
                                            ? "ms-auto"
                                            : ""
                                    }`}
                                >
                                    <a
                                        href={nav.link}
                                        className="text-lg font-medium capitalize"
                                    >
                                        {nav.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Menu
                        color="white"
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden"
                        size={42}
                    />
                </div>
            </MaxWidthWrapper>
            <MobileMenu isOpen={isOpen} />
        </nav>
    );
};

export default Navbar;
