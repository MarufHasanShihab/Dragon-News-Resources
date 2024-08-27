import { Link } from "react-router-dom";
import categories from "../../../public/data/categories.json"
import img1 from "../../assets/1.png"
import img2 from "../../assets/2.png"
import img3 from "../../assets/3.png"
import { CiCalendar } from "react-icons/ci";

const LeftNav = () => {
    return (
        <div>
            <h2 className="text-[#403f3f] text-sl font-semibold leading-[30px">All Caterogy</h2>
            <button className="bg-[#e7e7e7] py-2 px-6 my-4 text-[#403f3f] text-xl leading-[30px] font-semibold">National News</button>
            {/* categories item */}
            <div className="flex flex-col gap-8 pl-6 text-[#9f9f9f]  text-xl font-medium leading-[30px]">
                {
                    categories.map(categorie => (
                        <Link key={categorie.id}>{categorie.name}</Link>
                    ))
                }
            </div>
            {/* left nav news card */}
            <div>
                <div className="w-[200px]">
                    <img src={img1} alt="" />
                    <h3>Bayern Slams Authorities Over Flight Delay to Club World Cup</h3>
                    <div className="flex justify-between items-center py-4">
                        <h6>Sports</h6>
                        <p className="inline-flex items-center gap-2 text-[14px] font-medium leading-relaxed text-[#9f9f9f]"><CiCalendar className="text-[18px]" />Jan 4, 2022</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftNav;