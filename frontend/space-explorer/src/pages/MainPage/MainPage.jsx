import { useContext, useEffect, useRef, useState, useCallback } from "react";
import ArticleList from "../../components/Articles/List/ArticleList";
import space_api from '../../client/api'

import "./MainPage.css"
import Spinner from "../../components/Spinner/Spinner";

const ARTICLES_PER_FETCH = 12

function MainPage() {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const page_bottom = useRef(null)

    const loadMore = async () => {
        setLoading(true)
        const fetched_aritcles = await space_api.getArticlesRange(articles.length, ARTICLES_PER_FETCH)
        setArticles(prev_articles => [...prev_articles, ...fetched_aritcles])
        setLoading(false)
    }

    const onLoadMore = async () => {
        loadMore()
    }

    useEffect(async () => {
        loadMore()
    }, [])


    return (
        <div className="main-page">
            <ArticleList articles={articles} />
            {loading ?
                <Spinner className="main-page__spinner" />
                : <button onClick={onLoadMore} className="main-page__load-more-btn btn"> load more </button>
            }
        </div>
    );
}

export default MainPage;