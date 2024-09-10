type RecentWorksEachProps = {
    img : string
}

const RecentWorksEach = ({img}:RecentWorksEachProps) => {
    return(
        <>
        <div className="flex-grow-2 h-auto">
            <img className="rounded-2xl w-fit" src={img} alt="" />
        </div>
        </>
    )
}

export default RecentWorksEach