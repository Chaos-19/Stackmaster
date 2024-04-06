import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const EmailSubscription = () => {
    return (
        <section>
            <MaxWidthWrapper className="bg-black py-20">
                <div
                    data-aos="zoom-in"
                    data-aos-delay={`${500}`}
                    className="w-full px-7 py-10 md:py-6 md:px-8"
                >
                    <div
                        className="py-10 relative
                        max-w-3xl border-2 mx-auto"
                    >
                        <div
                            className="absolute -left-7 md:-left-14 top-8 md:top-1/4 rotate-45
                        border-4 border-white"
                        >
                            <div
                                className="w-10 md:w-24 h-10 md:h-24 border-8
                                md:border-[24px] border-black
                                bg-white"
                            />
                        </div>

                        <div className="absolute -right-7 md:-right-14 bottom-8 md:bottom-16 rotate-45 border-4 border-white">
                            <div
                                className="w-10 md:w-24 h-10 md:h-24 border-8
                                md:border-[24px] 
                                border-black
                                bg-white"
                            />
                        </div>

                        <div
                            className="text-center flex flex-col justify-center
                    items-center gap-4 w-full py-8"
                        >
                            <h2 className="text-5xl text-white capitalize font-bold">
                                <span className="text-primary block md:inline">
                                    Free
                                </span>{" "}
                                Consultation
                            </h2>
                            <p className="px-5 md:px-14 text-center text-xl max-w-prose text-gray-600">
                                Ready to take your digital presence to the next
                                level? Get in touch with us today for a free
                                consultation!
                            </p>
                        </div>
                        <div className="w-full">
                            <form className="w-full">
                                <div
                                    className="flex flex-col md:flex-row w-full
                                    md:items-center md:space-x-2 gap-4 px-10
                                    md:px-20 py-5"
                                >
                                    <Input
                                        type="email"
                                        placeholder="Email"
                                        className="py-8 text-xl bg-black
                                        border-2"
                                    />
                                    <Button
                                        className={buttonVariants({
                                            size: "lg",
                                            className: "px-8 py-7 text-xl"
                                        })}
                                        type="submit"
                                    >
                                        Subscribe
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    );
};

export default EmailSubscription;
