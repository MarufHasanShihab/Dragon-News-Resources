import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="pb-8 flex gap-8">
            <button className="py-1 px-4 bg-[#d72050] rounded-sm text-white font-medium leading-[30px]">Latest</button>
            <Marquee pauseOnHover={true} speed={80}>
                <p className=" text-[#403f3f] text-lg font-semibold leading-[30px]">Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain as...</p>
            </Marquee>
        </div>
    );
};

export default BreakingNews;