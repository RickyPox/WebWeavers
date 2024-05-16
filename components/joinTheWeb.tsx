import SectionTitle from "./sectionTitle";

export default function JoinTheWeb(){
    return(
        <div className="gridLayout ">
            <div className="col-span-5 row-start-1 row-span-1 lg:col-span-3 lg:col-start-2 2xl:col-span-3 2xl:col-start-4 2xl:row-start-1 2xl:row-span-2 mb-[110px] 2xl:mb-0">
                <SectionTitle centerText={true} title="Join the Web" text="Lorem ipsum dolor sit amet consectetur. Cras sem ac tortor egestas. Tempor lacus porttitor amet ullamcorper adipiscing platea. Faucibus pharetra diam nisi volutpat vel magna aenean."/>
            </div>

            <div className="col-start-1 col-span-1 row-start-3 2xl:row-start-2">
                <img className="w-full opacity-20 " src="/Ungabunga.png"/>
            </div>
            <div className="col-start-2 col-span-1 row-start-2  2xl:row-start-1">
                <img className="w-1/2 opacity-20" src="/Ungabunga.png"/>
            </div>
            <div className="col-start-2 col-span-1 row-start-4 2xl:row-start-3 ">
                <img className="w-1/2 opacity-20" src="/Ungabunga.png"/>
            </div>
            <div className="col-start-3 col-span-1 row-start-3 2xl:row-start-2">
                <img className="w-1/2 opacity-20" src="/Ungabunga.png"/>
            </div>
            <div className="col-start-3 col-span-1 row-start-5 2xl:row-start-4">
                <img className="w-1/2 opacity-20" src="/Ungabunga.png"/>
            </div>
            <div className="col-start-4 col-span-2 row-start-3 row-span-4 2xl:row-start-2 2xl:row-span-3 2xl:col-start-8">
                <img className="w-full" src="/Ungabunga.png"/>
            </div>
    </div>
    )
}