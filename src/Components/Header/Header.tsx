import Icon from 'react-icons-kit';
import {bars} from 'react-icons-kit/fa/bars'

const Header = () => {
    // #E8DEFD
    return(
        <>
        <div className="z-10 flex justify-between h-fit w-full items-center pb-6 md:pt-12 pt-6 md:px-20 px-5 text-[18px] font-medium text-[#2a1454]">
            <div className="flex items-center">
                <img className="w-[50px] h-[45px]" src="https://cdn-icons-png.flaticon.com/256/13309/13309357.png" alt="" />
                <a className="md:block hidden text-[16px]" href="#">Kimiya.Khoshnood@gmail.com</a>
            </div>
            <div className="lg:flex hidden gap-8 items-center text-[17px]">
                <a className="hover:border-b-2 border-[#2A1455]" href="">Service</a>
                <a className="hover:border-b-2 border-[#2A1455]" href="">Works</a>
                <a className="hover:border-b-2 border-[#2A1455]" href="">Resume</a>
                <a className="hover:border-b-2 border-[#2A1455]" href="">Skills</a>
                {/* <a href="">Testimonials</a> */}
                <a className="hover:border-b-2 border-[#2A1455]" href="">Contact</a>
                <a className="py-3 px-7 hover:bg-gradient-to-l bg-gradient-to-r from-[#8750F7] to-[#2A1455] rounded-3xl text-white" href="">Hire me!</a>
            </div>
            <div className="lg:hidden flex gap-3">
                <a className="flex py-3 px-7 bg-gradient-to-r from-[#8750F7] to-[#2A1455] rounded-3xl text-white text-[17px]" href="">Hire me!</a>
                <Icon className='w-[30px] text-[#8750F7]' icon={bars} size={"100%"}/>
            </div>
        </div>
        </>
    )
}

export default Header;