const Header = () => {
    // #E8DEFD
    return(
        <>
        <div className="flex justify-between h-fit w-full items-center py-6 md:px-20 px-7 text-[18px] font-medium text-[#2a1454]">
            <div className="flex items-center">
                <img className="w-[50px] h-[45px]" src="https://cdn-icons-png.flaticon.com/256/13309/13309357.png" alt="" />
                <a className="md:block hidden" href="#">Kimiya.Khoshnood@gmail.com</a>
            </div>
            <div className="lg:flex hidden gap-6 items-center">
                <a className="hover:border-b-2 border-[#2A1455]" href="">Service</a>
                <a className="hover:border-b-2 border-[#2A1455]" href="">Works</a>
                <a className="hover:border-b-2 border-[#2A1455]" href="">Resume</a>
                <a className="hover:border-b-2 border-[#2A1455]" href="">Skills</a>
                {/* <a href="">Testimonials</a> */}
                <a className="hover:border-b-2 border-[#2A1455]" href="">Contact</a>
                <a className="py-2 px-6 bg-gradient-to-r from-[#8750F7] to-[#2A1455] rounded-3xl text-white" href="">Hire me!</a>
            </div>
            <a className="lg:hidden flex py-2 px-6 bg-gradient-to-r from-[#8750F7] to-[#2A1455] rounded-3xl text-white" href="">Hire me!</a>
        </div>
        </>
    )
}

export default Header;