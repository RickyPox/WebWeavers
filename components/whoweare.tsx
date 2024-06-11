import SectionTitle from "./sectionTitle";

export default function WhoWeAre(){

    const team = [
        {
            role:"Founder",
            handle:"@modsiw",
            img:"/Founder.png",
        },
        {
            role:"Board",
            handle:"@Theude_sol",
            img:"/Board.png",
        },
        {
            role:"Borad",
            handle:"@mrdutchgolfer",
            img:"/Board2.png",
        },
        {
            role:"Community Lead",
            handle:"@Cryptohalo1",
            img:"/CommunityLead.png",
        },
        {
            role:"Operations",
            handle:"@DeBenje",
            img:"/Operations.png",
        },
        {
            role:"Communications",
            handle:"@Ukkometa",
            img:"/Communications.png",
        },
        {
            role:"Moderation",
            handle:"@itsmePampaa",
            img:"/Moderation.png",
        },
        {
            role:"Moderation",
            handle:"@nikolaynft",
            img:"/Moderation2.png",
        },


    ]

    return(
        <div className="gridLayout">
            <div className="col-span-5 lg:col-span-3 lg:col-start-2">
                <SectionTitle subtitle="Who We Are" title="Web Weavers" text="A team of like minded individuals."/>
            </div>
            <div className="2xl:mt-[134px] lg:mt-[194px] mt-[231px] grid md:grid-cols-4 grid-cols-2 gap-[60px] col-span-5 2xl:col-start-3 lg:px-[100px] px-[20px] 2xl:px-0 team-container">
                {team.map((team, index) => (
                    <div key={index} className="team-wrap">
                        <div className="flex flex-col items-center gap-[10px] team">
                            <img className="team-img rounded-[10px]" src={team.img}/>
                            <p className="team-text">{team.role}</p>
                            <p className="team-text">{team.handle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}