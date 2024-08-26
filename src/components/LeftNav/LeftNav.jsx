import { Link } from "react-router-dom";
import categories from "../../../public/data/categories.json"

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
        </div>
    );
};

export default LeftNav;