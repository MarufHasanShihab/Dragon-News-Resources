import { useContext } from "react";
import { NewsContext } from "../components/context/NewsContext";


const useNews = () => {
    return (
        useContext(NewsContext)
    );
};

export default useNews;