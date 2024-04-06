import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

import MaxWidthWrapper from "./MaxWidthWrapper";
import { logos } from "@/constants";

const Contact = () => {
    return (
        <section className="w-full">
            <MaxWidthWrapper className="bg-black">
                <div
                    className="w-full grid grid-cols-2 md:grid-cols-4 gap-10
                place-content-between place-items-center py-16"
                >
                    {logos.map((element, index) => (
                        <img
                            data-aos="fade-up"
                            data-aos-delay={`${(1 + index) * 300}`}
                            className="object-cover"
                            src={element}
                            alt="logos"
                            key={element}
                        />
                    ))}
                </div>
            </MaxWidthWrapper>
            <MaxWidthWrapper className="bg-zinc-300">
                <div
                    data-aos="fade-up"
                    data-aos-delay={`${500}`}
                    className="text-center flex flex-col justify-center
                    items-center gap-y-6 w-full py-16"
                >
                    <h2
                        className="text-6xl text-black
                        sm:text-4xl max-w-prose text-center font-semibold"
                    >
                        Join us on this exciting digital journey, and let's
                        unlock your brand's full potential in the digital world!
                    </h2>
                    <p
                        data-aos="fade-up"
                        data-aos-delay={`${600}`}
                        className="px-5 md:px-0 text-xl lg:text-2xl text-gray-600 max-w-2xl"
                    >
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Exercitation veniam consequat sunt nostrud
                        amet.
                    </p>
                </div>
                <div className="" data-aos="fade-up" data-aos-delay={`${500}`}>
                    <form className="w-full max-w-3xl mx-auto">
                        <div className="flex flex-col w-full gap-4 px-10 md:px-20 py-5">
                            <Input
                                type="text"
                                placeholder="Name"
                                className="py-8 text-xl
                                        border-2 border-black rounded-2xl bg-zinc-200"
                            />
                            <Input
                                type="email"
                                placeholder="Email"
                                className="py-8 text-xl 
                                        border-2 border-black rounded-2xl bg-zinc-200"
                            />
                            <textarea
                                name="message"
                                rows={4}
                                cols={40}
                                placeholder="Message"
                                className="p-5 text-xl border-2 hover:border-1
                                border-gray-800 border-black rounded-2xl
                                bg-zinc-200"
                            ></textarea>
                            <div className="flex items-center space-x-4 pt-2">
                                <Checkbox
                                    id="terms2"
                                    className="w-10 h-10
                               border-gray-800 chacked:border-gray-800 border text-white"
                                />
                                <label
                                    htmlFor="terms2"
                                    className="text-xl font-medium leading-none
peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    By clicking submit below, you consent to
                                    storing and processing the personal
                                    information submitted to provide the content
                                    requested.
                                </label>
                            </div>
                            <Button
                                className={buttonVariants({
                                    size: "lg",
                                    className:
                                        "p-8 text-xl rounded-2xl hover:border-2 border-white hover:bg-black bg-black text-white"
                                })}
                                type="submit"
                            >
                                Submit
                            </Button>
                        </div>
                    </form>
                </div>
            </MaxWidthWrapper>
        </section>
    );
};

export default Contact;
