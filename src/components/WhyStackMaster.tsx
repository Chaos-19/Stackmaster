import MaxWidthWrapper from "./MaxWidthWrapper";

import { whytochooseCard } from "@/constants";

const WhyStackMaster = () => {
    const last = whytochooseCard.length - 1;

    return (
        <section className="w-full">
            <MaxWidthWrapper className="bg-black">
                <div className="w-full py-16">
                    <div
                        data-aos="fade-down"
                        data-aos-delay="700"
                        className="text-center flex flex-col justify-center
                    items-center gap-8 w-full py-16"
                    >
                        <h2
                            className="text-4xl text-primary
                        sm:text-6xl capitalize font-bold"
                        >
                            Why Choose Stack Master?
                        </h2>
                        <p
                            className="px-5 md:px-10 text-base lg:text-xl
                        text-gray-600"
                        >
                            At WebPulse, we are passionate about helping
                            businesses thrive in the digital world. With years
                            of experience and a team of creative minds, we have
                            the expertise to craft unique and effective digital
                            strategies tailored to your brand's needs. Our
                            mission is to unlock your digital potential and
                            deliver exceptional results that drive growth and
                            success.
                        </p>
                    </div>
                </div>
                <div className="w-full pb-16">
                    <div className="w-full lg:flex lg:gap-3 flex-wrap px-10 lg:px-2 gap-8 grid grid-cols-1 overflow-hidden lg:gap-y-12">
                        {/*grid grid-cols-1 lg:grid-cols-3 gap-8*/}
                        {whytochooseCard.map((card, index) => (
                            <div
                                data-aos="fade-up"
                                data-aos-delay={`${(index + 1) * 2000}`}
                                className="w-full lg:w-3/12 lg:grow"
                                key={card.title}
                            >
                                <img
                                    className={`${
                                        index == last
                                            ? "h-[400px] lg:h-[250px]"
                                            : index >= last - 1 &&
                                              "lg:h-[250px]"
                                    } bg-cover w-full`}
                                    src={card.imgSrc}
                                    alt={`${card.title}`}
                                />
                                <div className="w-full pt-10">
                                    <h3 className="text-3xl text-white">
                                        {card.title}
                                    </h3>
                                    <p className="text-xl lg:text-lg lg:pr-2 text-zinc-500 mt-3">
                                        {card.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    );
};

export default WhyStackMaster;
