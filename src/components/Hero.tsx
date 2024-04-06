import { Button, buttonVariants } from "@/components/ui/button";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { AOSInit } from "@/hooks/animate";

import { Herobg } from "@/assets";

const Hero = () => {
    AOSInit();

    return (
        <header className="">
            <MaxWidthWrapper className="bg-black py-3">
                <div
                    className="w-full border-4 brder-muted-forground flex
                flex-col lg:flex-row justify-center items-center"
                >
                    <div
                        className="py-20 px-2 mx-auto text-center flex flex-col
                    items-center gap-4 max-w-prose"
                        data-aos="fade-right"
                        data-aos-duration="2000"
                    >
                        <p className="px-5 text-base lg:text-xl text-primary uppercase font-bold">
                            we are your trusted Digital partners
                        </p>
                        <h1
                            className="text-5xl leading-10 font-bold
                        tracking-normal text-white sm:text-7xl capitalize
                        md:px-8 lg:px-0"
                        >
                            Unlock your Digital success with{" "}
                            <span className="block md:inline text-primary">
                                Stack Master{" "}
                            </span>
                        </h1>
                        <p className="mt-6 px-12 text-2xl lg:text-xl max-w-prose text-muted-foreground">
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit. Exercitation veniam
                            consequat sunt nostrud amet.
                        </p>
                        <div className="w-full px-5 md:w-auto flex flex-col md:flex-row gap-5">
                            <Button
                                className={buttonVariants({
                                    size: "lg",
                                    className:
                                        "py-9 md:py-6 text-2xl md:text-xl"
                                })}
                            >
                                Contact Us
                            </Button>
                            <Button
                                size="lg"
                                className="py-9 md:py-6 text-2xl md:text-xl border-2 bg-black text-white"
                            >
                                Read More
                            </Button>
                        </div>
                    </div>
                    <div className="overflow-hidden w-full">
                        <img
                            data-aos="fade-left"
                            data-aos-duration="2000"
                            src={Herobg}
                            alt="hero image"
                            className="w-full bg-cover md:h-[450px] lg:h-auto md:scale-y-[2] lg:scale-y-100"
                        />
                    </div>
                </div>
            </MaxWidthWrapper>
        </header>
    );
};

export default Hero;

/*

       <div
                        className="py-20 mx-auto text-center flex flex-col
                    items-center gap-4 flex-1"
                    >
                        <p className="px-5 text-lg max-w-prose text-primary uppercase font-bold">
                            we are your trusted Digital partners
                        </p>
                        <h1 className="text-4xl leading-10 font-bold tracking-normal text-white sm:text-6xl uppercase ">
                            Unlock your Digital success with{" "}
                            <span className="block md:inline text-primary">
                                Stack Master{" "}
                            </span>
                        </h1>
                        <p className="mt-6 text-lg max-w-prose text-muted-foreground">
                            Welcome to DigitalHippo. Every asset on our platform
                            is
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mt-6">
                            <a href="/products" className={buttonVariants()}>
                                contact us
                            </a>
                            <Button variant="secondary">
                                Our quality promise &rarr;
                            </Button>
                        </div>
                    </div>
                    <div className="w-full flex-1">
                        <img
                            src={Herobg}
                            alt="hero image"
                            className="w-full
                        bg-contain"
                        />
                    </div>


*/
