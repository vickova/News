const Base_Url = 'https://amannee-server.onrender.com/';

export const news_items = `${Base_Url}api?page=9`;

export const SearchNewsUrl = (gameName)=>{
    const search_items = `${Base_Url}api?q=${gameName}`
    return search_items;
}