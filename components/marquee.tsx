import Marquee from "react-fast-marquee";

const marqueeImages = [
    "Marquee1.gif", "Marquee2.gif", "Marquee3.gif", "Marquee4.gif", "Marquee5.gif", "Marquee6.gif", "Marquee7.gif", "Marquee8.gif", "Marquee10.gif", "Marquee11.gif", "Marquee12.gif", "Marquee13.gif", "Marquee14.gif", "Marquee15.gif", "Marquee16.gif", 
]


export default function MarqueeSlider(){
    return(
        <div>
            <Marquee
            autoFill
            >
                {marqueeImages.map((image, index) => (
                    <div key={index} className="mx-[10px]">
                        <img className="w-[20vw] lg:w-[250px]" src={image} alt={`Marquee ${index + 1}`} />
                    </div>
                ))}
            </Marquee>
        </div>
    )
}