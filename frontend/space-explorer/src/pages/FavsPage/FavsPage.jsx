import { useContext, useEffect, useState } from "react";
import { FavContext } from "../../context/FavContext";
import space_api from "../../client/api";
import "./FavsPage.css"
import ArticleList from "../../components/Articles/List/ArticleList";

function FavsPage() {
    const [articles, setArticles] = useState([])
    const favs = useContext(FavContext)

    const loadFavs = () => {
        // bardzo krotkowzroczne roziązanie 
        Promise.all(favs.favArticlesIDs.map(id => space_api.getArticleByID(id))).then(results => {
            setArticles(results)
        })
    }

    useEffect(() => {
        loadFavs()
    }, [])

    return (
        <div className="favs-page">
            <ArticleList articles={articles} />
            {articles.length == 0 && "Nie masz ulubionych artykułów"}
        </div>
    );
}

export default FavsPage;