import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducers/Product";
import { toast } from "react-toastify";


const Product = createContext();
const initialState = {
  isLoading: false,
  allProduct: [],
  isError: false,
  msg: "",
  category: "",
  subCat: [],
  designName: "",
  remark: "",
  netWeight: "",
  grossWeight: "",
  photoPaths: null, // Change to store the file object, not the string
  purity: "",
  product:{},
  imagePaths:null,
  allImages:[]
};

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // todo Handle category
  const handleCategory = async (e) => {
    const {name, value } = e.target;
    // console.log(name)
    dispatch({
      type: "SET_LOADING",
    });
    try {
      const response = await fetch("https://hanibackendapp.onrender.com/api/product/category", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ value }),
      });
  
      const data = await response.json();
      console.log(data.filterSubCat)
     
  
      if (data.success) {
        toast.success(data.msg);
        dispatch({
          type:"SET_CATEGORY",
          payload:{
            name,value,
            subCat:data.filterSubCat
          }
        })
      } else {
        toast.error(data.msg);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.");
    }
  };
  ``
  
  // ? Handle sub-category
  const handleSubCategory = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "SET_SUBCATEGORY",
      payload: { name, value },
    });
  };

  // ! Handle other product details
  const handleProductChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "SET_PRODUCT",
      payload: { name, value },
    });
  };

  // todo Handle file change (for a single file)
  const handleFileChange = (e) => {
    const name = e.target.name;
    const file = e.target.files[0]; // ? Store the file object itself, not just its name
    dispatch({
      type: "SET_FILE",
      payload: { name, value: file },
    });
  };
  // ? handle all images changes
 
  //  todo Handle form submission to upload product details along with the file
  const handleProduct = async (e) => {
    e.preventDefault();
    // Create FormData to include both product details and the image file
    const formData = new FormData();
    // Append product data to FormData
    formData.append("category", state.category);
    formData.append("subCategory", state.subCategory);
    formData.append("designName", state.designName);
    formData.append("remark", state.remark);
    formData.append("grossWeight", state.grossWeight);
    formData.append("netWeight", state.netWeight);
    formData.append("purity", state.purity);
    // Append the image to FormData if there is a file
    if (state.photoPaths) {
      formData.append("photoPaths", state.photoPaths); // The actual file object
    }
    try {
      // Send both product data and the image in a single request
      const response = await fetch(
        "https://hanibackendapp.onrender.com/api/product/newproduct",
        {
          method: "POST",
          body: formData, // Send the entire FormData
        }
      );

      const data = await response.json();
     

      if (data.success) {
        toast.success(data.msg)
      } else {
        toast.error(data.msg)      }
    } catch (error) {
     
    }
  };
  // todo handle all images submit
 
  
  //  todo get all products
  const getAllProducts = async() =>{
    try {
      //  !get both product data and the image in a single request
      const response = await fetch(
        "https://hanibackendapp.onrender.com/api/product/allproduct",
        {
          method: "GET",
        }
      );
      const data = await response.json();
     
      if(data.success){
        dispatch({
          type:"GET_ALL_PRODUCTS",
          payload:{
            products:data?.allProduct
          }
       
        })
      } 
    } catch (error) {
     
    }
  }
  //  todo get all images
  
 
  const getSingleProduct = async(id) => {
    // Fetch product logic here, e.g., making an API call
    try {
      //  !get both product data and the image in a single request
      const response = await fetch(
        `https://hanibackendapp.onrender.com/api/product/product/${id}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
    
      if(data.success){
        dispatch({
          type:"GET_PRODUCT",
          payload:{
            product:data?.product
          }
       
        })
      } 
    } catch (error) {
    
    }
    // ...
  };
  const deleteSingleProduct = async(id) => {
    // Fetch product logic here, e.g., making an API call
    try {
      //  !get both product data and the image in a single request
      const response = await fetch(
        `https://hanibackendapp.onrender.com/api/product/delete/${id}`,
        {
          method: "DELETE",
        }
      );
      const data = await response.json();
      
      if(data.success){
        toast.success(data.msg)

      } 
    } catch (error) {
     
    }
    
  };
  

  return (
    <Product.Provider
      value={{
        state,
        handleCategory,
        handleSubCategory,
        handleProduct,
        handleProductChange,
        handleFileChange,
        getSingleProduct,deleteSingleProduct,getAllProducts
      }}
    >
      {children}
    </Product.Provider>
  );
};

const useProduct = () => {
  return useContext(Product);
};

export {  ProductProvider,useProduct };
