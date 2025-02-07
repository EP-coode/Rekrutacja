import "./Aritlcle.css"


function Article({ article, favourite = false, onFavClick }) {
    const { url, title, newsSite, imageUrl, id, publishedAt, summary} = article
    return (
        <li className="space-article">
            <a className="space-article__banner" href={url} target="_blank">
                <h3 className="space-article__title">{title}</h3>
                <span className="space-article__source">{newsSite}</span>
                <img className="space-article__image" src={imageUrl} />
            </a>
            <div className="space-article__details">
                <section className="space-article__summary">
                    {summary}
                </section>
                {/* <span className="space-article__issue-details">{article.newsSite}</span> */}
                <div className="space-article__foot">
                    {/* Hardkodowany svg... do poprawki */}
                    <button className="space-article__like-btn" onClick={() => onFavClick(id)}>
                        {!favourite ? <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                        </svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="red" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                            </svg>
                        }

                    </button>
                    <span className="space-article__timestamp">{new Date(publishedAt).toLocaleString()}</span>
                </div>
            </div>
        </li>
    );
}

export default Article;