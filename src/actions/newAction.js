import axios from 'axios';
import { news_items, SearchNewsUrl, NewsList } from '../api';



// ACTION CREATOR
// You add two arrow functions when you are using thunk
export const LoadNews = (pageNum)=> async(dispatch)=>{
    const upcomingNewsDate = await axios.get(NewsList(pageNum));
    dispatch({
        type:'FETCH_NEWS',
        payload:{
            news:upcomingNewsDate.data.data.response.results,
        }
    })
}

export const SearchNews = (gameName)=>async(dispatch)=>{
    const UpcomingSearch = await axios.get(SearchNewsUrl(gameName));
    dispatch({
        type:'SEARCH_NEWS',
        payload:{
            searchNews:UpcomingSearch.data.data.response.results
        }
    })
}
export const Page = (dispatch)=>{
    dispatch({
        type:'PAGE',
    })
}