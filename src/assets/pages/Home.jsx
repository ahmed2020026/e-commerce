import { GetData } from "../sections/getData"
import { Hero } from "../sections/Hero"
import { Feature } from "../sections/Feature"
import { Services } from "../sections/Services"


export const HomePage = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        //behavior: "smooth"
    });
    return (
        <>
            <Hero />
            <Feature />
            <GetData />
            <Services />
        </>
    )
}