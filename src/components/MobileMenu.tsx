import { navLinks } from "@/constants";

const MobileMenu = ({ isOpen }: { isOpen: boolean }) => {
    return (
        <nav
            className={`${
                isOpen ? "block" : "hidden"
            } w-full absolute inset-x-0 top-100 z-50 bg-black transition-all duration-300`}
        >
            <ul
                className="list-none flex flex-col justify-center text-white
            divide-y-2 px-2"
            >
                {navLinks.map((nav, i) => (
                    <li key={nav.label} className={`p-2 `}>
                        <a
                            href={nav.link}
                            className="text-2xl font-medium
                        capitalize"
                        >
                            {nav.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default MobileMenu;
