const reducer = (state,action) =>{
    switch(action.type){
        case "SET_VALUES":
          
            return{
                ...state,
                [action.payload.name]:action.payload.value
            }
        case "SET_LOADING":
            
            return{
                ...state,
                isLoading:true
            }
        case "SET_SUCCESS":
            
            return{
                ...state,
                isLoading:false
            }
        case "LOGIN_USER_DATA":
            
            return{
                ...state,
                isNavigate:true
            }
            case "SET_USER":
                return {
                    ...state,
                    isLoading: false,
                    userInfo: action.payload
                };
        default:
            return{
                ...state
            }
        
    }

} 
export default reducer