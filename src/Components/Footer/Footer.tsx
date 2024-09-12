const Footer = () => {
    return(
        <>
        <footer className="flex flex-col bg-[#2a1454] items-center py-10 gap-5">
            <img className="w-[75px] h-[75px]" src="https://cdn-icons-png.flaticon.com/256/13309/13309357.png" alt="" />
            <div className="flex gap-8 text-white font-bold">
                <span>Services.</span>
                <span>Works.</span>
                <span>Skills.</span>
                <span>Experiance.</span>
            </div>
            <span className="text-[#8650F6]">Made in 2024 by <span className="font-bold">Kimia Khoshnood</span></span>
        </footer>
        <a href="" target="_top" className="fixed bottom-5 right-5 flex justify-center items-center w-[40px] h-[40px] rounded-full border-2 border-[#8650F6] shadow-lg bg-transparent">^</a>
        </>
    )
}

export default Footer