import clinet from "./client"

async function getArticlesRange(start, ammount) {
    const response = await clinet(`/articles?_limit=${ammount}&_start=${start}`)
    const data = await response.json()
    return data;
}

async function getArticleByID(id) {
    const response = await clinet(`/articles/${id}`)
    const data = await response.json()
    return data;
}

const space_api = { getArticlesRange, getArticleByID }
export default space_api