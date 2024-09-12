import HeroSection from "./Components/HeroSection/HeroSection";
import StatusNumbersBox from "./Components/StatusNumbersBox/StatusNumbersBox";
import QualityServices from "./Components/QualityServices/QualityServices";
import RecentWorks from "./Components/RecentWorks/RecentWorks";
import ExperienceAndEducation from "./Components/ExperienceAndEducation/ExperienceAndEducation";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
function App() {

  return (
    <>
      <div className="min-h-[100vh] ">
        {/* <Header/> */}
        <HeroSection/>
        <StatusNumbersBox/>
        <QualityServices/>
        <RecentWorks/>
        <ExperienceAndEducation/>
        <Skills/>
        <Contact/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
