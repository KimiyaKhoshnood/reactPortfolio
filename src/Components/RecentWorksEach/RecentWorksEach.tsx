export type RecentWorksEachProps = {
    img : string
}

const RecentWorksEach = ({img}:RecentWorksEachProps) => {
    return(
        <>
        <div className="md:w-[48%] w-full h-auto">
            <img className="rounded-2xl w-fit" src={img} alt="" />
        </div>
        </>
    )
}

export default RecentWorksEach