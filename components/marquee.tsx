import Marquee from "react-fast-marquee";

const marqueeImages = [
    "Ungabunga.png", 
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