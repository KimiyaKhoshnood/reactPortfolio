type ContactWaysProps = {
    svg: string,
    title: string,
    content: string,
}

const ContactWays = ({svg, title, content}:ContactWaysProps) => {
    return(
        <>
        <div className="flex items-center gap-5">
            <div className="w-[50px] h-[50px] rounded-full bg-gradient-to-t from-[#8650F6] to-[#2A1455] p-2">
                <img src={svg} alt="" />
            </div>
            <div className="lg:w-[300px] w-[250px]">
                <h5 className="text-lg">{title}</h5>
                <a className="font-medium lg:text-xl text-lg text-[#2A1454]" href="">{content}</a>
            </div>
        </div>
        </>
    )
}

export default ContactWays