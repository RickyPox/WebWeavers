import Link from "next/link";

export default function Footer (){
    return(
        <div className="flex justify-center">
                <div className="col-start-4  gap-[10px] flex flex-col">
                    <p className="text-[#FFCF47] text-left">Socials</p>
                    <div className="flex flex-col gap-[5px]">
                        <Link href="https://webweavers.gitbook.io/whitepaper" target="_blank"><p className="text-left text-[#EAD19F] hover:text-[#FFCF47] transition-all ease-in-out duration-200">Whitepaper</p></Link>
                        <Link href="https://twitter.com/webweaversnft" target="_blank"><p className="text-left text-[#EAD19F] hover:text-[#FFCF47] transition-all ease-in-out duration-200">Twitter</p></Link>
                        <Link href="https://discord.gg/spiderswap" target="_blank"><p className="text-left text-[#EAD19F] hover:text-[#FFCF47] transition-all ease-in-out duration-200">Discord</p></Link>
                    </div>

                </div>
            
        </div>
    )
}