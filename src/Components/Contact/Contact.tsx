import ContactWays from "../ContactWays/ContactWays"

const Contact = () => {
    let ContactWaysProps = [
        {svg: "https://icons.veryicon.com/png/o/miscellaneous/heg-main-function-icon/phone-98.png", title:"Phone", content:"+98 910 879 3797"},
        {svg: "https://icons.veryicon.com/png/o/miscellaneous/heg-main-function-icon/phone-98.png", title:"Email", content:"Kimiya.khoshnod@gmail.com"},
        {svg: "https://icons.veryicon.com/png/o/miscellaneous/heg-main-function-icon/phone-98.png", title:"Address", content:"Ferdoos gharb, Tehran"},
    ]

    return(
        <>
        <div className="bg-[#F6F3FC] xl:p-20 px-5 py-10 flex md:flex-row flex-col md:gap-1 gap-10">
            <div className="bg-white rounded-3xl lg:p-14 p-5 md:w-1/2 w-full flex flex-col gap-3 md:order-none order-2">
                <h2 className="font-bold lg:text-5xl text-3xl py-2" id="textGradiant">Let’s work together!</h2>
                <p className="pb-5">I design and code beautifully simple things and i love what i do. Just simple like that!</p>
                <div className="flex flex-wrap gap-5 columns-2">
                    <input className="flex-grow outline outline-1 outline-[#2A1455] py-3 px-5 bg-[#F6F3FC] rounded-lg" type="text" placeholder="First name"/>
                    <input className="flex-grow outline outline-1 outline-[#2A1455] py-3 px-5 bg-[#F6F3FC] rounded-lg" type="text" placeholder="Last name" />
                    <input className="flex-grow outline outline-1 outline-[#2A1455] py-3 px-5 bg-[#F6F3FC] rounded-lg" type="text" placeholder="Email address" />
                    <input className="flex-grow outline outline-1 outline-[#2A1455] py-3 px-5 bg-[#F6F3FC] rounded-lg" type="text" placeholder="Phone number" />
                    <select className="w-full outline outline-1 outline-[#2A1455] py-3 px-5 bg-[#F6F3FC] rounded-lg" name="" id="">
                        <option className="p-3" value="">-Please choose an option-</option>
                        <option className="p-3" value="Branding Design">Branding Design</option>
                        <option className="p-3" value="Web Design">Web Design</option>
                        <option className="p-3" value="UI/UX Design">UI/UX Design</option>
                        <option className="p-3" value="App Design">App Design</option>
                    </select>
                    <textarea className="w-full min-h-[180px] outline outline-1 outline-[#2A1455] py-3 px-5 bg-[#F6F3FC] rounded-lg" name="" id="" placeholder="Message"></textarea>
                    <button className="px-9 py-3 rounded-3xl text-white font-medium bg-gradient-to-r from-[#8650F6] to-[#2A1455]" type="submit">Send Message</button>
                </div>
                
            </div>
            <div className="flex flex-col flex-grow gap-8 items-center justify-center">
                {
                    ContactWaysProps.map((elem, index) => {
                        return <ContactWays svg={elem.svg} title={elem.title} content={elem.content} key={index}/>
                    })
                }
            </div>
        </div>
        </>
    )
}

export default Contact