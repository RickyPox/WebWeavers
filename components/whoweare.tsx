import SectionTitle from "./sectionTitle";

export default function WhoWeAre(){
    return(
        <div className="gridLayout">
            <div className="col-span-5 lg:col-span-3 lg:col-start-2">
                <SectionTitle subtitle="Who We Are" title="WebWeavers" text="Lorem ipsum dolor sit amet consectetur. Diam consectetur urna gravida pretium arcu tincidunt."/>
            </div>
            <div className="mt-[80px] 2xl:m-0 grid grid-cols-6 gap-[10px] sm:gap-[20px] col-span-5 lg:grid-cols-5">
                <img className="w-full col-start-1 col-span-3 lg:col-start-2 lg:col-span-1" src="/Ungabunga.png"/>
                <img className="w-full col-start-4 col-span-3 lg:col-start-3 lg:col-span-1" src="/Ungabunga.png"/>
                <img className="w-full col-start-1 col-span-3 lg:col-start-4 lg:col-span-1" src="/Ungabunga.png"/>
                <img className="w-full col-start-4 col-span-3 lg:col-start-3 lg:col-span-1" src="/Ungabunga.png"/>
                <img className="w-full hidden lg:block lg:col-start-2 lg:col-span-1 row-start-2" src="/Ungabunga.png"/>
                <img className="w-full hidden lg:block lg:col-start-4 lg:col-span-1 row-start-2" src="/Ungabunga.png"/>
            </div>
        </div>
    )
}