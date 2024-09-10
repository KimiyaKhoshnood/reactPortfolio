type StatusNumbersProps = {
    num : string,
    lineFirst: string,
    lineSecond: string,
}
const StatusNumbers = ({num, lineFirst, lineSecond}:StatusNumbersProps) => {
    return(
        <>
        <div className="text-[#8750F7] flex items-center w-fit">
            <h2 className="font-bold text-7xl">{num}</h2>
            <div className="flex flex-col text-lg pl-4">
                <span>{lineFirst}</span>
                <span>{lineSecond}</span>
            </div>
        </div>
        </>
    )
}

export default StatusNumbers