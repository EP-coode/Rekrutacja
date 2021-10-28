import Article from "../Aritcle/Aritcle";

import "./ArticleList.css"

function ArticleList({ articles = [] }) {

    const articles_comp = articles.map(article => (
            <Article
                article={article}
            />
    ))

    return (
        <ul className="article-list">
            {articles_comp}
        </ul>
    );
}

export default ArticleList;