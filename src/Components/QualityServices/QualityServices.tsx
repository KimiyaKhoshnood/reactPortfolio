import QualityServicesBox from "../QualityServicesBox/QualityServicesBox"
const QualityServices = () => {
    let QualityServicesProps = [
        {num : "01", h3 : "Web Design", p : "Brolly show off show off pick your nose and blow off well A bit of how’s your father tomfoolery blimey, me old mucker starkers Queen’s..."},
        {num : "02", h3 : "UI/UX Design", p : "Brolly show off show off pick your nose and blow off well A bit of how’s your father tomfoolery blimey, me old mucker starkers Queen’s..."},
        {num : "03", h3 : "Branding Design", p : "Brolly show off show off pick your nose and blow off well A bit of how’s your father tomfoolery blimey, me old mucker starkers Queen’s..."},
        {num : "04", h3 : "App Design", p : "Brolly show off show off pick your nose and blow off well A bit of how’s your father tomfoolery blimey, me old mucker starkers Queen’s..."},
    ]

    return (
        <>
        <div className="p-20 bg-[#F6F3FC] flex flex-col gap-5 justify-center items-center">
            <h2 className="font-bold text-5xl p-3" id="textGradiant">My Quality Services</h2>
            <p className="max-w-[660px] text-center pb-10 text-[17px]">We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
            <div className="w-full">
                {
                    QualityServicesProps.map((elem)=>{
                        return(
                            <>
                            <QualityServicesBox num={elem.num} h3={elem.h3} p={elem.p}/>
                            <hr />
                            </>
                        )
                    })
                }
            </div>
        </div>
        </>
    )
}
export default QualityServices