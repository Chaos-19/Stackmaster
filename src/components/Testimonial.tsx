import MaxWidthWrapper from "./MaxWidthWrapper";
import Carousel from "./Carousel";

const Testimonial = () => {
    return (
        <section className="w-full">
            <MaxWidthWrapper className="bg-black">
                <div className="w-full">
                    <div
                        className="text-center flex flex-col justify-center
                    items-center gap-5 w-full py-16"
                    >
                        <h2 className="text-4xl text-white sm:text-5xl capitalize font-bold">
                            Client Testimonials
                        </h2>
                        <p className="px-5 text-base lg:text-xl max-w-prose text-gray-600">
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit. Exercitation veniam
                            consequat sunt.
                        </p>
                    </div>
                </div>
                <div className="w-full">
                    <Carousel />
                </div>
            </MaxWidthWrapper>
        </section>
    );
};

export default Testimonial;
