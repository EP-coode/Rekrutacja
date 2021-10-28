import { useContext, useEffect, useState } from "react";
import ArticleList from "../../components/Articles/List/ArticleList";
import space_api from '../../client/api'

import "./MainPage.css"
import { FavContext } from "../../context/FavContext";

const ARTICLES_PER_FETCH = 6

function MainPage() {
    const favs = useContext(FavContext)
    const [articles, setArticles] = useState([])

    const loadMore = async () => {
        const fetched_aritcles = await space_api.getArticlesRange(articles.length, ARTICLES_PER_FETCH)
        setArticles(prev_articles => [...prev_articles, ...fetched_aritcles])
    }

    useEffect(async () => {
        loadMore()
    }, [])

    const onLoadMore = async () => {
        loadMore()
    }

    return (
        <div className="main-page">
            <ArticleList articles={articles}/>
            <button onClick={onLoadMore}> load more </button>
        </div>
    );
}

export default MainPage;