import Header from "../Header/Header"
const HeroSection = () => {
    return(
        <div className="h-[120vh] flex flex-col">
            <Header/>
            <div className="flex flex-1">
                <div className="w-1/2 h-full flex flex-col justify-center gap-5 px-20">
                    <span className="text-4xl font-bold">I am Kimia</span>
                    <h1 className="text-7xl font-bold" id="textGradiant">Web Developer +<br />UX Designer</h1>
                    <p className="text-2xl font-normal text-[#140C1C]">I break down complex user experience problems to create integrity focussed solutions that connect billions of people</p>
                    <div className="w-full h-fit p-3 flex items-center gap-3 text-[#8750F7]">
                        <span className="py-3 px-7 flex w-fit rounded-3xl font-medium border border-[#8750F7] hover:bg-[#8750F7] hover:text-white transition-all  duration-200 ease-linear">Download CV</span>
                        <span className="w-[40px] h-[40px] flex items-center justify-center rounded-full border border-[#8750F7] hover:bg-[#8750F7] hover:text-white transition-all  duration-200 ease-linear">f</span>
                        <span className="w-[40px] h-[40px] flex items-center justify-center rounded-full border border-[#8750F7] hover:bg-[#8750F7] hover:text-white transition-all  duration-200 ease-linear">f</span>
                        <span className="w-[40px] h-[40px] flex items-center justify-center rounded-full border border-[#8750F7] hover:bg-[#8750F7] hover:text-white transition-all  duration-200 ease-linear">f</span>
                        <span className="w-[40px] h-[40px] flex items-center justify-center rounded-full border border-[#8750F7] hover:bg-[#8750F7] hover:text-white transition-all  duration-200 ease-linear">f</span>
                    </div>
                </div>
                <div className="w-1/2 h-full flex justify-center items-center">
                    <div className="bg-black rounded-3xl w-[380px] h-[450px] rotate-6 hover:rotate-0 hover:border-4 hover:border-[#8750F7] transition-all ease-linear duration-200"></div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
