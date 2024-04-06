import {
    about,
    about2,
    about3,
    service,
    service2,
    service3,
    service4,
    person,
    person2,
    // person3,
    img1,
    img2,
    img3,
    img4,
    img5,
    team1,
    team2,
    team3,
    team4,
    team5,
    log,
    log2,
    log3,
    log4,
    facebook,
    linkedin,
    twitter,
    instagrame,
    telegram
} from "@/assets";

//import { Twitter, LinkIn } from "lucide-react";

export const navLinks = [
    {
        label: "About",
        link: "about"
    },
    {
        label: "service",
        link: "service"
    },
    {
        label: "portfolio",
        link: "portfolio"
    },
    {
        label: "contact",
        link: "contact"
        // icon: Arrow
    }
];

export const aboutCardInfo = [
    {
        title: "Team of Specialists",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        imgSrc: about
    },
    {
        title: "Trustworthiness",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        imgSrc: about2
    },
    {
        title: "Sustainable Relations",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        imgSrc: about3
    }
];

export const dataAbout = [
    {
        count: "21 years",
        countName: "our experience"
    },
    {
        count: "400+",
        countName: "our members"
    },
    {
        count: "30k+",
        countName: "successful services"
    }
];

export const serviceCard = [
    {
        title: "Web Design and Development",
        body: "Create visually stunning and user-friendly websites that captivate your audience and boost conversions.",
        imgSrc: service
    },
    {
        title: "Search engine optimaization (SEO)",
        body: "Enhance your online visibility and reach the right audience through strategic SEO techniques",
        imgSrc: service2
    },
    {
        title: "Social Media Marketing",
        body: "Engage and connect with your target audience across popular social platforms to foster brand loyalty and drive traffic.",
        imgSrc: service3
    },
    {
        title: "Analytics and Reporting",
        body: "Gain valuable insights into your digital performance with in-depth analytics and transparent reporting.",
        imgSrc: service4
    }
];

export const testimonial = [
    {
        reviewer: "Mr. CEO X",
        imgSrc: person,
        review: "Working with WebPulse was a game-changer for our business. They helped us increase our online visibility and drive more qualified leads. Highly recommended!"
    },
    {
        reviewer: "Mr. CEO X",
        imgSrc: person2,
        review: "Alex and his team are a bunch of incredibly talented and passionate professionals who have done a tremendous job in helping us establish a digital presence in the local market. They have never once fail to deliver our requests and expectations."
    },
    {
        reviewer: "CEO of xyz",
        imgSrc: person,
        review: "WebPulse have an array of tools and expertise to make that happen, from digital marketing to SEO, to website design. Best of all, they have a dedicated and responsive team that is open to ideas! Thank You."
    }
];

export const whytochooseCard = [
    {
        imgSrc: img1,
        title: "Proven Results",
        text: "We have a track record of delivering outstanding results for businesses across various industries."
    },
    {
        imgSrc: img2,
        title: "Tailored Solutions",
        text: "Our strategies are customized to suit your specific goals and objectives."
    },
    {
        imgSrc: img3,
        title: "Innovative Approach",
        text: "We stay ahead of the curve with the latest digital trends and cutting-edge techniques."
    },
    {
        imgSrc: img4,
        title: "Dedicated Team",
        text: "Our team of experts is committed to providing top-notch service and support."
    },
    {
        imgSrc: img5,
        title: "Transparent Communication",
        text: "We believe in open and honest communication with our clients every step of the way."
    }
];

export const teamMember = [
    {
        name: "Jack Nilsson",
        role: "SEO-manager",
        imgSrc: team1,
        socialMedia: [
            {
                link: ""
            }
        ]
    },
    {
        name: "Robert Malone",
        role: "Back-end Developer",
        imgSrc: team2,
        socialMedia: [
            {
                link: ""
            }
        ]
    },
    {
        name: "Nickolas Perry",
        role: "Front-end Developer",
        imgSrc: team3,
        socialMedia: [
            {
                link: ""
            }
        ]
    },
    {
        name: "Barbara Powell",
        role: "UX/UI Designer",
        imgSrc: team4,
        socialMedia: [
            {
                link: ""
            }
        ]
    },
    {
        name: "Marcus Rodgers",
        role: "Product Manager",
        imgSrc: team5,
        socialMedia: [
            {
                link: ""
            }
        ]
    }
];

export const logos = [log, log2, log3, log4];
export const socialMedias = [
    {
        icon: twitter
    },
    {
        icon: facebook
    },
    {
        icon: telegram
    },
    {
        icon: instagrame
    },
    {
        icon: linkedin
    }
];

export const footerLinks = [
    {
        title: "main",
        links: [
            {
                title: "About",
                href: "about"
            },
            {
                title: "Services",
                href: "services"
            },
            {
                title: "Clients Testimonials",
                href: "testimonial"
            },
            {
                title: "Why Choose WebPulse?",
                href: "why"
            },
            {
                title: "Our Team",
                href: "team"
            },
            {
                title: "Contact Us",
                href: "contact"
            },
            {
                title: "Privacy Policy",
                href: "policy"
            }
        ]
    },
    {
        title: "Utility",
        links: [
            {
                title: "Get Started",
                href: "start"
            },
            {
                title: "Styleduide",
                href: "styleduide"
            },
            {
                title: "License",
                href: "license"
            },
            {
                title: "Changelog",
                href: "changelog"
            }
        ]
    },
    {
        title: "Get in touch",
        links: [
            {
                title: "2245 Northpark Dr, Humble, Texas 77339",
                href: ""
            },
            {
                title: "+251 988741783",
                tele: true
            },
            {
                title: "kalgetachew@gmail.com",
                email: true
            }
        ]
    }
];
