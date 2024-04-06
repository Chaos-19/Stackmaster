import MaxWidthWrapper from "./MaxWidthWrapper";
import { aboutCardInfo, dataAbout } from "@/constants";

//import { AOSInit } from "@/hooks/animate";

const AboutCard = ({
    title,
    body,
    imgSrc,
    empty
}: {
    title: string;
    body: string;
    imgSrc: string;
    empty: boolean;
}) => {
    return (
        <div
            className="w-full flex items-end relative"
            data-aos="zoom-in"
            data-aos-duration="2000"
        >
            {empty && (
                <div
                    className="absolute w-[250px] h-[250px] left-10 md:left-10
                md:top-24  lg:top-10 lg:left-2 md:w-[70%] md:h-[70%]  border-4 border-black
                rotate-45"
                />
            )}
            <img
                src={imgSrc}
                alt="about image"
                className=" w-full bg-cover z-30"
            />
            <div className="absolute inset-0 flex items-end z-30">
                <div className="w-full text-white p-3">
                    <h3 className="text-2xl font-black">{title}</h3>
                    <p className="text-base font-medium">{body}</p>
                </div>
            </div>
        </div>
    );
};

const About = () => {
    //AOSInit();

    return (
        <section className="w-full">
            <MaxWidthWrapper className="bg-zinc-300 p-0">
                <div
                    className="w-full h-full flex flex-col justify-center py-16
                gap-8"
                >
                    <div
                        className="text-center
                    w-full"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                    >
                        <h1
                            className="text-4xl leading-10 font-bold
                        tracking-normal sm:text-4xl capitalize
                        md:px-8 lg:px-0"
                        >
                            Unlock your Digital success with{" "}
                            <span className="block md:inline">
                                Stack Master{" "}
                            </span>
                        </h1>
                        <p
                            className="mt-6 px-8 text-base
                        text-foreground font-light"
                        >
                            At WebPulse, we are passionate about helping
                            businesses thrive in the digital world. With years
                            of experience and a team of creative minds, we have
                            the expertise to craft unique and effective digital
                            strategies tailored to your brand's needs. Our
                            mission is to unlock your drive growth and success.
                            digital potential and deliver exceptional results
                            that
                        </p>
                    </div>

                    <div
                        className="w-full flex flex-col lg:flex-row gap-5
                        md:gap-14 px-3
                    md:px-16 mt-16"
                    >
                        {aboutCardInfo.map((info, index) => (
                            <AboutCard
                                empty={index != 1}
                                key={info.title}
                                {...info}
                            />
                        ))}
                    </div>
                </div>
            </MaxWidthWrapper>

            <div
                className="flex flex-col md:flex-row justify-center
            md:justify-evenly gap-10 items-center py-16 bg-black max-w-screen-xl
            relative"
            >
                {dataAbout.map((data, index) => (
                    <div
                        key={data.countName}
                        className="flex flex-col justify-center gap-3 items-center "
                        data-aos="fade-up"
                        data-aos-delay={`${index * 100 + 700}`}
                    >
                        <h3 className="text-5xl text-primary font-black">
                            {data.count}
                        </h3>
                        <p className="text-base text-gray-300">
                            {data.countName}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default About;
