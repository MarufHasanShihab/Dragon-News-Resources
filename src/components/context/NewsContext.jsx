import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"

export const NewsContext = createContext(null)
const NewsProvider = ({children}) => {
    const [news, setNews] = useState([])
    useEffect(()=>{
        const fetchNews = async ()=>{
            const response = await fetch("../../../public/data/news.json")
            const data = await response.json()
            setNews(data)
        }
        fetchNews()
    },[])
    return (
        <NewsContext.Provider value={{news}}>
            {children}
        </NewsContext.Provider>
    );
};

NewsProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default NewsProvider;