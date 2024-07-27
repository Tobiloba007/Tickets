import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

type InitialStateType={
    user: string|undefined;
    isLoggedIn: boolean;
    loginToken: string|null;
    loading: boolean;
    regData: any;
}

const initialState:InitialStateType  = {
    user: '',
    isLoggedIn: false,
    loginToken: null,
    loading: false,
    regData: [],
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLoading: (state, {payload}) => {
            state.loading = payload;
        },
        setUser: (state, {payload}) => {
            state.user =payload;
        },
        setLoginToken: (state, {payload}) => {
            state.loginToken = payload;
        },
        setLoggedIn: (state, {payload}) => {
            state.isLoggedIn = payload;
        },
        setRegData: (state, {payload}) => {
            state.regData = payload;
        },
    },
});

export const { setUser, setLoginToken, setLoading, setLoggedIn, setRegData } = authSlice.actions;
export const authSelector=(state:RootState)=>state.auth
export default authSlice.reducer;