import BreakingNews from "../../components/BreakingNews/BreakingNews";
import Header from "../../components/Header/Header";
import LeftNav from "../../components/LeftNav/LeftNav";
import Navbar from "../../components/Navbar/Navbar";
import RightNav from "../../components/RightNav/RightNav";

const Home = () => {
    return (
        <div>
            <Header/>
            <BreakingNews/>
            <Navbar/>
            {/* main */}
            <div className="grid lg:grid-cols-4 pb-8">
            <LeftNav/>
            <div className="lg:col-span-2">middle</div>
            <RightNav/>
            </div>
        </div>
    );
};

export default Home;