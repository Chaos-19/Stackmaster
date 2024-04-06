import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

export const AOSInit = () => {
    useEffect(() => {
        AOS.init({
            
            easing: "ease-in-out"
        });
        AOS.refresh();
    }, []);

    return null;
};
