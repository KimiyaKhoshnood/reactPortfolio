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
        <div className="flex flex-col items-center p-20">
            <h2 className="font-bold text-5xl p-3" id="textGradiant">My Recent Works</h2>
            <div className="flex bg-[rgb(246,243,252)] w-fit py-1 px-2 rounded-3xl text-[#8750F7]">
                <div className="py-2 px-6 rounded-3xl text-white bg-gradient-to-r from-[#8650F6] to-[#2A1455]">All</div>
                <div className="py-2 px-6 rounded-3xl">Apps</div>
                <div className="py-2 px-6 rounded-3xl">UI/UX</div>
                <div className="py-2 px-6 rounded-3xl">Branding</div>
            </div>
            <div className="flex flex-wrap">
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