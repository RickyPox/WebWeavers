import SectionTitle from "./sectionTitle";

export default function  Into(){
    return(
    <div className="gridLayout">
        <div className="col-span-5 lg:col-span-3 lg:col-start-2 2xl:col-span-5 2xl:col-start-3 ">
            <SectionTitle centerText={true} title="Welcome to the Web"/>
        </div>
    </div>
    )
}