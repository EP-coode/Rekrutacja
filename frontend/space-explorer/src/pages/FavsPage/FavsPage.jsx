import { useContext, useEffect, useState } from "react";

import Spinner from "../../components/Spinner/Spinner"
import { FavContext } from "../../context/FavContext";
import space_api from "../../client/api";
import "./FavsPage.css"
import ArticleList from "../../components/Articles/List/ArticleList";

function FavsPage() {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const favs = useContext(FavContext)

    const loadFavs = () => {
        setLoading(true)
        // bardzo krotkowzroczne roziązanie 
        Promise.all(favs.favArticlesIDs.map(id => space_api.getArticleByID(id))).then(results => {
            setArticles(results)
            setLoading(false)
        })
    }

    useEffect(() => {
        loadFavs()
    }, [])

    return (
        <div className="favs-page">
            <ArticleList articles={articles} />
            {loading ? <Spinner className="favs-page__spinner" />
                : articles.length == 0 && <div className="favs-page__empty-placeholder">Nie masz ulubionych artykułów</div>
            }
        </div>
    );
}

export default FavsPage;