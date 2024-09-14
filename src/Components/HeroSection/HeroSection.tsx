import Icon from "react-icons-kit";
import Header from "../Header/Header";
import {github} from 'react-icons-kit/fa/github'
import {linkedin} from 'react-icons-kit/fa/linkedin'
import {envelope} from 'react-icons-kit/fa/envelope'
import {send} from 'react-icons-kit/fa/send'
import {androidDownload} from 'react-icons-kit/ionicons/androidDownload'

const HeroSection = () => {
  return (
    <div className=" flex flex-col bg-gradient-to-tr from-white via-white to-[#E8DEFD]">
      <div
        className="absolute top-0 right-0 w-full h-full xl:text-[400px] lg:text-[300px] md:text-[250px] text-[0] opacity-20 text-transparent font-extrabold font-mono flex justify-center items-center"
        id="textOutline"
      >
        <div>HI</div>
      </div>
      <Header />
      <div className="flex flex-1 md:flex-row flex-col items-center z-10 md:py-14">
        <div className="md:w-1/2 w-full h-full flex flex-col justify-center gap-5 md:pl-20 md:pr-0 px-7">
          <span className="lg:text-4xl text-3xl font-bold">I am Kimia</span>
          <h1
            className="xl:text-7xl lg:text-5xl text-4xl font-bold py-3"
            id="textGradiant"
          >
            Web Developer +<br className="md:block hidden" />
            UX Designer
          </h1>
          <p className="md:block hidden lg:text-2xl sm:text-xl text-lg font-normal text-[#140C1C]">
            I break down complex user experience problems to create integrity
            focussed solutions that connect billions of people
          </p>
          <div className="md:flex hidden w-full h-fit flex-wrap items-center md:justify-start justify-center gap-3 text-[rgb(135,80,247)]">
            <span className="py-3 px-7 flex items-center gap-1 w-fit rounded-3xl font-medium border border-[#8750F7] hover:bg-[#8750F7] hover:text-white transition-all duration-200 ease-linear cursor-pointer">
              <Icon className="w-[25px] flex" icon={androidDownload} size={"100%"}/>  
              Download CV
            </span>
            <div className="flex items-center gap-3">
              <a href="" className="w-[40px] h-[40px] flex items-center justify-center rounded-full border border-[#8750F7] hover:bg-[#8750F7] hover:text-white transition-all  duration-200 ease-linear">
                <Icon className="p-2" icon={github} size={"100%"}/>
              </a>
              <a href="" className="w-[40px] h-[40px] flex items-center justify-center rounded-full border border-[#8750F7] hover:bg-[#8750F7] hover:text-white transition-all  duration-200 ease-linear">
                <Icon className="px-[10px] pb-1" icon={linkedin} size={"100%"}/>
              </a>
              <a href="" className="w-[40px] h-[40px] flex items-center justify-center rounded-full border border-[#8750F7] hover:bg-[#8750F7] hover:text-white transition-all  duration-200 ease-linear">
                <Icon className="px-[10px] pb-1" icon={send} size={"100%"}/>
              </a>
              <a href="" className="w-[40px] h-[40px] flex items-center justify-center rounded-full border border-[#8750F7] hover:bg-[#8750F7] hover:text-white transition-all  duration-200 ease-linear">
                <Icon className="px-[10px] pb-1" icon={envelope} size={"100%"}/>
              </a>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 w-full h-full flex justify-center items-center py-5">
          <div className="bg-black rounded-3xl lg:w-[380px] lg:h-[450px] w-[320px] h-[400px] rotate-6 hover:rotate-0 hover:border-4 hover:border-[#8750F7] transition-all ease-linear duration-200"></div>
        </div>
        <p className="md:hidden block px-7 py-5 lg:text-2xl sm:text-xl text-lg font-normal text-[#140C1C]">
          I break down complex user experience problems to create integrity
          focussed solutions that connect billions of people
        </p>
        <div className="md:hidden flex px-7 w-full h-fit flex-wrap items-center md:justify-start justify-center gap-3 text-[rgb(135,80,247)]">
          <span className="py-3 px-7 flex w-fit rounded-3xl font-medium border border-[#8750F7] hover:bg-[#8750F7] hover:text-white transition-all duration-200 ease-linear cursor-pointer">
            Download CV
          </span>
          <div className="flex items-center gap-3">
              <a href="" className="w-[40px] h-[40px] flex items-center justify-center rounded-full border border-[#8750F7] hover:bg-[#8750F7] hover:text-white transition-all  duration-200 ease-linear">
                <Icon className="p-2" icon={github} size={"100%"}/>
              </a>
              <a href="" className="w-[40px] h-[40px] flex items-center justify-center rounded-full border border-[#8750F7] hover:bg-[#8750F7] hover:text-white transition-all  duration-200 ease-linear">
                <Icon className="px-[10px] pb-1" icon={linkedin} size={"100%"}/>
              </a>
              <a href="" className="w-[40px] h-[40px] flex items-center justify-center rounded-full border border-[#8750F7] hover:bg-[#8750F7] hover:text-white transition-all  duration-200 ease-linear">
                <Icon className="px-[10px] pb-1" icon={send} size={"100%"}/>
              </a>
              <a href="" className="w-[40px] h-[40px] flex items-center justify-center rounded-full border border-[#8750F7] hover:bg-[#8750F7] hover:text-white transition-all  duration-200 ease-linear">
                <Icon className="px-[10px] pb-1" icon={envelope} size={"100%"}/>
              </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
