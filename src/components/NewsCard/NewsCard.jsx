import PropTypes from "prop-types"
import { CiBookmark } from "react-icons/ci";
import { GrView } from "react-icons/gr";
import { IoMdShare } from "react-icons/io";
import { Link } from "react-router-dom";

const NewsCard = ({news}) => {
    const {id, title, author, image_url, details, rating, total_view} = news || {};
    return (
        <div className="bg-white shadow-xl p-4">
            <div>
               <div className="flex justify-between items-center px-3 ">
                 {/* author */}
                 <div>
                    <img src={author.img} alt="author_image" className="w-[40px] h-[40px] rounded-full" />
                </div>
                {/* icon */}
                <div className="flex items-center gap-4 text-[20px] font-bold text-black">
                    <IoMdShare className="cursor-pointer"/>
                    <CiBookmark className="cursor-pointer"/>
                </div>
               </div>
                <h3 className="text-xl font-bold text-[#403f3f] leading-[35px] py-4">{title}</h3>
            </div>
            <img src={image_url} alt="" />
            {/* details */}
            <div className="py-4 text-base font-normal text-[#706f6f] leading-relaxed">
                {
                    details.length > 200 ? <p>{details.slice(0,200)}<Link to={`/readMoreDetails/${id}`} className="text-[#ff8c47] font-bold"> Read more.....</Link></p> : <p>{details}</p>
                }
            </div>
            {/* rating and view */}
            <div className="flex justify-between items-center">
            <div className="flex items-center space-x-1 rtl:space-x-reverse py-3">
                <svg className="w-4 h-4 text-[#ff8c47]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-4 h-4 text-[#ff8c47]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-4 h-4 text-[#ff8c47]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-4 h-4 text-[#ff8c47]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <p className="text-[#706f6f] text-base font-medium leading-relaxed ml-2">{rating.number}</p>
            </div>
            <div className="flex items-center gap-3 text-[#706f6f] text-base font-medium leading-relaxed">
                <GrView className="text-[22px]"/>
                <p>{total_view}</p>
            </div>
            </div>
        </div>
    );
};

NewsCard.propTypes = {
    news: PropTypes.object
}

export default NewsCard;