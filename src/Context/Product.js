import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/Product";
const ProductContext = createContext();
const initialState ={
isLoading:false,
isGold:false,
isSilver:false,
isError:false,
isBarAndCoins:false,
msg:"",
products:[],
goldProducts:[],
silverProducts:[],
barAndCoinsProducts:[],
product:{},
filterCategory:[],
filterSubCategory:[],
singleProduct:{}
}

const ProductProvider = ({children} ) =>{
    const [state,dispatch ] = useReducer(reducer,initialState)
    // ! get golds Products  function
    const getGoldProducts = async()=>{
        dispatch({
            type:"SET_GOLD_LOADING"
        })
       const url ="https://hanibackendapp.onrender.com/api/product/goldproduct"
       const response = await fetch(url,{
        method:"GET",
        headers:{
            'Content-Type':"application/json"
        }
       })
       const data = await response.json();
       if(data.success){
        dispatch({
            type:"SET_GOLD", payload:{
               goldProducts: data.goldProducts
            }    
        })
       } 
    } 
    // ?get silver function
    const getSilverProducts = async()=>{
        dispatch({
            type:"SET_SILVER_LOADING"
        })
       const url ="https://hanibackendapp.onrender.com/api/product/silverproduct"
       const response = await fetch(url,{
        method:"GET",
        headers:{
            'Content-Type':"application/json"
        }

       })
       const data = await response.json();
       if(data.success){
        dispatch({
            type:"SET_SILVER", payload:{
               silverProducts: data.silverProducts
            }
                
        })
       }
       
    } 
    const getBarAndCoinsProducts = async()=>{
        dispatch({
            type:"SET_BAR_COINS_LOADING"
        })
       const url ="https://hanibackendapp.onrender.com/api/product/barandcoins"
       const response = await fetch(url,{
        method:"GET",
        headers:{
            'Content-Type':"application/json"
        }

       })
       const data = await response.json();
       if(data.success){
        dispatch({
            type:"SET_BAR_AND_COINS", payload:{
                barAndCoinsProducts: data.barAndCoinsProducts
            }
                
        })
       }
       
    } 
    // !filterCategory function
    const filterCategory  = async(category)=>{
        dispatch({
            type:"SET_FILTER_CATEGORY_LOADING"
        })
       const url =`https://hanibackendapp.onrender.com/api/product/filtercategory/${category}`
       const response = await fetch(url,{
        method:"GET",
        headers:{
            'Content-Type':"application/json"
        }
       })
       const data = await response.json();
       if(data.success){
        dispatch({
            type:"SET_FILTER_CATEGORY", payload:{
                groupedProducts: data.groupedProducts
            }    
        })
       } 
    }
    // todo filter sub categpoory function
    const filterSubCategoryFun = async (subcategory) => {
        dispatch({ type: "SET_FILTER_SUBCATEGORY_LOADING" });
    
        // Check if `subcategory` is falsy (null, undefined, or empty) and set the URL accordingly
        const url = !subcategory
            ? `https://hanibackendapp.onrender.com/api/product/allproduct` // URL for all products
            : `https://hanibackendapp.onrender.com/api/product/filtersubcategory/${subcategory}`; // URL for specific subcategory
    
        try {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    'Content-Type': "application/json"
                }
            });
    
            const data = await response.json();
           
            if (data.success) {
                dispatch({
                    type: "SET_FILTER_SUBCATEGORY",
                    payload: { filterSubCategory: data.filterSub || data.allProduct } // Adjust payload based on response
                });
            } else {
              
                dispatch({
                    type: "SET_FILTER_CATEGORY_ERROR",
                    payload: "No products found for this category"
                });
            }
        } catch (error) {
           
            dispatch({
                type: "SET_FILTER_CATEGORY_ERROR",
                payload: error.message
            });
        }
    };
    
    
    
    // ! single product
    const singleProduct  = async(id)=>{
        dispatch({
            type:"SET_FILTER_CATEGORY_LOADING"
        })
       const url =`https://hanibackendapp.onrender.com/api/product/product/${id}`
       const response = await fetch(url,{
        method:"GET",
        headers:{
            'Content-Type':"application/json"
        }
       })
       const data = await response.json();
      
       if(data.success){
        dispatch({
            type:"SET_SINGLE", payload:{
                product: data.product
            }    
        })
       } 
    }
    useEffect(()=>{
        getGoldProducts(), getSilverProducts()
      },[])
   
   
 return <ProductContext.Provider value={{state,  getGoldProducts, getSilverProducts,filterCategory,filterSubCategoryFun ,singleProduct,getBarAndCoinsProducts}}>{children}</ProductContext.Provider>
}

const useProduct =() =>{
    return useContext(ProductContext)
} 
export { ProductProvider,useProduct}