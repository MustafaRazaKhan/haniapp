const reducer = (state,action) =>{
    switch(action.type){
        case "SET_GOLD_LOADING":
            return{
                ...state,
                isGold:true
            }
        case "SET_SILVER_LOADING":
            return{
                ...state,
                isSilver:true
            }
        case "SET_FILTER_CATEGORY_LOADING":
            return{
                ...state,
                isLoading:true
            }
        case "SET_BAR_COINS_LOADING":
            return{
                ...state,
                isBarAndCoins:true
            }
        case "SET_GOLD":
            return{
                ...state,
                isGold:false,
                goldProducts:action.payload.goldProducts
            }
        case "SET_SILVER":
            return{
                ...state,
                isSilver:false,
                silverProducts:action.payload.silverProducts
            }
        case "SET_BAR_AND_COINS":
            return{
                ...state,
                isBarAndCoins:false,
                barAndCoinsProducts:action.payload.barAndCoinsProducts
            }
        case "SET_FILTER_CATEGORY":
            return{
                ...state,
                isLoading:false,
                filterCategory:action.payload.groupedProducts
            }
        case "SET_FILTER_SUBCATEGORY_LOADING":
            return{
                ...state,
                isLoading:true,
               
            }
        case "SET_FILTER_SUBCATEGORY":
            return{
                ...state,
                isLoading:false,
                filterSubCategory:action.payload.filterSubCategory
            }
        case "SET_SINGLE":
            return{
                ...state,
                singleProduct:action.payload.product
            }
        default:
            return{
                ...state
            }
        
    }

} 
export default reducer