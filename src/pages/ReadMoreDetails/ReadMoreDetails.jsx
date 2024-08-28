import { Link, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import RightNav from "../../components/RightNav/RightNav";
import useNews from "../../hooks/useNews";
import { useEffect, useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";


const ReadMoreDetails = () => {
    const {news} = useNews();
    const {id} = useParams();
    const [singleNews, setSingleNews] = useState({})
    const {image_url, title, details} =  singleNews || {}
    useEffect(()=>{
        const findNews = news.find(item => item._id == id);
        setSingleNews(findNews)
    },[news,id])
    return (
        <div className="px-6 py-8">
            <Header/>
            <h3 className="text-xl py-4 text-[#403f3f] font-semibold">Dragon News</h3>
            {/* new details */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-3">
              <div>
                <img className="w-full" src={image_url} alt="" />
                <div>
                <h3 className="text-xl font-bold text-[#403f3f] leading-[35px] py-4">{title}</h3>
                <p className=" text-base font-normal text-[#706f6f] leading-relaxed">{details}</p>
                <Link to="/"><button className="py-1 mt-6 px-4 bg-[#d72050] rounded-sm text-white font-medium leading-[30px] inline-flex gap-2 items-center"><FaLongArrowAltLeft className="text-[22px]"/>All news in this category</button></Link>
                </div>
              </div>
            </div>
            <div>
                {/* right nav */}
                <RightNav show={false}/>
            </div>
            </div>
        </div>
    );
};

export default ReadMoreDetails;