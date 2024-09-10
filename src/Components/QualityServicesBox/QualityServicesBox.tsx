type QualityServicesBoxProps = {
    num: string,
    h3: string,
    p: string,
}
const QualityServicesBox = ({num, h3, p}:QualityServicesBoxProps) => {
    return (
        <>
        <div className="flex items-center justify-between w-full py-6">
            <div className="flex w-1/4 items-center">
                <span className="font-bold text-2xl text-[#8750F7] px-6">{num}</span>
                <h3 className="font-bold text-3xl text-[#8750F7]">{h3}</h3>
            </div>
            <p className="w-[530px] text-[17px]">{p}</p>
            <img className="w-[40px] h-[40px] rotate-45" src="https://www.svgrepo.com/show/305136/arrow-forward.svg" alt="" />
        </div>
        </>
    )
}
export default QualityServicesBox