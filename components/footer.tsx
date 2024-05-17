import Link from "next/link";

export default function Footer (){
    return(
        <div className="gridLayout">
                <div className="col-start-2  gap-[10px] flex flex-col 2xl:col-start-4">
                    <p className="text-[#FFCF47] text-left">Website</p>
                    <div className="flex flex-col gap-[5px]">
                        <Link href="#intro"><p className="text-left text-[#EAD19F] hover:text-[#FFCF47] transition-all ease-in-out duration-200">Home</p></Link>
                        <Link href="#whoweare"><p className="text-left text-[#EAD19F] hover:text-[#FFCF47] transition-all ease-in-out duration-200">Who we Are</p></Link>
                        <Link href="#benefits"><p className="text-left text-[#EAD19F] hover:text-[#FFCF47] transition-all ease-in-out duration-200">Exclusive</p></Link>
                    </div>
                </div>
                <div className="col-start-4  gap-[10px] flex flex-col 2xl:col-start-6">
                    <p className="text-[#FFCF47] text-left">Socials</p>
                    <div className="flex flex-col gap-[5px]">
                        <Link href="#"><p className="text-left text-[#EAD19F] hover:text-[#FFCF47] transition-all ease-in-out duration-200">Twitter</p></Link>
                        <Link href="#"><p className="text-left text-[#EAD19F] hover:text-[#FFCF47] transition-all ease-in-out duration-200">Discord</p></Link>
                    </div>

                </div>
            
        </div>
    )
}