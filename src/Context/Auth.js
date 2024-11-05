import { createContext, useContext, useEffect, useReducer,useState,useCallback } from "react";
import reducer from "../Reducer/Auth";
import Toast from 'react-native-root-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
const AuthContext = createContext();
const initialState = {
    isLoading: false,
    isError: false,
    msg: "",
    mobile: "",
    password: "",
    name: "",
    address: "",
    isNavigate: false,
    userInfo: {
        user: null,
        token: ""
    }
};

const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
      

    const handleChange = (e, name) => {
        const value = e;
        dispatch({
            type: "SET_VALUES",
            payload: { name, value }
        });
    };
    const handleRegister = async () => {
        const registerData = {
            mobile: state.mobile,
            password: state.password,
            name: state.name,
            address: state.address
        };
        dispatch({ type: "SET_LOADING" });
        const url = "https://hanibackendapp.onrender.com/api/auth/register";
        const response = await fetch(url, {
            method: "POST",
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(registerData)
        });
        const data = await response.json();
        if (data.success) {
            Toast.show(data.msg, {
                duration: Toast.durations.LONG,
                position: Toast.positions.CENTER,
                backgroundColor: "green"
            });
            dispatch({ type: "SET_SUCCESS" });
        } else {
            Toast.show(data.msg, {
                duration: Toast.durations.LONG,
                position: Toast.positions.CENTER,
                backgroundColor: "red"
            });
        }
    };
    const handleLogin = async () => {
        const loginData = {
            mobile: state.mobile,
            password: state.password
        };
        dispatch({ type: "SET_LOADING" });
        const url = "https://hanibackendapp.onrender.com/api/auth/login";
        const response = await fetch(url, {
            method: "POST",
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(loginData)
        });
        const data = await response.json();
        if (data.success) {
            if (data.existingUser.isVerified) {
                Toast.show(`${data.msg} Welcome to hani golds move to home page`, {
                    duration: Toast.durations.LONG,
                    position: Toast.positions.CENTER,
                    backgroundColor: "green"
                });
                const userObj = {
                    token: data.token,
                    user: data.existingUser
                };
                await AsyncStorage.setItem('user', JSON.stringify(userObj));
                dispatch({ type: "SET_USER", payload: userObj });
            } else {
                Toast.show(`${data.msg} We will notify you shortly`, {
                    duration: Toast.durations.LONG,
                    position: Toast.positions.CENTER,
                    backgroundColor: "red"
                });
            }
        } else {
            Toast.show(data.msg, {
                duration: Toast.durations.LONG,
                position: Toast.positions.CENTER,
                backgroundColor: "red"
            });
        }
    };
    const getAsyncToken = async () => {
        const data = await AsyncStorage.getItem("user");
        if (data) {
            const parsedData = JSON.parse(data);
            dispatch({
                type: "SET_USER",
                payload: parsedData
            });
        }
    };

    useEffect(() => {
        getAsyncToken();
    }, [state.isNavigate]);
    

    return (
        <AuthContext.Provider value={{ handleChange, state, handleRegister, handleLogin }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    return useContext(AuthContext);
};

export { AuthProvider, useAuth };
