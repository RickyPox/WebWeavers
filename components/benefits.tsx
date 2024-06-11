import { useEffect, useState } from "react";
import SectionTitle from "./sectionTitle"


export default function Benefits(){

    const benefits =[
        {
            title:"Access to Spiderswap premium",
            img:"/Premium.png",
        },
        {
            title:"Fee discounts",
            img:"/Discount.png",
        },
        {
            title:"Point multipliers",
            img:"/Multi.png",
        },
        {
            title:"Revshare",
            img:"/Revshare.png",
        },
        {
            title:"Community",
            img:"/Community.png",
        },
        {
            title:"Whitelist, presales and airdrops",
            img:"/Airdrop.png",
        },
        
    ]   

    const [hoveredIndex, setHoveredIndex] = useState<number|null>(null)

    const handleHoveredIndex = (index:any) => {
        setHoveredIndex(index);
    }

    useEffect(() => {
        function handleScroll() {
            const windowHeight = window.innerHeight;
            const triggerIn = windowHeight / 1.5;
            const triggerOut = windowHeight / 2;

            const middleIndex = benefits.findIndex((_, index) => {
                const element = document.getElementById(`benefit-${index}`);
                if (!element) return false;
                const { top, bottom } = element.getBoundingClientRect();
                if(triggerIn && triggerOut) return top <= triggerIn && bottom >= triggerOut;
                console.log("TOP: ", top);
            });
            setHoveredIndex(middleIndex);
        }
       

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return(
        <div className="gridLayout relative">
            <div className="col-span-5 lg:col-span-3 lg:col-start-2 2xl:col-span-6 2xl:col-start-2">
                <SectionTitle subtitle="Exclusive" title="Holder Benefits"/>
            </div>
            {/* DESKTOP */}
            

            {/* MOBILE */}

            <div className="col-start-1 col-span-5 2xl:col-span-9 2xl:hidden flex flex-col items-center 2xl:gap-[25px] gap-[60px]">
            {benefits.map((benefit, index) => (
                    <div
                        key={index}
                        id={`benefit-${index}`}
                        className="flex"
                    >
                        <div
                            className="bg-[#101010] px-[45px] py-[25px] rounded-[10px] flex items-center justify-center gap-[15px]"
                            style={{
                                textShadow:
                                    hoveredIndex === index
                                        ? "10px 0px 10px #FFCF47, -10px 0px 10px #FFCF47, 0px 10px 10px #FFCF47, 0px -10px 10px #FFCF47"
                                        : "",
                            }}
                        >
                            <img src={benefit.img} />
                            <h3>{benefit.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}