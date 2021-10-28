import { useEffect, useState } from "react"
import React from 'react';


export const FavContext = React.createContext({
    favArticlesIDs: [],
    removeFav: articleID => { },
    addFav: articleID => { },
    isFav: articleID => { }
})


export default function FavProvider({ children }) {
    // lepiej było by użyć kolekcji typu set
    // istnieje ryzyko wystąpienia powtorzen 
    const fav_json = localStorage.getItem('fav_articles', null);
    const [favArticlesIDs, setfavArticlesIDs] = useState(fav_json ? JSON.parse(fav_json) : [])

    const removeFav = articleID => {
        setfavArticlesIDs(articleIds => {
            const filtered_articleIDs = articleIds.filter(_articleID => _articleID != articleID)
            localStorage.setItem("fav_articles", JSON.stringify(filtered_articleIDs))
            return filtered_articleIDs
        })
        // może zrobić się niewydajnie
    }

    const addFav = articleID => {
        setfavArticlesIDs(articleIds => {
            const new_articleIDs = [articleID, ...articleIds]
            localStorage.setItem("fav_articles", JSON.stringify(new_articleIDs))
            return new_articleIDs
        })
        setfavArticlesIDs(articleIds => [articleID, ...articleIds])
        // może zrobić się niewydajnie
    }

    const isFav = articleID => {
        return !!favArticlesIDs.find(id => articleID == id)
    }

    return (
        <FavContext.Provider value={{
            favArticlesIDs,
            removeFav,
            addFav,
            isFav
        }}>
            {children}
        </FavContext.Provider>
    )
}