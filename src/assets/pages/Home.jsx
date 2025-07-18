import { GetData } from "../sections/getData"
import { Hero } from "../sections/Hero"
import { Feature } from "../sections/Feature"
import { Services } from "../sections/Services"


export const HomePage = () => {
    return (
        <>
            <Hero />
            <Feature />
            <GetData />
            <Services />
        </>
    )
}