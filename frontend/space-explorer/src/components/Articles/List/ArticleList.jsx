import { useContext } from "react";
import { FavContext } from "../../../context/FavContext";
import Article from "../Aritcle/Aritcle";

import "./ArticleList.css"

function ArticleList({ articles = [] }) {
    const favs = useContext(FavContext)

    const onFavClick = articleID => {
        if (favs.isFav(articleID))
            favs.removeFav(articleID)
        else
            favs.addFav(articleID)
    }
    const articles_comp = articles.map(article => (
        <Article
            article={article}
            favourite={favs.isFav(article.id)}
            onFavClick={onFavClick}
            key={article.id}
        />
    ))

    return (
        <ul className="article-list">
            {articles_comp}
        </ul>
    );
}

export default ArticleList;