import StatusNumbers from "../StatusNumbers/StatusNumbers";
const StatusNumbersBox = () => {
    let StatusNumbersProps = [
        {num:"14", lineFirst:"Months of", lineSecond:"Experience"},
        {num:"50+", lineFirst:"Project", lineSecond:"Completed"},
        {num:"1.5K", lineFirst:"Happy", lineSecond:"Clients"},
        {num:"14", lineFirst:"Years of", lineSecond:"Experience"},
    ]
    return(
        <>
        <div className="flex justify-between px-20 pb-20">
            {
                StatusNumbersProps.map((elem) =>{
                    return(
                        <StatusNumbers num={elem.num} lineFirst={elem.lineFirst} lineSecond={elem.lineSecond}/>
                    )
                })
            }
        </div>
        </>
    )
}

export default StatusNumbersBox