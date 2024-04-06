import MaxWidthWrapper from "./MaxWidthWrapper";
import { Twitter, Linkedin } from "lucide-react";

import { cn } from "@/lib/utils";
import { teamMember } from "@/constants";

const OurTeam = () => {
    return (
        <MaxWidthWrapper className="bg-zinc-300">
            <div className="w-full py-20">
                <div
                    data-aos="zoom-in"
                    data-aos-delay={`${500}`}
                    className="text-center flex flex-col justify-center
                    items-center gap-5 w-full py-16"
                >
                    <h2
                        className="text-4xl text-black
                        sm:text-4xl capitalize font-bold max-w-prose"
                    >
                        Our Team
                    </h2>
                    <p
                        className="px-5 md:px-0 text-base lg:text-lg
                    text-gray-600 max-w-2xl"
                    >
                        At WebPulse, we are more than just a team of experts. we
                        are passionate digital enthusiasts driven by a common
                        purpose - to empower businesses to thrive in the
                        ever-evolving digital landscape. Our journey began 2012,
                        and since then, we have been on a mission to unlock the
                        true potential of our clients' brands.
                    </p>
                </div>
                <div
                    className="w-full px-5 lg:px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                md:grid-rows-3 lg:grid-rows-2 gap-8 lg:gap-3"
                >
                    {teamMember.map((member, index) => (
                        <div
                            key={member.name}
                            data-aos="fade-up"
                            data-aos-delay={`${index + 1 * 500}`}
                            className={cn(
                                `w-full relative bg-zinc-400 p-6 md:p-8 border-2
                                border-black `,
                                { "md:col-start-1 lg:col-start-1": index == 3 },
                                { "lg:col-start-3": index == 4 }
                            )}
                        >
                            <img
                                className="w-full max-h-[200px] bg-cover mx-auto"
                                src={member.imgSrc}
                                alt=""
                            />
                            <div className="pt-6 md:pt-10 ">
                                <h3
                                    className="capitalize text-3xl text-black
                                font-black"
                                >
                                    {member.name}
                                </h3>
                                <p className="text-2xl mt-2">{member.role}</p>
                                <div
                                    className="flex items-center gap-5 pt-8
                                md:pt-4"
                                >
                                    {member.socialMedia.map((_, index) => (
                                        <>
                                            <Twitter key={index + "Twitter"} />
                                            <Linkedin
                                                key={index + "Linkedin" + _}
                                            />
                                        </>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </MaxWidthWrapper>
    );
};

export default OurTeam;
