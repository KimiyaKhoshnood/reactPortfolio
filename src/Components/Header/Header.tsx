const Header = () => {
    // #E8DEFD
    return(
        <>
        <div className="flex justify-between h-fit w-full items-center py-6 px-20 text-[18px] font-medium text-[#2a1454]">
            <div className="flex items-center">
                <img className="w-[50px] h-[45px]" src="https://cdn-icons-png.flaticon.com/256/13309/13309357.png" alt="" />
                <a href="#">Kimiya.Khoshnood@gmail.com</a>
            </div>
            <div className="flex gap-6 items-center">
                <a href="">Service</a>
                <a href="">Works</a>
                <a href="">Resume</a>
                <a href="">Skills</a>
                <a href="">Testimonials</a>
                <a href="">Contact</a>
                <a className="py-2 px-6 bg-gradient-to-r from-[#8750F7] to-[#2A1455] rounded-3xl text-white" href="">Hire me!</a>
            </div>
        </div>
        </>
    )
}

export default Header;