export default function SectionTitle(props:any){
    return(
        <div>
            <h2 className={`${props.centerText ? '2xl:text-center' : ""}`}>{props.subtitle}</h2>
                <h1 className={`mt-[5px] sm:mt-[10px] ${props.centerText ? '2xl:text-center' : ""}`}>{props.title}</h1>
                <h4 className={`mt-[10px] sm:mt-[20px] ${props.centerText ? '2xl:text-center' : ""}`}>{props.text}</h4>
        </div>
    )
}