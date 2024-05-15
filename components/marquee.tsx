import Marquee from "react-fast-marquee";

const marqueeImages = [
    "marquee1.png", 
    "marquee2.png", 
    "marquee3.png"
]


export default function MarqueeSlider(){
    return(
        <div>
            <Marquee
            autoFill
            >
                {marqueeImages.map((image, index) => (
                    <div key={index} className="mx-[10px]">
                        <img src={image} alt={`Marquee ${index + 1}`} />
                    </div>
                ))}
            </Marquee>
        </div>
    )
}