import BreakingNews from "../../components/BreakingNews/BreakingNews";
import Header from "../../components/Header/Header";
import LeftNav from "../../components/LeftNav/LeftNav";
import Navbar from "../../components/Navbar/Navbar";
import NewsCard from "../../components/NewsCard/NewsCard";
import RightNav from "../../components/RightNav/RightNav";
import useNews from './../../hooks/useNews';

const Home = () => {
    const {news} = useNews()
    return (
        <div className="px-6">
            <Header/>
            <BreakingNews/>
            <Navbar/>
            {/* main */}
            <div className="grid lg:grid-cols-4 pb-8">
            <LeftNav/>
            <div className="lg:col-span-2 px-8">
                <h2 className="text-xl text-[#403f3f] font-semibold leading-[30px]">Dragon News Home</h2>
                <div className="py-8 space-y-10">
                    {
                        news?.map(newsItem => <NewsCard key={newsItem._id} news={newsItem}/>)
                    }
                </div>
            </div>
            <RightNav show={true}/>
            </div>
        </div>
    );
};

export default Home;