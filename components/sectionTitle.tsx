export default function SectionTitle(props:any){
    return(
        <div>
            <h2 className={`2xl:text-${props.align}`}>{props.subtitle}</h2>
                <h1 className={`mt-[5px] sm:mt-[10px] 2xl:text-${props.align}`}>{props.title}</h1>
                <h4 className={`mt-[10px] sm:mt-[20px] 2xl:text-${props.align}`}>{props.text}</h4>
        </div>
    )
}