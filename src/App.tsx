import HeroSection from "./Components/HeroSection/HeroSection";
import StatusNumbersBox from "./Components/StatusNumbersBox/StatusNumbersBox";
import QualityServices from "./Components/QualityServices/QualityServices";
import RecentWorks from "./Components/RecentWorks/RecentWorks";
import ExperienceAndEducation from "./Components/ExperienceAndEducation/ExperienceAndEducation";
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
      </div>
    </>
  );
}

export default App;
