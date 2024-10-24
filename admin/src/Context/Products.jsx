import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducers/Product";

const Product = createContext();
const initialState = {
  isLoading: false,
  allProduct: [],
  isError: false,
  msg: "",
  singleProduct: {},
  category: "",
  subCategory: "",
  designName: "",
  description: "",
  netWeight: "",
  grossWeight: "",
  photoPaths: null, // Change to store the file object, not the string
  price: "",
};

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // todo Handle category
  const handleCategory = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "SET_CATEGORY",
      payload: { name, value },
    });
  };

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
  // Handle form submission to upload product details along with the file
  const handleProduct = async (e) => {
    e.preventDefault();
    // Create FormData to include both product details and the image file
    const formData = new FormData();
    // Append product data to FormData
    formData.append("category", state.category);
    formData.append("subCategory", state.subCategory);
    formData.append("designName", state.designName);
    formData.append("description", state.description);
    formData.append("grossWeight", state.grossWeight);
    formData.append("netWeight", state.netWeight);
    formData.append("price", state.price);
    // Append the image to FormData if there is a file
    if (state.photoPaths) {
      formData.append("photoPaths", state.photoPaths); // The actual file object
    }
    try {
      // Send both product data and the image in a single request
      const response = await fetch(
        "http://localhost:8080/api/product/newproduct",
        {
          method: "POST",
          body: formData, // Send the entire FormData
        }
      );

      const data = await response.json();
      console.log(data);

      if (data.success) {
        console.log("Product created successfully", data);
      } else {
        console.error("Failed to create product", data);
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
  };
  //  todo get all products
  const getAllProducts = async() =>{
    try {
      //  !get both product data and the image in a single request
      const response = await fetch(
        "http://localhost:8080/api/product/allproduct",
        {
          method: "GET",
        }
      );
      const data = await response.json();
      console.log(data)
      if(data.success){
        dispatch({
          type:"GET_ALL_PRODUCTS",
          payload:{
            products:data?.allProduct
          }
       
        })
      } 
    } catch (error) {
      console.error("An error occurred", error);
    }
  }
  useEffect(()=>{
getAllProducts()
  },[])

  return (
    <Product.Provider
      value={{
        state,
        handleCategory,
        handleSubCategory,
        handleProduct,
        handleProductChange,
        handleFileChange,
      }}
    >
      {children}
    </Product.Provider>
  );
};

const useProduct = () => {
  return useContext(Product);
};

export { useProduct, ProductProvider };
