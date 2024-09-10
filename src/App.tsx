import HeroSection from "./Components/HeroSection/HeroSection";
import StatusNumbersBox from "./Components/StatusNumbersBox/StatusNumbersBox";
import QualityServices from "./Components/QualityServices/QualityServices";
import RecentWorks from "./Components/RecentWorks/RecentWorks";
function App() {

  return (
    <>
      <div className="min-h-[100vh] bg-gradient-to-tr from-white via-white to-[#E8DEFD]">
        {/* <Header/> */}
        <HeroSection/>
        <StatusNumbersBox/>
        <QualityServices/>
        <RecentWorks/>
      </div>
    </>
  );
}

export default App;
