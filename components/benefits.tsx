import SectionTitle from "./sectionTitle"

export default function Benefits(){

    const benefits =[
        {
            title:"Access to Spiderswap premium",
        },
        {
            title:"Fee discounts",
        },
        {
            title:"Point multipliers",
        },
        {
            title:"Revshare",
        },
        {
            title:"Community",
        },
        {
            title:"Whitelist, presales and airdrops",
        },
        
    ]

    return(
        <div className="gridLayout">
            <div className="col-span-5 lg:col-span-3 lg:col-start-2 2xl:col-span-6 2xl:col-start-2">
                <SectionTitle subtitle="Exclusive" title="Holder Benefits" text="Lorem ipsum dolor sit amet consectetur. Diam consectetur urna gravida pretium arcu tincidunt."/>
            </div>
            <div className="col-start-1 col-span-5 sm:col-span-3 sm:col-start-2 flex flex-col gap-[40px] mt-[70px] 2xl:col-span-6 2xl:col-start-2 2xl:grid 2xl:gap-x-[20px] 2xl:gap-y-[40px] 2xl:grid-cols-6">
                {benefits.map((benefit, index) => (
                    <div key={index} className="2xl:col-span-2">
                        <h3>{benefit.title}</h3>
                        <p className="mt-[5px] sm:mt-[10px]">{benefit.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}