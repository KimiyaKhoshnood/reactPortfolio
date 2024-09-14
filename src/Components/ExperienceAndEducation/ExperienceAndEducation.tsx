import Icon from "react-icons-kit"
import ExperienceAndEducationEach, { ExperienceAndEducationEachProp } from "../ExperienceAndEducationEach/ExperienceAndEducationEach"
import {u1F393} from 'react-icons-kit/noto_emoji_regular/u1F393'
import {u1F3C6} from 'react-icons-kit/noto_emoji_regular/u1F3C6'

const ExperienceAndEducation = () => {
    let ExperienceProps: ExperienceAndEducationEachProp[] = [
        {date:"2022-Present", title:"LEAD DEVELOPER", span:"Blockdots, London"},
        {date:"2021-2022", title:"FULL STACK WEB", span:"Persons, The New School"},
        {date:"2020-2021", title:"UI DESIGNER", span:"House of Life Leeds"},
    ]
    let EducationProps: ExperienceAndEducationEachProp[] = [
        {date:"2020-2023", title:"PROGRAMMING COURSE", span:"Harverd University"},
        {date:"2016-2020", title:"GRAPHIC DESIGN COURSE", span:"University of Tehran"},
        {date:"2012-2015", title:"WEB DESIGN COURSE", span:"University of Califonia"},
        {date:"2010-2011", title:"DESIGN & TECHNOLOGY", span:"Persons, The New School"},
    ]

    return(
        <>
        <div className="bg-[#F6F3FC] lg:px-20 px-5 py-20 gap-5 flex md:flex-row flex-col">
            <div className="md:w-1/2 w-full">
                <h2 className="w-fit font-bold lg:text-5xl text-4xl py-7 flex items-center" id="textGradiant"><Icon className="w-[40px] text-[#8650F6]" icon={u1F3C6} size={"100%"}/> My Experience</h2>
                <div className="flex flex-col gap-5">
                    {
                        ExperienceProps.map((elem, index)=> {
                            return(<ExperienceAndEducationEach date={elem.date} title={elem.title} span={elem.span} key={index}/>)
                        })
                    }
                </div>
            </div>
            <div className="md:w-1/2 w-full">
                <h2 className="w-fit font-bold lg:text-5xl text-4xl py-7" id="textGradiant"><Icon className="w-[40px] text-[#8650F6]" icon={u1F393} size={"100%"}/> My Education</h2>
                <div className="flex flex-col gap-5">
                    {
                        EducationProps.map((elem, index)=> {
                            return(<ExperienceAndEducationEach date={elem.date} title={elem.title} span={elem.span} key={index}/>)
                        })
                    }
                </div>
            </div>
        </div>
        </>
    )
}

export default ExperienceAndEducation