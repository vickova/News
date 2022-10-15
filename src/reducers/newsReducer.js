const initState = {
    news : [],
    searchNews: [],
    loading:false,
}

const newsReducer = (state=initState, action) => {
    switch(action.type){
        case 'FETCH_NEWS':
            return {...state, 
                news:action.payload.news,
                searchNews:action.payload.searchNews,
                loading:false
            }
        case 'SEARCH_NEWS':
            return{...state, searchNews:action.payload}
        case 'IS_LOADING':
            return{...state, loading:true}
        default:
            return {...state}
    }
}

export default newsReducer;