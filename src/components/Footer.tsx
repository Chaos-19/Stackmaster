import MaxWidthWrapper from "./MaxWidthWrapper";
import { socialMedias, footerLinks } from "@/constants";

import { cn } from "@/lib/utils";

const Footer = () => {
    return (
        <section className="w-full">
            <MaxWidthWrapper className="bg-black py-3 p-5">
                <div className="w-full border-4 border-muted-forground">
                    <div className="p-5">
                        <div className="flex justify-between items-center py-5">
                            <h2
                                className="text-2xl md:text-3xl text-white font-black
                            uppercase"
                            >
                                stack master
                            </h2>

                            <div className="flex items-center gap-2">
                                {socialMedias.map((element, index) => (
                                    <img
                                        data-aos="fade-right"
                                        data-aos-delay={`${(index + 1) * 250}`}
                                        className="bg-cover w-12"
                                        src={element.icon}
                                        alt="icon"
                                        key={element.icon}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div
                        className="w-full grid grid-cols-2  md:flex items-start
                        md:justify-around gap-6
                    px-8"
                    >
                        {footerLinks.map((element, index) => (
                            <div
                                data-aos="zoom-in"
                                data-aos-delay={`${(index + 1) * 450}`}
                                className={cn(`pt-10 md:basis-1/3`, {
                                    "basis-1/2":
                                        footerLinks.length - 1 != index,
                                    "col-span-full":
                                        footerLinks.length - 1 == index
                                })}
                                key={element.title}
                            >
                                <h4
                                    className="text-3xl md:text-2xl capitalize mb-5 text-primary
                                font-bold text-left"
                                >
                                    {element.title}
                                </h4>
                                <ul
                                    className="flex flex-col gap-5
                                justify-center text-gray-600 w-full"
                                >
                                    {element.links.map((links, index) => (
                                        <li
                                            data-aos="fade-in"
                                            data-aos-delay={`${
                                                (index + 1) * 250
                                            }`}
                                            className="text-left"
                                            key={links.title}
                                        >
                                            <a
                                                className="text-2xl md:text-xl font-medium"
                                                href={links.href}
                                            >
                                                {links.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div
                        className="p-5 my-20 flex flex-col md:flex-row justify-center
                    md:justify-around text-gray-600 gap-6"
                    >
                        <div className="text-2xl font-medium">
                            Copyright ⓒ stack master . Designed by Chaos
                        </div>
                        <div className="font-normal">
                            <h4 className="text-2xl">
                                Powered by{"  "}
                                <span className="font-bold text-white uppercase">
                                    stack Master
                                </span>
                            </h4>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    );
};

export default Footer;
