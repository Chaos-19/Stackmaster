import MaxWidthWrapper from "./MaxWidthWrapper";
import { serviceCard } from "@/constants";
import { pcIcon } from "@/assets";

const Card = ({
    title,
    body,
    imgSrc,
    hasIcon,
    i
}: {
    title: string;
    body: string;
    imgSrc: string;
    hasIcon: boolean;
    i: number;
}) => {
    return (
        <div
            className="relative border-4 h-[450px] md:h-[350px]"
            data-aos="zoom-in-up"
            data-aos-delay={`${i * 200}`}
        >
            <img
                src={imgSrc}
                alt={title}
                className="w-full h-full object-cover"
            />
            {hasIcon && (
                <img
                    data-aos="zoom-in"
                    data-aos-delay={`${i * 200}`}
                    className="w-[40%] z-30 absolute -left-3 bottom-0 md:hidden"
                    src={pcIcon}
                    alt="pc icon"
                />
            )}
            <div
                className="absolute inset-0 flex justify-center items-center
            bg-black/80"
            >
                <div
                    className="flex flex-col items-center justify-center gap-5
                w-full text-center px-6"
                >
                    <h3 className="text-4xl md:px-2 md:text-2xl text-center max-w-prose font-bold text-white capitalize">
                        {title}
                    </h3>
                    <p
                        className="text-xl md:text-base font-black text-center text-gray-300
                    md:px-2.5g"
                    >
                        {body}
                    </p>
                </div>
            </div>
        </div>
    );
};

const Services = () => {
    return (
        <section className="w-full">
            <MaxWidthWrapper className="bg-zinc-300">
                <div className="w-full">
                    <div
                        className="text-center flex flex-col justify-center
                    items-center gap-5 w-full py-16"
                    >
                        <h2 className="text-4xl sm:text-5xl capitalize font-bold">
                            Services
                        </h2>
                        <p className="px-5 text-base lg:text-xl max-w-prose text-gray-600">
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit. Exercitation veniam
                            consequat sunt.
                        </p>
                    </div>
                </div>
            </MaxWidthWrapper>
            <MaxWidthWrapper className="bg-black">
                <div className="py-16 grid grid-cols-1 md:grid-cols-2 gap-8 px-3 relative">
                    {serviceCard.map((data, index) => (
                        <Card
                            key={data.title}
                            hasIcon={index == 0}
                            {...data}
                            i={index + 1}
                        />
                    ))}
                    <img
                        className="hidden md:block absolute md:w-[30%] md:top-1/2 md:left-1/2
                        md:-translate-x-1/2 md:-translate-y-1/2"
                        src={pcIcon}
                        alt="pc icon"
                    />
                </div>
            </MaxWidthWrapper>
        </section>
    );
};

export default Services;
