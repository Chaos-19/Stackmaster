import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel";

import { testimonial } from "@/constants";

const CarouselSlider = () => {
    return (
        <Carousel className="w-full relative p-5">
            <CarouselContent>
                {testimonial.map(review => (
                    <CarouselItem
                        key={review.reviewer}
                        className=" ml-6 md:basis-8/12
                    bg-neutral-800 text-white"
                    >
                        <div className="px-2 flex flex-col py-16">
                            <div className="justify-self-center w-full flex justify-center flex-col">
                                <p className="self-end text-lg px-2">
                                    "{review.review}"
                                </p>
                            </div>
                            <div className="self-end w-full flex items-center gap-3 py-5">
                                <img
                                    className="bg-cover"
                                    src={review.imgSrc}
                                    alt="customer img"
                                />
                                <p className="text-xl p-2">{review.reviewer}</p>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div
                className="embla__controls relative flex items-center
            p-5 mt-10"
            >
                <CarouselPrevious className="left-5 text-white border-2 bg-black" />
                <CarouselNext className="left-16 text-white border-2 bg-black text-base" />
            </div>
        </Carousel>
    );
};

export default CarouselSlider;
