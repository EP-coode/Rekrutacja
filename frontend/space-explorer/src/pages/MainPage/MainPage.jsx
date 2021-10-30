import { useEffect, useRef, useState } from "react";

import ArticleList from "../../components/Articles/List/ArticleList";
import Spinner from "../../components/Spinner/Spinner";
import space_api from '../../client/api'

import "./MainPage.css"


const ARTICLES_PER_FETCH = 6

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

    const handleIntersection = entities => {
        const entry = entities[0]

        if (!loading && entry.isIntersecting) {
            loadMore()
        }

    }


    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 1.0
        }

        // można było użyć gotowy komponent, ale za pierwszym razem wolałem tego doświadzczyć :>
        const observer = new IntersectionObserver(handleIntersection, options)

        if (page_bottom) {
            observer.observe(page_bottom.current)
        }

        return () => observer.disconnect()
    }, [loading, loadMore])

    useEffect(async () => {
        loadMore()
    }, [])


    return (
        <div className="main-page">
            <ArticleList articles={articles} />
            {/* {loading ?
                <Spinner className="main-page__spinner" />
                : <button onClick={onLoadMore} className="main-page__load-more-btn btn"> load more </button>
            } */}
            {loading && <Spinner className="main-page__spinner" />}
            <div ref={page_bottom}></div>
        </div>
    );
}

export default MainPage;