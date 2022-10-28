const Base_Url = 'https://amannee-server.onrender.com/';

export const news_items = `${Base_Url}api?page=1`;

export const SearchNewsUrl = (gameName)=>{
    const search_items = `${Base_Url}api?q=${gameName}`
    return search_items;
}

export const NewsList = (pageNum)=>{
    const news_items = `${Base_Url}api?page=${1}`;
    return news_items
}
