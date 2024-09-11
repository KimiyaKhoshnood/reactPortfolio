import RecentWorksEach from "../RecentWorksEach/RecentWorksEach"
const RecentWorks = () => {
    let RecentWorksEachProps = [
        {img: "https://geroldlight.themejunction.net/wp-content/uploads/2024/05/portfolio-3.jpg"},
        {img: "https://geroldlight.themejunction.net/wp-content/uploads/2024/05/portfolio-3.jpg"},
        {img: "https://geroldlight.themejunction.net/wp-content/uploads/2024/05/portfolio-3.jpg"},
        {img: "https://geroldlight.themejunction.net/wp-content/uploads/2024/05/portfolio-3.jpg"},
    ]
    

    return(
        <>
        <div className="flex flex-col items-center md:p-20 p-10 md:gap-10 gap-6">
            <h2 className="font-bold md:text-5xl text-3xl p-3" id="textGradiant">My Recent Works</h2>
            <div className="flex bg-[rgb(246,243,252)] w-fit py-1 px-2 rounded-3xl text-[#8750F7]">
                <div className="md:py-2 py-1 md:px-6 px-3 cursor-pointer rounded-3xl text-white bg-gradient-to-r from-[#8650F6] to-[#2A1455]">All</div>
                <div className="md:py-2 py-1 md:px-6 px-3 cursor-pointer rounded-3xl">Apps</div>
                <div className="md:py-2 py-1 md:px-6 px-3 cursor-pointer rounded-3xl">UI/UX</div>
                <div className="md:py-2 py-1 md:px-6 px-3 cursor-pointer rounded-3xl">Branding</div>
            </div>
            <div className="flex flex-wrap justify-between gap-y-8 gap-x-3">
                {
                    RecentWorksEachProps.map((elem, index)=>{
                        return(
                            <RecentWorksEach img={elem.img} key={index}/>
                        )
                    })
                }
            </div>
        </div>
        </>
    )
}

export default RecentWorks