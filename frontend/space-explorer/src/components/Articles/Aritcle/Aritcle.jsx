import "./Aritlcle.css"

function Article({ article }) {
    console.log(article);
    return (
        <li className="space-article" key={article.id}>
            <div className="space-article__banner">
                <h3 className="space-article__title">{article.title}</h3>
                <img className="space-article__image" src={article.imageUrl} />
            </div>

        </li>
    );
}

export default Article;