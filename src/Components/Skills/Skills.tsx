import SkillsEach from "../SkillsEach/SkillsEach"

const Skills = () => {
    let SkillsEachProps = [
        {img: "https://gerold.themejunction.net/wp-content/uploads/2024/05/figma.png", skillPercentage: "92%", skillName: "Figma"},
        {img: "https://gerold.themejunction.net/wp-content/uploads/2024/05/sketch.png", skillPercentage: "92%", skillName: "Sketch"},
        {img: "https://gerold.themejunction.net/wp-content/uploads/2024/05/figma.png", skillPercentage: "92%", skillName: "Figma"},
        {img: "https://gerold.themejunction.net/wp-content/uploads/2024/05/sketch.png", skillPercentage: "92%", skillName: "Sketch"},
        {img: "https://gerold.themejunction.net/wp-content/uploads/2024/05/figma.png", skillPercentage: "92%", skillName: "Figma"},
        {img: "https://gerold.themejunction.net/wp-content/uploads/2024/05/sketch.png", skillPercentage: "92%", skillName: "Sketch"},
    ]
    return(
        <>
        <div className="flex justify-center items-center flex-col gap-3 md:p-20 px-5 py-16">
            <h2 className="font-bold md:text-5xl sm:text-4xl text-3xl p-1" id="textGradiant">My Skills</h2>
            <p className="max-w-[660px] text-center pb-10 text-[17px]">We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
            <div className="flex gap-5 flex-wrap justify-center">
                {
                    SkillsEachProps.map((elem, index)=>{
                        return(<SkillsEach img={elem.img} skillPercentage={elem.skillPercentage} skillName={elem.skillName} key={index}/>)
                    })
                }
            </div>
        </div>
        </>
    )
}

export default Skills