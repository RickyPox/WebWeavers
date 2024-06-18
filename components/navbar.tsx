import Link from "next/link"
import { useState } from "react"

export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false)
    const navigation = [
        {
            title:"Who We Are",
            href:"#whoweare"
        },
        {
            title:"Exclusive",
            href:"#benefits"
        },
        {
            title:"Join the Web",
            href:"#jointheweb"
        },
    ]


    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const [hoveredIndex, setHoveredIndex] = useState<number|null>(null)

    const handleHoveredIndex = (index:any) => {
        setHoveredIndex(index);
    }


    if(isOpen === true){
        if (typeof window != 'undefined' && window.document) {
            document.body.style.overflow = 'hidden';
        }
    } else {
        if (typeof window != 'undefined' && window.document) {
            document.body.style.overflow = 'unset';
        }
    }

    return(
        <div>
            {!isOpen &&
            <div className="flex items-center justify-between mx-[20px]">
                <img className="w-[30vw] sm:w-[250px]" src="/Logo.png"/>
                <div className="2xl:hidden block" onClick={toggleMenu}>
                <svg className="w-[6vw] h-[3vw]" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1H20" stroke="white"/>
                    <path d="M0 6H20" stroke="white"/>
                    <path d="M0 11H20" stroke="white"/>
                </svg>

                </div>
                <div className="hidden 2xl:flex gap-[45px] ">
                    {navigation.map((item, index)=>(
                        <div key={index} onMouseEnter={() => handleHoveredIndex(index)} onMouseLeave={() => handleHoveredIndex(null)}>
                            <Link href={item.href}>
                                <p className="text-[#EAD19F] hover:text-[#FFCF47] transition-all ease-in-out duration-200"
                                style={{ textShadow: hoveredIndex === index ? "10px 0px 10px #FFCF47, -10px 0px 10px #FFCF47, 0px 10px 10px #FFCF47, 0px -10px 10px #FFCF47" : ""
                                }}>{item.title}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            }

            {isOpen && 
            <div className="w-screen h-screen absolute z-10 top-0 bg-black/80 backdrop-blur-lg">
                    <div className="absolute right-[5%] top-[5%]" onClick={toggleMenu}>
                        <svg className="sm:w-[6vw] sm:h-[3vw] w-[30px] h-[15px]" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0.353553" y1="0.646447" x2="19.3536" y2="19.6464" stroke="white"/>
                            <line x1="19.3536" y1="1.35355" x2="0.353553" y2="20.3536" stroke="white"/>
                        </svg>
                    </div>
                    <div className="flex flex-col sm:gap-[55px] gap-[30px] lg-[65px] items-center h-full justify-center px-[20px]">
                        {navigation.map((item, index)=>(
                            <div key={index}>
                                <Link href={item.href}>
                                    <h1 onClick={toggleMenu} className="text-[#FFCF47] ">{item.title}</h1>
                                </Link>
                            </div>
                        ))}
                    </div>
            </div>
            }
        </div>
    )
}