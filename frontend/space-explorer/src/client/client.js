
export default function client(endpoint, { body, ...customConfig } = {}) {
    // to może polecieć do env
    const url = "https://api.spaceflightnewsapi.net/v3"

    return fetch(url + endpoint, {
        "method": body ? "POST" : "GET",
        ...customConfig
    })
}