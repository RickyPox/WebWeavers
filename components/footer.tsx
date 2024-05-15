import Link from "next/link";

export default function Footer (){
    return(
        <div className="gridLayout">
                <div className="col-start-2  gap-[10px] flex flex-col 2xl:col-start-4">
                    <p className="text-[#FFCF47] text-left">Website</p>
                    <div className="flex flex-col gap-[5px]">
                        <Link href="#intro"><p className="text-left">Home</p></Link>
                        <Link href="#whoweare"><p className="text-left">Who we Are</p></Link>
                        <Link href="#benefits"><p className="text-left">Exclusive</p></Link>
                    </div>
                </div>
                <div className="col-start-4  gap-[10px] flex flex-col 2xl:col-start-6">
                    <p className="text-[#FFCF47] text-left">Socials</p>
                    <div className="flex flex-col gap-[5px]">
                        <Link href="#"><p className="text-left">Twitter</p></Link>
                        <Link href="#"><p className="text-left">Discord</p></Link>
                    </div>

                </div>
            
        </div>
    )
}